import React from "react";
import type { IRoom } from "../page";
import RoomItem from "./RoomItem";

interface IRoomsListProps {
	rooms: IRoom[];
}

const RoomsList = ({ rooms }: IRoomsListProps) => {
	return (
		<ul className="overflow-y-scroll max-h-[500px] no-scrollbar w-[40vw]">
			{rooms.map((room) => (
				<RoomItem key={room.id} room={room} />
			))}
		</ul>
	);
};

export default RoomsList;
