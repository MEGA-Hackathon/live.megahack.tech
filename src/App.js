import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import CountdownPage from "./pages/countdown";
import { MainTheme } from "./themes";

const GlobalStyles = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
		color: ${({ theme }) => theme.colors.contrast};
		background-color: ${({ theme }) => theme.colors.main};
		font-family: "Montserrat", sans-serif;
	}
	
	body, input, textarea, button {
		font-family: "Montserrat", sans-serif;
	}
`;

function App() {
	return (
		<ThemeProvider theme={MainTheme}>
			<GlobalStyles />
			<CountdownPage />
		</ThemeProvider>
	);
}

export default App;
