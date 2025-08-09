from django.shortcuts import render
from django.http import HttpResponse
from home.models import Service

# Create your views here.
def index(request):
    return render(request, 'index.html')

def home(request):
    return render(request, 'home.html')

def form(request):
    return render(request, 'form.html')

def submit_form(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        lastname = request.POST.get('lastname')
        username = request.POST.get('username')
        email = request.POST.get('email')
        city = request.POST.get('city')
        state = request.POST.get('state')
        mobile = request.POST.get('mobile')
        job = request.POST.get('job')
        resume = request.FILES.get('resume')  # <-- Added

        entry = Service(
            name=name + " " + lastname,
            username=username,
            email=email,
            city=city,
            state=state,
            phone=mobile,
            job=job,
            resume=resume,  # <-- Added
        )
        entry.save()
        return render(request, 'thankyou.html')
    else:
        return HttpResponse("Invalid request method.")

def aboutUs(request):
    return render(request, 'aboutUs.html')
