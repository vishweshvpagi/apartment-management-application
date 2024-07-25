import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Home from './home';
import Forgotpassword from './forgot';
import Register from './register';
import RentRemaining from './RentRemaining';
import TenantsDetails from './TenantsDetails';
import SanitaryRequests from './SanitaryRequests';
import PriceChange from './PriceChange';
import Logout from './Logout';
import Reports from './Reports';
import Maintainance from './maintenance';
function Rotes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/forgot" element={<Forgotpassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/rent-remaining" element={<RentRemaining />} />
      <Route path="/tenants-details" element={<TenantsDetails />} />
      <Route path="/sanitary-requests" element={<SanitaryRequests />} />
      <Route path="/price-change" element={<PriceChange />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/maintenance-requests" element={<Maintainance />} />
    </Routes>
  );
}

export default Rotes;
