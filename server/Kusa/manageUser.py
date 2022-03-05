from django.http.response import JsonResponse
from django.shortcuts import render
from admin import settings
#from Kusa.models import User
from datetime import date

from admin.settings import CONNECTION_STRING
import json
from django.http.response import JsonResponse
from django.shortcuts import render
from admin import settings
from Kusa.models import SteamUser
from datetime import date
from django.views.decorators.csrf import csrf_exempt
from admin.settings import CONNECTION_STRING
from bson.objectid import ObjectId
from Kusa.models import SteamUser
from Kusa.serializers import SteamUserSerializer
from Kusa.authentication import validate_token
from Kusa.data_collection import get_steam_user
from Kusa.data_collection import gather_new_user_info
conf = settings.CONF
format = "JSON"
interface = "/Users/"



#test with just getting a user email and inserting into mongodb atlas
# def register_user(request):
#     #email = request.GET.get('email')
#     try:
#         user = User()
#         user.email = "testmail"
#         user.save()
#         return JsonResponse({'result':"Inset successful"}, status=201, safe=False)
#     except:
#         return JsonResponse({'result':"An exception occurred"}, status=400, safe=False)
# PLACEHOLDER test with just getting a user email and inserting into mongodb atlas
def register_user(request):
    #email = request.POST.get('email')
    try:
        user = User()
        user.email = "testmail"
        user.save()
        return JsonResponse({'result': "Insert successful"}, status=201, safe=False)
    except:
        return JsonResponse({'result': "An exception occurred"}, status=400, safe=False)

# enable csrf once we've figured out authentication
# uid probably won't be directly sent -> expect to hash/dehash this

#csrf check not implemented through proper middleware - thus csrf_exempt


@csrf_exempt
def toggle_email(request):
    receiveRequest = json.loads(request.body)
    response = validate_token(request)
    emailStatus = receiveRequest.get('emailStatus')
    try:
        user = SteamUser.objects.get(pk=response['steamid'])
        user.emailsEnabled = emailStatus
        user.save()
        return JsonResponse("Succesfully toggled email", status=201, safe=False)
    except:
        return JsonResponse(response, status=400, safe=False)
@csrf_exempt
def get_all_users(request):
    response = validate_token(request)
    if "steamid" in response:
        steamusers = SteamUser.objects.all()
        steamuser_serializer = SteamUserSerializer(steamusers,many=True) 
        return JsonResponse(steamuser_serializer.data, safe=False)
    else:
        return response
@csrf_exempt
def delete_a_user(request):
    response = validate_token(request)
    if "steamid" in response:
        steamuser = SteamUser.objects.get(id=response["steamid"])
        steamuser.delete()
        return JsonResponse("Deleted Successfully",safe=False)
    else:
        return response
@csrf_exempt   
def steamuser_detail(request):     
    response = validate_token(request)
    if "steamid" in response:
        return JsonResponse(get_steam_user(response["steamid"]), safe=False) 
    else:
        return response

@csrf_exempt
def deactivate_account(request):
    response = validate_token(request)
    try:
        user = SteamUser.objects.get(id=response["steamid"])
        user.delete()
        return JsonResponse("Deactivated user", status=201, safe=False)
    except:
        return JsonResponse(response, status=400, safe=False)
@csrf_exempt
def adjust_goal(request):
    response = validate_token(request)
    if "steamid" in response:
        steamuser = SteamUser.objects.get(id=response["steamid"])
        steamuser.goal = json.loads(request.body)['goal']
        steamuser.save()
        return JsonResponse("Deleted Successfully",safe=False)
    else:
        return response
@csrf_exempt
def add_email(request):
    receiveRequest = json.loads(request.body)
    response = validate_token(request)
    try:
        user = SteamUser.objects.get(id=response["steamid"])
        user.email = receiveRequest.get('email')
        user.save()
        gather_new_user_info(response["steamid"])
        return JsonResponse("Email added", status=201, safe=False)
    except:
        return JsonResponse(response, status=400, safe=False)