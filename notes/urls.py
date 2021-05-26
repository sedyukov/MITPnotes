from django.urls import path
from django.conf.urls import include
from . import views




urlpatterns = [
    path('', views.index),
    path('resp', views.AjaxHandlerView.as_view()),
    path("note/", views.NoteListView.as_view(), name="api-note-list"),
    path("note/<int:pk>/", views.NoteView.as_view(), name="api-note"),
]