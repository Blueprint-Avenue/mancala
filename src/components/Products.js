import React from "react";
import styled from "styled-components";
import {products} from "../data";
import Product from "./Product";

const Products = () => {
	return (
		<Container>
			{products.map((item) => (
				<Product key={item.id} item={item} />
			))}
		</Container>
	);
};

export default Products;

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
