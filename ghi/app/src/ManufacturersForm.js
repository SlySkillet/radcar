import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';



function ManufacturersForm(props){
    const [manufacturer, setManufacturer] = useState('');
    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.name = manufacturer;

        console.log(data);

        const manufacturerUrl = "http://localhost:8100/api/manufacturers/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application.json'
            },
        };
        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok){
            const newManufacturer = await response.json();
            console.log(newManufacturer);

            setManufacturer('');
        }
    }
    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a manufacturer</h1>
                    <form onSubmit={handleSubmit} id="create-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input value={manufacturer} onChange={handleManufacturerChange} placeholder="manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-control"/>
                            <label htmlFor="manufacturer">Manufacturer</label>
                        </div>
                        <button className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ManufacturersForm
