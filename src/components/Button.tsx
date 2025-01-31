import React, { PropsWithChildren } from "react";

interface ButtonProps {
  href: string;
  className?: string;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <a
      className={`subtitle rounded-full bg-black px-6 py-2 text-white lg:px-10 lg:py-4
        ${props.className}`}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}
