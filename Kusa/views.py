from django.http.response import JsonResponse
from django.shortcuts import render
from admin import settings
import requests

conf =  settings.CONF

# http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=<api key>&format=<format>.
def test(request):
    return JsonResponse({'foo':'bar'})

def GetGlobalAchievementPercentagesForApp(request):
   response = requests.get(conf["steam_api_url"]+)