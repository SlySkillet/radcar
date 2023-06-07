from common.json import ModelEncoder
from .models import Salesperson, Sale, AutomobileVO, Customer


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold", "id"]


class SalespeopleEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id", "id"]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ["first_name", "last_name", "address", "phone_number", "id"]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = ["automobile", "salesperson", "customer", "price", "id"]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespeopleEncoder(),
        "customer": CustomerEncoder(),
    }
