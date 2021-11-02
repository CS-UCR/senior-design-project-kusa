from django.http.response import JsonResponse
from django.shortcuts import render
from admin import settings
import requests

conf =  settings.CONF
v2 = "/v0002"
v1 = "/v0001"
format = "JSON"
interface = "/ISteamUserStats"


def get_global_achievement_percentages_for_app(request):
    method = "/GetGlobalAchievementPercentagesForApp"
    game_id = request.GET.get("gameid")
    response = requests.get(conf["steam_api_url"]+ interface + method + v2 + "/?key=" + conf["steam_api_key"] + "&gameid=" + game_id + "&format=" + format).json()
    return JsonResponse(response)

# example url from steam returns internal error
def get_player_achievements(request):
    method = "/GetPlayerAchievements"
    steam_id = request.GET.get("steamid")
    app_id = request.GET.get("appid")
    response = requests.get(conf["steam_api_url"]+ interface + method + v1 + "/?key=" + conf["steam_api_key"] + "&appid=" + app_id + "&steamid=" + steam_id + "&format=" + format).json()
    return JsonResponse(response)

# example url from steam returns internal error
def get_user_stats_for_game(request):
    method = "/GetUserStatsForGame"
    steam_id = request.GET.get("steamid")
    app_id = request.GET.get("appid")
    print("url",conf["steam_api_url"]+ interface + method + v2 + "/?key=" + conf["steam_api_key"] + "&appid=" + app_id + "&steamid=" + steam_id + "&format=" + format)
    response = requests.get(conf["steam_api_url"]+ interface + method + v2 + "/?key=" + conf["steam_api_key"] + "&appid=" + app_id + "&steamid=" + steam_id + "&format=" + format).json()
    print("r:",response)
    return JsonResponse(response)

