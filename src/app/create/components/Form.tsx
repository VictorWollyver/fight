"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import Input from "./Input";

import { ArrowLeft } from "lucide-react";

const Form = () => {
	const [matchType, setMatchType] = useState("");

	const [formData, setFormData] = useState({
		nome: "",
		tipoSala: matchType,
		senha: "",
	});

	const router = useRouter();

	const changeValue = (key: string, value: string) => {
		setFormData({ ...formData, [key]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!formData.nome.trim() || (matchType === "privada" && !formData.senha.trim())) {
			return alert("Preencha todos os campos");
		}

		const data = {
			...formData,
			senha: matchType === "privada" ? formData.senha : "",
		};

		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
			<Input onChange={(e) => changeValue("nome", e.target.value)} type="text" placeholder="Nome..." />
			<Input setMatchType={setMatchType} matchType={matchType} />

			{matchType === "privada" && <Input onChange={(e) => changeValue("senha", e.target.value)} type="text" placeholder="Senha..." />}

			<div className="grid grid-cols-[auto,1fr] w-full gap-5 mt-3">
				<Button type="button" theme="yellow" onClick={() => router.back()}>
					<ArrowLeft />
				</Button>
				<Button type="submit" theme="blue">
					Criar
				</Button>
			</div>
		</form>
	);
};

export default Form;
