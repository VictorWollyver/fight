"use server";
import { z } from "zod";
import apiError from "@/functions/apiError";
import { permanentRedirect } from "next/navigation";

import { cookies } from "next/headers";

const RoomScheme = z.object({
	id: z.string(),
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
			next: {
				tags: ["rooms"],
			},
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

export async function getRoomById(id: string) {
	try {
		const response = await fetch(`http://localhost:3001/rooms/getRoomById/${id}`, {
			method: "GET",
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

export async function joinRoomById(id: string) {
	try {
		const response = await fetch(`http://localhost:3001/rooms/joinRoomById/${id}`, {
			cache: "no-store",
			method: "POST",
		});

		if (!response.ok) {
			const data = (await response.json()) as { message: string; error: Error };
			throw new Error(data.error.message);
		}

		const { data } = (await response.json()) as { data: Room; message: string };

		return { data: data, ok: true, errorMessage: "", successMessage: "Entrou na sala com sucesso", alreadyFetched: true };
	} catch (error) {
		permanentRedirect("/rooms");
	}
}

export async function leaveRoomById(id: string) {
	try {
		const response = await fetch(`http://localhost:3001/rooms/leaveRoomById/${id}`, {
			cache: "no-store",
			method: "POST",
		});

		if (!response.ok) {
			const data = (await response.json()) as { message: string; error: Error };
			throw new Error(data.error.message);
		}

		const { message } = (await response.json()) as { message: string };

		return { data: message, ok: true, errorMessage: "", successMessage: "Entrou na sala com sucesso", alreadyFetched: true };
	} catch (error) {
		return apiError(error);
	}
}
