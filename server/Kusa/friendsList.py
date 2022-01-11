from django.http.response import JsonResponse
from django.shortcuts import render
from admin import settings
import requests

conf =  settings.CONF
v2 = "/v0002"
v1 = "/v0001"
format = "JSON"
interface = "/ISteamUser"

# friends list
steamidList = []
# get all steamid from friendslist


    
    

def get_friend_id(request):
    method = "/GetFriendList"
    steam_id = request.GET.get("steamid")
    steam_key = request.GET.get("steamkey")
    friendsList = requests.get(conf["steam_api_url"]+ interface + method + v1 + "/?key=" + steam_key + "&relationship=friend&steamid=" + steam_id + "&format=" + format).json()
    
                                        
    #friendsList is a nest dictionary
    for i in friendsList:
        #if the key == "friendslist"
        #ther are only 1 element inside friendsList called "friendslist" so this for loop should be o(1)
        if i == "friendslist":
            # save the value into x which is another dictionary of informations
            x = friendsList[i]
            for j in x:
                # ther are only 1 element inside x called "friends" so this for loop should be o(1)
                if j == "friends":
                    # save the list
                    actualFriendsList = x[j]
                    #this is the list that actually contains each friends info
                    #each element inside this list is a dictionary d -> dictionary
                    for d in actualFriendsList:
                        #each element/key inside dictionary
                        for e in d:
                            #if the key is "steamid" what we want  
                            if e == "steamid":
                                #save it into the list
                                steamidList.append(d[e])
    
    #testing for the output
    # for i in steamidList:
    #     print(i)
    # return JsonResponse(friendsList)            
    
    frinedsName = []

    #loop through the list of steamid
    for i in range(len(steamidList)):
        userId = str(steamidList[i])
        #the player summary for userId, its a nest dictionary again
        summaryInfo = requests.get(conf["steam_api_url"]+ interface + "/GetPlayerSummaries" + v2 + "/?key=" + conf["steam_api_key"] + "&steamids=" + userId + "&format=" + format).json()

        for i in summaryInfo:
            #the only element here is "response" -> o(1)
            if i == "response":
                # save this layer of dcitionary into x
                x = summaryInfo[i]
                for j in x:
                    #the only element here is "players" -> o(1)
                    if j == "players":
                        #the actual userInfo -> a list of dictionary
                        userInfo = x[j]
                        for l in userInfo:
                            for name in l:
                                if name == "personaname":
                                    frinedsName.append(l[name])
    #testing
    print(frinedsName)
    print(len(frinedsName))

   



    return JsonResponse(summaryInfo)