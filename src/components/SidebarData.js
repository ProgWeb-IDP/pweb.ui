import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
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
    // { Aici voiam sa pun sa vezi locatiile si rolurile
    //     title: 'Logistic management',
    //     path: '/logistic_management',
    //     icon: <IoIcons.IoMdPeople />,
    //     cName: 'nav-text'
    // },
    {
        title: 'Analytics',
        path: '/analytics',
        icon: <FaIcons.FaChartBar />,
        cName: 'nav-text'
    },
    {
        title: 'Locations',
        path: '/locations',
        icon: <FaIcons.FaSearchLocation />,
        cName: 'nav-text'
    },
    {
        title: 'Volunteer roles',
        path: '/volunteer_roles',
        icon: <FaIcons.FaIdBadge />,
        cName: 'nav-text'
    },
    {
        title: 'Test',
        path: '/test',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'SIGN OUT',
        path: '/sign_out',
        cName: 'nav-text'
    },

]