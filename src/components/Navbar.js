import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import {mobile} from "../Responsive";

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search" />
						<Search style={{color: "#F0C929", fontSize: 16}} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>MANCALA.</Logo>
				</Center>
				<Right>
					<MenuLink>REGISTER</MenuLink>
					<MenuLink>SIGN IN</MenuLink>
					<MenuLink>
						<Badge badgeContent={4} color="primary">
							<ShoppingCartOutlined />
						</Badge>
					</MenuLink>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;

const Container = styled.div`
	height: 60px;
	${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
	border: 1px solid #ac0d0d;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
	outline: none;
	${mobile({width: "35px"})}
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
	color: #ac0d0d;
	${mobile({fontSize: "24px"})}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({flex: 2, justifyContent: "center"})}
`;

const MenuLink = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({fontSize: "12px", marginLeft: "10px"})}
`;
