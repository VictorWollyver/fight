import React from "react";
import type { IRoom } from "../page";

interface IRoomItemProps {
	room: IRoom;
}

const RoomItem = ({ room }: IRoomItemProps) => {
	return (
		<div className="cursor-pointer mt-5 h-24 border-[5px] border-black border-solid rounded-xl flex justify-between items-center px-5 w-full duration-100 hover:bg-[#020617]">
			<div>
				<h2 className="text-4xl">{room.name}</h2>
				<p className="text-4xl title">
					{room.players}/{room.maxPlayers}
				</p>
			</div>
			<button type="button" className="border-[3px] px-3 border-black border-solid text-4xl rounded-xl">
				JOIN
			</button>
		</div>
	);
};

export default RoomItem;
