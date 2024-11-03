interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	setMatchType?: (value: string) => void;
	matchType?: string;
}

const FieldInput = (props: any) => {
	return <input className="w-72 p-5 text-2xl outline-none bg-transparent border-[5px] rounded-xl border-black" {...props} />;
};

interface SelectionInputProps {
	setMatchType: (value: string) => void;
	matchType?: string;
}

const SelectionInput = ({ setMatchType, matchType }: SelectionInputProps) => {
	console.log(matchType);

	return (
		<select onChange={(e) => setMatchType!(e.target.value)} value={matchType} className={`${matchType ? "text-[#fff]" : "text-[#9ca3af]"} w-72 p-5 text-2xl outline-none bg-transparent border-[5px] rounded-xl border-black`} name="privacyRoom" id="">
			<option className="bg-[#0F172A] text-white" value="">
				Selecione
			</option>
			<option className="bg-[#0F172A] text-white" value="PUBLIC">
				Pública
			</option>
			<option className="bg-[#0F172A] text-white" value="PRIVATE">
				Privada
			</option>
		</select>
	);
};

const Input = ({ setMatchType, matchType, ...rest }: InputProps) => {
	console.log(matchType);
	return <div>{rest.type !== "text" ? <SelectionInput matchType={matchType} setMatchType={setMatchType!} /> : <FieldInput {...rest} />}</div>;
};

export default Input;
