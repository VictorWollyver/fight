import { z } from "zod";

export default function apiError(error) {
	if (error instanceof z.ZodError) {
		return {
			data: null,
			ok: false,
			errorMessage: error.errors[0].message,
			successMessage: "",
			alreadyFetched: true,
		};
	}

	if (error instanceof Error) {
		return {
			data: null,
			ok: false,
			errorMessage: error.message,
			successMessage: "",
			alreadyFetched: true,
		};
	}

	return {
		data: null,
		ok: false,
		errorMessage: "Erro genérico",
		successMessage: "",
		alreadyFetched: true,
	};
}
