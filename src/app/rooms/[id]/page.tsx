"use client";
import { getRoomById } from "@/app/api/rooms";
import ClickBox from "@/components/ClickBox";
import socket from "@/lib/socket";
import { useEffect, useState } from "react";

const LobbyPage = ({ params }: { params: Promise<{ id: string }> }) => {
	const [isConnected, setIsConnected] = useState(false);
	const [transport, setTransport] = useState("N/A");
	// const id = (await params).id;
	// const { data } = await getRoomById(id);

	useEffect(() => {
		if (socket.connected) {
			onConnect();
		}

		function onConnect() {
			setIsConnected(true);
			setTransport(socket.io.engine.transport.name);

			socket.io.engine.on("upgrade", (transport) => {
				setTransport(transport.name);
			});
		}

		function onDisconnect() {
			setIsConnected(false);
			setTransport("N/A");
		}

		socket.on("connect", onConnect);
		socket.emit("join-room", "sala teste");
		socket.on("disconnect", onDisconnect);

		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
		};
	}, []);

	return (
		<main className="w-[720px]">
			<h1 className="text-9xl text-center w-full">
				{/* Sala: <span className="title">{data?.name}</span> */}
				Sala: <span className="title">sala teste</span>
			</h1>
			<div className="flex gap-6">
				{/* <input style={{ flex: 1 }} type="text" value={`https://fightgame.com.br/rooms/${data?.id}`} readOnly className="text-4xl mt-6 w-full border-[5px] h-24 rounded-xl border-black border-solid bg-transparent" /> */}
				<input style={{ flex: 1 }} type="text" value={"https://fightgame.com.br/rooms/salateste"} readOnly className="text-4xl mt-6 w-full border-[5px] h-24 rounded-xl border-black border-solid bg-transparent" />

				<button type="button" className="text-4xl px-10 mt-6 border-[5px] h-24 rounded-xl border-black border-solid">
					COPIAR
				</button>
			</div>

			<ClickBox socket={socket} />
		</main>
	);
};

export default LobbyPage;
