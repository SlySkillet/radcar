import React, {useState, useEffect} from 'react'
// import { NavLink } from 'react-router-dom'


function AppointmentsForm(props){
    const [technicians, setTechnicians] = useState([]);
    const [vin, setVin] = useState('');
    const [customer, setCustomer] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [reason, setReason] = useState('');
    const [technician, setTechnician] = useState('');

    const fetchData = async () => {
        const techniciansUrl = "http://localhost:8080/api/technicians/";

        const response = await fetch(techniciansUrl);
        if (response.ok){
            const data = await response.json();
            setTechnicians(data.technicians)
        }
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const handleDateChange = (event) => {
        const value = event.target.value;
        setDate(value);
    }

    const handleTimeChange = (event) => {
        const value = event.target.value;
        setTime(value);
    }

    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value);
    }

    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {}

        const dateTime = new Date(date + 'T' + time + 'z')

        data.vin = vin
        data.customer = customer
        data.date_time = dateTime
        data.reason = reason
        data.technician = technician
        data.status = "scheduled"

        const appointmentUrl = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig);
            const newAppointment = await response.json();
            console.log(newAppointment);

            setVin('')
            setCustomer('')
            setDate('')
            setTime('')
            setReason('')
            setTechnician('')
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                <h1>Add an appointment</h1>
                    <form onSubmit={handleSubmit} id="create-appointment-form">
                        <div className="form-floating mb-3">
                            <input value={vin} onChange={handleVinChange} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                            <label htmlFor="vin">Automobile VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={customer} onChange={handleCustomerChange} placeholder="customer" required type="text" name="customer" id="customer" className="form-control"/>
                            <label htmlFor="customer">Customer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={date} onChange={handleDateChange} placeholder="date" required type="date" name="date" id="date" className="form-control"/>
                            <label htmlFor="date"></label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={time} onChange={handleTimeChange} placeholder="time" required type="time" name="time" id="time" className="form-control"/>
                            <label htmlFor="time"></label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={reason} onChange={handleReasonChange} placeholder="reason" required type="text" name="reason" id="reason" className="form-control"/>
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <div className="mb-3">
                            <select value={technician} onChange={handleTechnicianChange} name="location" id="location" className="form-select">
                                <option value="">Select a technician</option>
                                {technicians.map(technician => {
                                    return(
                                        <option key={technician.id} value={technician.id}>
                                            {technician.first_name} {technician.last_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AppointmentsForm
