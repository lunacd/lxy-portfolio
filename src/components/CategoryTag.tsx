import classNames from "classnames";

interface CategoryTagProps {
  category: string;
  titleColor?: string;
}

const defaultProps = {
  titleColor: "text-gray-950",
};

export default function CategoryTag(propsIn: CategoryTagProps) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <div
      className={classNames(
        "rounded-full border px-2 py-1 text-xs text-black md:text-sm",
        {
          [props.titleColor]: true,
          "border-gray-100": props.titleColor === "text-gray-100",
          "border-gray-950": props.titleColor !== "text-gray-100",
        },
      )}
    >
      {props.category}
    </div>
  );
}
