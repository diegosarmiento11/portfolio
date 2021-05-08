import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as IoI5cons from "react-icons/io5"


export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav__text'
    },

    {
        title: 'Projects',
        path: '/',
        icon: <IoI5cons.IoBagSharp/>,
        cName: 'nav__text'
    },

    {
        title: 'About me',
        path: '/',
        icon: <FaIcons.FaSignature/>,
        cName: 'nav__text'
    },
    
    {
        title: 'Skills',
        path: '/',
        icon: <IoIcons.IoIosHammer/>,
        cName: 'nav__text'
    },

    {
        title: 'Contact',
        path: '/',
        icon: <AiIcons.AiFillPhone/>,
        cName: 'nav__text'
    },
]