import React from "react";
import styled from "styled-components";
import {mobile} from "../../Responsive";

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="username" />
					<Input placeholder="password" />
					<Button>LOGIN</Button>
				</Form>
				<Link>Forgot Password?</Link>
				<br />
				<Link>Create New Account</Link>
			</Wrapper>
		</Container>
	);
};

export default Login;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg")
			center no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: white;
	${mobile({width: "75%"})}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
	color: #ac0d0d;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: #ac0d0d;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
`;

const Link = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	text-transform: uppercase;
	cursor: pointer;
`;
