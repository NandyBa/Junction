// Importgin 3rd party software
import React from 'react';
import 'antd/dist/antd.css';

// Importing components
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'

const HomePage = () => {
	return (
		<>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
  		</>
	)
}

export default HomePage;