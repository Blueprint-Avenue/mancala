import {Send} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Newsletter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Description>Get timely updates from your favorite products.</Description>
			<InputContainer>
				<Input placeholder="ENTER YOUR EMAIL" />
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;

const Container = styled.div`
	height: 60vh;
	background-color: #f48b29;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Title = styled.h1`
	font-size: 70px;
	margin-bottom: 20px;
	color: white;
`;
const Description = styled.div`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: 20px;
	color: #fbe6c2;
`;
const InputContainer = styled.div`
	width: 50%;
	height: 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border: 1px solid #fbe6c2;
`;
const Input = styled.input`
	border: none;
	outline: none;
	flex: 8;
	padding-left: 20px;
`;
const Button = styled.button`
	flex: 1;
	border: none;
	background-color: #ac0d0d;
	color: white;
	cursor: pointer;
`;
