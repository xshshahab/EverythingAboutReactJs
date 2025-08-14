const Button = ({ children, onClick, className = "" }) => {
  const isDestructive = className.includes("destructive");

  const bgColor = isDestructive ? "bg-red-900" : "bg-neutral-900";

  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${className} p-2  px-6 text-white rounded-md`}
    >
      {children}
    </button>
  );
};

export default Button;
