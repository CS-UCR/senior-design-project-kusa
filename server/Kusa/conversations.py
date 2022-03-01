from http.client import HTTPResponse
from django.dispatch import receiver
from django.http import HttpResponse
from django.http.response import JsonResponse
import pymongo
from .serializers import ConversationSerializer
from Kusa.models import Conversation
from django.views.decorators.csrf import csrf_exempt

#add new convo
@csrf_exempt
def addConversation(request):
    members = request.POST.get("members").split(",")
    newConversation = Conversation(members = members)
    newConversation.save()
    #return JsonResponse(newMessage.data, status=200, safe=False)
    return HttpResponse("Conversation added")

# get convo of a user
    # try
        # convo.filter(in members userID)
        # return json(convo) 
    # catch
        # return json(error)
@csrf_exempt
def getConversation(self, userID):
    conversations = Conversation.objects.get(members=userID)
    conversation_serializer = ConversationSerializer(conversations, many=True)
    return JsonResponse(conversations.members, safe=False)




# get convo two users