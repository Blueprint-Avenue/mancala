import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import React, {useState} from "react";
import styled from "styled-components";
import {sliderItems} from "../data";
import {mobile} from "../Responsive";

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
		} else {
			setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
		}
	};
	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide key={item.id} bg={item.bg}>
						<ImageContainer>
							<Image src={item.img} />
						</ImageContainer>
						<Info>
							<Title>{item.title}</Title>
							<Description>{item.desc}</Description>
							<Button>SHOP NOW</Button>
						</Info>
					</Slide>
				))}
			</Wrapper>

			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
	${mobile({display: "none"})}
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
	flex: 1;
	height: 100%;
`;

const Image = styled.img`
	height: 80%;
`;

const Info = styled.div`
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 70px;
`;
const Description = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;

const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	color: #ac0d0d;
	cursor: pointer;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`;
