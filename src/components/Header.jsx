// Importing 3rd party software
import { Link } from 'react-router-dom';

// Importing components
import Login from './homepage/Login'

// Importing photos
import MandaLogoBlack from '../images/black_logo.png'
import MandaLogoWhite from '../images/white_logo.png'

function Header(props) {
    const fullMenu = <div id='menu-container'>
        <Link to="/" className='menu-item hover-underline-animation'>Home</Link>
        <Link to="/explore" className='menu-item hover-underline-animation'>Explore</Link>
        <Link to="/merge-room" className='menu-item hover-underline-animation'>Create merge</Link>
        <Link to="/all-proposals" className='menu-item hover-underline-animation'>Proposals</Link>
    </div>

    const emptyMenu = <div id='menu-container'></div>

    return (
        <div id='header-container'>
            <div id='logo-container'>
                <img id='logo-img-header' src={ MandaLogoWhite } alt='Manda logo'></img>
                <h1 id='logo-text-header'>Manda.</h1>
            </div>
            { props.isAuthenticated ? fullMenu : emptyMenu }
            <div id='signin-container'>
                <Login/>
            </div>
        </div>
    )
}

export default Header