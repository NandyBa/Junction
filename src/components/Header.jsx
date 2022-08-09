// Importing 3rd party software
import { useMoralis } from "react-moralis";
import { Link, Route, Routes } from 'react-router-dom';

// Importing components
import Login from './homepage/Login'
import HomePage from './homepage/HomePage'
import MergeRoom from './MergeRoom';
import Explore from './Explore';
import ShowProposals from './ShowProposals';

// Importing photos
import MandaLogoBlack from '../images/black_logo.png'
import MandaLogoWhite from '../images/white_logo.png'

function Header() {
    return (
        <div id='header-container'>
            <div id='logo-container'>
                <img id='logo-img-header' src={ MandaLogoWhite } alt='Manda logo'></img>
                <h1 id='logo-text-header'>Manda.</h1>
            </div>
            <div id='menu-container'>
                <Link 
                    to="/" 
                    className='menu-item hover-underline-animation'
                >Home</Link>
                <Link 
                    to="/explore"
                    className='menu-item hover-underline-animation'
                >Explore</Link>
                <Link 
                    to="/merge-room"
                    className='menu-item hover-underline-animation'
                >Create merge</Link>
                <Link 
                    to="/all-proposals" 
                    className='menu-item hover-underline-animation'
                >Proposals</Link>
            </div>
            <div id='signin-container'>
                <Login/>
            </div>
        </div>
    )
}

export default Header