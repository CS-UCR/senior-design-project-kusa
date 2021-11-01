from django.http.response import JsonResponse
from django.shortcuts import render
from admin import settings
import requests

conf =  settings.CONF
v2 = "/v0002"
v1 = "/v0001"
format = "JSON"
interface = "/ISteamUserStats"
# http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=<api key>&format=<format>.

def get_global_achievement_percentages_for_app(request):
    function = "/GetGlobalAchievementPercentagesForApp"
    game_id = request.get.GET("gameid")
    response = requests.get(conf["steam_api_url"]+ interface + function + v2 + "/?key=" + conf["steam_api_key"] + "&gameid=" + game_id + "&format=" + format)