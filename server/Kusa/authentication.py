from json import JSONDecodeError
from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from admin import settings
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
        return encoded
    else:
        return 'error'
    

def validate_token(request):
    """
    Validates token and if successful returns steamid
    Parameters: request

    Returns: dict: {"steamid":steam id}
    """
    try: 
        token = request.COOKIES.get('token')
        if token is None:
            return JsonResponse({'message': 'You do not have the permissions to access'}, status=404, safe=False) 
        decoded = jwt.decode(token, JWT_SECRET_KEY, algorithms=["HS256"])
        steamid = decoded['steamid']
        return ({"steamid":steamid})
    except jwt.exceptions.DecodeError:
        return JsonResponse({'message':"Invalid Token"},safe=False)
    except SteamUser.DoesNotExist: 
        return JsonResponse({'message':'The steam user does not exist'}, status=404, safe=False) 
