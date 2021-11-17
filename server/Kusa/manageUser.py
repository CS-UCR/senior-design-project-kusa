from django.http.response import JsonResponse
from django.shortcuts import render
from admin import settings
from Kusa.models import User
from datetime import date

from admin.settings import CONNECTION_STRING


conf = settings.CONF
format = "JSON"
interface = "/Users/"


#test with just getting a user email and inserting into mongodb atlas
def register_user(request):
    #email = request.GET.get('email')
    try:
        user = User()
        user.email = "testmail"
        user.save()
        return JsonResponse({'result':"Inset successful"}, status=201, safe=False)
    except:
        return JsonResponse({'result':"An exception occurred"}, status=400, safe=False)