# Generated by Django 4.0.3 on 2023-06-05 22:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_alter_customer_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automobilevo',
            name='sold',
            field=models.BooleanField(default=True),
        ),
    ]
