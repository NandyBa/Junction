// Importing components
import Login from './Login'

// Importing photos
import MandaLogo from '../../images/black_logo.png'

function Header() {
    return (
        <div id='header-container'>
            <div id='logo-container'>
                <img id='logo-img' src={ MandaLogo } alt='Manda logo'></img>
                <h1 id='logo-text'>Manda.</h1>
            </div>
            <div id='menu-container'>
                <h1 class='menu-item hover-underline-animation'>The concept</h1>
                <h1 class='menu-item hover-underline-animation'>About us</h1>
                <h1 class='menu-item hover-underline-animation'>Contact</h1>
            </div>
            <div id='signin-container'>
                <Login/>
            </div>
        </div>
    )
}

export default Header