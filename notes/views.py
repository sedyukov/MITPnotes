from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse
# Create your views here.


class AjaxHandlerView(View):
    def get(self, request):
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


