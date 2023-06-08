import React, { useEffect, useState } from 'react';

function ModelsPage() {
    const [models, setModels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost:8100/api/models/';
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setModels(data.models);
            }

        };

        fetchData();
    }, []);

    return (
        <div className="table responsive px-4 py-5 my-5 text-center">
            <h2 className="display-5 fw-bold text-center">Vehicle Models</h2>
                <table className="table-fill table table-shadow table-striped">
                    <thead>
                        <tr>
                            <th className="text-left">Model</th>
                            <th className="text-left">Manufacturer</th>
                            <th className="text-left">Picture</th>
                        </tr>
                    </thead>
                    <tbody className="table-hover">
                        {models.map(model => {
                            return (
                                <tr key={model.id}>
                                    <td className="text-left w-25">{model.name}</td>
                                    <td className="text-left w-25">{model.manufacturer.name}</td>
                                    <td className="text-center"><img className="img-fluid w-75" src={model.picture_url} alt="preview" /></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
        </div>        
    )
}

export default ModelsPage
