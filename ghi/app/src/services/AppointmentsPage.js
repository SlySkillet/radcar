import React, {useState, useEffect} from 'react'


function AppointmentsPage(props){
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        async function loadAppointments() {
            const response = await fetch ('http://localhost:8080/api/appointments/');
            if (response.ok){
                const data = await response.json();
                const displayData = data.appointments.filter((appointment) => appointment.status === "scheduled")
                setAppointments(displayData)
            }
        }
        loadAppointments();
    }, [])

    function vipYesNo(bool){
        if (bool === true){
            return 'Yes'
        } else { return 'No'}
    }

    const handleCancel = async (id, event) => {
        const cancelUrl = `http://localhost:8080/api/appointments/${id}/cancel`
        const fetchConfig = {
            method: "put",
        };
        const response = await fetch(cancelUrl, fetchConfig);
        if (response.ok) {
            const updateStatus = await response.json();
            window.location.reload()
        }
    }

    const handleFinish = async (id, event) => {
        const finishUrl = `http://localhost:8080/api/appointments/${id}/finish`
        const fetchConfig = {
            method: "put",
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(finishUrl, fetchConfig);
        const updateStatus = await response.json();

        window.location.reload();
    }

    return(
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Appointments</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Automobile VIN</th>
                        <th>Customer</th>
                        <th>is VIP?</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {

                        return(
                            <tr key={appointment.id}>
                                <td>{appointment.vin}</td>
                                <td>{appointment.customer}</td>
                                <td>{vipYesNo(appointment.vip)}</td>
                                <td>{appointment.date_time.slice(0,10)}</td>
                                <td>{appointment.date_time.slice(11,16)}</td>
                                <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                <td>{appointment.reason}</td>
                                <td>
                                    <button onClick={(event) => handleCancel(appointment.id, event)} className="btn btn-warning mx-3" >Cancel</button>
                                    <button onClick={(event) => handleFinish(appointment.id, event)} className="btn btn-primary">Finish</button>
                                </td>
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
