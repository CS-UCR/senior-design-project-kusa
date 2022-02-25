import json
from django.http.response import JsonResponse
from django.shortcuts import redirect, render
from admin import settings
import requests
from django.views import View
import jwt
from admin.settings import FRONTEND_URL
from Kusa.authentication import get_token
import requests
from Kusa.models import SteamUser
from Kusa.serializers import SteamUserSerializer
from Kusa.authentication import validate_token
from ast import literal_eval
from Kusa.data_collection import get_steam_user

JWT_SECRET_KEY = settings.JWT_SECRET_KEY
conf =  settings.CONF

# http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=<api key>&format=<format>.


def close_view(request):
    response = redirect(FRONTEND_URL + '/steamauth')
    token = get_token(request)
    response.set_cookie('token', (token), max_age=1000)
    response.set_cookie('steamid', request.user.steamid, max_age=1000)
    return response

def get_user_weekly_hours(request):
    response = validate_token(request)
    if "steamid" in response:   
        user =  get_steam_user(response["steamid"])
        weekly_hours = user['weekly_hours']
        if len(weekly_hours) == 0:
            weekly_hours = '[]'
        return JsonResponse(literal_eval(weekly_hours), safe=False)
    else:
        return response