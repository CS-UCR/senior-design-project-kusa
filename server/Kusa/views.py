from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from admin import settings
import requests
from django.views import View
import jwt
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

class IndexView(View):
    def get(self, request):
        return render(request, 'index.html')

class LoginView(View):
    def get(self, request):
        return render(request, 'login.html')
class LogoutView(View):
    def get(self, request):
        logout(request)
        return redirect('http://localhost:3000/')
    
def getToken(request):
    if request.user.is_authenticated:
        payload = {
            "iss": "http://kusa.com",
            'steamid': request.user.id,
        }
        encoded = jwt.encode(payload, JWT_SECRET_KEY, algorithm='HS256')
        return JsonResponse({'access_token:':encoded})
    else:
        return JsonResponse({'error': 'authentication failed'})