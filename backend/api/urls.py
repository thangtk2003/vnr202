from django.urls import path
from . import views

urlpatterns = [
    path('health/', views.health_check, name='health_check'),
    path('quiz/generate/', views.generate_quiz, name='generate_quiz'),
    path('chat/', views.chat_message, name='chat_message'),
    path('history/', views.get_history_content, name='get_history_content'),
]
