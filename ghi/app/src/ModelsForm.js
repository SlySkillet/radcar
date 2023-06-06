import React, { useState, useEffect } from "react"

function ModelsForm() {
    const [name, setName] = useState('')
    const [pictureUrl, setPictureUrl] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const [manufacturers, setManufacturers] = useState([])

    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    const handlePictureUrlChange = (event) => {
        const value = event.target.value
        setPictureUrl(value)
    }

    const handleManufacturerChange = (event) => {
        const value = event.target.value
        setManufacturer(value)
    }




    const fetchData = async () => {
        const Url = "http://localhost:8100/api/manufacturers/"

        const response = await fetch(Url)
        if (response.ok) {
            const data = await response.json()
            setManufacturers(data.manufacturers)
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}

        data.picture_url = pictureUrl
        data.name = name
        data.manufacturer_id = manufacturer

        const modelsUrl = "http://localhost:8100/api/models/"

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(modelsUrl, fetchConfig)
        if (response.ok) {
            const newModel = await response.json()
            console.log(newModel)

            setManufacturer('')
            setName('')
            setPictureUrl('')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a vehicle model</h1>
                    <form onSubmit={handleSubmit} id="create-model-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePictureUrlChange} value={pictureUrl} placeholder="Picture Url" required type="text" name="picture_url" id="picture_url" className="form-control" />
                            <label htmlFor="picture_url">Picture Url</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleManufacturerChange} value={manufacturer} required id="manufacturer" name="manufacturer" className="form-select">
                                <option value="">Choose a Manufacturer</option>
                                {manufacturers.map(manufacturer => {
                                    return (
                                        <option key={manufacturer.id} value={manufacturer.id}>
                                            {manufacturer.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Add!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModelsForm

