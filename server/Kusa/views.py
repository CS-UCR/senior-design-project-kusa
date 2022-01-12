from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework.serializers import Serializer
from admin import settings
import requests

from rest_framework import viewsets
from .friendsList.serializer import GamerSerializer
from .models import Gamer

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



    


