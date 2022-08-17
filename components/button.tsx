import React from "react";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <a
      className="py-4 px-10 subtitle rounded-full bg-black text-white"
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      {props.text}
    </a>
  );
};

export default Button;
