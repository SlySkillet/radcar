import React, {useState, useEffect} from 'react'


function TechniciansForm(props){
    const [employeeId, setEmployeeId] = useState([]);
    const[firstName, setFirstName] = useState([]);
    const[lastName, setLastName] = useState([]);

    const handleEmployeeIdChange = (event) => {
        const value = event.target.value
        setEmployeeId(value)
    }

    const handleFirstNameChange = (event) => {
        const value = event.target.value
        setFirstName(value)
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value
        setLastName(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {}

        data.employee_id = employeeId
        data.first_name = firstName
        data.last_name = lastName

        const technicianUrl = 'http://localhost:8080/api/technicians/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
            setEmployeeId('')
            setFirstName('')
            setLastName('')
        }
    }
    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a technician</h1>
                    <form onSubmit={handleSubmit} id="create-technician-form">
                        <div className="form-floating mb-3">
                            <input value={employeeId} onChange={handleEmployeeIdChange} placeholder="employee_id" required type="text" name="employee_id" id="employee_id" className="form-control"/>
                            <label htmlFor="employee_id">employee ID</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={firstName} onChange={handleFirstNameChange} placeholder="first_name" required type="text" name="first_name" id="first_name" className="form-control"/>
                            <label htmlFor="first_name">first name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={lastName} onChange={handleLastNameChange} placeholder="last_name" required type="text" name="last_name" id="last_name" className="form-control"/>
                            <label htmlFor="last_name">last name</label>
                        </div>
                        <button className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default TechniciansForm
