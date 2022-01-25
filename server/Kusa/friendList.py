from http.client import HTTPResponse
from django.dispatch import receiver
from django.http import HttpResponse
from django.http.response import JsonResponse
from pymongo import MongoClient
from .serializer import TestSerializer
from Kusa.models import Test

from django.views.decorators.csrf import csrf_exempt




@csrf_exempt
def read_post(request,name):
    
    # dummy = Dummy.objects.get(SteamID=id)
    # name = "User Name: " + dummy.Name
    # return HttpResponse(name)
    receiver_steamid = ""
    
    if request.method == 'GET':
        test = Test.objects.filter(Name=name)
        test_serializer = TestSerializer(test,many=True)

        if not test:
            return JsonResponse("Invalid")
        else:
            for i in test_serializer.data:
                for key in i:
                    if key == "Name":
                        receiver_steamid = [key]i[key] = 
                        return JsonResponse(receiver_00000,safe=False)

        

        # temp = Test.objects.get(SteamID="666666")
        # temp_serializer = TestSerializer(temp,many=True)
        # return HTTPResponse(temp_serializer.data)
        
        
        

         
        # n = 0
        # temp = Test.objects.get(SteamID = receiver_steamid).FriendRequest
        # return JsonResponse(temp,safe=False)
        # test = receiver_steamid
        # print(test)
        # print("test")
        # #test.save()
        # n+=1
        # return HTTPResponse("Updated")
        

@csrf_exempt
def update_post(self,receiver_steamid,request_steamid):


    n = 0
    test = Test.objects.get(SteamID = receiver_steamid).FriendRequest
    test[n] = request_steamid
    print(test)
    print("test")
    test.save()
    n+=1
    return HTTPResponse("Updated")

    #friendList = request.POST.get("FriendList").split(",")

    # else:
    #     for i in test_serializer.data:
    #         for key in i:
    #             if key == "Name":
    #                 return JsonResponse(i[key],safe=False)
    # return JsonResponse(test_serializer.data,safe=False)
    
