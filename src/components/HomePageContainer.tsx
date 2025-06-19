"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomePageContainer = () => {
	const [nickname, setNickname] = useState("");
	useEffect(() => {
		const nickname = localStorage.getItem("nickname");
		if (nickname) {
			setNickname(nickname);
		}
	}, []);

	const router = useRouter();
	function navigate(path: string) {
		if (window) {
			const nickname = localStorage.getItem("nickname");
			if (!nickname) {
				alert("Nickname é obrigatório!");
				return;
			}
		}
		router.push(path);
	}

	function handleSetLocalstorage(event: React.ChangeEvent<HTMLInputElement>) {
		setNickname(event.target.value);
		if (window) {
			localStorage.setItem("nickname", event.target.value);
		}
	}

	return (
		<section className="mt-4">
			<input onChange={handleSetLocalstorage} value={nickname} type="text" className="w-full p-5 text-2xl outline-none bg-transparent border-[5px] rounded-xl border-black" placeholder="Nickname..." />

			<button onClick={() => navigate("/create")} type="button" className="text-6xl mt-6 w-full border-[5px] h-24 rounded-xl border-black border-solid">
				CRIAR
			</button>

			<button onClick={() => navigate("/rooms")} type="button" className="text-6xl mt-5 w-full border-[5px] h-24 rounded-xl border-black border-solid">
				SALAS
			</button>
		</section>
	);
};

export default HomePageContainer;
