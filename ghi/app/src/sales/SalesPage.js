import React, { useEffect, useState } from 'react';

function SalesPage() {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost:8090/api/sales/';
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setSales(data.sales);
            } else {
                console.error(response)
            }

        };

        fetchData();
    }, []);

    return (
        <div className="table responsive px-4 py-5 my-5 text-center">
            <h2 className="display-5 fw-bold">Sales</h2>
                <table className="table-fill table table-shadow table-striped">
                    <thead>
                        <tr>
                            <th className="text-left">Salesperson Employee ID</th>
                            <th className="text-left">Salesperson Name</th>
                            <th className="text-left">Customer</th>
                            <th className="text-left">VIN</th>
                            <th className="text-left">Price</th>
                        </tr>
                    </thead>
                    <tbody className="table-hover">
                        {sales.map(sale => {
                            return (
                                <tr key={sales.id}>
                                    <td className="text-left w-25">{sale.salesperson.employee_id}</td>
                                    <td className="text-left w-25">{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                                    <td className="text-left w-25">{sale.customer.first_name} {sale.customer.last_name}</td>
                                    <td className="text-left w-25">{sale.automobile.vin}</td>
                                    <td className="text-left w-25">{sale.price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
        </div>        
    )
}

export default SalesPage
