from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from admin import settings
import requests
from django.views import View
import jwt
JWT_SECRET_KEY = settings.JWT_SECRET_KEY

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
        return JsonResponse({'access_token:':encoded},safe=False)
    else:
        return JsonResponse({'error': 'authentication failed'}, status=401, safe=False)