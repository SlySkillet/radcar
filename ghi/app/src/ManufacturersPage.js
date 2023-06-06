import React, {useState, useEffect} from 'react'
// import { NavLink } from 'react-router-dom'

function ManufacturersPage(props){
    const [manufacturers, setManufacturers] = useState([]);
    useEffect(() => {
        async function loadManufacturers() {
            const response = await fetch('http://localhost:8100/api/manufacturers/');
            if (response.ok){
                const data = await response.json();
                // console.log("data ==>", data)
                // console.log("data.manufacturers ==>", data.manufacturers)
                setManufacturers(data.manufacturers);
                console.log("manufacturers ==>", manufacturers)
            }
        }
        loadManufacturers()
        console.log(manufacturers)
    }, [])
    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Manufacturers</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturers.map(manufacturer => {
                        return(
                            <tr key={manufacturer.id}>
                                <td>{manufacturer.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ManufacturersPage
