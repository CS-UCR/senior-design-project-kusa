from django.http.response import JsonResponse
from django.shortcuts import render
from admin import settings
from Kusa.models import User
from datetime import date


conf = settings.CONF
format = "JSON"
interface = "/Users/"


#test with just getting a user email and inserting into mongodb atlas
def register_user(request):
    #email = request.GET.get('email')
    try:
        user = User({'email':"fsdfsdf", 'password':"123",'steamname':"steam_test",'date':date.today()})
        user.save()
        return JsonResponse({'result':"Inset successful"}, status=201, safe=False)
    except:
        return JsonResponse({'result':"An exception occurred"}, status=400, safe=False)