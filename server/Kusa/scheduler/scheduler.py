from Kusa.serializers import SteamUserSerializer
from Kusa.models import SteamUser
from Kusa.data_collection import get_total_playtime_hours
from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore
from time import gmtime, strftime
from collections import OrderedDict
from Kusa.data_collection import get_steam_user
from Kusa.views import send_user_email
from Kusa.achievements import check_goal, check_decreased_weekly_hours


def has_duplicate_entry(date, array):
    for json in array:
        if json["date"] == date:
            return True
    return False


def update_all_users_playtime():
    steamuser_serializer = SteamUserSerializer(
        SteamUser.objects.all(), many=True)
    date = strftime("%m/%d/%Y", gmtime())
    print("called")
    for entry in steamuser_serializer.data:
        # gather and submit playtime if user has no entry for current date
        steam_id = entry['id']
        print(steam_id)
        # [ACHIEVEMENT CHECKS]
        print("before check goal")
        check_goal(steam_id)
        print("after check goal")
        print("before decreased check")
        check_decreased_weekly_hours(steam_id)
        print("after decreased check")
        daily_hours = get_steam_user(steam_id)['daily_hours']
        list_of_json = [dict(day) for day in eval(daily_hours)]
        if not has_duplicate_entry(date, list_of_json):
            entry['daily_hours'].update(
                {'date': date, 'hours': get_total_playtime_hours(steam_id)})
            entry.save()
        print("after all daily hours and achievement checks!")
        # send email if sum of hours is over goal for current week
        if(entry['emailsEnabled']):
            send_user_email(steam_id)
        print('After email')

def start():
    scheduler = BackgroundScheduler()
    scheduler.add_jobstore(DjangoJobStore(), "default")
    # run this job once every 24 hrs
    scheduler.add_job(update_all_users_playtime, 'interval', seconds=15,
                      id='update_all_users_playtime', misfire_grace_time=None)
    scheduler.start()
