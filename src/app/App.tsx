// Importing 3rd party software
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useMoralis } from "react-moralis";

// Importing components
import Header from '../components/Header'
import Explore from '../components/explorePage/Explore'
import MergeRoom from '../components/mergeRoom/MergeRoom'
import ShowProposals from '../components/proposalsPage/ShowProposals'
import HomePage from '../components/homepage/HomePage'
import Footer from '../components/Footer'

const Router = () => {
	const { isAuthenticated } = useMoralis();

	/* If the user is authenticated, the header is rendered with every other page using a router.
	 * Note that the <Routes /> tag dosen't acatually render anything, and it's only there to indicate where pages should be
	 * rendered, which is below the header
	 */
	if (isAuthenticated) {
		return (
			<>
				<Header isAuthenticated={ isAuthenticated } />
				<Routes>
					<Route path="/explore" element={<Explore/>} />
					<Route path="/merge-room" element={<MergeRoom/>} />
					<Route path="/all-proposals" element={<ShowProposals/>} />
					<Route path="*" element={<HomePage />} />
				</Routes>
				<Footer />
			</>
		)
	
	/* If the user is not authenticated, then the header is rendered with the isAuthenticated prop passed as the rest of the home page. This way,
	 * it will not render the menu and the user will be asked to launch the app.
	 */
	} else {
		return (
			<>
				<Header isAuthenticated={ isAuthenticated } />
				<HomePage />
			</>
		)
	}
};

const App: React.FC = () => (
	<HashRouter>
		<Router/>
	</HashRouter>
);

export default App;