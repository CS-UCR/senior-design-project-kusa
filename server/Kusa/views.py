from django.http.response import JsonResponse
from django.shortcuts import render
from admin import settings
import requests

from rest_framework import viewsets
from friendsList.serializer import FriendsListSerializer
from .models import FriendsList

conf =  settings.CONF

# http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=<api key>&format=<format>.
def test(request):
    return JsonResponse({'foo':'bar'})

def get_owned_games(request):
    method = "/GetOwnedGames"
    steam_id = request.GET.get("steamid")
    response = requests.get(conf["steam_api_url"]+ "/IPlayerService" + method + "/v0001" + "/?key=" + conf["steam_api_key"] + "&steamid=" + steam_id + "&format=JSON").json()
    return JsonResponse(response)



class FriendsListView(viewsets.ModelViewSet):
    serializer_class = FriendsListSerializer
    queryset = FriendsList.objects.all()


