"use server";
import { z } from "zod";
import apiError from "@/functions/apiError";

const RoomScheme = z.object({
	_id: z.string(),
	name: z.string(),
	password: z.string().optional(),
	privacyRoom: z.enum(["PUBLIC", "PRIVATE"]),
	gameMode: z.enum(["CLASSIC"]),
	maxPlayersCount: z.number(),
	currentPlayersCount: z.number(),
});

export type Room = z.infer<typeof RoomScheme>;

export async function getRooms() {
	try {
		const response = await fetch("http://localhost:3001/rooms", {
			cache: "no-store",
			method: "GET",
		});

		const { data, message } = (await response.json()) as { data: Room[] | null; message: string };

		if (!response.ok) {
			throw new Error(message);
		}

		return { data, ok: true, errorMessage: "", successMessage: message, alreadyFetched: true };
	} catch (error) {
		return apiError(error);
	}
}

const PostRoomScheme = z.object({
	name: z.string(),
	password: z.string().optional().nullable(),
	privacyRoom: z.enum(["PUBLIC", "PRIVATE"]),
});

export type PostRoom = z.infer<typeof PostRoomScheme>;

export async function postRoom(state: {}, formData: FormData) {
	const room: PostRoom = {
		name: formData.get("name") as string,
		password: formData.get("password") as string | undefined,
		privacyRoom: formData.get("privacyRoom") as "PUBLIC" | "PRIVATE",
	};

	try {
		PostRoomScheme.parse(room);

		const response = await fetch("http://localhost:3001/rooms/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(room),
		});

		const { data, message } = (await response.json()) as { data: Room | null; message: string };

		if (!response.ok) {
			throw new Error(message);
		}

		return { data: data, ok: true, errorMessage: "", successMessage: message, alreadyFetched: true };
	} catch (error) {
		return apiError(error);
	}
}
