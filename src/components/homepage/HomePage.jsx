import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const HomePage = () => (
	<>
    	<div id='section-one'>
			<h1 id='section-one-large-text'>The Web3 solution to aquisitions and mergers.</h1>
			<Button
				type='primary'
				shape='round'
				size='large'
				id='get-started-btn'
			>Get started with Manda</Button>
			<Button
				type='primary'
				shape='round'
				size='large'
				id='buy-mdt-btn'
			>Buy $MDT</Button>
    	</div>
		<div id='section-two'></div>
  	</>
);

export default HomePage;