import React from "react";
import type { Room } from "@/app/api/rooms";
import RoomItem from "./RoomItem";

interface IRoomsListProps {
	rooms: Room[];
}

const RoomsList = ({ rooms }: IRoomsListProps) => {
	return (
		<ul className="overflow-y-scroll max-h-[500px] no-scrollbar w-[40vw]">
			{rooms.map((room) => (
				<RoomItem key={room._id} room={room} />
			))}
		</ul>
	);
};

export default RoomsList;
