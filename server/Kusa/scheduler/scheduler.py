from Kusa.serializers import SteamUserSerializer
from Kusa.models import SteamUser
from Kusa.data_collection import get_total_playtime_hours
from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore
from time import gmtime, strftime
from collections import OrderedDict
from Kusa.data_collection import get_steam_user

def has_duplicate_entry(date, array):
    for json in array:
        if json["date"] == date:
            return True 
    return False

def update_all_users_playtime():
    steamuser_serializer = SteamUserSerializer(SteamUser.objects.all(), many=True)
    date = strftime("%m/%d/%Y", gmtime())
    for entry in steamuser_serializer.data:
        steam_id = entry['id']
        daily_hours = get_steam_user(steam_id)['daily_hours']
        list_of_json = [dict(day) for day in eval(daily_hours)] 
        if not has_duplicate_entry(date,list_of_json):
            entry.daily_hours.append({'date': date, 'hours': get_total_playtime_hours(steam_id)})
            entry.save()
    
    
def start():
    scheduler = BackgroundScheduler()
    scheduler.add_jobstore(DjangoJobStore(), "default")
    # run this job once every 24 hrs 
    scheduler.add_job(update_all_users_playtime, 'interval', hours=24, id='update_all_users_playtime', misfire_grace_time=None)
    scheduler.start()
    