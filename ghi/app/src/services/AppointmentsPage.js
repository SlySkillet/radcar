import React, {useState, useEffect} from 'react'
// import { NavLink } from 'react-router-dom'

function AppointmentsPage(props){
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        async function loadAppointments() {
            const response = await fetch ('http://localhost:8080/api/appointments/');
            if (response.ok){
                const data = await response.json();
                console.log(data)
                setAppointments(data.appointments)
            }
        }
        loadAppointments();
        console.log(appointments)
    }, [])
    return(
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Appointments</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Automobile VIN</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Technician</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        return(
                            <tr key={appointment.id}>
                                <td>{appointment.vin}</td>
                                <td>{appointment.customer}</td>
                                <td>{new Date(appointment.date_time).toLocaleString()}</td>
                                <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                <td>{appointment.reason}</td>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>
        </div>
    )
}

export default AppointmentsPage
