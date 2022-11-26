import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

import './Main.css'
// import Context from '../Context/Context';
import MainTabItem from './MainTabItem';
import Collections from '../components/Collections/Collections';
import GetTheApp from './GetTheApp';

import LoginPopUp from '../components/Login/Login';
// import { Avatar } from '@material-ui/core';

const tabItems = [
    {
        id: 0,
        name: 'Delivery',
        imgUrl: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;",
        title: 'Order Online',
        description: 'Stay home and order to your doorstep'

    },
    {
        id: 1,
        name: 'Dining Out',
        imgUrl: "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;",
        title: 'Dining',
        description: 'View the city\'s favourite dining venues'

    },
    {
        id: 0,
        name: 'Nightlife',
        imgUrl: "https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;",
        title: 'Nightlife and Clubs',
        description: 'Explore the city\'s top nightlife outlets'

    },



]

const collectionsList = [
    {
        id: 1,
        title: "Live Sports Screenings",
        cover:
            "https://b.zmtcdn.com/data/collections/7e296d5b75ca7b0f88e451b49e41ba99_1618208591.jpg",
        places: "12 Places",
    },
    {
        id: 2,
        title: "Newly Opened",
        cover:
            "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015789.jpg",
        places: "12 Places",
    },
    {
        id: 3,
        title: "Veggie Friendly",
        cover:
            "https://b.zmtcdn.com/data/collections/5d13e5bef6e5a44cfb7ea19fb915a9ba_1616407816.jpg",
        places: "23 Places",
    },
    {
        id: 4,
        title: "Trending This Week",
        cover:
            "https://b.zmtcdn.com/data/collections/83fed288b6d32c932b7d3a0034c4f947_1625650348.png",
        places: "30 Places",
    },
]

function Main() {

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

    // const userName = localStorage.getItem('full_name').split(' ')[0]

    return (
        <div className='main'>
            <div className="main__banner">
                <header>
                    <nav className='main__banner_nav'>
                        <Link to="/mobile">
                            <div className="navLeft">
                                <PhoneIphoneIcon className='navLeft_icon' />
                                <p>Get the App</p>
                            </div>
                        </Link>
                        <ul className="navRight">
                            <li>Investor Relations</li>
                            <li>Add restaurant</li>
                            <li onClick={openLoginPopup}>Login</li>
                            <li onClick={openSignInPopup}>Sign up</li>
                        </ul>
                    </nav>
                </header>
                <div className="banner__content">
                    <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt='banner logo' />
                    <h1>Discover the best food & drinks in <span>Hyderabad</span></h1>
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
                </div>
            </div>
            <div className="main__bottom">
                <div className="main__bottom_tabItems">
                    <ul className='tabItems'>
                        {tabItems.map(item => (
                            <MainTabItem key={item.id} item={item} />
                        ))}
                    </ul>
                </div>
                <Collections list={collectionsList} />
                <GetTheApp hideHeader/>
            </div>
            <LoginPopUp handlePopup={closeLoginPopup} showPopUp={showLoginPopup} />
            <LoginPopUp handlePopup={closeSignInPopup} showPopUp={showSignInPopup}  signup/>
        </div>
    )
}

export default Main