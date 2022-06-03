import {Search} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<input type="text" />
						<Search />
					</SearchContainer>
				</Left>
				<Center>Center</Center>
				<Right>Right</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;

const Container = styled.div`
	height: 60px;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
`;

const SearchContainer = styled.div`
	border: 1px solid #ac0d0d;
	display: flex;
	align-items: center;
`;

const Center = styled.div`
	flex: 1;
`;
const Right = styled.div`
	flex: 1;
`;