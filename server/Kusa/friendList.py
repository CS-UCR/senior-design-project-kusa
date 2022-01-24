from django.http import HttpResponse
from django.http.response import JsonResponse

from .serializer import TestSerializer
from Kusa.models import Test

from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def read_post(request,id):
    
    # dummy = Dummy.objects.get(SteamID=id)
    # name = "User Name: " + dummy.Name
    # return HttpResponse(name)

    gamerID = ""
    if request.method == 'GET':
        test = Test.objects.filter(Name=id)
        test_serializer = TestSerializer(test,many=True)

        if not test:
            return JsonResponse("Invalid")
        #add a the exist person's id to the other peroson's friends list
        #return friends request send to frontend
        
        else:
            for key in test_serializer.data:
                if key == "Name":
                    gamerID = test_serializer.data[key]
            return JsonResponse(test_serializer.data[0],safe=False) 



