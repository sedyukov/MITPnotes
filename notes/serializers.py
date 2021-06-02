from rest_framework import serializers

from .models import *


class NoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Note
        fields = ("id", "name", "category", "nameCat", "date", "text")


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ("id", "name", "link")
