"""admin URL Configuration
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import iSteamUserStats, iSteamUser, views, manageUser,friendList

from rest_framework import routers
from Kusa import views


from django.urls import path
from . import authentication, iSteamUserStats, iSteamUser, views, manageUser, messages, conversations, models
from django.conf.urls import url
from django.contrib.auth.decorators import login_required



app_name = "Kusa" 
urlpatterns = [
    path('admin/', admin.site.urls),
    path('GetGlobalAchievementPercentagesForApp/', iSteamUserStats.get_global_achievement_percentages_for_app, name='GetGlobalAchievementPercentagesForApp'),
    path('GetPlayerAchievements/', iSteamUserStats.get_player_achievements, name='GetPlayerAchievements'),
    path('GetUserStatsForGame/', iSteamUserStats.get_user_stats_for_game, name='GetUserStatsForGame'),
    path('GetPlayerSummaries/', iSteamUser.get_player_summaries, name='GetPlayerSummaries'),
    #path('GetOwnedGames/', views.get_owned_games, name='GetOwnedGames'),
    #path('RegisterUser/', manageUser.register_user, name='RegisterUser')


    path('add_post/', friendList.add_post),
    #path('update_post/<str:receiver_steamid>&<str:request_steamid>', friendList.update_friendRequest),
    #path('delete_post/<str:id>', views.delete_post),
    path('friendRequest/<str:receiver_steamid>&<str:sender_steamid>',friendList.friendRequest),
    # path('read_post_all/',views.read_post_all),
    path('getFriendList/<str:userName>', friendList.getFriendList),
    path('getFriendRequest/<str:userName>', friendList.getFriendRequest),
    path('acceptFriendRequest/<str:account_name>&<str:accepting_name>', friendList.acceptFriendRequest),
    path('rejectFriendRequest/<str:account_name>&<str:reject_name>', friendList.rejectFriendRequest),
    path('deleteFriend/<str:account_name>&<str:delete_name>', friendList.deleteFriend),


    #path('update_post/<str:receiver_steamid>', friendList.update_friendRequest),
    
    
    
    # path('RegisterUser/', manageUser.register_user, name='RegisterUser'),
    # path('login',authentication.LoginView.as_view(), name='login'),
    # path('logout',authentication.LogoutView.as_view(), name='logout'),
    # path('getToken/',authentication.getToken, name='getToken'),
    # path('RegisterUser/', manageUser.register_user, name='RegisterUser'),
    
    path('GetFriendList/', iSteamUser.get_friend_list, name='GetFriendList'),
    path('GetOwnedGames/', iSteamUserStats.get_owned_games, name='GetOwnedGames'),
    path('login', authentication.LoginView.as_view(), name='login'),
    path('logout', authentication.LogoutView.as_view(), name='logout'),
    path('close', views.close_view, name='close'),
    path('getToken/', authentication.get_token, name='getToken'),
    path('addEmail/', manageUser.add_email, name="addEmail"),
    path('UpdateGoal/', manageUser.adjust_goal, name='UpdateGoal'),
    path('ToggleUserEmail/', manageUser.toggle_email, name='ToggleEmail'),
    path('getAllUsers/', manageUser.get_all_users, name='get_all_users'),
    path('deleteAUser/', manageUser.delete_a_user, name='delete_a_user'),
    path('getAUser/', manageUser.steamuser_detail, name='steamuser_detail'),
    path('getPlaytime/', views.get_user_daily_hours, name='get_playtime'),
    path('Deactivate/', manageUser.deactivate_account, name='DeactivateUser'),
    path('getDailyHours/', views.get_user_daily_hours, name='get_user_daily_hours'),
    path('getAchievements/', views.get_user_achievements, name='get_user_daily_hours'),
    path('addMessage/', messages.addMessage, name='addMessage'),
    path('getMessage/<str:conversationID>', messages.getMessage, name='getMessage'),
    path('addConversation/', conversations.addConversation, name='addConversation'),
    path('getConversation/<str:userID>', conversations.getConversation, name='getConversation'),
    path('searchForFriend/<str:userID>', iSteamUser.searchForFriend, name='searchForFriend'),

]