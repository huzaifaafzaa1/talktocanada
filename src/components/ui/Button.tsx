import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset"; // Added type prop
}

const Button: React.FC<ButtonProps> = ({ className = "", children, type = "button" }) => {
  return (
    <button type={type} className={`font-interTight font-medium ${className}`}>
      {children}
    </button>
  );
};

export default Button;
