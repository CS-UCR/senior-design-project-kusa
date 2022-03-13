from django.http.response import JsonResponse
from admin import settings
import requests
from Kusa.authentication import validate_token

conf =  settings.CONF
v2 = "/v0002"
v1 = "/v0001"
format = "JSON"
interface = "/ISteamUserStats"

def get_global_achievement_percentages_for_app(request):
    response = validate_token(request)
    if "steamid" in response:
        method = "/GetGlobalAchievementPercentagesForApp"
        game_id = request.GET.get("gameid")
        response = requests.get(conf["steam_api_url"]+ interface + method + v2 + "/?key=" + conf["steam_api_key"] + "&gameid=" + game_id + "&format=" + format).json()
        return JsonResponse(response)
    else:
        return response
# example url from steam returns internal error
def get_player_achievements(request):
    response = validate_token(request)
    if "steamid" in response:
        method = "/GetPlayerAchievements"
        steam_id = request.GET.get("steamid")
        app_id = request.GET.get("appid")
        response = requests.get(conf["steam_api_url"]+ interface + method + v1 + "/?key=" + conf["steam_api_key"] + "&appid=" + app_id + "&steamid=" + steam_id + "&format=" + format).json()
        return JsonResponse(response)
    else:
        return response
# example url from steam returns internal error
def get_user_stats_for_game(request):
    response = validate_token(request)
    if "steamid" in response:
        method = "/GetUserStatsForGame"
        steam_id = request.GET.get("steamid")
        app_id = request.GET.get("appid")
        response = requests.get(conf["steam_api_url"]+ interface + method + v2 + "/?key=" + conf["steam_api_key"] + "&appid=" + app_id + "&steamid=" + steam_id + "&format=" + format).json()
        return JsonResponse(response)
    else:
        return response
    
def get_owned_games(steam_id):
    method = "/GetOwnedGames"
    response = requests.get(conf["steam_api_url"]+ "/IPlayerService" + method + "/v0001" + "/?key=" + conf["steam_api_key"] + "&steamid=" + steam_id + "&format=JSON").json()
    if "games" not in response["response"]:
        return []
    return response["response"]["games"]