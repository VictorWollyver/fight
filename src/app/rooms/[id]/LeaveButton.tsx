"use client";
import { leaveRoomById } from "@/app/actions/rooms";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const LeaveButton = ({ roomId }: { roomId: string }) => {
	const router = useRouter();
	async function handleClickLeave() {
		await leaveRoomById(roomId);

		router.replace("/rooms");
	}
	return (
		<div className="mt-4 flex-1">
			<Button theme="yellow" onClick={handleClickLeave}>
				Sair
			</Button>
		</div>
	);
};

export default LeaveButton;
