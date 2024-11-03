"use client";
import Button from "@/components/Button";
import { RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";

const ButtonReload = () => {
	const router = useRouter();
	return (
		<Button theme="green" onClick={() => router.refresh()}>
			<RefreshCcw />
		</Button>
	);
};

export default ButtonReload;
