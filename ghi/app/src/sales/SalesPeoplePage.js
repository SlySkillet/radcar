import React, { useEffect, useState } from 'react';

function SalespeoplePage() {
    const [salespeople, setSalespeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost:8090/api/salespeople/';
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setSalespeople(data);
            }

        };

        fetchData();
    }, []);

    return (
        <div className="table-responsive">
            <h2 className="text-center">Salespeople</h2>
                <table className="table-fill table table-shadow table-striped">
                    <thead>
                        <tr>
                            <th className="text-left">First Name</th>
                            <th className="text-left">Last Name</th>
                            <th className="text-left">Employee ID</th>
                        </tr>
                    </thead>
                    <tbody className="table-hover">
                        {salespeople.map(salesperson => {
                            return (
                                <tr key={salesperson.id}>
                                    <td className="text-left w-25">{salesperson.last_name}</td>
                                    <td className="text-left w-25">{salesperson.first_name}</td>
                                    <td className="text-left w-25">{salesperson.employee_id}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
        </div>        
    )
}

export default SalespeoplePage