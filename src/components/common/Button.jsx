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
      className={`bg-primary text-primary-foreground px-5 py-2 hover:bg-primary/90 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
