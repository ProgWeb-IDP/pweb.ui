import React, { useEffect } from "react";
import "../App.css";
import Navbar from '../components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Administrators from '../pages/Administrators'
import Users from '../pages/Users'
import Volunteers from '../pages/Volunteers'
import VolunteerApplications from '../pages/VolunteerApplications'
import DonationRequests from '../pages/DonationRequests'
import LogisticManagement from '../pages/LogisticManagement'
import Analytics from '../pages/Analytics'
import { useAuth0 } from "@auth0/auth0-react";

const Router = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  return (
    isAuthenticated && ( 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/administrators' element={<Administrators />} />
          <Route path='/users' element={<Users />} />
          <Route path='/volunteers' element={<Volunteers />} />
          <Route path='/volunteer_applications' element={<VolunteerApplications />} />
          <Route path='/donation_requests' element={<DonationRequests />} />
          <Route path='/logistic_management' element={<LogisticManagement />} />
          <Route path='/analytics' element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    )
    
  );
    }
export default Router;