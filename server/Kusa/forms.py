# Chat model inspired by - http://legionscript.com/
# https://www.youtube.com/watch?v=oxrQdZ5KqW0&list=PLPSM8rIid1a3TkwEmHyDALNuHhqiUiU5A&index=16

from django import forms
from .models import ThreadModel

class ThreadForm(forms.Form):
    steamid = forms.CharField(label = '', max_length = 17)
    # userID = forms.CharField(label = '', max_length = 100) # if want to limit userID

class MessageForm(forms.Form):
    message = forms.CharField(label = '', max_length = 500)