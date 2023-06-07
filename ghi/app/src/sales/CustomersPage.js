import React, { useEffect, useState } from 'react';

function CustomersPage() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost:8090/api/customers/';
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setCustomers(data);
            }

        };

        fetchData();
    }, []);

    return (
        <div className="table-responsive">
            <h2 className="text-center">Customers</h2>
                <table className="table-fill table table-shadow table-striped">
                    <thead>
                        <tr>
                            <th className="text-left">First Name</th>
                            <th className="text-left">Last Name</th>
                            <th className="text-left">Phone Number</th>
                            <th className="text-left">Address</th>
                        </tr>
                    </thead>
                    <tbody className="table-hover">
                        {customers.map(customer => {
                            return (
                                <tr key={customer.id}>
                                    <td className="text-left w-25">{customer.last_name}</td>
                                    <td className="text-left w-25">{customer.first_name}</td>
                                    <td className="text-left w-25">{customer.phone_number}</td>
                                    <td className="text-left w-25">{customer.address}</td> 
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
        </div>        
    )
}

export default CustomersPage
