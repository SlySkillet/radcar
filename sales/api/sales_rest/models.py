from django.db import models

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

    def __str__(self):
        return self.vin

class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.last_name

class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=15)

    def __str__(self):
        return self.last_name

class Sale(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="auto_sale",
        on_delete=models.PROTECT
    )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="salesperson_sale",
        on_delete=models.PROTECT
    )
    customer = models.ForeignKey(
        Customer,
        related_name="customer_sale",
        on_delete=models.PROTECT
    )
    price = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.salesperson} sold {self.automobile}"
    