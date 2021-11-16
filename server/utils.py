from pymongo import MongoClient
from admin.settings import CONNECTION_STRING

def get_db_handle():
    client = MongoClient(CONNECTION_STRING)
    db = client['main']
    return db

def get_collection(db):
    return db['Users']
