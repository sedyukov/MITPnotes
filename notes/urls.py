from django.urls import path
from django.conf.urls import include
from . import views

urlpatterns = [
    path('', views.index),
    path('resp', views.AjaxHandlerView.as_view()),
    path("note/", views.NoteListView.as_view(), name="api-note-list"),
    path("note/<int:pk>/", views.NoteView.as_view(), name="api-note"),
    path("category/", views.CategoryListView.as_view(), name="api-note-list"),
    path("category/<int:pk>/", views.CategoryView.as_view(), name="api-note"),
    path("main/", views.notes_app),
]