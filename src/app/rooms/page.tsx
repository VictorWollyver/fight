import type { Metadata } from "next/types";
import { RefreshCcw, ArrowLeft } from "lucide-react";
import React from "react";
import RoomsList from "./components/RoomsList";
import Button from "@/components/Button";
import Link from "next/link";
import { getRooms, type Room } from "../api/rooms";
import ButtonReload from "./components/ButtonReload";

export const metadata: Metadata = {
	title: "Fight | Rooms",
	description: "Escolha uma sala para jogar!",
	authors: [
		{ name: "Victor Wollyver", url: "www.linkedin.com/in/victorwollyver" },
		{ name: "Renan Gimenez", url: "www.linkedin.com/in/renangimenez" },
	],
};

const Rooms = async () => {
	const { data } = await getRooms();

	return (
		<main>
			<h1 className="title text-9xl text-center">SALAS</h1>
			{data && <RoomsList rooms={data} />}
			<div className="grid justify-between items-center mt-5" style={{ gridTemplateColumns: "auto auto" }}>
				<Link href="/">
					<Button theme="yellow">
						<ArrowLeft />
					</Button>
				</Link>

				<ButtonReload />
			</div>
		</main>
	);
};

export default Rooms;
