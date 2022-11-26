import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

import './GetTheApp.css'

function GetTheApp({ hideHeader }) {
    const [type, setType] = useState('email')
    const [input, setInput] = useState('')
    const [showErrorMsg, setErrorMsg] = useState(false)

    const inputRef = useRef()
    const buttonRef = useRef()

    useEffect(() => {
        if (input.endsWith('@gmail.com') || (input.length === 10)) {
            buttonRef.current.style.backgroundColor = '#ff7e8b';
            inputRef.current.style.border = '1px solid lightgray';
            setErrorMsg(false)
        }


    }, [input])

    const onSubmitForm = (e) => {
        e.preventDefault()
        if (input === '' || (input.length < 10) || (!input.endsWith('@gmail.com'))) {
            inputRef.current.style.border = '1px solid #ff7e8b';
            buttonRef.current.style.backgroundColor = 'gray';
            setErrorMsg(true)
        }
    }


    return (
        <div className={`getApp ${hideHeader && 'background'}`}>
            {!hideHeader && (
                <header className='getApp__header'>
                    <nav className='getApp__nav'>
                        <Link to='/'>
                            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='mobile logo' />
                            </Link>
                        <ul>
                                <li>Login</li>
                            
                                <li>Sign up</li>
                        </ul>
                    </nav>
                </header>
            )}
            <div className={`getApp__container ${hideHeader && 'height'}`}>

                <img src='https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png' alt='mobile' />

                <div className="getApp__container__content">
                    <h1>Get the Zomato App</h1>
                    <p>We will send you a link, open it on your phone to download the app</p>
                    <div className="radio__buttons">
                        <div onClick={(e) => setType(e.target.id)}>
                            <input type="radio" name="radio" id="email" checked={type === 'email'} value="#ff7e8b" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div onClick={(e) => setType(e.target.id)}>
                            <input type="radio" name="radio" id="phone" checked={type === 'phone'} value="#ff7e8b" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                    </div>
                    <form className="input__container">
                        <div>
                            <input ref={inputRef} type={type} value={input} onChange={(e) => setInput(e.target.value)} placeholder={type === "phone" ? 'type here' : type} />
                            {showErrorMsg && (type === 'email' ? <small className='error__msg'>Enter your email id</small> : <small className='error__msg'>Enter your phone number</small>)}
                        </div>
                        <button ref={buttonRef} type="submit" onClick={onSubmitForm}>Share App Link</button>
                    </form>
                    <div className="download__app">
                        <p>Download app from</p>
                        <div className="download__app__options">
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
            <Footer />
        </div>
    )
}

export default GetTheApp