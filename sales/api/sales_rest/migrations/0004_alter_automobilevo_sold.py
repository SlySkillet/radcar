# Generated by Django 4.0.3 on 2023-06-05 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0003_alter_automobilevo_sold'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automobilevo',
            name='sold',
            field=models.BooleanField(default=False),
        ),
    ]
