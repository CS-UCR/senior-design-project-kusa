from http.client import HTTPResponse
from django.dispatch import receiver
from django.http import HttpResponse
from django.http.response import JsonResponse
import pymongo
from .serializers import MessageSerializer
from Kusa.models import Message
from django.views.decorators.csrf import csrf_exempt

# add message
@csrf_exempt
def addMessage(request):
    newMessage = Message(conversationID = request.POST.get("conversationID"), senderID = request.POST.get("senderID"), text = request.POST.get("text"), timestamp = request.POST.get("timestamp"))
    newMessage.save()
    #return JsonResponse(newMessage.data, status=200, safe=False)
    return HttpResponse("Message added")

# get message
@csrf_exempt
def getMessage(self, conversationID):
    messages = Message.objects.filter(conversationID__contains=conversationID)
    message_serializer = MessageSerializer(messages, many=True)
    return JsonResponse(message_serializer.data, safe=False)
