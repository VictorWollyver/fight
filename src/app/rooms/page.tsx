import type { Metadata } from "next/types";
import React from "react";
import RoomsList from "./components/RoomsList";

export const metadata: Metadata = {
	title: "Fight | Rooms",
	description: "Escolha uma sala para jogar!",
	authors: [
		{ name: "Victor Wollyver", url: "www.linkedin.com/in/victorwollyver" },
		{ name: "Renan Gimenez", url: "www.linkedin.com/in/renangimenez" },
	],
};

export interface IRoom {
	id: number;
	name: string;
	players: number;
	maxPlayers: number;
}

const ROOMS: IRoom[] = [
	{
		id: 1,
		name: "Sala 1",
		players: 2,
		maxPlayers: 4,
	},
	{
		id: 2,
		name: "Sala 2",
		players: 3,
		maxPlayers: 4,
	},
	{
		id: 3,
		name: "Sala 3",
		players: 4,
		maxPlayers: 4,
	},
	{
		id: 4,
		name: "Sala 4",
		players: 1,
		maxPlayers: 4,
	},
	{
		id: 5,
		name: "Sala 5",
		players: 2,
		maxPlayers: 4,
	},
];

const Rooms = () => {
	return (
		<main>
			<h1 className="title text-9xl text-center">SALAS</h1>
			<RoomsList rooms={ROOMS} />
			<div className="flex justify-between items-center mt-5">
				<button type="button">😁</button>
				<button type="button">😂</button>
			</div>
		</main>
	);
};

export default Rooms;
