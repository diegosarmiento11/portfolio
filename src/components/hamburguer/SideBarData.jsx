import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as IoI5cons from "react-icons/io5";
import './_sideBarData.scss';


export const SideBarData = [
    {
        title: 'Home',
        path: '#HOMETARGET',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav__text'
    },

    {
        title: 'Projects',
        path: '#PROJECTTARGET2',
        icon: <IoI5cons.IoBagSharp/>,
        cName: 'nav__text'
    },

    {
        title: 'About me',
        path: '#WHOAMITARGET',
        icon: <FaIcons.FaSignature/>,
        cName: 'nav__text'
    },
    
    {
        title: 'Skills',
        path: '/#SKILLSTARGET',
        icon: <IoIcons.IoIosHammer/>,
        cName: 'nav__text'
    },

    {
        title: 'Contact',
        path: '#CONTACTMETARGET',
        icon: <AiIcons.AiFillPhone/>,
        cName: 'nav__text'
    },
]