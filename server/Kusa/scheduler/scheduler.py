import datetime
import json
from Kusa.serializers import SteamUserSerializer
from Kusa.models import SteamUser
from Kusa.data_collection import get_total_playtime_hours
from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore, register_events
from django.utils import timezone
from django_apscheduler.models import DjangoJobExecution
import sys
from time import gmtime, strftime
from ast import literal_eval
def update_all_users_playtime():
    print("Current Time =", strftime("%Y-%m-%d %H:%M:%S", gmtime()))
    steamusers = SteamUser.objects.all()
    # print("got all steam users")
    steamuser_serializer = SteamUserSerializer(steamusers,many=True)
    # print("len:",len(steamuser_serializer.data))
    for i in range(len(steamuser_serializer.data)):
        entry = steamuser_serializer.data[i]
        steam_id = entry['id']
        # print("steam_id",steam_id)
        # print("personaname:",entry["personaname"])
        user = SteamUser.objects.get(id=steam_id)
        weekly_hours = get_total_playtime_hours(steam_id)
        # print("weekly_hours",weekly_hours)
        # print("user.weekly_hours: ", type(user.weekly_hours))
        # if len(user.weekly_hours) > 0: 
        #     hrs = str(user.weekly_hours)
        #     hrs_arr= [ float(i) for i in hrs[1:-1].split(',') ]
        #     hrs_arr.append(weekly_hours)
        #     user.weekly_hours = hrs_arr
        # else:
        #     user.weekly_hours = [(weekly_hours)]
        # hours_today = {
        #     strftime("%m/%d/%Y", gmtime()):str(weekly_hours)
        # }
        # date_today = strftime("%m/%d/%Y", gmtime())
        date_today = strftime("%Y-%m-%d %H:%M:%S", gmtime())
        print("outside if statement user.weekly_hours:",user.weekly_hours)
        print("type:",type(user.weekly_hours))
        if user.weekly_hours is not None: 
            hrs_dict = json.loads(str(user.weekly_hours))
            print("hrs_dict:",hrs_dict)
            print("type:",type(hrs_dict))
            hrs_dict[date_today]= weekly_hours
            user.weekly_hours = hrs_dict
            print("user.weekly_hours:",user.weekly_hours)
        else:
            print("before setting weekly hours")
            user.weekly_hours = {date_today : str(weekly_hours)}  
            print("just set weekly hours")
        # print("users'weekly:L",user.weekly_hours)
        # print("Len",len(user.weekly_hours))
        user.save()
        print("result:,",user.weekly_hours)
        print("end of loop ",i)



def start():
    scheduler = BackgroundScheduler()
    scheduler.add_jobstore(DjangoJobStore(), "default")
    # run this job every 2 minutes
    scheduler.add_job(update_all_users_playtime, 'interval', minutes=1, id='update_all_users_playtime',misfire_grace_time=None)
    scheduler.start()
    print("Scheduler started...")