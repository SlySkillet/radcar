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


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id"
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "automobile",
        "salesperson",
        "customer",
        "id"
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespeopleEncoder(),
        "customer": CustomerEncoder(),
    }

    def get_extra_data(self, o):
        return {"automobile": o.automobile.vin}



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
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
        )
    if request.method == "POST":
        content = json.loads(request.body)
        try:
            automobile_vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=automobile_vin)
            if automobile.sold is False:
                content["automobile"] = automobile

                salesperson_ln = content["salesperson"]
                salesperson = Salesperson.objects.get(last_name=salesperson_ln)
                content["salesperson"] = salesperson
            
                customer_ln = content["customer"]
                customer = Customer.objects.get(last_name=customer_ln)
                content["customer"] = customer

                automobile.sold = True
                automobile.save()

                completed_sales = Sale.objects.create(**content)
                return JsonResponse(
                    completed_sales,
                    encoder=SaleEncoder,
                    safe=False,
                )
            else:
                response = JsonResponse({"message": "We sold it already!"})
            response.status_code = 400
            return response
        except:
            return JsonResponse(
                {"message": "Sorry! No longer available."},
                status=500
            )


@require_http_methods(["GET", "DELETE"])
def api_sale(request, id):

    try:
        sale = Sale.objects.get(id=id)
    except Sale.DoesNotExist:
        return JsonResponse(
            {"message": "No sale id"},
            status=400
        )
    if request.method == "GET":
        return JsonResponse(
            {"sale": sale},
            encoder=SaleEncoder,
            safe=False
        )
    else:
        if request.method == "DELETE":
            sale = Sale.objects.get(id=id)
            sale.delete()
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False,
            )
            