from time import gmtime, strftime
from Kusa.data_collection import get_steam_user
from Kusa.models import SteamUser
from collections import OrderedDict  # keep this line for check_goal

NUM_ACHIEVEMENTS = 9
ACHIEVEMENTS_MAP = {
    "a new step" : 0,
    "goal in!": 1,
    "kick your habits": 2,
    "can’t stop won’t stop": 3,
    "staying on track": 4,
    "power of friendship": 5,
    "squad goals": 6,
    "toggled": 7,
    "super achiever": 8,
}

#run only once a day    
def check_goal(steam_id):
    steamuser = get_steam_user(steam_id)    
    daily_hours = steamuser['daily_hours']
    goal = steamuser['goal']
    list_of_hours = [dict(day) for day in eval(daily_hours)]
    # [ACHIEVEMENT CHECK]
    achievements = get_achievements(steam_id)
    achievement_index = ACHIEVEMENTS_MAP["can’t stop won’t stop"]
    if len(list_of_hours) >= 2:
        weekly_achievement = achievements[achievement_index]
        monthly_achievement = achievements[ACHIEVEMENTS_MAP["staying on track"]]
        hours_today = list_of_hours[-1]["hours"] - list_of_hours[-2]["hours"]
        weekly_achievement["total_hours"] += hours_today
        hours_this_week = weekly_achievement["total_hours"]
        steamuser_obj = SteamUser.objects.get(id=steam_id)
        if hours_this_week < goal:
            weekly_achievement["daily_streak"] += 1  
            streak = weekly_achievement["daily_streak"]
            if streak == 7 and achievements[achievement_index]["progress"] != 100:  #completed weekly achievement 
                weekly_achievement["total_hours"] = 0 
                complete_achievement(achievements, achievement_index, steamuser_obj)
            else: #weekly achievement not completed -> should still update total hours and progress 
                if weekly_achievement["progress"] != 100:
                    weekly_achievement["progress"] = format((streak/7)*100,".2f")
                else:
                    if streak//7 in [1,2,3]: #on end of week 1,2,3 etc. we should reset the weekly_hours to be 0 
                        weekly_achievement["total_hours"] = 0 
                    elif streak//7 == 4 and monthly_achievement["progress"] != 100: #4 week streak wow! -> finish achievement 
                        complete_achievement(achievements, ACHIEVEMENTS_MAP["staying on track"], steamuser_obj)
            weekly_achievement["week_streak"] = streak//7 
            monthly_achievement["progress"] = format((streak/28)*100,".2f")
        else: #streak broke -> reset 
            weekly_achievement["total_hours"] = 0 
            weekly_achievement["week_streak"] = 0 
            weekly_achievement["daily_streak"] = 0
            if monthly_achievement["progress"] != 100:
                monthly_achievement["progress"] = 0 
        steamuser_obj.achievements=achievements
        steamuser_obj.save()
            
def check_decreased_weekly_hours(steam_id):
    # [ACHIEVEMENT CHECK]
    steamuser = get_steam_user(steam_id)
    daily_hours = steamuser['daily_hours']
    list_of_hours = [dict(day) for day in eval(daily_hours)]
    achievements = get_achievements(steam_id)
    if achievements[ACHIEVEMENTS_MAP["kick your habits"]]["progress"] != 100:
        if len(list_of_hours) >= 14: #we have at least 2 weeks worth of data 
            hours_last_week = list_of_hours[-8]["hours"] - list_of_hours[-14]["hours"]
            hours_this_week = list_of_hours[-1]["hours"] - list_of_hours[-7]["hours"]
            if hours_this_week == 0 or hours_this_week < hours_last_week:
                complete_achievement(achievements, ACHIEVEMENTS_MAP["kick your habits"], SteamUser.objects.get(id=steam_id))
    
def get_achievements(steam_id):
    user =  get_steam_user(steam_id)
    achievements = user['achievements']
    list_of_achievements = [dict(a) for a in eval(achievements)]
    return list_of_achievements

def complete_achievement(achievements, achievement_index, user):        
    date = strftime("%m/%d/%Y", gmtime())
    achievements[achievement_index]["progress"] = 100    
    achievements[achievement_index]["date_achieved"] = date
    
    # [ACHIEVEMENT CHECK]   
    if achievements[ACHIEVEMENTS_MAP["super achiever"]]["progress"] != 100:
        total_completed_achievements = 0
        for achievement in achievements:
            if achievement["progress"] == 100:
                total_completed_achievements += 1 
        if total_completed_achievements >= 5:
            achievements[ACHIEVEMENTS_MAP["super achiever"]]["progress"] = 100
            achievements[ACHIEVEMENTS_MAP["super achiever"]]["date_achieved"] = date
        else:
            achievements[ACHIEVEMENTS_MAP["super achiever"]]["progress"] = format((total_completed_achievements/5 )*100,".2f")
    
    user.achievements=achievements
    user.save()
    