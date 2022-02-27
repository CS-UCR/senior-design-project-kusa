from Kusa.serializers import SteamUserSerializer
from Kusa.models import SteamUser
from Kusa.data_collection import get_total_playtime_hours
from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore
from time import gmtime, strftime

def update_all_users_playtime():
    steamusers = SteamUser.objects.all()
    steamuser_serializer = SteamUserSerializer(steamusers,many=True)
    for i in range(len(steamuser_serializer.data)):
        entry = steamuser_serializer.data[i]
        steam_id = entry['id']
        user = SteamUser.objects.get(id=steam_id)
        user.weekly_hours.append({'date':strftime("%m/%d/%Y", gmtime()), 'hours': get_total_playtime_hours(steam_id)})
        user.save()
    



def start():
    scheduler = BackgroundScheduler()
    scheduler.add_jobstore(DjangoJobStore(), "default")
    # run this job once every 24 hrs 
    scheduler.add_job(update_all_users_playtime, 'interval', hours=24, id='update_all_users_playtime',misfire_grace_time=None)
    scheduler.start()