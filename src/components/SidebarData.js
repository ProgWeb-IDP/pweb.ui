import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from "react-icons/fc";
import * as MdIcons from "react-icons/md";

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
        icon: <FaIcons.FaDonate />,
        cName: 'nav-text'
    },
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
    {
        title: 'My donation requests',
        path: '/my_donation_requests',
        icon: <FaIcons.FaDonate />,
        cName: 'nav-text'
    },
    {
        title: 'View donations',
        path: '/view_pending_donations',
        icon: <FaIcons.FaDonate />,
        cName: 'nav-text'
    },
    {
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
    {
        title: 'Donate',
        path: '/donate',
        icon: <FcIcons.FcDonate />,
        cName: 'nav-text'
    },
    {
        title: 'Become a volunteer',
        path: '/become_a_volunteer',
        icon: <MdIcons.MdVolunteerActivism />,
        cName: 'nav-text'
    },
    {
        title: 'SIGN OUT',
        path: '/sign_out',
        cName: 'nav-text'
    },
]

// export const SidebarData = [
//     {
//         title: 'Profile',
//         path: '/profile',
//         icon: <CgIcons.CgProfile />,
//         cName: 'nav-text'
//     },
//     {
//         title: 'Administrators',
//         path: '/administrators',
//         icon: <IoIcons.IoMdPeople />,
//         cName: 'nav-text'
//     },
//     {
//         title: 'Users',
//         path: '/users',
//         icon: <IoIcons.IoMdPeople />,
//         cName: 'nav-text'
//     },
//     {
//         title: 'Volunteers',
//         path: '/volunteers',
//         icon: <IoIcons.IoMdPeople />,
//         cName: 'nav-text'
//     },
//     {
//         title: 'Volunteer applications',
//         path: '/volunteer_applications',
//         icon: <IoIcons.IoIosPaper />,
//         cName: 'nav-text'
//     },
//     {
//         title: 'Donation requests',
//         path: '/donation_requests',
//         icon: <FaIcons.FaHandHoldingMedical />,
//         cName: 'nav-text'
//     },
//     {/*admin 6*/
//         title: 'Analytics',
//         path: '/analytics',
//         icon: <FaIcons.FaChartBar />,
//         cName: 'nav-text'
//     },
//     {/*admin 7*/
//         title: 'Locations',
//         path: '/locations',
//         icon: <FaIcons.FaSearchLocation />,
//         cName: 'nav-text'
//     },
//     {/*admin 8*/
//         title: 'Volunteer roles',
//         path: '/volunteer_roles',
//         icon: <FaIcons.FaIdBadge />,
//         cName: 'nav-text'
//     },
//     {/*admin 9*/
//         title: 'Test',
//         path: '/test',
//         icon: <IoIcons.IoMdPeople />,
//         cName: 'nav-text'
//     },
//     {/*voluntar 10*/
//         title: 'My donation requests',
//         path: '/my_donation_requests',
//         icon: <IoIcons.IoMdPeople />,
//         cName: 'nav-text'
//     },
//     {/*voluntar user 11*/
//         title: 'View pending donations',
//         path: '/view_pending_donations',
//         icon: <IoIcons.IoMdPeople />,
//         cName: 'nav-text'
//     },
//     {/*normal user 12*/
//         title: 'Become a volunteer',
//         path: '/become_a_volunteer',
//         icon: <IoIcons.IoMdPeople />,
//         cName: 'nav-text'
//     },
//     {/*normal user 13*/
//         title: 'See stats',
//         path: '/test',
//         icon: <IoIcons.IoMdPeople />,
//         cName: 'nav-text'
//     },
//     {/*comun 14*/
//         title: 'SIGN OUT',
//         path: '/sign_out',
//         cName: 'nav-text'
//     },
// ]