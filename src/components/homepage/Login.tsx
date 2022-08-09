import '../../app/App.css';
import { useMoralis } from "react-moralis";
import { Button } from 'antd';

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
				}
			)
		}
	}
  
	const logOut = async () => {
		await logout();
		console.log("The user has been logged out.");
	}

	const loginButton = <Button 
		key="1"
		type="primary"
		shape="round"
		size="large"
		onClick={ login }
	>Connect your wallet</Button>

	const logoutButton = <Button
		key="2"
		type="primary"
		shape="round"
		size="large"
		onClick={ logOut }
		disabled={ isAuthenticating }
	>Logout</Button>
  
	return (
		<div>
			{ isAuthenticated ? logoutButton : loginButton }
		</div>
	);
}

export default Login;