import type { Metadata } from "next";
import "./globals.css";
import { Patrick_Hand_SC } from "next/font/google";
import Header from "@/components/Header";

export const metadata: Metadata = {
	title: "Fight",
	description: "Um jogo de disputa de clicks.",
	authors: [
		{ name: "Victor Wollyver", url: "www.linkedin.com/in/victorwollyver" },
		{ name: "Renan Gimenez", url: "www.linkedin.com/in/renangimenez" },
	],
};

const PatrickHandSC = Patrick_Hand_SC({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`antialiased ${PatrickHandSC.className}`}>
				<Header />

				<div className="grid place-content-center h-[calc(100vh-96px)]">{children}</div>
			</body>
		</html>
	);
}
