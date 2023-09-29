import React from "react";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <a
      className="subtitle rounded-full bg-black px-6 py-2 text-white lg:px-10 lg:py-4"
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      {props.text}
    </a>
  );
};

export default Button;
