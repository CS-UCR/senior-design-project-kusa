from http.client import HTTPResponse
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
    temp = SteamUser.objects.get(steamid = sender_steamid)

    if receiver_steamid in temp.FriendRequest:
        temp.FriendRequest.remove(receiver_steamid)
        steamUser.FriendList.append(sender_steamid)
        temp.FriendList.append(receiver_steamid)
        steamUser.save()
        temp.save()
        return JsonResponse("Friends now!",safe=False)
    if sender_steamid == receiver_steamid:
        return JsonResponse("Can't send request to yourself",safe=False)
    if sender_steamid in steamUser.FriendRequest or sender_steamid in steamUser.FriendList:
        return JsonResponse("Friend Request exsit or You are friend already!",safe=False)
    else:
        steamUser.FriendRequest.append(sender_steamid)
        steamUser.save()
        return JsonResponse("Friend Request Sent!",safe=False)
    
        

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
def acceptFriendRequest(self, account_steamid, accepting_steamid):
    steamUser = SteamUser.objects.get(steamid = account_steamid)
    temp = SteamUser.objects.get(steamid = accepting_steamid)
    
    if accepting_steamid in steamUser.FriendRequest:
        
        steamUser.FriendRequest.remove(accepting_steamid)

        if account_steamid in temp.FriendRequest:
            temp.FriendRequest.remove(account_steamid)

        steamUser.FriendList.append(accepting_steamid)
        steamUser.save()
        

        temp.FriendList.append(account_steamid)
        temp.save()
        
        return JsonResponse("friend accepted",safe=False)
    else:
        return JsonResponse("error",safe=False)


@csrf_exempt
def rejectFriendRequest(self, account_steamid, reject_steamid):
    steamUser = SteamUser.objects.get(steamid = account_steamid)

    if reject_steamid in steamUser.FriendRequest:
        steamUser.FriendRequest.remove(reject_steamid)
        steamUser.save()
        return JsonResponse("friend request removed", safe=False)
    else:
        return JsonResponse("error", safe=False)

@csrf_exempt
def deleteFriend(self,account_steamid, delete_steamid):
    steamUser = SteamUser.objects.get(steamid = account_steamid)
    temp = SteamUser.objects.get(steamid = delete_steamid)

    if delete_steamid in steamUser.FriendList:
        steamUser.FriendList.remove(delete_steamid)
        temp.FriendList.remove(account_steamid)
        steamUser.save()
        temp.save()
        return JsonResponse("friend removed", safe=False)
    else:
        return JsonResponse("error", safe=False)