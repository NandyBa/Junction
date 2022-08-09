import React from 'react'
import Login from './homepage/Login'
import MandaLogoWhite from '../images/white_logo.png'

const FullscreenLogin = () => {
    return (
        <div id='fullscreen-login-container'>  
            <img id='logo-img-fullscreen-login' src={ MandaLogoWhite } alt='Manda logo'></img>
            <Login />
        </div>
    )
}

export default FullscreenLogin