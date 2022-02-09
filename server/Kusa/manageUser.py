import json
from operator import truediv
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
conf = settings.CONF
format = "JSON"
interface = "/Users/"

# enable csrf once we've figured out authentication
# uid probably won't be directly sent -> expect to hash/dehash this
@csrf_exempt
def toggle_email(request):
    receiveRequest = json.loads(request.body)
    emailStatus = receiveRequest.get('emailStatus')
    uid = receiveRequest.get('userID')
    try:
        user = SteamUser.objects.get(pk=(uid))
        user.emailsEnabled = emailStatus
        user.save()
        return JsonResponse({'result': "Insert successful"}, status=201, safe=False)
    except:
        return JsonResponse({'result': "An exception occurred"}, status=400, safe=False)
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
    response = validate_token(json.loads(request.body))
    if "steamid" in response:
        steamuser = SteamUser.objects.get(id=response["steamid"])
        steamuser_serializer = SteamUserSerializer(steamuser)
        return JsonResponse(steamuser_serializer.data, safe=False) 
    else:
        return response

# enable csrf once we've figured out authentication
@csrf_exempt
def deactivate_account(request):
    receiveRequest = json.loads(request.body)
    uid = receiveRequest.get('userID')
    try:
        user = SteamUser.objects.get(pk=(uid))
        user.delete()
        return JsonResponse({'result': "Deletion successful"}, status=201, safe=False)
    except:
        return JsonResponse({'result': "An exception occurred"}, status=400, safe=False)




@csrf_exempt
def add_email(request):
    print(request.body)
    receiveRequest = json.loads(request.body)
    response = validate_token(receiveRequest)
    uid = receiveRequest.get('userId')
    try:
        user = SteamUser.objects.get(pk=(uid))
        user.email = receiveRequest.get('email')
        user.save()
        return JsonResponse(response, status=201, safe=False)
    except:
        return JsonResponse(response, status=400, safe=False)