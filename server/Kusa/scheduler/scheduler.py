import datetime
from Kusa.serializers import SteamUserSerializer
from Kusa.models import SteamUser
from Kusa.data_collection import get_total_playtime_hours
from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore, register_events
from django.utils import timezone
from django_apscheduler.models import DjangoJobExecution
import sys

def update_all_users_playtime():
    print("Current Time =", datetime.datetime.now())
    steamusers = SteamUser.objects.all()
    print("got all steam users")
    steamuser_serializer = SteamUserSerializer(steamusers,many=True)
    print("len:",len(steamuser_serializer.data))
    for i in range(len(steamuser_serializer.data)):
        entry = steamuser_serializer.data[i]
        steam_id = entry['id']
        print("steam_id",steam_id)
        print("personaname:",entry["personaname"])
        user = SteamUser.objects.get(id=steam_id)
        weekly_hours = get_total_playtime_hours(steam_id)
        print("weekly_hours",weekly_hours)
        print("user.weekly_hours: ", user.weekly_hours)
        user.weekly_hours = []
        print("users'weekly:L",user.weekly_hours)
        print("Len",len(user.weekly_hours))
        user.save()
        print("end of loop ",i)



def start():
    scheduler = BackgroundScheduler()
    scheduler.add_jobstore(DjangoJobStore(), "default")
    # run this job every 2 minutes
    scheduler.add_job(update_all_users_playtime, 'interval', minutes=2, name='update_all_users_playtime', jobstore='default')
    scheduler.start()
    print("Scheduler started...")