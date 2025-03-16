import React, { PropsWithChildren } from "react";

interface ButtonProps {
  href: string;
  className?: string;
  openInNewPage?: boolean | undefined;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <a
      className={`subtitle rounded-full bg-black px-6 py-2 text-white lg:px-10 lg:py-4
        ${props.className}`}
      href={props.href}
      target={props.openInNewPage ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}
