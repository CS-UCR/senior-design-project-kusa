from django.http.response import JsonResponse
<<<<<<< HEAD
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
=======
>>>>>>> main
from admin import settings
from django.views import View
from django.db.models import Q
from Kusa.chatModel.models import ThreadModel
from .forms import ThreadForm
import requests
from django.views import View
import jwt
JWT_SECRET_KEY = settings.JWT_SECRET_KEY
conf =  settings.CONF

# http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=<api key>&format=<format>.
def test(request):
    return JsonResponse({'foo':'bar'})

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

