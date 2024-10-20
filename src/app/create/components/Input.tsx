interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  setMatchType?: (value: string) => void;
}

const FieldInput = (props: any) => {
  return (
    <input
      className="w-72 p-5 text-2xl outline-none bg-transparent border-[5px] rounded-xl border-black"
      {...props}
    />
  );
};

interface SelectionInputProps {
  setMatchType: (value: string) => void;
}

const SelectionInput = ({ setMatchType }: SelectionInputProps) => {
  return (
    <select
      onChange={(e) => setMatchType!(e.target.value)}
      className="w-72 p-5 text-2xl outline-none bg-transparent border-[5px] rounded-xl border-black"
      name=""
      id=""
    >
      <option className="bg-[#0F172A] text-white" value="publica">
        Pública
      </option>
      <option className="bg-[#0F172A] text-white" value="privada">
        Privada
      </option>
    </select>
  );
};

const Input = ({ setMatchType, ...rest }: InputProps) => {
  return (
    <div>
      {rest.type !== "text" ? (
        <SelectionInput setMatchType={setMatchType!} />
      ) : (
        <FieldInput {...rest} />
      )}
    </div>
  );
};

export default Input;
