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
        overall_hours += game["playtime_forever"]
    return overall_hours

def gather_new_user_info(steam_id):
    user = SteamUser.objects.get(id=steam_id)
    user.weekly_hours.append({'date':strftime("%m/%d/%Y", gmtime()), 'hours': get_total_playtime_hours(steam_id)})
    user.save()
    
    
    # returns a steam user 
def get_steam_user(steam_id):       
    user = SteamUser.objects.get(id=steam_id)
    if user is None:
        return {} 
    steamuser_serializer = SteamUserSerializer(user)
    return steamuser_serializer.data 
