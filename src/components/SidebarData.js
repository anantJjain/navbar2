import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GoIcons from 'react-icons/go';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Our Team",
    path: "/ourteam",
    icon: <AiIcons.AiOutlineTeam />,
    cName: "nav-text",
  },
  {
    title: "Alumini",
    path: "/alumini",
     icon: <FaIcons.FaGraduationCap />,
    cName: "nav-text",
  },
  {
    title: "Departments",
    path: "/departments",
     icon: <FaIcons.FaLayerGroup />,
    cName: "nav-text",
  },
  {
    title: "Contact us",
    path: "/contact",
     icon: <AiIcons.AiFillMail />,
    cName: "nav-text",
  },
  {
    title: "Blog",
    path: "/blog",
     icon: <FaIcons.FaBlogger />,
    cName: "nav-text",
  },
  {
    title: "Recruitments",
    path: "/profile",
     icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Our Projects",
    path: "/ourProjects",
     icon: <GoIcons.GoProject />,
    cName: "nav-text",
  },
  {
    title: "Sign up",
    path: "#",
     icon: <AiIcons.AiFillLock />,
    cName: "nav-text",
  },

]

export const SocialData = [

    {
        title:"Twitter", 
        path: '/',
        icon: <AiIcons.AiFillTwitterSquare />,
        cName: 'nav-text'
    },
    {
        title:"FaceBook " , 
        path: '/',
        icon: <AiIcons.AiFillFacebook />,
        cName: 'nav-text'
    },
    {
        title:"Instagram", 
        path: '/',
        icon: <AiIcons.AiFillInstagram />,
        cName: 'nav-text'
    },
    {
        title:"LinkedIn", 
        path: '/',
        icon: <AiIcons.AiFillLinkedin />,
        cName: 'nav-text'
    }
    ];
    
