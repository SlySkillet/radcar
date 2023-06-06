import React, {useState, useEffect} from 'react'
// import { NavLink } from 'react-router-dom'


function AutomobilesPage(props){
    return(
        <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Automobiles</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Picture</th>
                    <th>Manufacturer</th>
                </tr>
            </thead>
            <tbody>
                {/* {manufacturers.map(manufacturer => {
                    return(
                        <tr key={manufacturer.id}>
                            <td>{manufacturer.name}</td>
                        </tr>
                    )
                })} */}
            </tbody>
        </table>
    </div>
    )
}

export default AutomobilesPage
