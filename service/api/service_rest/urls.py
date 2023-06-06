from django.urls import path
from .views import list_technicians, delete_technician

urlpatterns = [
    path("technicians/<int:id>/", delete_technician, name="delete_technician"),
    path("technicians/", list_technicians, name="list_technicians")
]
