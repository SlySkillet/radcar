import { NavLink } from 'react-router-dom';
        <div className="dropdown">
          <button>
            Sales
          </button>
        </div>

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </button>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/sales">Sales</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/sales/create">New Sale</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/salespeople">Salespeople</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/salespeople/create">New Salesperson</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/salespeople/history">Salesperson History</NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Technicians
              </button>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/technicians">Technicians</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/technicians/create">New Technician</NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Models
              </button>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/manufacturers">Manufacturers</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/manufacturers/create">New Manufacturer</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/models">Models</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/models/create">New Model</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/automobiles">Automobiles</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/automobiles/create">New Automobile</NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Service Appointments
              </button>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/appointments">Appointments</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/appointments/create">New Appointment</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/appointments/history">Service History</NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
        </div> */}
      </div>
    </nav>
  )
}

export default Nav;
