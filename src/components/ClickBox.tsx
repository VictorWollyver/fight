"use client";
import { type SetStateAction, useState, useRef } from "react";
import CrossIcon from "./ClickEffect";

const ClickBox = () => {
	const [count, setCount] = useState(0);
	const [countEffect, setCountEffect] = useState(0);
	const [effectOptions, setEffectOptions] = useState<{ x: number; y: number; show: boolean }[]>([]);
	const boxRef = useRef<HTMLDivElement>(null);

	function handleClick(event: React.MouseEvent<HTMLDivElement>) {
		const box = boxRef.current;
		if (!box) return;

		const { left, top, right, bottom } = box.getBoundingClientRect();
		const { clientX: x, clientY: y } = event;

		const adjustedX = Math.max(left + 45, Math.min(x, right - 45));
		const adjustedY = Math.max(top + 45, Math.min(y, bottom - 45));

		setCountEffect(countEffect + 1);
		setEffectOptions([...effectOptions, { x: adjustedX, y: adjustedY, show: true }]);

		setTimeout(() => {
			setEffectOptions((options: any[]) => {
				console.log(options);
				const newOptions = options?.slice(1);
				return newOptions;
			});
		}, 1000);
		setCount(count + 1);
	}

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div ref={boxRef} onClick={handleClick} className="w-full mt-10 bg-transparent border-[5px] border-black rounded-xl h-[330px] border-solid cursor-pointer overflow-hidden">
			{effectOptions.length > 0 && effectOptions?.map((option, index) => {
				return <CrossIcon key={index} show={option.show} mousePosition={option} />;
			})}
		</div>
	);
};

export default ClickBox;
