import { Alert, Breadcrumb } from 'antd';
import React from 'react';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { useMoralis } from "react-moralis";

// Importing components
import HomePage from '../components/homepage/HomePage';
import MergeRoom from '../components/MergeRoom';
import Login from '../components/homepage/Login';
import Explore from '../components/Explore';
import ShowProposals from '../components/ShowProposals';

const Router = () => {
const location = useLocation();
const pathSnippets = location.pathname.split('/').filter(i => i);

const { isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

	const logOut = async () => {
		await logout();
		console.log("Logged out.");
	};

	// If the user is not autheticated and they are on the home page, then they can see the home page and the login button.
	if (!isAuthenticated && location.pathname == '/') {
		return (
			<>
				<HomePage auth={isAuthenticated} curUrl={location} />
			</>
		);

	/* If the user is not authenticated but they are not on the home page, then they should only see the login
	 * Note that the login is rendered within <HomePage />, but it can be rendered by itself as well, as below.
	 */
	} else if (!isAuthenticated) {
		return (
			<Login/>
		);
	} else {
		return (
			<div className="demo">
				<div className="demo-nav">
					<Link to="/" style={{'margin':'20px'}}>Home</Link>
					<Link to="/explore" style={{'margin':'20px'}}>Explore</Link>
					<Link to="/merge-room" style={{'margin':'20px'}}>Create merge</Link>
					<Link to="/all-proposals" style={{'margin':'20px'}}>Proposals</Link>
					<a onClick={logOut} style={{'margin':'20px'}}>Logout</a>
				</div>
					<Routes>
						<Route path="/explore" element={<Explore/>} />
						<Route path="/merge-room" element={<MergeRoom/>} />
						<Route path="/all-proposals" element={<ShowProposals/>} />
						<Route path="*" element={<HomePage/>} />
					</Routes>
			</div>
		);
	}
};

const App: React.FC = () => (
	<HashRouter>
		<Router/>
	</HashRouter>
);

export default App;