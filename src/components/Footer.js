import {
	EmailOutlined,
	Facebook,
	Instagram,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<Container>
			<LeftContainer>
				<Logo>MANCALA.</Logo>
				<Desc>
					Moral excellence comes about as a result of habit. We become just by
					doing just acts, temperate by doing temperate acts, brave by doing
					brave acts.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405f">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55acee">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="e60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</LeftContainer>
			<CenterContainer>
				<Title>Useful Links</Title>
				<List>
					<ListItem>HOME</ListItem>
					<ListItem>CART</ListItem>
					<ListItem>MEN</ListItem>
					<ListItem>WOMEN</ListItem>
					<ListItem>KIDS</ListItem>
					<ListItem>ACCESSORIES</ListItem>
					<ListItem>MY ACCOUNT</ListItem>
					<ListItem>ORDER TRACKING</ListItem>
					<ListItem>WISHLIST</ListItem>
					<ListItem>TERMS</ListItem>
				</List>
			</CenterContainer>
			<RightContainer>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{marginRight: "10px"}} /> 646 Main St, Chanhassen MN
					55317
				</ContactItem>
				<ContactItem>
					<Phone style={{marginRight: "10px"}} /> +1 234 56 78
				</ContactItem>
				<ContactItem>
					<EmailOutlined style={{marginRight: "10px"}} /> contact@mancala.dev
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</RightContainer>
		</Container>
	);
};

export default Footer;

const Container = styled.div`
	display: flex;
`;

const LeftContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;
const Logo = styled.h1`
	color: #ac0d0d;
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
`;

const CenterContainer = styled.div`
	flex: 1;
	padding: 20px;
`;

const Title = styled.h3`
	margin-bottom: 30px;
	text-transform: uppercase;
	color: #ac0d0d;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const RightContainer = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 50%;
`;
