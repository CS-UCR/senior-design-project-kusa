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
from . import iSteamUserStats, iSteamUser, views, manageUser

from rest_framework import routers
from Kusa import views

# router = routers.DefaultRouter()
# router.register(r'todos',views.FriendsListView,'todo')

router = routers.DefaultRouter()
router.register(r' ', views.GamerView, 'Gamer')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('test', views.test, name='test'),
    path('GetGlobalAchievementPercentagesForApp/', iSteamUserStats.get_global_achievement_percentages_for_app, name='GetGlobalAchievementPercentagesForApp'),
    path('GetPlayerAchievements/', iSteamUserStats.get_player_achievements, name='GetPlayerAchievements'),
    path('GetUserStatsForGame/', iSteamUserStats.get_user_stats_for_game, name='GetUserStatsForGame'),
    path('GetPlayerSummaries/', iSteamUser.get_player_summaries, name='GetPlayerSummaries'),
    path('GetOwnedGames/', views.get_owned_games, name='GetOwnedGames'),
    #path('RegisterUser/', manageUser.register_user, name='RegisterUser')
    
    
]