import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Fight | Home",
	description: "Selecione uma forma de jogar!",
	authors: [
		{ name: "Victor Wollyver", url: "www.linkedin.com/in/victorwollyver" },
		{ name: "Renan Gimenez", url: "www.linkedin.com/in/renangimenez" },
	],
};

const HomePage = () => {
	return <h1 className="title mt-10">Este é um texto com borda</h1>;
};

export default HomePage;
