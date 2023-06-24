import React, {useState, useEffect} from 'react'


function ServiceHistory(props){
    const [appointments, setAppointments] = useState([]);
    const [filterVin, setFilterVin] = useState('');

    useEffect(() => {
        async function loadAppointments() {
            const response = await fetch ("http://localhost:8080/api/appointments/")
            if (response.ok){
                const data = await response.json();
                setAppointments(data.appointments)
            }
        }
        loadAppointments()
    }, [])

    const handleFilterVinChange = (event) => {
        const value = event.target.value;
        setFilterVin(value)
    }

    function vipYesNo(bool){
        if (bool === true){
            return 'Yes'
        } else { return 'No'}
    }

    const submitBtn = document.getElementById("submit-btn")
    const refreshBtn = document.getElementById("refresh-btn")

    const filterAppointments = async (event) => {
        if (filterVin.length === 17) {
            event.preventDefault();

            const filteredData = appointments.filter(appointment => appointment.vin === filterVin)

            setAppointments(filteredData)
            submitBtn.classList.add("d-none")
            refreshBtn.classList.remove("d-none")
        }
    }

    const refreshForm = async (event) => {
        window.location.reload()
    }

    return(

        <div className="px-4 py-5 my-5 text-center">
            <h2 className="display-5 fw-bold">Service History</h2>
            <form onSubmit={filterAppointments} className="form-inline">
                <input value={filterVin} onChange={handleFilterVinChange} placeholder="search by automobile vin" required type="text" name="vin" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"/>
                <button type="submit" className="btn btn-light" id="submit-btn">search</button>
            </form>
            <button onClick={refreshForm} className="btn btn-light d-none" id="refresh-btn">refresh search</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Is VIP?</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
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
                                <td>{vipYesNo(appointment.vip)}</td>
                                <td>{appointment.customer}</td>
                                <td>{appointment.date_time.slice(0,10)}</td>
                                <td>{appointment.date_time.slice(11,16)}</td>
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
