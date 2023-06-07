import React, {useState, useEffect} from 'react'
// import { NavLink } from 'react-router-dom'


function AutomobilesPage(props){
    const [automobiles, setAutomobiles] = useState([])
    useEffect(() => {
        async function loadAutomobiles() {
            const response = await fetch('http://localhost:8100/api/automobiles/');
            if (response.ok){
                const data = await response.json();
                console.log("data ==>", data)
                setAutomobiles(data.autos)
                console.log("automobiles ==>", automobiles)
            } else {
                console.error(response)
            }
        }
        loadAutomobiles()
    }, [])

    function soldOrNot(vin) {
        for (let auto of automobiles) {
            if (vin === auto["vin"] && auto["sold"] === true) {
                return "Yes"
            }
        } return "No"
    }
    return(
        <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Automobiles</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                    <th>Sold</th>
                </tr>
            </thead>
            <tbody>
                {automobiles.map(automobile => {
                    return(
                        <tr key={automobile.id}>
                            <td>{automobile.vin}</td>
                            <td>{automobile.color}</td>
                            <td>{automobile.year}</td>
                            <td>{automobile.model.manufacturer.name}</td>
                            <td>{automobile.model.name}</td>
                            <td>{soldOrNot(automobile.vin)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}

export default AutomobilesPage
