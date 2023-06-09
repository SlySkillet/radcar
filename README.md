# CarCar

Team:

* Simon - Services microservice
* Mac Stephens - Sales

## Design

## Service microservice

The services microservice tracks all service appointments that the business handles. It contains all of the technicians at the dealership, and has a method to add  new technicians. It handles scheduling new appointments, updating their status when they are finished or canceled and stores all appointments in a service history page. The services microservice designates any automobile that was sold by the dealership as VIP by checking its vin against the AutomobileVO.

## Sales microservice

There are four models in the Sales microservice, the Salesperson, Customer, Sale, and AutomobileVO.
The Sale model has three foreign keys, which made it especially delightful to work with: Customer,
Automobile, and Salesperson. 

The automobileVO is the value object that the Sales microservice uses to interface with the Inventory
microservice, specifically with the automobile model, polling data on the vin and sold status (boolean).
This is important because in order for sales to be processed in the Sales microservice, the sold 
status has to be updated in the Inventory, which we were able to take care of on the front end when the 
sale form was submitted. 

This form accesses the Inventory api at 8100 for automobile information,
and the customer, salesperson, and price information from the Sales apis at 8090. Once the automobile status
of sold is changed in the Inventory (during the handleSubmit function), the poller will now change the 
subsequent sold status on the AutomobileVO, allowing for the Sales microservice to have the correct information
on a sale, which is imperative for the frontend sales lists. 

Changing the sold status on an automobile in the inventory was also important for our VIP functionality
to work on the service side. 