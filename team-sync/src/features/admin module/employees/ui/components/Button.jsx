const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  disabled = false,
}) => {
  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",

    secondary:
      "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-400",

    dark: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500",

    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",

    ghost:
      "text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        rounded-lg px-4 py-2.5
        text-sm font-medium
        transition
        focus:outline-none focus:ring-2 focus:ring-offset-1
        disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
