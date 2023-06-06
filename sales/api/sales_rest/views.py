from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json
# Create your views here.
from .models import AutomobileVO, Salesperson, Customer, Sale
from common.json import ModelEncoder


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
    ]


class SalespeopleEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id"
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "automobile",
        "salesperson",
        "customer",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id"
    ]


@require_http_methods(["GET", "POST"])
def api_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespeopleEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)
    try:
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespeopleEncoder,
            safe=False
        )
    except ValueError:
        return JsonResponse(
            {"message": "Problem with content"},
            status=500
        )


@require_http_methods(["GET", "DELETE"])
def api_salesperson(request, id):
    if request.method == "GET":
        salesperson = Salesperson.objects.get(id=id)
        return JsonResponse(
            {"salesperson": salesperson},
            encoder=SalespeopleEncoder,
            safe=False
        )
    else:
        if request.method == "DELETE":
            salesperson = Salesperson.objects.get(id=id)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder=SalespeopleEncoder,
                safe=False
            )


@require_http_methods(["GET", "POST"])
def api_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)
    try:
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False
        )
    except ValueError:
        return JsonResponse(
            {"message": "That id does not exist or is taken."},
            status=400
        )
    

@require_http_methods(["GET", "DELETE"])
def api_customer(request, id):
    if request.method == "GET":
        customer = Customer.objects.get(id=id)
        return JsonResponse(
            {"customer": customer},
            encoder=CustomerEncoder,
            safe=False
        )
    else:
        if request.method == "DELETE":
            customer = Customer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )


@require_http_methods(["GET", "POST"])
def api_sales(request):
    if request.method == "GET":
        processed_sales = SaleEncoder.objects.all()
        return JsonResponse(
                processed_sales,
                encoder=SaleEncoder,
                safe=False,
            )
    else:
        content = json.loads(request.body)
        automobile = AutomobileVO.objects.get(vin=content["automobile"])
        
        if automobile.sold:
            return JsonResponse(
                {"message": "Sorry! It's already sold."},
                status=400
            )
        
        salesperson = Salesperson.objects.get(id=content["salesperson"])
        customer = Customer.objects.get(id=content["customer"])
        content["salesperson"] = salesperson
        content["automobile"] = automobile
        content["customer"] = customer

        
            

            

