import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="manufacturers/">Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="manufacturers/create">Add Manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="models/">Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="models/create">Add Model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="automobiles/">Automobiles</NavLink>
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" to="automobiles/create">Add Automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="sales/">Sales</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link" to="sales/create">Add Sale</NavLink>
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" to="salespeople">Salespeople</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link" to="salespeople/create">Add Salesperson</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="customers/">Customers</NavLink>
            </li>   
            <li className="nav-item">
              <NavLink className="nav-link" to="customers/create">Add Customer</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link" to="salespeople/history">Sales History</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="technicians/">Technicians</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link" to="technicians/create">Add Technician</NavLink>
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" to="appointments">Appointments</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link" to="appointments/create">Add Appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="appointments/history">Appointment History</NavLink>
            </li>  
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
