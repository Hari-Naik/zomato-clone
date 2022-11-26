import React, { useState } from 'react'
import { auth } from '../../firebase'
import ReactDom from 'react-dom'

// import { Link, useHistory } from 'react-router-dom'

// import { useNavigate } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';


import './Login.css'

function Login({handlePopup, signup}) {
  // const navigate = useNavigate()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const onLogin = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        handlePopup()
       
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        localStorage.setItem('full_name', fullName)
        handlePopup()
       
      })
      .catch(error => alert(error.message))


  }

  return (
    <div className='login'>
      <div className="login_container">
        <section>
          <h1>{signup ? 'Signup': 'Login'}</h1>
          <CloseIcon className="close__icon" onClick={() => handlePopup()} />
        </section>
        <form className='form'>
          {signup ? (<div className='input_container'>
            <label>Full Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>) : ''}
          <div className='input_container'>
            <label>Email Address</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='input_container'>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          {signup ? '' : (<div className="checkbox">
            <div>
              <input type="checkbox" name="" id="checkbox" />
              <label>Remember me</label>
            </div>
            <p >Forget Password?</p>
          </div>)}

          {signup ? '' : <button type='submit' onClick={onLogin}>Login</button>}

          <p>By {signup ? 'signing': 'logging'} in, you agree to Zomato's <span>Terms of Service</span>,
            <span> Cookie Policy</span>,<span> Privacy Policy</span> and <span>Content Policies</span>.
          </p>
          {signup ? (<button type='submit' onClick={register} className="create_account_button">
            <span>Create Account</span>
          </button>) : ''}
        </form>
      </div>
    </div>
  )
}


const LoginPopUp = ({ handlePopup,showPopUp,  signup }) => {
  if (showPopUp === false) return null

  return ReactDom.createPortal(<Login handlePopup={handlePopup} signup={signup} />, document.getElementById('portal'))
}

export default LoginPopUp