"use client";
import { useState, useRef, useEffect } from "react";
import { io, type Socket } from "socket.io-client";
// import socket from "@/lib/socket";

import type { Room } from "@/app/api/rooms";

const ROUND_TIME = 30; // 30 Segundos de duração de um round

const ClickBox = ({ room }: { room: Room | null }) => {
	const [socket, setSocket] = useState<Socket>();
	const [roundStarted, setRoundStarted] = useState(false);

	const [count, setCount] = useState(0);

	useEffect(() => {
		const socket = io("http://localhost:3001", {
			reconnectionAttempts: 0,
		});
		setSocket(socket);

		socket.on("socketId", (socketId) => {
			console.log(socketId);
		});

		socket.on("player", (player) => {
			console.log(player);
		});

		socket.on("click", (count: number) => {
			setCount(count);
		});

		return () => {
			console.log("desconectado");
			socket.disconnect();
		};
	}, []);

	function handleClick(event: React.MouseEvent<HTMLDivElement>) {
		if (!roundStarted) {
			setRoundStarted(true);
			setTimeout(() => {
				setRoundStarted(false);
				socket?.emit("ROUND_END");
			}, ROUND_TIME);
		}
		socket?.emit("click");
	}

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div onClick={handleClick} className="w-full mt-10 bg-transparent border-[5px] border-black rounded-xl h-[330px] border-solid cursor-pointer overflow-hidden">
			<h1 className="text-2xl">{count}</h1>
		</div>
	);
};

export default ClickBox;
