from django.apps import AppConfig
import os



class KusaConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Kusa'
    def ready(self):
            from Kusa.scheduler import scheduler
            # scheduler.start()
    