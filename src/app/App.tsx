import React from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useMoralis } from "react-moralis";

// Importing components
import Header from '../components/Header'
import FullscreenLogin from '../components/FullscreenLogin'
import Explore from '../components/Explore'
import MergeRoom from '../components/MergeRoom'
import ShowProposals from '../components/ShowProposals'
import HomePage from '../components/homepage/HomePage'

const Router = () => {
	const location = useLocation();
	const { isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

	const logOut = async () => {
		await logout();
		console.log("Logged out.");
	};

	// If the user is not authenticated, they must login by connecting their wallet
	if (!isAuthenticated) return (<FullscreenLogin />)

	// If the user is authenticated, then they are given the header, which renders every other page using a router
	else return (
		<>
			<Header />
			<Routes>
				<Route path="/explore" element={<Explore/>} />
				<Route path="/merge-room" element={<MergeRoom/>} />
				<Route path="/all-proposals" element={<ShowProposals/>} />
				<Route path="*" element={<HomePage />} />
			</Routes>
		</>
	)
};

const App: React.FC = () => (
	<HashRouter>
		<Router/>
	</HashRouter>
);

export default App;