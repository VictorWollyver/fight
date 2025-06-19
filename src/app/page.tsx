import HomePageContainer from "@/components/HomePageContainer";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
	title: "Fight | Home",
	description: "Selecione uma forma de jogar!",
	authors: [
		{ name: "Victor Wollyver", url: "www.linkedin.com/in/victorwollyver" },
		{ name: "Renan Gimenez", url: "www.linkedin.com/in/renangimenez" },
	],
};

const HomePage = () => {
	return (
		<main>
			<h1 className="title text-9xl text-center">FIGHT</h1>

			<HomePageContainer />
		</main>
	);
};

export default HomePage;
