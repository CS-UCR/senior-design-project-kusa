from django.http.response import JsonResponse
from django.shortcuts import redirect
from admin import settings
from admin.settings import FRONTEND_URL
from Kusa.authentication import get_token
from Kusa.authentication import validate_token
from Kusa.data_collection import get_steam_user
from collections import OrderedDict #keep this line for get_user_daily_hours 

JWT_SECRET_KEY = settings.JWT_SECRET_KEY
conf =  settings.CONF

# http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=<api key>&format=<format>.


def close_view(request):
    response = redirect(FRONTEND_URL + '/steamauth')
    token = get_token(request)
    response.set_cookie('token', (token), max_age=1000)
    return response


def get_user_daily_hours(request):
    """
    will return an array of the user's daily hours
    Parameters: request

    Returns: returns a list of json obj -> [{"date" : date1, "hours" : num_hours1},{"date" : date2, "hours" : num_hours2}]
    """
    response = validate_token(request)
    if "steamid" in response:   
        user =  get_steam_user(response["steamid"])
        daily_hours = user['daily_hours']
        list_of_json = [dict(day) for day in eval(daily_hours)]
        return JsonResponse(list_of_json , safe=False)
    else: 
        return response
    