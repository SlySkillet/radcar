import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturersPage from './ManufacturersPage';
import ManufacturersForm from './ManufacturersForm';
// import ModelsPage from './ModelsPage'
// import ModelsForm from './ModelsForm'
// import AutomobilesPage from './AutomobilesPage'
// import AutomobilesForm from './AutomobilesForm'

import TechniciansPage from './services/TechniciansPage';
import TechniciansForm from './services/TechnicansForm';
import AppointmentsPage from './services/AppointmentsPage';
import AppointmentsForm from './services/AppointmentsForm';
import ServiceHistory from './services/ServiceHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManufacturersPage />} />
          <Route path="/manufacturers/create" element={<ManufacturersForm />} />
          {/* <Route path="/models" element={<ModelsPage />} /> */}
          {/* <Route path="/models/create" element={<ModelsForm />} /> */}
          {/* <Route path="/automobiles" element={<AutomobilesPage />} /> */}
          {/* <Route path="/automobiles/create" element={<AutomobilesForm />} /> */}
          <Route path="/technicians" element={<TechniciansPage />} />
          <Route path="/technicians/create" element={<TechniciansForm />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/appointments/create" element={<AppointmentsForm />} />
          <Route path="/appointments/history" element={<ServiceHistory/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
