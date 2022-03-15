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
def addConversation(self,account_steamid,receiver_steamid):
    # members = request.POST.get("members").split(",")
    #members = {senderID, receiverID}

    filter_first = Conversation.objects.filter(members__contains=account_steamid)
    filter_second = filter_first.filter(members__contains=receiver_steamid)
    conversation_serializer = ConversationSerializer(filter_second, many=True)

    if not conversation_serializer.data:
        newConversation = Conversation()
        temp = [account_steamid,receiver_steamid]
        newConversation.members = temp
        newConversation.save()
    
        return JsonResponse("new conv added", safe=False)
        
    else:
        return JsonResponse("conv exsits", safe=False)

    
    #return JsonResponse(newConversation.data, status=200, safe=False)
    return JsonResponse(conversation_serializer.data,safe=False)

# get convo of a user
@csrf_exempt
def getConversation(self, userID):
    conversations = Conversation.objects.filter(members__contains=userID)
    conversation_serializer = ConversationSerializer(conversations, many=True)
    return JsonResponse(conversation_serializer.data, safe=False)
    #return HttpResponse("Conversation found")

# get convo two users
# @csrf_exempt
# def getConversation(self, firstUserID, secondUserID):
#     conversations = Conversation.objects.find_one(members__contains=userID)
#     conversation_serializer = ConversationSerializer(conversations, many=True)
#     return JsonResponse(conversation_serializer.data, safe=False)