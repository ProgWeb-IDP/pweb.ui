import React, { useEffect } from "react";
import "../App.css";
import Navbar from '../components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Administrators from '../pages/Administrators'
import Users from '../pages/Users'
import Volunteers from '../pages/Volunteers'
import VolunteerApplications from '../pages/VolunteerApplications'
import ViewVolunteerApp from '../pages/ViewVolunteerApp'
import DonationRequests from '../pages/DonationRequests'
import LogisticManagement from '../pages/LogisticManagement'
import Analytics from '../pages/Analytics'
import { useAuth0 } from "@auth0/auth0-react";
import TEST from '../pages/test';
import VolunteerRoles from '../pages/VolunteerRoles';
import Locations from '../pages/Locations';
import LEAVE from '../pages/SignOut';
import Profile from '../pages/Profile';

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
        <Navbar/>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/administrators' element={<Administrators />} />
          <Route path='/users' element={<Users />} />
          <Route path='/volunteers' element={<Volunteers />} />
          <Route path='/volunteer_applications' element={<VolunteerApplications />} />
          <Route path='/view_volunteer_app/:app_id' element={<ViewVolunteerApp />} />
          <Route path='/donation_requests' element={<DonationRequests />} />
          <Route path='/logistic_management' element={<LogisticManagement />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/volunteer_roles' element={<VolunteerRoles />} />
          <Route path='/test' element={<TEST />} />
          <Route path='/sign_out' element={<LEAVE />} />
        </Routes>
      </BrowserRouter>
    )
    
  );
    }
export default Router;