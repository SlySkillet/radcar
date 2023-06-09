from django.contrib import admin
from .models import Sale, AutomobileVO


@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    pass


@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    list_display = ["id"]
