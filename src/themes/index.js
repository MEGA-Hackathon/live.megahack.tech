import { css } from "styled-components";

export const breakpoints = {
	xs: 576,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
};

export const MainTheme = {
	colors: {
		main: "#ffffff",
		contrast: "#000000",
		primary: "#8B52FE",
	},
	shadows: [
		css`
			box-shadow: 5px 5px 10px 2.5px rgba(0, 0, 0, 0.25);
		`,
	],
	breakpoints,
};
