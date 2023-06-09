import React, {useState, useEffect} from 'react'


function ManufacturersPage(props){
    const [manufacturers, setManufacturers] = useState([]);
    useEffect(() => {
        async function loadManufacturers() {
            const response = await fetch('http://localhost:8100/api/manufacturers/');
            if (response.ok){
                const data = await response.json();
                setManufacturers(data.manufacturers);
            }
        }
        loadManufacturers()
    }, [])
    return (
        <div className="table responsive px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Manufacturers</h1>
            <table className="table-fill table table-shadow table-striped">
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
