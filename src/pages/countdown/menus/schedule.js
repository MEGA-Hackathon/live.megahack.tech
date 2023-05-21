import React from "react";
import styled from "styled-components";

const Container = styled.div`
	padding: 0px 12%;
`;

const Header = styled.div`
	font-size: 68px;
	font-family: "Poppins";
	font-weight: 400;
	letter-spacing: 20px;
	text-align: center;

	margin-top: 2rem;
	margin-bottom: 3rem;

	@media (max-width: 768px) {
		font-size: 42px;
	}

	@media screen and (max-width: 450px) {
		font-size: 35px;
		letter-spacing: 10px;
	}
`;

const Subheader = styled.div`
	color: #68666f;
	font-size: 25px;
	font-family: "Poppins";
	font-weight: 600;
`;
const Paragraph = styled.div`
	color: #68666f;
	font-size: 16px;
	font-family: "Poppins";
	font-weight: 400;
`;

const Fri = styled.div`
	width: 100%;
	max-width: 400px;
	text-align: center;
`;

const SceduleLayout = styled.div`
	display: flex;
	justify-content: center;
`;

export const Schedule = () => {
	return (
		<Container>
			<Header>SCHEDULE</Header>
			<SceduleLayout>
				<Fri>
					<Subheader>Saturday</Subheader>
					<Paragraph>
						<br />
						<b>1:00 PM - 1:15 PM</b>
						<p>Opening Ceremony</p>
					</Paragraph>
					<Paragraph>
						<br />
						<b>1:30-2:30</b>
						<p>Round 1</p>
					</Paragraph>
					<Paragraph>
						<br />
						<b>3:00-4:00</b>
						<p>Round 2</p>
					</Paragraph>
					<Paragraph>
						<br />
						<b>4:30-5:30</b>
						<p>Round 3</p>
					</Paragraph>
				</Fri>
				<Fri>
					<Subheader>Sunday</Subheader>
					<Paragraph>
						<br />
						<b>1:30-2:30</b>
						<p>Round 4</p>
					</Paragraph>
					<Paragraph>
						<br />
						<b>3:00-4:00</b>
						<p>Semifinals</p>
					</Paragraph>
					<Paragraph>
						<br />
						<b>4:30-5:30</b>
						<p>Finals</p>
					</Paragraph>
					<Paragraph>
						<br />
						<b>3:30-3:40 p.m.</b>
						<p>Closing Ceremony and Awards</p>
					</Paragraph>
				</Fri>
			</SceduleLayout>
		</Container>
	);
};
