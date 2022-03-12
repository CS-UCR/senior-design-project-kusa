from http.client import HTTPResponse
from django.dispatch import receiver
from django.http import HttpResponse
from django.http.response import JsonResponse


from Kusa.models import SteamUser

from django.views.decorators.csrf import csrf_exempt



@csrf_exempt
def add_post(request):
    friendList = request.POST.get("FriendList").split(",")
    friendRequest = request.POST.get("FriendRequest").split(",")
    dummy=SteamUser(Name=request.POST.get("Name"),SteamID = request.POST.get("SteamID"),FriendList=friendList,FriendRequest=friendRequest)
    dummy.save()
    return HttpResponse("Inserted")


@csrf_exempt
def friendRequest(request,receiver_steamid,sender_steamid):
    steamUser = SteamUser.objects.get(steamid = receiver_steamid) 
    steamUser.FriendRequest.append(sender_steamid)
    steamUser.save()
    return HTTPResponse("Friend Request Sent!")
        

@csrf_exempt
def getFriendList(self, userSteamId):
    steamUser = SteamUser.objects.get(steamid=userSteamId)
    arrayOfSteamIds = steamUser.FriendList
    arrayOfUserObjects = []
    userObject = []
    for ids in arrayOfSteamIds:
        temp = SteamUser.objects.get(steamid=ids)
        
        userObject.append(temp.steamid)
        userObject.append(temp.personaname)
        userObject.append(temp.avatar)

        arrayOfUserObjects.append(userObject)
        userObject = []

    
    return JsonResponse(arrayOfUserObjects,safe=False)

        

@csrf_exempt
def getFriendRequest(self,userSteamId):
    steamUser = SteamUser.objects.get(steamid=userSteamId)
    arrayOfSteamIds = steamUser.FriendRequest
    arrayOfUserObjects = []
    userObject = []
    for ids in arrayOfSteamIds:
        temp = SteamUser.objects.get(steamid=ids)
        
        userObject.append(temp.steamid)
        userObject.append(temp.personaname)
        userObject.append(temp.avatar)

        arrayOfUserObjects.append(userObject)
        userObject = []

    
    return JsonResponse(arrayOfUserObjects,safe=False)

    

@csrf_exempt
def acceptFriendRequest(self, account_steamid, accepting_steamid ):
    steamUser = SteamUser.objects.get(steamid = account_steamid)
    temp = SteamUser.objects.get(steamid = accepting_steamid)
    
    if accepting_steamid in steamUser.FriendRequest:
        steamUser.FriendRequest.remove(accepting_steamid)

        steamUser.FriendList.append(accepting_steamid)

        temp.FriendList.append(account_steamid)

        temp.save()
        steamUser.save()
        return HTTPResponse("friend accepted")
    else:
        return HTTPResponse("error")


@csrf_exempt
def rejectFriendRequest(self, account_steamid, reject_steamid):
    steamUser = SteamUser.objects.get(steamid = account_steamid)

    if reject_steamid in steamUser.FriendRequest:
        steamUser.FriendRequest.remove(reject_steamid)
        steamUser.save()
        return HTTPResponse("friend request removed")
    else:
        return HTTPResponse("error")

@csrf_exempt
def deleteFriend(self,account_steamid, delete_steamid):
    steamUser = SteamUser.objects.get(steamid = account_steamid)
    temp = SteamUser.objects.get(steamid = delete_steamid)

    if delete_steamid in steamUser.FriendList:
        steamUser.FriendList.remove(delete_steamid)
        temp.FriendList.remove(account_steamid)
        steamUser.save()
        temp.save()
        return HTTPResponse("friend removed")
    else:
        return HttpResponse("error")