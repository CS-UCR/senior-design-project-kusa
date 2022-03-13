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
    steamUser.FriendRequest.append(sender_steamid)
    steamUser.save()
    return HTTPResponse("Friend Request Sent!")
        

# @csrf_exempt
# def update_friendRequest(self,receiver_name,sender_name):
#     test = Test.objects.get(SteamID=receiver_name)

#     test.FriendRequest.append(sender_name) 
#     test.save()
#     return HTTPResponse("Friend Request Sent!")




@csrf_exempt
def getFriendList(self, userName):
    steamUser = SteamUser.objects.get(Name=userName)
    # test_serializer = TestSerializer(test,many=True)
    

    return JsonResponse(test.FriendList,safe=False)
        

@csrf_exempt
def getFriendRequest(self,userName):
    steamUser = SteamUser.objects.get(Name=userName)
    # test_serializer = TestSerializer(test,many=True)
    

    return JsonResponse(steamUser.FriendRequest,safe=False)

@csrf_exempt
def acceptFriendRequest(self, account_name, accepting_name ):
    steamUser = SteamUser.objects.get(Name = account_name)
    temp = SteamUser.objects.get(Name = accepting_name)
    #acceptFriendRequest(accepting_name,account_name)
    
    if accepting_name in steamUser.FriendRequest:
        steamUser.FriendRequest.remove(accepting_name)

        steamUser.FriendList.append(accepting_name)

        temp.FriendList.append(account_name)

        temp.save()
        steamUser.save()
        return HTTPResponse("friend accepted")
    else:
        return HTTPResponse("error")


@csrf_exempt
def rejectFriendRequest(self, account_name, reject_name):
    steamUser = SteamUser.objects.get(Name = account_name)

    if reject_name in steamUser.FriendRequest:
        steamUser.FriendRequest.remove(reject_name)
        steamUser.save()
        return HTTPResponse("friend request removed")
    else:
        return HTTPResponse("error")

@csrf_exempt
def deleteFriend(self,account_name, delete_name):
    steamUser = SteamUser.objects.get(Name = account_name)
    temp = SteamUser.objects.get(Name = delete_name)

    if delete_name in steamUser.FriendList:
        steamUser.FriendList.remove(delete_name)
        temp.FriendList.remove(account_name)
        steamUser.save()
        temp.save()
        return HTTPResponse("friend removed")
    else:
        return HttpResponse("error")