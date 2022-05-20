import React, { useEffect } from "react";
import "../App.css";
import Navbar from '../components/Navbar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Administrators from '../pages/Administrators'
import Users from '../pages/Users'
import Volunteers from '../pages/Volunteers'
import VolunteerApplications from '../pages/VolunteerApplications'
import ViewVolunteerApp from '../pages/ViewVolunteerApp'
import DonationRequests from '../pages/DonationRequests'
import Analytics from '../pages/Analytics'
import { useAuth0 } from "@auth0/auth0-react";
import VolunteerRoles from '../pages/VolunteerRoles';
import Locations from '../pages/Locations';
import LEAVE from '../pages/SignOut';
import Profile from '../pages/Profile';
import ViewDonationRequest from "../pages/ViewDonationRequest";
import VolunteerViewDonationRequest from "../pages/VolunteerViewDonationRequest";
import UserViewDonationRequest from "../pages/UserViewDonationRequest";
import MyDonationRequests from "../pages/MyDonationRequests";
import Donate from "../pages/Donate";
import BecomeAVolunteer from "../pages/BecomeAVolunteer";
import ViewPendingDonations from "../pages/ViewPendingDonations";
import Home from "../pages/Home";

const Router = () => {
  const { isAuthenticated, loginWithRedirect, user} = useAuth0();
  if(isAuthenticated){
  fetch(process.env.REACT_APP_API + 'users', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        authToken: user.sub,
        firstName: null,
        lastName: null,
        birthDate: null,
        gender: null,
        phoneNumber: null,
        country: null,
        city: null,
        street: null,
        address: null,
        zipCode: null
    })
  });
  }
  
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
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/administrators' element={<Administrators />} />
          <Route path='/users' element={<Users />} />
          <Route path='/volunteers' element={<Volunteers />} />
          <Route path='/volunteer_applications' element={<VolunteerApplications />} />
          <Route path='/view_volunteer_app/:app_id' element={<ViewVolunteerApp />} />
          <Route path='/view_donation_request/:request_id' element={<ViewDonationRequest />} />
          <Route path='/volunteer_view_donation_request/:request_id' element={<VolunteerViewDonationRequest />} />
          <Route path='/user_view_donation_request/:request_id' element={<UserViewDonationRequest />} />
          <Route path='/donation_requests' element={<DonationRequests />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/volunteer_roles' element={<VolunteerRoles />} />
          <Route path='/my_donation_requests' element={<MyDonationRequests />} />
          <Route path='/view_pending_donations' element={<ViewPendingDonations />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/become_a_volunteer' element={<BecomeAVolunteer />} />
          <Route path='/sign_out' element={<LEAVE />} />
        </Routes>
      </BrowserRouter>
    )
  );
}

export default Router;