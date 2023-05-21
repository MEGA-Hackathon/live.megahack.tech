import React from "react";
import styled from "styled-components";

const Container = styled.div`
	padding: 0px 10%;
	text-align: center;
	margin-bottom: 150px;
`;
const Header = styled.div`
	font-size: 68px;
	font-family: "Poppins";
	font-weight: 400;
	letter-spacing: 20px;

	margin-top: 5rem;
	margin-bottom: 0;

	@media (max-width: 768px) {
		font-size: 42px;
	}

	@media screen and (max-width: 450px) {
		font-size: 35px;
		letter-spacing: 10px;
	}
`;
const Subheader = styled.div`
	font-size: 42px;
	font-family: "Poppins";
	font-weight: 200;

	margin-top: 1.5rem;
	margin-bottom: 0.5rem;

	@media (max-width: 768px) {
		font-size: 32px;
	}
`;
const EmbedYoutube = styled.iframe`
	border-radius: 20px;
	aspect-ratio: 605 / 340;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const Bracket = styled.iframe`
	height:600px;
	frameBorder:0;
	scrolling:"auto";
	allowtransparency:"true";
`;
export const Events = () => {
	return (
		<Container>
			<Header>EVENTS</Header>
			<Subheader>Opening Ceremony</Subheader>
			<EmbedYoutube
				width="60%"
				src="https://www.youtube.com/embed/5oWl4ldxSIs"
				title="Opening Ceremony"
				allowfullscreen
			/>
			<Header>Pairing and Matchups</Header>
			<Subheader>Round 1:</Subheader>
			<Bracket 
				width="100%"
				src="https://challonge.com/mega_rxd_d2_knockouts/module"
				allowfullscreen
			/>
		</Container>
	);
};
