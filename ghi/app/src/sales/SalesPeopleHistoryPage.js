import React, { useState, useEffect } from 'react'

function SalespersonHistory() {
    const [salespeople, setSalespeople] = useState([])
    const [selectedSalesperson, setSalespersonId] = useState('')
    const [sales, setSales] = useState([])

    useEffect(() => {
        const fetchSalespeople = async () => {
            try {
                const response = await fetch('http://localhost:8090/api/salespeople/')
                if (response.ok) {
                    const data = await response.json()
                    setSalespeople(data.salespeople)
                }
            } catch (error) {
                console.error("Cannot get the salespeople:", error)
            }
        }

        fetchSalespeople()
    }, [])

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await fetch('http://localhost:8090/api/sales/')
                if (response.ok) {
                    const data = await response.json()
                    setSales(data.sales)
                }
            } catch (error) {
                console.error("Cannot find the sales:", error)
            }
        }

        fetchSales()
    }, [])

    const handleSalespersonChange = (event) => {
        const salespersonId = event.target.value
        setSalespersonId(salespersonId)
    }

    const filteredSales = sales.filter((sale) => sale.salesperson.id === parseInt(selectedSalesperson))

    

    return (
        <div className="px-4 py-5 my-5 text-center">
            <h2 className="display-5 fw-bold text-center">Salesperson History</h2>
            <div className="dropdown" align="center">
                <select className="btn btn-success dropdown-toggle px-1 py-2 my-5" id="salesperson" value={selectedSalesperson} onChange={handleSalespersonChange}>
                    <option value="">Choose a salesperson</option>
                    {salespeople.map((salesperson) => (
                        <option key={salesperson.id} value={salesperson.id}>
                            {salesperson.first_name} {salesperson.last_name} 
                        </option>
                    ))}
                </select>
            </div>
            {selectedSalesperson && (
                <div>
                    <h3>Sales History</h3>
                    {filteredSales.length === 0 ? (
                        <p className="px-4 py-5 my-5 text-center">No sales found</p>
                    ) : (
                        <table className="table responsive px-4 py-5 my-5 text-center">
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
                                        <td>{sale.salesperson.first_name} {sale.salesperson.last_name} </td>
                                        <td>{sale.customer.first_name} {sale.customer.last_name}</td>
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
    )
}

export default SalespersonHistory

