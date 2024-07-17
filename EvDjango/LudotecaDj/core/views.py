from django.shortcuts import render, HttpResponse

def holis(request):
    return render(request, "core/holiwis.html")

def comoVaTd(request):
    return render(request, "core/comoVaTodo.html")

# Create your views here.
