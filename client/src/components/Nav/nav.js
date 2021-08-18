import React from 'react';
import { NavLink as Link  } from "react-router-dom";
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import { IoCreateOutline } from 'react-icons/io5';
import { GiEarthAmerica } from 'react-icons/gi';
import { MdLocalActivity } from 'react-icons/md';

function Nav() {
  
  return (
    <>
      <nav className="topnav">
        <Link to='/'>
          Initial
        </Link>
        <Link to='/home'>
          Home <AiOutlineHome/>
        </Link>
        <Link to='/activities'>
          Activities <MdLocalActivity/>
        </Link>
        <Link to='/activity'>
          Activity Create <IoCreateOutline/>
        </Link>
        <Link to='/earth'>
          Earth <GiEarthAmerica/>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
