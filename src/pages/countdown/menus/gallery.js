import React from "react";
import styled from "styled-components";

const Container = styled.div`
	padding: 0px 10%;
	text-align: center;
`;
const Header = styled.div`
	font-size: 68px;
	font-family: "Poppins";
	font-weight: 400;
	letter-spacing: 20px;

	margin-top: 0.5rem;
	margin-bottom: 0;

	@media (max-width: 768px) {
		font-size: 42px;
	}
`;

export const Gallery = () => {
	return (
		<Container>
			<Header>GALLERY</Header>
			<iframe style={{ width: "60vw", height: "100vh" }} src="https://gallery.megahack.tech" frameBorder={0} />
		</Container>
	);
};
