import React from "react";
import styled from "styled-components";

const Announcement = () => {
	return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;

const Container = styled.div`
	height: 30px;
	background-color: #f0c929;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
`;
