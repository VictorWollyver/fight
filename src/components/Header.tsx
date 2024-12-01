const Header = () => {
	return (
		<header className="w-full px-5 shadow-2xl h-24 ">
			<nav className="flex items-center w-full h-full justify-between">
				<h1 className="text-4xl text-foreground">FIGHT</h1>

				<div className="flex gap-5">
					<button className="border-[5px] w-40 py-2 px-4 rounded-xl border-black" type="button">
						APOIE
					</button>
					<button className="border-[5px] w-40 py-2 px-4 rounded-lg border-black" type="button">
						SOBRE
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
