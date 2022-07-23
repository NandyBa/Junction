import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMoralis } from "react-moralis";
import Room from './Room';
import { Button, Row, Col, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

function Login() {

	const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

	const login = async () => {
		if (!isAuthenticated) {

			await authenticate({signingMessage: "Log in using Moralis" })
				.then(function (user) {
					console.log("logged in user:", user);
					console.log(user!.get("ethAddress"));
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	};

	const logOut = async () => {
		await logout();
		console.log("logged out");
	};


	return (
		<Row justify="end" style={{marginTop: '5vh', marginRight: '5vh'}}>
			<Col span={4} offset={1}>  
				<Button 
					key="1"
					type="primary"
					size="large"
					onClick={login}
					style={{display:!isAuthenticated ? 'block' : 'none'}}
				>
					Login with your Web3 wallet
				</Button>
				<Button
					key="1"
					type="primary"
					size="large"
					onClick={logOut}
					style={{display:isAuthenticated ? 'block' : 'none'}}
				>
					Logout
				</Button>
			</Col>
		</Row>
	);

}

export default Login;