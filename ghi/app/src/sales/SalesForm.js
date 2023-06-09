import React, { useState, useEffect } from "react"

function SalesForm() {
    const [automobiles, setAutomobiles] = useState([])
    const [automobile, setAutomobile] = useState('')
    const [salespeople, setSalespeople]= useState([])
    const [salesperson, setSalesperson]= useState('')
    const [customers, setCustomers]= useState([])
    const [customer, setCustomer]= useState('')
    const [price, setPrice]= useState('')

    

    const handleAutomobileChange = (event)=> {
        const value = event.target.value
        setAutomobile(value)
    }
    const handleSalespersonChange = (event)=> {
        const value = event.target.value
        setSalesperson(value)
    }
    const handleCustomerChange = (event)=> {
        const value = event.target.value
        setCustomer(value)
    }
    const handlePriceChange = (event)=> {
        const value = event.target.value
        setPrice(value)
    }

    const fetchData = async () =>{
        const url = "http://localhost:8100/api/automobiles/"
        const response = await fetch(url)
        if (response.ok) {
        const data = await response.json()
        setAutomobiles(data.autos)
        }
    }
    const salespeopleFetch = async () =>{
        const url = "http://localhost:8090/api/salespeople/"
        const response = await fetch(url)
        if (response.ok) {
        const data = await response.json()
        setSalespeople(data.salespeople)
        }
    }
    const customersFetch = async () =>{
        const url = "http://localhost:8090/api/customers/"
        const response = await fetch(url)
        if (response.ok) {
        const data = await response.json()
        setCustomers(data.customers)
        }
    }
    useEffect(() => {
        customersFetch()
        fetchData()
        salespeopleFetch()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data={}

        data.automobile = automobile
        data.salesperson = salesperson
        data.customer = customer
        data.price = price
        
        const salesUrl = "http://localhost:8090/api/sales/"
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(salesUrl, fetchConfig)
        if (response.ok) {

            const autoUrl = `http://localhost:8100/api/automobiles/${automobile}/`
            const autoData = {sold: true}
            const FetchOptions = {
                method: "PUT",
                body: JSON.stringify(autoData),
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const automobileResponse = await fetch(autoUrl, FetchOptions)
            if(automobileResponse.ok){

                setAutomobile('')
                setSalesperson('')
                setCustomer('')
                setPrice('')
            }
        }
    }

    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                <h1>Record A Sale</h1>
                <form onSubmit={handleSubmit} id="create-sale-form">
                    <div className="mb-3">Automobile
                    <select onChange={handleAutomobileChange} value={automobile} required name="automobile" id="automobile" className="form-select">
                        <option value="">Choose an automobile VIN</option>
                            {automobiles?.map(automobile => {
                                if(automobile.sold === false){
                                    return(
                                    <option key={automobile.id} value={automobile.vin}>
                                        {automobile.vin}
                                    </option>
                                )
                            }
                        })}
                    </select>
                </div>
                <div className="mb-3"> Salesperson
                <select value={salesperson} onChange={handleSalespersonChange} required id="salesperson" name="salesperson"  className="form-select">
                    <option value='' >Choose a Salesperson</option>
                        {salespeople.map(salesperson => {
                            return (
                                <option key={salesperson.id} value={salesperson.last_name} >
                                    {salesperson.first_name} {salesperson.last_name}
                                </option>
                            )
                        })}
                </select>
            </div>
            <div className="mb-3"> Customer
                <select value={customer} onChange={handleCustomerChange} required id="customer" name="customer"  className="form-select">
                    <option value=''>Choose a Customer</option>
                        {customers.map(customer => {
                            return (
                                <option key={customer.id} value={customer.last_name}>
                                    {customer.first_name} {customer.last_name}
                                </option>
                            )
                        })}
                </select>
            </div>
                <div className="form-floating mb-3">
                    <input value={price}onChange={handlePriceChange} placeholder="price" required type="text" id="price" name="price"  className="form-control"/>
                    <label htmlFor="Price">Price</label>
                </div>
                    <button className="btn btn-primary me-md-4">Create</button>
                </form>
                </div>
            </div>
        </div>
        
)
                
}

export default SalesForm
