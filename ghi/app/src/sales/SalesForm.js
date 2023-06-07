import React, { useState, useEffect } from "react"

function SalesForm() {
    const [automobile, setAutomobile] = useState('')
    const [sales, setSales] = useState([])
    // const [salesperson, setSalesperson] = useState('')
    // // const [salespeople, setSalespeople] = useState([])
    // const [customer, setCustomer] = useState('')
    // const [customers, setCustomers] = useState([])
    const [price, setPrice] = useState('')


    const handleAutomobileChange = (event) => {
        const value = event.target.value
        setAutomobile(value)
    }

    // const handleSalespersonChange = (event) => {
    //     const value = event.target.value
    //     setSalesperson(value)
    // }

    // const handleCustomerChange = (event) => {
    //     const value = event.target.value
    //     setCustomer(value)
    // }

    const handlePriceChange = (event) => {
        const value = event.target.value
        setPrice(value)
    }

    const fetchData = async () => {
        const urls = "http://localhost:8090/api/sales"
        
        const response = await fetch(urls)
        if (response.ok) {
            const data = await response.json()
            setSales(data.sales)
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}

        data.automobile = automobile
        // data.salesperson = salesperson
        // data.customer = customer
        data.price = price

        const url = "http://localhost:8090/api/sales/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            const newSale = await response.json()
            console.log(newSale)

            setAutomobile('')
            // setSalesperson('')
            // setCustomer('')
            setPrice('')

        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Record a new sale</h1>
                    <form onSubmit={handleSubmit} id="create-sale-form">
                        <div className="mb-3">
                            <select onChange={handleAutomobileChange} value={automobile} required id="automobile" name="automobile" className="form-select">
                                <option value="">Choose an automobile VIN.</option>
                                {sales.map(sale => {
                                    // if (automobile.sold===false)
                                    return (
                                        <option key={sale.automobile} value={sale.automobile}>
                                            {sale.automobile}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        {/* <div className="mb-3">
                            <select onChange={handleSalespersonChange} value={salesperson} required id="salesperson" name="salesperson" className="form-select">
                                <option value="">Choose a salesperson.</option>
                                {salespeople.map(salesperson => {
                                    return (
                                        <option key={salesperson.id} value={salesperson.id}>
                                            {salesperson.last_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleCustomerChange} value={customer} required id="customer" name="customer" className="form-select">
                                <option value="">Choose a customer.</option>
                                {customers.map(customer => {
                                    return (
                                        <option key={customer.id} value={customer.id}>
                                            {customer.last_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div> */}
                        <div className="form-floating mb-3">
                            <input onChange={handlePriceChange} value={price} placeholder="price" required type="number" name="price" id="price" className="form-control" />
                            <label htmlFor="price">Price</label>
                        </div>
                        <button className="btn btn-primary">Add!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SalesForm