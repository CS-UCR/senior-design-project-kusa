from django.http import HttpResponse
from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework.serializers import Serializer
from admin import settings
import requests

from rest_framework import viewsets
from .serializer import GamerSerializer,TestSerializer
from .models import Gamer
from Kusa.models import Test
from django.views.decorators.csrf import csrf_exempt
from bson import ObjectId


from admin import settings
import requests
from django.views import View
import jwt
JWT_SECRET_KEY = settings.JWT_SECRET_KEY
conf =  settings.CONF

# class FriendsListView(viewsets.ModelViewSet):
#     serializer_class = FriendsListSerializer
#     queryset = FriendsList.objects.all()

# http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=<api key>&format=<format>.
def test(request):
    return JsonResponse({'foo':'bar'})

def get_owned_games(request):
    method = "/GetOwnedGames"
    steam_id = request.GET.get("steamid")
    response = requests.get(conf["steam_api_url"]+ "/IPlayerService" + method + "/v0001" + "/?key=" + conf["steam_api_key"] + "&steamid=" + steam_id + "&format=JSON").json()
    return JsonResponse(response)


class GamerView(viewsets.ModelViewSet):
    serializer_class = GamerSerializer
    queryset = Gamer.objects.all()


@csrf_exempt
def add_post(request):
    friendList = request.POST.get("FriendList").split(",")
    friendRequest = request.POST.get("FriendRequest").split(",")
    dummy=Test(Name=request.POST.get("Name"),SteamID = request.POST.get("SteamID"),FriendList=friendList,FriendRequest=friendRequest)
    dummy.save()
    return HttpResponse("Inserted")
   
    


def read_post(request,id):
    
    test = Test.objects.get(SteamID=id)
    name = "User Name: " + test.Name
    return HttpResponse(name)

    


    
def read_post_all(request):
    # dummy = Dummy.objects.all()
    # name = dummy.all()
    # return HttpResponse(name)

    if request.method == 'GET':
        test = Test.objects.all()
        test_serializer = TestSerializer(test,many=True)
        return JsonResponse(test_serializer.data,safe=False)
