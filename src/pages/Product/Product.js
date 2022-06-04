import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import {Add, Remove} from "@material-ui/icons";

const Product = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src="https://us.balmain.com/dw/image/v2/BHGX_PRD/on/demandware.static/-/Sites-balmain-mastercatalog/default/dwb33cdb1e/images/hi-res/YH1JQ005BB33MDDF.png?sw=375&sh=530" />
				</ImgContainer>
				<InfoContainer>
					<Title>Balmain Crewneck</Title>
					<Desc>
						It is only when the mind and character slumber that the dress can be
						seen.
					</Desc>
					<Price>$ 450</Price>
					<FilterConatainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="red" />
							<FilterColor color="blue" />
							<FilterColor color="green" />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterConatainer>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
`;

const ImgContainer = styled.div`
	flex: 1;
`;

const Image = styled.img`
	width: 100%;
	height: 70vh;
	object-fit: cover;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
`;

const Title = styled.h1`
	font-weight: 200;
	text-transform: uppercase;
	color: #ac0d0d;
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const FilterConatainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: space-between;
	margin: 30px 0px;
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
`;

const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;

const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
`;

const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;

const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid #f48b29;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;

const Button = styled.button`
	padding: 15px;
	border: 2px solid #ac0d0d;
	background-color: white;
	cursor: pointer;
	font-weight: 500;

	&:hover {
		background-color: #ac0d0d;
		color: white;
	}
`;
