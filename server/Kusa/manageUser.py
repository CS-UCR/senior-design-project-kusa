import json
from operator import truediv
from django.http.response import JsonResponse
from django.shortcuts import render
from admin import settings
from datetime import date
from django.views.decorators.csrf import csrf_exempt
from admin.settings import CONNECTION_STRING
from bson.objectid import ObjectId
from Kusa.models import SteamUser
from Kusa.serializers import SteamUserSerializer

conf = settings.CONF
format = "JSON"
interface = "/Users/"

# PLACEHOLDER test with just getting a user email and inserting into mongodb atlas
def register_user(request):
    #email = request.POST.get('email')
    try:
        user = SteamUser()
        user.email = "testmail"
        user.save()
        return JsonResponse({'result': "Insert successful"}, status=201, safe=False)
    except:
        return JsonResponse({'result': "An exception occurred"}, status=400, safe=False)

# enable csrf once we've figured out authentication
# uid probably won't be directly sent -> expect to hash/dehash this
@csrf_exempt
def toggle_email(request):
    receiveRequest = json.loads(request.body)
    print("request", receiveRequest)
    emailStatus = receiveRequest.get('emailStatus')
    uid = receiveRequest.get('userID')
    try:
        user = SteamUser.objects.get(pk=ObjectId(uid))
        user.emailsEnabled = emailStatus
        user.save()
        return JsonResponse({'result': "Insert successful"}, status=201, safe=False)
    except:
        return JsonResponse({'result': "An exception occurred"}, status=400, safe=False)

@csrf_exempt
def get_all_users(request):
    steamusers = SteamUser.objects.all()
    steamuser_serializer = SteamUserSerializer(steamusers,many=True)
    return JsonResponse(steamuser_serializer.data, safe=False)

@csrf_exempt
def delete_a_user(request):
    steamid = request.GET.get("steamid")
    steamuser = SteamUser.objects.get(id=steamid)
    steamuser.delete()
    return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def steamuser_detail(request):
    steamid = request.GET.get("steamid")
    try: 
        steamuser = SteamUser.objects.get(id=steamid)
        steamuser_serializer = SteamUserSerializer(steamuser)
        print(steamuser_serializer.data)
        return JsonResponse(steamuser_serializer.data, safe=False) 
    except SteamUser.DoesNotExist: 
        return JsonResponse({'message': 'The steam user does not exist'}, status=404, safe=False) 