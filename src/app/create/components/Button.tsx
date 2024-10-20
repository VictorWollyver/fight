interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  baseColor?: string;
  children: React.ReactNode;
}

const Button = ({ baseColor, children, ...rest }: ButtonProps) => {
  return (
    <button
      style={{ borderColor: baseColor, color: baseColor }}
      className={`h-16 min-w-16 w-full flex justify-center items-center text-3xl hover:text-black border-[5px] rounded-xl`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
