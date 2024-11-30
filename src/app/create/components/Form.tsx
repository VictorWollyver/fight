"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

import Button from "@/components/Button";
import Input from "./Input";

import { ArrowLeft } from "lucide-react";
import { postRoom } from "@/app/api/rooms";
import ErrorMessage from "@/functions/ErrorMessage";
import SuccessMessage from "@/functions/SuccessMessage";

const SubmitButton = () => {
	const status = useFormStatus();

	return (
		<Button type="submit" theme="blue" disabled={status.pending}>
			{status.pending ? "Carregando..." : "Criar"}
		</Button>
	);
};

const Form = () => {
	const router = useRouter();
	const [state, action] = useFormState(postRoom, { data: null, ok: false, errorMessage: "", successMessage: "", alreadyFetched: false });
	const [matchType, setMatchType] = useState("");

	const [formData, setFormData] = useState({
		nome: "",
		tipoSala: matchType,
		senha: "",
	});

	const changeValue = (key: string, value: string) => {
		setFormData({ ...formData, [key]: value });
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	React.useEffect(() => {
		if (state.ok) {
			router.push(`/rooms/${state.data?.id}`);
		}
	}, [state.ok]);

	return (
		<form action={action} className="flex flex-col items-center gap-5">
			<Input onChange={(e) => changeValue("nome", e.target.value)} type="text" placeholder="Nome..." name="name" />
			<Input setMatchType={setMatchType} matchType={matchType} />

			{matchType === "PRIVATE" && <Input onChange={(e) => changeValue("senha", e.target.value)} type="text" placeholder="Senha..." name="password" />}

			<ErrorMessage errorMessage={state.errorMessage} />
			<SuccessMessage successMessage={state.successMessage} />
			<div className="grid grid-cols-[auto,1fr] w-full gap-5 mt-3">
				<Button type="button" theme="yellow" onClick={() => router.back()}>
					<ArrowLeft />
				</Button>
				<SubmitButton />
			</div>
		</form>
	);
};

export default Form;
