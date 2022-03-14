from Kusa.iSteamUserStats import get_owned_games
from Kusa.models import SteamUser
from Kusa.serializers import SteamUserSerializer
from time import gmtime, strftime



def get_total_playtime_hours(steam_id):
    games_arr = get_owned_games(steam_id)
    overall_hours = 0 
    for game in games_arr:
        ### left these here in case we want to save individual game info in the future
        # app_id = game["appid"]
        # game_title = game["name"]
        # playtime_forever = game["playtime_forever"]
        # game_img_url = "http://media.steampowered.com/steamcommunity/public/images/apps/" + app_id  + "/" + game["img_logo_url"] +".jpg"
        overall_hours += game["playtime_forever"]//60
    return overall_hours

def gather_new_user_info(steam_id):
    from Kusa.achievements import NUM_ACHIEVEMENTS, ACHIEVEMENTS_MAP
    user = SteamUser.objects.get(id=steam_id)
    date = strftime("%m/%d/%Y", gmtime())
    user.daily_hours.append({'date':date, 'hours': get_total_playtime_hours(steam_id)})
    # first achievement is free 
    user.achievements.append({"id": 1, "progress": 100, "date_achieved": date})
    for i in range(2, NUM_ACHIEVEMENTS + 1):
        if i-1== ACHIEVEMENTS_MAP["can’t stop won’t stop"]:
            user.achievements.append({"id": i, "progress": 0, "date_achieved": "", "total_hours": 0, "week_streak": 0, "daily_streak": 0})
        elif i-1== ACHIEVEMENTS_MAP["can’t stop won’t stop"]:
            user.achievements.append({"id": i, "progress": 20, "date_achieved": ""})
        else:
            user.achievements.append({"id": i, "progress": 0, "date_achieved": ""})
    user.save()


def get_steam_user(steam_id):       
    user = SteamUser.objects.get(id=steam_id)
    if user is None:
        return {} 
    steamuser_serializer = SteamUserSerializer(user)
    return steamuser_serializer.data 




