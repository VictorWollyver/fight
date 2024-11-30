"use client";

import React from "react";

const CrossIcon = ({ show, mousePosition }: { show: boolean; mousePosition: { x: number; y: number } }) => {
	return (
		<div className={`absolute flex items-center justify-center w-24 h-24 bg-transparent rounded-lg ${show ? "flex" : "hidden"}`} style={{ top: `${mousePosition.y - 47}px`, left: `${mousePosition.x - 47}px` }}>
			<div className="relative w-10 h-8" >
				<span className="border-green shadow-shadowGreen shadow-lightShadow absolute w-4 h-1 bg-lime-500 rounded-lg  opacity-90 transform rotate-45 top-0 left-0 animate-pulse" />
				<span className="border-green shadow-shadowGreen shadow-lightShadow absolute w-4 h-1 bg-lime-500 rounded-lg  opacity-90 transform -rotate-45  top-0 right-0 animate-pulse" />
				<span className="border-green shadow-shadowGreen shadow-lightShadow absolute w-4 h-1 bg-lime-500 rounded-lg  opacity-90 transform -rotate-45  bottom-0 left-0 animate-pulse" />
				<span className="border-green shadow-shadowGreen shadow-lightShadow absolute w-4 h-1 bg-lime-500 rounded-lg  opacity-90 transform rotate-45 bottom-0 right-0 animate-pulse" />
			</div>
		</div>
	);
};

export default CrossIcon;
