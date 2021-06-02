from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField('Категория', max_length=50)
    link = models.CharField('Ссылка', max_length=50)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Note(models.Model):
    name = models.CharField('Имя', max_length=50)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    nameCat = models.CharField('Название категории', max_length=50, default="Нет категории")
    date = models.DateField('Дата добавления', auto_now_add=True)
    text = models.TextField('Текст записи')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Запись'
        verbose_name_plural = 'Записи'