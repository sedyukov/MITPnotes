from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse
from .models import Note, Category
# Create your views here.


class AjaxHandlerView(View):

    def get(self, request):
        # n1 = Note(name='A', category='asdas', text='C')
        # n1.save()
        # c1 = Category(name='asdas', link='csac')
        # c1.save()

        text = request.GET.get('button_text')
        print()
        print(text)
        print()
        if request.is_ajax():
            t = "ssss"
            return JsonResponse({'info': t}, status=200)

        return render(request, 'main/index.html')


def index(request):
    return render(request, 'main/index.html')


