"use client";
import Button from "@/components/Button";
import React from "react";
import socket from "@/lib/socket";

const LeaveButton = () => {
	return (
		<div className="mt-4 flex-1">
			<Button theme="yellow" onClick={() => socket.disconnect()}>
				Sair
			</Button>
		</div>
	);
};

export default LeaveButton;
