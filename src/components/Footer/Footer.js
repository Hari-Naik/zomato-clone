import React from 'react'
import { Link } from 'react-router-dom';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

import './Footer.css'

const data = {
    about: ["Who We Are", "Blog", "Work With Us", "Investor Relations", "Report Fraud", "Contact Us"],
    zomaverse: ['Zomato', 'Feeding India', 'Hyperpure', 'Zomaland'],
    restaurants: ['Partner With Us', 'Apps For You'],
    more: ['Privacy', 'Security', 'Terms', 'Sitemap'],
    socialLinks: [
        {
            id: 10,
            icon: <LinkedInIcon />,
            url: "https://www.linkedin.com/company/zomato/?originalSubdomain=in"
        },
        {
            id: 11,
            icon: <InstagramIcon />,
            url: "https://www.instagram.com/zomato/"
        },
        {
            id: 12,
            icon: <TwitterIcon />,
            url: "https://twitter.com/zomato"
        },
        {
            id: 13,
            icon: <YouTubeIcon />,
            url: "https://www.youtube.com/zomato"
        },
        {
            id: 14,
            icon: <FacebookIcon />,
            url: "https://www.facebook.com/zomato"
        },
    ]
}

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__container">
                <div className="footer__container__header">
                    <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='mobile logo' />
                    <div>
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png' alt='India' className='flag__img' />
                            <h2>India</h2>
                            <ExpandMoreIcon className="expandMore__icon" />
                        </div>
                        <div>
                            <LanguageIcon className='language__icon' />
                            <h2>English</h2>
                            <ExpandMoreIcon className="expandMore__icon" />
                        </div>
                    </div>
                </div>
                <div className="footer__container__info">
                    <div className="about__zomato">
                        <h6>ABOUT ZOMATO</h6>
                        <ul>
                            {data.about.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="about__zomato">
                        <h6>ZOMAVERSE</h6>
                        <ul>
                            {data.zomaverse.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="about__zomato">
                            <h6>FOR RESTAURNATS</h6>
                            <ul>
                                {data.restaurants.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="about__zomato enterprizes">
                            <h6>FOR ENTERPRISES</h6>
                            <ul><li key='1245'>Zomato For Work</li></ul>
                        </div>
                    </div>
                    <div className="about__zomato">
                        <h6>LEARN MORE</h6>
                        <ul>
                            {data.more.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="about__zomato social__links">
                        <h6>SOCIAL LINKS</h6>
                        <ul>
                            {data.socialLinks.map(item => (
                                <a key={item.id} href={item.url}><li>{item.icon}</li></a>
                            ))}
                        </ul>
                        <div>
                            <Link to='/'>
                                <img src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png' alt='google play' />
                            </Link>
                            <Link to='/'>
                                <img src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png' alt='app store' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyRight">
                <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer