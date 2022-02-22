from http.client import HTTPResponse
from django.dispatch import receiver
from django.http import HttpResponse
from django.http.response import JsonResponse
import pymongo
from .serializer import ConversationSerializer
from Kusa.models import Conversation
from django.views.decorators.csrf import csrf_exempt

# new convo
@csrf_exempt
def newConversation(request, senderID, self):
    #newConversation = Conversation
        #members:[req.body.senderID, req.body.receiverID]
    newConversation = Conversation(senderID=request.POST.get("senderID"), receiverID=request.POST.get("SteamID"))
    if savedConversation == newConversation.save():
        return JsonResponse(savedConversation, status=200)
    else:
        return JsonResponse(conversation_serializer.errors, status=500)

# get convo of a user



# get convo two users