import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Announcement from "../../components/Announcement";
import {Adb, Add, Remove} from "@material-ui/icons";

const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>YOUR CART</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag(2)</TopText>
						<TopText>Your Wishlist(0)</TopText>
					</TopTexts>
					<TopButton type="filled">CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="https://images.stockx.com/images/Jordan-11-Retro-Space-Jams-2016-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606319512" />
								<Details>
									<ProductName>
										<b>Product:</b> Air Jordan 11
									</ProductName>
									<ProductId>
										<b>ID:</b> 0604221990
									</ProductId>
									<ProductColor color="black" />
									<ProductSize>
										<b>SIZE:</b> 5
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<AmountContainer>
									<Add />
									<Amount>2</Amount>
									<Remove />
								</AmountContainer>
								<Price>$ 1300</Price>
							</PriceDetail>
						</Product>
						<Hr />
						<Product>
							<ProductDetail>
								<Image src="https://cdn.flightclub.com/TEMPLATE/011844/1.jpg" />
								<Details>
									<ProductName>
										<b>Product:</b> Air Jordan 12
									</ProductName>
									<ProductId>
										<b>ID:</b> 0604601990
									</ProductId>
									<ProductColor color="gold" />
									<ProductSize>
										<b>SIZE:</b> 5
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<AmountContainer>
									<Add />
									<Amount>1</Amount>
									<Remove />
								</AmountContainer>
								<Price>$ 700</Price>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ 2000</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$ 11.88</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -7.50</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$ 2000</SummaryItemPrice>
						</SummaryItem>
						<BottomButton>CHECKOUT NOW</BottomButton>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
	color: #ac0d0d;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
	color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Info = styled.div`
	flex: 3;
`;

const Hr = styled.hr`
	background-color: #ac0d0d;
	border: none;
	height: 1px;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid #ac0d0d;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
	color: #f48b29;
`;

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const BottomButton = styled.button`
	width: 100%;
	padding: 10px;
	background-color: #ac0d0d;
	border: none;
	color: white;
	font-weight: 600;
	cursor: pointer;

	&:hover {
		background-color: #f48b29;
	}
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Image = styled.img`
	width: 200px;
`;

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const Amount = styled.div`
	font-size: 24px;
	margin: 5px;
`;

const Price = styled.div`
	font-size: 30px;
	font-weight: 200;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;
