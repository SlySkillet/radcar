import React, {useState, useEffect} from 'react'


function TechniciansPage(props){
    const [technicians, setTechnicians] = useState([])
    useEffect(() => {
        async function loadTechnicians() {
            const response = await fetch ('http://localhost:8080/api/technicians/');
            if (response.ok){
                const data = await response.json();
                setTechnicians(data.technicians)
            }
        }
        loadTechnicians();
    }, [])
    return(
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Technicians</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {technicians.map(technician => {
                        return(
                            <tr key={technician.id}>
                                <td>{technician.employee_id}</td>
                                <td>{technician.first_name}</td>
                                <td>{technician.last_name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TechniciansPage
