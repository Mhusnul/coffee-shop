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
      className={`bg-[#220d00] text-white px-5 py-2 hover:bg-[#fce2d7] hover:text-[#220d00] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
