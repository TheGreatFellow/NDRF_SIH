# Generated by Django 4.1 on 2022-08-26 01:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("disasters", "0002_delete_weather"),
    ]

    operations = [
        migrations.CreateModel(
            name="Disasters",
            fields=[
                ("id", models.IntegerField(primary_key=True, serialize=False)),
                ("name", models.CharField(max_length=255)),
                ("description", models.CharField(max_length=255)),
                ("disasterType", models.CharField(max_length=255)),
                ("location", models.CharField(max_length=255)),
            ],
        ),
    ]