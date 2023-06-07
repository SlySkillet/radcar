import React, {useState, useEffect} from 'react'
// import { NavLink } from 'react-router-dom'


function ServiceHistory(props){
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        async function loadAppointments() {
            const response = await fetch ("http://localhost:8080/api/appointments/")
            if (response.ok){
                const data = await response.json();
                console.log(data)
                setAppointments(data.appointments)
            }
        }
        loadAppointments()
    }, [])
    return(

        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Service History</h1>
            <form className="form-inline">
                <input placeholder="search by automobile vin" required type="text" name="vin" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"/>
                <button type="submit" className="btn btn-light">search</button>
            </form>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Is VIP?</th>
                        <th>Customer</th>
                        <th>Date - Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.vin}</td>
                                <td></td>
                                <td>{appointment.customer}</td>
                                <td>{appointment.date_time}</td>
                                <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                <td>{appointment.reason}</td>
                                <td>{appointment.status}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}


export default ServiceHistory