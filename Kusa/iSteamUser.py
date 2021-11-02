from django.http.response import JsonResponse
from django.shortcuts import render
from admin import settings
import requests

conf =  settings.CONF
v2 = "/v0002"
v1 = "/v0001"
format = "JSON"
interface = "/ISteamUser"

def get_player_summaries(request):
    method = "/GetPlayerSummaries"
    steam_ids = request.GET.get("steamids")
    response = requests.get(conf["steam_api_url"]+ interface + method + v2 + "/?key=" + conf["steam_api_key"] + "&steamids=" + steam_ids + "&format=" + format).json()
    return JsonResponse(response)

def get_friend_list(request):
    method = "/GetFriendList"
    steam_id = request.GET.get("steamid")
    response = requests.get(conf["steam_api_url"]+ interface + method + v1 + "/?key=" + conf["steam_api_key"] + "&relationship=friend&steamid=" + steam_id + "&format=" + format).json()
    return JsonResponse(response)

