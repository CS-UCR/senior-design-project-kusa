from http.client import HTTPResponse
from django.dispatch import receiver
from django.http import HttpResponse
from django.http.response import JsonResponse
import pymongo
from .serializer import MessageSerializer
from Kusa.models import Message
from django.views.decorators.csrf import csrf_exempt

# add message
@csrf_exempt
def getMessage(request, JsonResponse):
    if request.method == 'GET':
        messages = Message.objects.filter(conversationID)
        message_serializer = MessageSerializer(messages, many=True)
        if not messages:
            return JsonResponse(message_serializer.errors, status=500)
        else:
            return JsonResponse(messages, status=200)



# get message
@csrf_exempt
def getMessage(request, JsonResponse, conversationID):
    if request.method == 'GET':
        messages = Message.objects.filter(conversationID)
        message_serializer = MessageSerializer(messages, many=True)
        if not messages:
            return JsonResponse(message_serializer.errors, status=500)
        else:
            return JsonResponse(messages, status=200)

