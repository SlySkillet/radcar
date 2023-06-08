import React, { useState, useEffect } from 'react';

function SalespersonHistory() {
    const [salespeople, setSalespeople] = useState([]);
    const [selectedSalesperson, setSalespersonId] = useState('');
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchSalespeople = async () => {
            try {
                const response = await fetch('http://localhost:8090/api/salespeople/');
                if (response.ok) {
                    const data = await response.json();
                    setSalespeople(data.salespeople);
                }
            } catch (error) {
                console.error('Error fetching salespeople:', error);
            }
        };

        fetchSalespeople();
    }, []);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await fetch('http://localhost:8090/api/sales/');
                if (response.ok) {
                    const data = await response.json();
                    setSales(data.sales);
                }
            } catch (error) {
                console.error('Error fetching sales:', error);
            }
        };

        fetchSales();
    }, []);

    const handleSalespersonChange = (event) => {
        const salespersonId = event.target.value;
        setSalespersonId(salespersonId);
    };

    const filteredSales = sales.filter((sale) => sale.salesperson.id === parseInt(selectedSalesperson));

    return (
        <div className="table-responsive">
            <h2 className="text-center">Salesperson History</h2>
            <div className="dropdown" align="center">
                <select className="btn btn-success dropdown-toggle" id="salesperson" value={selectedSalesperson} onChange={handleSalespersonChange}>
                    <option value="">Choose a salesperson</option>
                    {salespeople.map((salesperson) => (
                        <option key={salesperson.id} value={salesperson.id}>
                            {salesperson.last_name}, {salesperson.first_name}
                        </option>
                    ))}
                </select>
            </div>
            {selectedSalesperson && (
                <div>
                    <h3>Sales History</h3>
                    {filteredSales.length === 0 ? (
                        <p>No sales found</p>
                    ) : (
                        <table className="table-fill table table-shadow table-striped">
                            <thead>
                                <tr>
                                    <th>Salesperson</th>
                                    <th>Customer</th>
                                    <th>Automobile VIN</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredSales.map((sale) => (
                                    <tr key={sale.id}>
                                        <td>{sale.salesperson.last_name}, {sale.salesperson.first_name}</td>
                                        <td>{sale.customer.last_name}, {sale.customer.first_name}</td>
                                        <td>{sale.automobile.vin}</td>
                                        <td>${sale.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
}

export default SalespersonHistory;

// import React, {useState, useEffect} from 'react'
// import { NavLink } from 'react-router-dom'


// function SalesPeopleHistoryPage(props){
//     const [salespeople, setSalespeople] = useState([]);
//     const [ filterEmployeeId, setFilterEmployeeId] = useState('');
//     useEffect(() => {
//         async function loadSalespeople() {
//             const response = await fetch ("http://localhost:8090/api/salespeople/")
//             if (response.ok){
//                 const data = await response.json();
//                 console.log(data)
//                 setSalespeople(data.salespeople)
//             }
//         }
//         loadSalespeople()
//     }, [])
//     const handleFilterEmployeeIdChange = (event) => {
//         const value = event.target.value;
//         setFilterEmployeeId(value)
//     }

//     const filterSalespeople = async (event) => {
//         event.preventDefault();


//         const filteredData = salespeople.filter(salesperson => salespeople.vin === filterVin)
//         console.log(filteredData)

//         setSalespeople(filteredData)
//     }

//     return(

//         <div className="px-4 py-5 my-5 text-center">
//             <h1 className="display-5 fw-bold">Salesperson History</h1>
//             <form onSubmit={filterEmployeeId} className="form-inline">
//                 <input value={filterEmployeeId} onChange={handleFilterEmployeeId} placeholder="search by sales" required type="text" name="vin" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"/>
//                 <button type="submit" className="btn btn-light">search</button>
//             </form>
//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                         <th>VIN</th>
//                         <th>Is VIP?</th>
//                         <th>Customer</th>
//                         <th>Date - Time</th>
//                         <th>Technician</th>
//                         <th>Reason</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {appointments.map(appointment => {
//                         return (
//                             <tr key={appointment.id}>
//                                 <td>{appointment.vin}</td>
//                                 <td></td>
//                                 <td>{appointment.customer}</td>
//                                 <td>{appointment.date_time}</td>
//                                 <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
//                                 <td>{appointment.reason}</td>
//                                 <td>{appointment.status}</td>
//                             </tr>
//                         )
//                     })}

//                 </tbody>
//             </table>
//         </div>
//     )
// }


// export default SalesPeopleHistoryPage