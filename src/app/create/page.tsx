import type { Metadata } from "next";
import Form from "./components/Form";

export const metadata: Metadata = {
	title: "Fight | Criar",
	description: "Crie uma sala para jogar!",
	authors: [
		{ name: "Victor Wollyver", url: "www.linkedin.com/in/victorwollyver" },
		{ name: "Renan Gimenez", url: "www.linkedin.com/in/renangimenez" },
	],
};

const Create = () => {
	return (
		<main className="min-h-full flex flex-col items-center gap-6">
			<h1 className="text-9xl title">Criar</h1>
			<Form />
		</main>
	);
};

export default Create;
