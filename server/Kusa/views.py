from django.http import HttpResponse
from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework.serializers import Serializer
from admin import settings
import requests

from rest_framework import viewsets
from .serializer import TestSerializer
# from .models import Gamer
from Kusa.models import Test
from django.views.decorators.csrf import csrf_exempt
from bson import ObjectId


import json
from smtplib import SMTPException
from django.http import BadHeaderError
from django.http.response import JsonResponse
from django.shortcuts import redirect
from admin import settings
from admin.settings import FRONTEND_URL
from Kusa.authentication import get_token
from Kusa.authentication import validate_token
from Kusa.data_collection import get_steam_user
from collections import OrderedDict  # keep this line for get_user_daily_hours
from datetime import datetime
from django.core.mail import send_mail

JWT_SECRET_KEY = settings.JWT_SECRET_KEY
conf = settings.CONF



# http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=<api key>&format=<format>.





@csrf_exempt
def add_post(request):
    friendList = request.POST.get("FriendList").split(",")
    friendRequest = request.POST.get("FriendRequest").split(",")
    dummy=Test(Name=request.POST.get("Name"),SteamID = request.POST.get("SteamID"),FriendList=friendList,FriendRequest=friendRequest)
    dummy.save()
    return HttpResponse("Inserted")
   
    


def read_post(request,id):
    
    test = Test.objects.get(SteamID=id)
    name = "User Name: " + test.Name
    return HttpResponse(name)

    


    
def read_post_all(request):
    if request.method == 'GET':
        test = Test.objects.all()
        test_serializer = TestSerializer(test,many=True)
        return JsonResponse(test_serializer.data,safe=False)
def close_view(request):
    response = redirect(FRONTEND_URL + '/steamauth')
    token = get_token(request)
    response.set_cookie('token', (token), max_age=1000)
    return response


def get_user_daily_hours(request):
    """
    will return an array of the user's daily hours
    Parameters: request

    Returns: returns a list of json obj -> [{"date" : date1, "hours" : num_hours1},{"date" : date2, "hours" : num_hours2}]
    """
    response = validate_token(request)
    if "steamid" in response:
        user = get_steam_user(response["steamid"])
        daily_hours = user['daily_hours']
        list_of_json = [dict(day) for day in eval(daily_hours)]
        return JsonResponse(list_of_json, safe=False)
    else:
        return response


def send_user_email(steam_id):
    success = False
    user = get_steam_user(steam_id)
    daily_hours = user['daily_hours']
    goal = user['goal']
    list_of_json = [dict(day) for day in eval(daily_hours)]
    sum = 0
    for value in list_of_json:
        if(datetime.today().isocalendar()[1] == datetime.strptime(value['date'], "%m/%d/%Y").isocalendar()[1]):
            sum += value['hours']
        if(sum > goal):
            try:
                send_mail("Kusa Playtime Exceeded", 'You exceeded your goal for this week! Better luck next time. Remember, you can change your goal in the Kusa app.', settings.EMAIL_HOST_USER, [user['email']], fail_silently=False)
                success = True
            except SMTPException as e:
                print(e)
    return JsonResponse({'success': success}, safe=False)
