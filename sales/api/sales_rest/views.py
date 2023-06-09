from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import AutomobileVO, Salesperson, Customer, Sale
from .encoders import CustomerEncoder, SalespeopleEncoder, SaleEncoder

@require_http_methods(["GET", "POST"])
def api_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
                {"salespeople": salespeople},
                encoder=SalespeopleEncoder,
                safe=False,
            )

    else:
        content = json.loads(request.body)
        try:
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespeopleEncoder,
                safe=False,
            )
        except ValueError:
            return JsonResponse(
                {"message": "Could not create"},
                status=500,
            )


@require_http_methods(["GET", "DELETE"])
def api_salesperson(request, id):
    if request.method == "GET":
        try:
            saleperson = Salesperson.objects.get(id=id)
            return JsonResponse(
                saleperson,
                encoder=SalespeopleEncoder,
                safe=False
            )
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Does not exist"},
                status=404,
            )
    if request.method == "DELETE":
        try:
            salesperson = Salesperson.objects.get(id=id)
            salesperson.delete()
            return JsonResponse(
                {"message": "The salesperson was deleted."},
                status=200
                )
        except Salesperson.DoesNotExist:
            response = JsonResponse(
                {"message": "The salesperson doesn't exist"}
            )
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_customers(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
                {"customers": customer},
                encoder=CustomerEncoder,
                safe=False,
            )
    if request.method == "POST":
        content = json.loads(request.body)
        try:
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Could not create"},
                status=500,
            )


@require_http_methods(["GET", "DELETE"])
def api_customer(request, id):
    try:
        if request.method == "GET":
            customer = Customer.objects.get(id=id)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
    except Customer.DoesNotExist:
        return JsonResponse(
            {"message": "Does not exist"},
            status=404,
        )
    if request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                {"message": "The customer was deleted."},
                status=200
                )
        except Customer.DoesNotExist:
            response = JsonResponse(
                {"message": "The customer doesn't exist"}
            )
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)

        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            response = JsonResponse({"message": "The vin doesn't exist."})
            response.status_code = 400
            return response
        
        try:
            salesperson = Salesperson.objects.get(last_name=content["salesperson"])
            content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            response = JsonResponse(
                {"message": "The salesperson's last name doesn't exist."})
            response.status_code = 400
            return response

        try:
            customer = Customer.objects.get(last_name=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "The customer's last name doesn't exist."})
            response.status_code = 400
            return response
        sales = Sale.objects.create(**content)

        return JsonResponse(
            sales,
            encoder=SaleEncoder,
            safe=False,
        )



@require_http_methods(["GET", "DELETE"])
def api_sale(request, id):
    if request.method == "GET":
        try:
            record = Sale.objects.get(id=id)
            return JsonResponse(
                record,
                encoder=SaleEncoder,
                safe=False
            )
        except Sale.DoesNotExist:
            return JsonResponse(
                {"message": "Sale does not exist"},
                status=404,
            )
    if request.method == "DELETE":
        try:
            record = Sale.objects.get(id=id)
            record.delete()
            return JsonResponse(
                {"message": "The sale was deleted."},
                status=200
                )
        except Sale.DoesNotExist:
            response = JsonResponse(
                {"message": "The sale doesn't exist"}
            )
            response.status_code = 404
            return response
