import React from "react";
import { Events } from "./menus/events";
import { Header } from "./menus/header";
import { Schedule } from "./menus/schedule";

const CountdownPage = () => {
	return (
		<div>
			<Header />
			<Schedule />
			<Events />
		</div>
	);
};

export default CountdownPage;
