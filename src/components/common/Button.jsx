import React from "react";

function Button({
  type = "button",
  onClick,
  children,
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#4B352A] text-[#F0F2BD] px-5 py-2 hover:bg-[#fce2d7] hover:text-[#4B352A] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
