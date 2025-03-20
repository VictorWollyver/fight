"use client";
import Button from "@/components/Button";
import React from "react";
import socket from "@/lib/socket";

const JoinButton = ({ roomId }: { roomId: string | undefined }) => {
	return (
		<div className="mt-4 flex-1">
			<Button theme="green" onClick={() => socket.emit("join-room", roomId)}>
				JOIN
			</Button>
		</div>
	);
};

export default JoinButton;
