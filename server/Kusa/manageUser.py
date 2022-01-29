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

# conf = settings.CONF
# format = "JSON"
# interface = "/Users/"


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
    emailStatus = receiveRequest.get('emailStatus')
    uid = receiveRequest.get('userID')
    try:
        user = SteamUser.objects.get(pk=(uid))
        user.emailsEnabled = emailStatus
        user.save()
        return JsonResponse({'result': "Insert successful"}, status=201, safe=False)
    except:
        return JsonResponse({'result': "An exception occurred"}, status=400, safe=False)

# enable csrf once we've figured out authentication
# uid probably won't be directly sent -> expect to hash/dehash this
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