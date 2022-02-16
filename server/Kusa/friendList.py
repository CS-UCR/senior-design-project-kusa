from http.client import HTTPResponse
from django.dispatch import receiver
from django.http import HttpResponse
from django.http.response import JsonResponse
import pymongo
from .serializer import TestSerializer
from Kusa.models import Test

from django.views.decorators.csrf import csrf_exempt



@csrf_exempt
def add_post(request):
    friendList = request.POST.get("FriendList").split(",")
    friendRequest = request.POST.get("FriendRequest").split(",")
    dummy=Test(Name=request.POST.get("Name"),SteamID = request.POST.get("SteamID"),FriendList=friendList,FriendRequest=friendRequest)
    dummy.save()
    return HttpResponse("Inserted")


@csrf_exempt
def friendRequest(request,receiver_name,sender_name):
    
    # dummy = Dummy.objects.get(SteamID=id)
    # name = "User Name: " + dummy.Name
    # return HttpResponse(name)
    receiver_steamid = ""
    
    if request.method == 'GET':
        test = Test.objects.filter(Name=receiver_name)
        test_serializer = TestSerializer(test,many=True)

        if not test:
            return JsonResponse("Invalid")
        else:
            for i in test_serializer.data:
                for key in i:
                    if key == "SteamID":
                        receiver_steamid = i[key]
                        val = update_friendRequest('',receiver_steamid,sender_name)
                        #return JsonResponse(receiver_steamid,safe=False)
                        return HTTPResponse(val, safe=False)

        

@csrf_exempt
def update_friendRequest(self,receiver_name,sender_name):
    test = Test.objects.get(SteamID=receiver_name)

    test.FriendRequest.append(sender_name) 
    test.save()
    return HTTPResponse("Friend Request Sent!")




@csrf_exempt
def getFriendList(self, userName):
    test = Test.objects.get(Name=userName)
    test_serializer = TestSerializer(test,many=True)
    

    return JsonResponse(test.FriendList,safe=False)
        


def getFriendRequest(self,userName):
    test = Test.objects.get(Name=userName)
    test_serializer = TestSerializer(test,many=True)
    

    return JsonResponse(test.FriendRequest,safe=False)


def acceptFriendRequest(self, account_name, accepting_name ):
    test = Test.objects.get(Name = account_name)

    
    if accepting_name in test.FriendRequest:
        test.FriendRequest.remove(account_name)

        test.FriendList.append(account_name)

        test.save()
        return HTTPResponse("friend accepted")
    else:
        return HTTPResponse("error")



def rejectFriendRequest(self, account_name, accepting_name):
    test = Test.objects.get(Name = account_name)

    if accepting_name in test.FriendRequest:
        test.FriendRequest.remove(account_name)
        test.save()
        return HTTPResponse("friend request removed")
    else:
        return HTTPResponse("error")


def deleteFriend(self,account_name, delete_name):
    test = Test.objects.get(Name = account_name)

    if delete_name in test.FriendList:
        test.FriendList.remove(delete_name)
        test.save()
        return HTTPResponse("friend removed")
    else:
        return HttpResponse("error")