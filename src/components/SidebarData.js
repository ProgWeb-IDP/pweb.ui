import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    { /*comun  0*/
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    { /*admin   1*/
        title: 'Administrators',
        path: '/administrators',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {/*admin  2*/
        title: 'Users',
        path: '/users',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {/*admin 3*/
        title: 'Volunteers',
        path: '/volunteers',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {/*admin 4*/
        title: 'Volunteer applications',
        path: '/volunteer_applications',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    { /*comun 5*/
        title: 'Donation requests',
        path: '/donation_requests',
        icon: <FaIcons.FaHandHoldingMedical />,
        cName: 'nav-text'
    },
    // { Aici voiam sa pun sa vezi locatiile si rolurile
    //     title: 'Logistic management',
    //     path: '/logistic_management',
    //     icon: <IoIcons.IoMdPeople />,
    //     cName: 'nav-text'
    // },
    {/*admin 6*/
        title: 'Analytics',
        path: '/analytics',
        icon: <FaIcons.FaChartBar />,
        cName: 'nav-text'
    },
    {/*admin 7*/
        title: 'Locations',
        path: '/locations',
        icon: <FaIcons.FaSearchLocation />,
        cName: 'nav-text'
    },
    {/*admin 8*/
        title: 'Volunteer roles',
        path: '/volunteer_roles',
        icon: <FaIcons.FaIdBadge />,
        cName: 'nav-text'
    },
    {/*admin 9*/
        title: 'Test',
        path: '/test',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {/*voluntar 10*/
        title: 'Create a donation request',
        path: '/create_donation_request',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {/*voluntar user 11*/
        title: 'view pending donations',
        path: '/test',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {/*normal user 12*/
        title: 'Become a volunteer',
        path: '/test',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {/*normal user 13*/
        title: 'See stats',
        path: '/test',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {/*comun 14*/
        title: 'SIGN OUT',
        path: '/sign_out',
        cName: 'nav-text'
    },
]

export const AdminSideBarData = [
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    { 
        title: 'Administrators',
        path: '/administrators',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path: '/users',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Volunteers',
        path: '/volunteers',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Volunteer applications',
        path: '/volunteer_applications',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Donation requests',
        path: '/donation_requests',
        icon: <FaIcons.FaHandHoldingMedical />,
        cName: 'nav-text'
    },
    {/*admin 6*/
        title: 'Analytics',
        path: '/analytics',
        icon: <FaIcons.FaChartBar />,
        cName: 'nav-text'
    },
    {/*admin 7*/
        title: 'Locations',
        path: '/locations',
        icon: <FaIcons.FaSearchLocation />,
        cName: 'nav-text'
    },
    {/*admin 8*/
        title: 'Volunteer roles',
        path: '/volunteer_roles',
        icon: <FaIcons.FaIdBadge />,
        cName: 'nav-text'
    },
    {/*admin 9*/
        title: 'Test',
        path: '/test',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {/*comun 14*/
    title: 'SIGN OUT',
    path: '/sign_out',
    cName: 'nav-text'
    },
]
export const VolunteerSideBarData = [
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    {/*voluntar 10*/
        title: 'Create a donation request',
        path: '/create_donation_request',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {/*voluntar user 11*/
        title: 'view pending donations',
        path: '/test',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {/*comun 14*/
    title: 'SIGN OUT',
    path: '/sign_out',
    cName: 'nav-text'
    },
]

export const NormalUserSideBarData = [
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    {/*normal user 12*/
        title: 'Become a volunteer',
        path: '/test',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {/*normal user 13*/
        title: 'See stats',
        path: '/test',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {/*comun 14*/
        title: 'SIGN OUT',
        path: '/sign_out',
        cName: 'nav-text'
    },
]