import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Announcement from "../../components/Announcement";
import Products from "../../components/Products";
import Newsletter from "../../components/Newsletter";
import {mobile} from "../../Responsive";

const ProductList = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>Active Wear</Title>
			<FilterConatainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select>
						<Option disabled selected>
							Color
						</Option>
						<Option>White</Option>
						<Option>Blue</Option>
						<Option>Gray</Option>
						<Option>Red</Option>
						<Option>Brown</Option>
						<Option>Black</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Size
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select>
						<Option selected>Newest</Option>
						<Option>Price (asc)</Option>
						<Option>Price (desc)</Option>
					</Select>
				</Filter>
			</FilterConatainer>
			<Products />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductList;

const Container = styled.div``;
const Title = styled.h1`
	margin: 20px;
`;

const FilterConatainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	margin: 20px;
	${mobile({margin: "0px 20px", display: "flex", flexDirection: "column"})}
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({marginRight: "0px"})}
`;

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
	${mobile({margin: "10px 0px"})}
`;

const Option = styled.option``;
