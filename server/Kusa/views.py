from django.http.response import JsonResponse
from django.shortcuts import redirect, render
from admin import settings
import requests
from django.views import View
import jwt
from admin.settings import FRONTEND_URL

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


def close_view(request):
    response = redirect(FRONTEND_URL + '/steamauth')
    response.set_cookie('steamid', request.user.steamid , max_age=1000)
    return response
