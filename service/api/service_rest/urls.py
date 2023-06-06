from django.urls import path
from .views import list_technicians, delete_technician, list_appointments, detail_appointment, cancel_appointment, finish_appointment

urlpatterns = [
    path("appointments/<int:id>/finish", finish_appointment, name="finish_appointment"),
    path("appointments/<int:id>/cancel", cancel_appointment, name="cancel_appointment"),
    path("appointments/<int:id>", detail_appointment, name="detail_appointment"),
    path("appointments/", list_appointments, name="list_appointments"),
    path("technicians/<int:id>", delete_technician, name="delete_technician"),
    path("technicians/", list_technicians, name="list_technicians")
]
