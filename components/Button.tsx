import Image from "next/image";
import React from "react";

interface ButtonProps {
  type: "submit" | "button";
  title: string;
  icon?: string;
  variant?: string;
}

function Button({
  type = "button",
  title,
  icon,
  variant = "btn_white_outline",
}: ButtonProps) {
  return (
    <button
      className={`
     flexCenter gap-3 rounded-full border ${variant}
    `}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap"> {title}</label>
    </button>
  );
}

export default Button;
