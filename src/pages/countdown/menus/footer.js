import React from "react";
import styled from "styled-components";
import { Button } from "../components/button";

const Container = styled.div`
	color: ${({ theme }) => theme.colors.main};
	background: ${({ theme }) => theme.colors.contrast};
	clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
	padding: 8rem 15% 3.5rem 15%;
	margin-top: 1rem;
`;
const Highlight = styled.div`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 18px;
	font-weight: bold;
`;
const Header = styled.div`
	font-size: 37px;
	font-weight: bold;
`;

export const Footer = () => {
	return (
		<Container>
			<Highlight>Submission Guidelines</Highlight>
			<Header>
				Submit in the MEGA
				<br />
				Hackathon 2023
			</Header>
			<div style={{ height: 15 }} />
			<a href="https://mega-hackathon-2023.devpost.com/">
				<Button />
			</a>
		</Container>
	);
};
