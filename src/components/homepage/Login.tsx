import '../../app/App.css';
import { useMoralis } from "react-moralis";
import { Button, Row, Col, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

function Login() {
	const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

	const login = async () => {
		if (!isAuthenticated) {
			await authenticate(
					{signingMessage: "Log into Manda." }
				).then(function (user) {
					console.log("Logged in user:", user);
					console.log(user!.get("ethAddress"));
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	};

	const logOut = async () => {
		await logout();
		console.log("The user has been logged out.");
	};

	return (
		<Row justify="end">
			<Col>  
				<Button 
					key="1"
					type="primary"
					shape="round"
					size="large"
					onClick={login}
					style={{ display: !isAuthenticated ? 'block' : 'none', }}
				>
					Login with your Web3 wallet
				</Button>
				<Button
					key="2"
					type="primary"
					shape="round"
					size="large"
					onClick={logOut}
					style={{display: isAuthenticated ? 'block' : 'none'}}
				>
					Logout
				</Button>
			</Col>
		</Row>
	);
}

export default Login;