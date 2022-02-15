import json
from django.http.response import JsonResponse
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from admin import settings
from django.views import View
from django.db.models import Q
from Kusa.models import ThreadModel, MessageModel
from .forms import ThreadForm, MessageForm
import requests
from django.views import View
import jwt
from admin.settings import FRONTEND_URL
from Kusa.authentication import get_token

JWT_SECRET_KEY = settings.JWT_SECRET_KEY
conf =  settings.CONF

# http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=<api key>&format=<format>.

def get_owned_games(request):
    method = "/GetOwnedGames"
    steam_id = request.GET.get("steamid")
    response = requests.get(conf["steam_api_url"]+ "/IPlayerService" + method + "/v0001" + "/?key=" + conf["steam_api_key"] + "&steamid=" + steam_id + "&format=JSON").json()
    return JsonResponse(response)

class ListThreads(View):
    def get(self, request, *args, **kwargs):
        threads = ThreadModel.objects.filter(Q(user = request.user) | Q(receiver = request.user)) # filter queries by user and receiver
        context = {
            'threads': threads
        }
        return render(request, 'chat/inbox.html', context)

class CreateThread(View):
    def get(self, request, *args, **kwargs):
        form = ThreadForm()
        context = {
            'form': form
        }
        return render(request, 'chat/create_thread.html', context)

    def post(self, request, *args, **kwargs):
        form = ThreadForm(request.POST)
        userID = request.POST.get('userID')
        try:
            receiver = User.objects.get(userID = userID) # look for user that matches that userID
            #
            if ThreadModel.objects.filter(user = receiver, receiver = request.user).exists():
                thread = ThreadModel.objects.filter(user = receiver, receiver = request.user)[0]
                return redirect('thread', pk = thread.pk) # change thread to url later

            elif ThreadModel.objects.filter(user = request.user, receiver = receiver).exists() :
                thread = ThreadModel.objects.filter(user = request.user, receiver = receiver)[0]
                return redirect('thread', pk = thread.pk) 
            
            if form.is_valid():
                thread = ThreadModel(
                    user=request.user,
                    receiver=receiver
                )
                thread.save() # save thread to database
                return redirect('thread', pk = thread.pk)
        except: # if user cant be found, create new thread
            return redirect('create-thread')

class ThreadView(View):
    def get(self, request, pk, *args, **kwargs):
        form = MessageForm()
        thread = ThreadModel.objects.get(pk = pk)
        message_list = MessageModel.objects.filter(thread__pk__contains = pk)
        context = {
            'thread': thread,
            'form': form,
            'message_list': message_list
        }
        return render(request, 'chat/thread.html', context)

class CreateMessage(View):
    def post(self, request, pk, *args, **kwargs):
        thread = ThreadModel.objects.get(pk = pk)
        if thread.receiver == request.user:
            receiver = thread.user
        else:
            receiver = thread.receiver
        message = MessageModel(
            thread=thread,
            sender_user=request.user,
            receiver_user=receiver,
            body=request.POST.get('message')
        )
        message.save()
        return redirect('thread', pk = pk)
        
def close_view(request):
    response = redirect(FRONTEND_URL + '/steamauth')
    token = get_token(request)
    response.set_cookie('token', (token), max_age=1000)
    response.set_cookie('steamid', request.user.steamid, max_age=1000)
    return response
       

