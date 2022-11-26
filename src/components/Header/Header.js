import React, { useState } from 'react'

import { Link } from 'react-router-dom';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';


import './Header.css'
import LoginPopUp from '../Login/Login';
// import { Avatar } from '@material-ui/core';


function Header() {
    const [showLoginPopup, setLoginPopup] = useState(false)
    const [showSignInPopup, setSignInPopup] = useState(false)
    // const [showProfile, setProfile] = useState(false)

    const openLoginPopup = () => {
        setLoginPopup(true)
    }

    const closeLoginPopup = () => {
        setLoginPopup(false)
    }

    const openSignInPopup = () => {
        setSignInPopup(true)
    }

    const closeSignInPopup = () => {
        setSignInPopup(false)
    }

    // const handleProfile = () => {
    //     setProfile(true)
    // }


    return (
        <div className='header'>
            <nav className='nav_screen'>
                <Link to='/'>
                    <img
                        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                        alt="Zomato-logo"
                        className="header-logo"
                    />
                </Link>
                <div className='nav_middle'>
                    <div className="location_container">
                        <LocationOnIcon className="location_icon" />
                        <p>Charminar</p>
                        <ArrowDropDownIcon className="dropDown_icon" />
                    </div>
                    <div className="location_search_separator"></div>
                    <div className="searchInput_container">
                        <SearchIcon className="search_icon" />
                        <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
                    </div>
                </div>

                <div className="nav_right">
                    <h1 onClick={openLoginPopup}>Login</h1>
                    <h1 onClick={openSignInPopup}>Sign up</h1>
                </div>

            </nav>
            <nav className='nav_mobile'>
                <MenuIcon className="menuIcon" />
                <Link to='/'>
                    <img
                        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                        alt="Zomato-logo"
                        className="header-logo"
                    />
                </Link>
            </nav>
            <LoginPopUp handlePopup={closeLoginPopup} showPopUp={showLoginPopup}  />
            <LoginPopUp handlePopup={closeSignInPopup} showPopUp={showSignInPopup} signup />
        </div>
    )
}

export default Header