interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "yellow" | "green" | "blue";
  children: React.ReactNode;
}

const Button = ({ theme, children, ...rest }: ButtonProps) => {
  const variantes = {
    blue: "text-blue border-blue hover:bg-blue hover:border-strokeBlue hover:shadow-lightShadow hover:shadow-shadowBlue",
    yellow:
      "text-yellow border-yellow hover:bg-yellow hover:border-strokeYellow hover:shadow-lightShadow hover:shadow-shadowYellow",
    green:
      "text-green border-green hover:bg-green hover:border-strokeGreen hover:shadow-lightShadow hover:shadow-shadowGreen",
  };

  return (
    <button
      className={`
        h-16 min-w-16 w-full flex justify-center items-center
        text-3xl border-[5px] button rounded-xl transition-all 
        hover:text-white ${theme && variantes[theme]}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
