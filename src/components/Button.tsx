import React, { PropsWithChildren } from "react";

interface ButtonProps {
  href: string;
  className?: string;
  openInNewPage?: boolean | undefined;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <a
      className={`subtitle rounded-full bg-black text-white px-6 py-1
        ${props.className ? props.className : ""}`}
      href={props.href}
      target={props.openInNewPage ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}
