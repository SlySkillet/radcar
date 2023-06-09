from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import Technician, Appointment, AutomobileVO
from .encoders import AutomobileVOEncoder, TechniciansListEncoder, AppointmentListEncoder


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


@require_http_methods(["GET", "POST"])
def list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
        )
    elif request.method == "POST":
        try:
            content = json.loads(request.body)


            for automobile in AutomobileVO.objects.filter(sold=True):
                if automobile.vin == content["vin"]:
                    vip = True
                    content["vip"] = vip

            technician_id = content["technician"]
            technician = Technician.objects.get(id=technician_id)
            content["technician"] = technician
            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentListEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "invalid technician id"},
                status=400,
            )


@require_http_methods(["DELETE", "GET"])
def detail_appointment(request, id):
    if request.method == "GET":
        appointment = Appointment.objects.filter(id=id)
        return JsonResponse(
            appointment,
            encoder=AppointmentListEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(id=id)
            count, _ = appointment.delete()
            return JsonResponse(
                {"deleted": count > 0}
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "unknown appointment"},
                status=400,
            )


@require_http_methods(["PUT"])
def cancel_appointment(request, id):
    if request.method == "PUT":
        try:
            content = {"status": "canceled"}
            appointment = Appointment.objects.get(id=id)

            prop = "status"
            setattr(appointment, prop, content[prop])
            appointment.save()
            return JsonResponse(
                appointment,
                encoder=AppointmentListEncoder,
                safe=False,
            )

        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "appointment does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["PUT"])
def finish_appointment(request, id):
    if request.method == "PUT":
        try:
            content = {"status": "finished"}
            appointment = Appointment.objects.get(id=id)

            prop = "status"
            setattr(appointment, prop, content[prop])
            appointment.save()
            return JsonResponse(
                appointment,
                encoder=AppointmentListEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "appointment does not exist"})
            response.status_code = 404
            return response
