import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import { TextColor } from "@/utils/CommonTypes";

interface ButtonProps {
  href: string;
  className?: string;
  openInNewPage?: boolean | undefined;
  color: TextColor;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <a
      className={classNames(
        "pargraph rounded-full px-6 py-1 font-semibold",
        props.className,
        {
          "bg-black text-white": props.color === "dark",
          "bg-white text-black": props.color === "light",
        },
      )}
      href={props.href}
      target={props.openInNewPage ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}
