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
JWT_SECRET_KEY = settings.JWT_SECRET_KEY
conf =  settings.CONF

# http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=<api key>&format=<format>.


def close_view(request):
    response = redirect(FRONTEND_URL + '/steamauth')
    token = get_token(request)
    response.set_cookie('token', (token), max_age=1000)
    response.set_cookie('steamid', request.user.steamid, max_age=1000)
    return response

