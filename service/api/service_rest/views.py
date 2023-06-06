from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

# Create your views here.
from common.json import ModelEncoder
from .models import Technician

class TechniciansListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id",
    ]


@require_http_methods(["GET", "POST"])
def list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechniciansListEncoder,
        )
    else:
        content = json.loads(request.body)

        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechniciansListEncoder,
            safe=False,
        )

@require_http_methods(["DELETE"])
def delete_technician(request, id):
    if request.method == "DELETE":
        count, _ = Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
