import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturersPage from './ManufacturersPage';
import ManufacturersForm from './ManufacturersForm';
import ModelsPage from './ModelsPage'
import ModelsForm from './ModelsForm'
import AutomobilesPage from './AutomobilesPage'
import AutomobilesForm from './AutomobilesForm'
import SalesPage from './sales/SalesPage'
import SalesForm from './sales/SalesForm'
import SalesPeoplePage from './sales/SalesPeoplePage'
import SalesPeopleForm from './sales/SalesPeopleForm'
import CustomersPage from './sales/CustomersPage'
import CustomersForm from './sales/CustomersForm'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManufacturersPage />} />
          <Route path="/manufacturers/create" element={<ManufacturersForm />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/models/create" element={<ModelsForm />} />
          <Route path="/automobiles" element={<AutomobilesPage />} />
          <Route path="/automobiles/create" element={<AutomobilesForm />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/sales/create" element={<SalesForm />} />
          <Route path="/salespeople" element={<SalesPeoplePage />} />
          <Route path="/salespeople/create" element={<SalesPeopleForm />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/customers/create" element={<CustomersForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
