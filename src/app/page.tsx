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
			<Link href="/create">
				<button type="button" className="text-6xl mt-6 w-full border-[5px] h-24 rounded-xl border-black border-solid">
					CRIAR
				</button>
			</Link>

			<Link href="/rooms">
				<button type="button" className="text-6xl mt-5 w-full border-[5px] h-24 rounded-xl border-black border-solid">
					SALAS
				</button>
			</Link>
		</main>
	);
};

export default HomePage;
