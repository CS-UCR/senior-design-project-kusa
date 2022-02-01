from json import JSONDecodeError
from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from admin import settings
import requests
from django.views import View
import jwt
from Kusa.models import SteamUser
JWT_SECRET_KEY = settings.JWT_SECRET_KEY

class LoginView(View):
    def get(self, request):
        return render(request, 'login.html')
class LogoutView(View):
    def get(self, request):
        logout(request)
        return redirect('http://localhost:3000/')
    
def get_token(request):
    if request.user.is_authenticated:
        payload = {
            "iss": "http://kusa.com",
            'steamid': request.user.id,
        }
        encoded = jwt.encode(payload, JWT_SECRET_KEY, algorithm='HS256')
        return JsonResponse({'access_token:':encoded},safe=False)
    else:
        return JsonResponse({'error': 'authentication failed'}, status=401, safe=False)
    
def validate_token(request):
    try: 
        token = request.headers.get('Authorization') 
        if token is None:
            return JsonResponse({'message': 'You do not have the permissions to access'}, status=404, safe=False) 
        PREFIX = 'Bearer '
        if not token.startswith(PREFIX):
            raise ValueError({'message':'Invalid token'})
        decoded = jwt.decode(token[len(PREFIX):], JWT_SECRET_KEY, algorithms=["HS256"])
        steamid = decoded['steamid']
        return ({"steamid":steamid})
    except jwt.exceptions.DecodeError:
        return JsonResponse({'message':"Invalid Token"},safe=False)
    except SteamUser.DoesNotExist: 
        return JsonResponse({'message':'The steam user does not exist'}, status=404, safe=False) 
