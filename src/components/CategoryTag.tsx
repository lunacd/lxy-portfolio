import classNames from "classnames";

interface CategoryTagProps {
  category: string;
  textColor?: string;
}

const defaultProps = {
  titleColor: "text-gray-950",
};

export default function CategoryTag(propsIn: CategoryTagProps) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <div
      className={classNames(
        "paragraph rounded-full border px-2 py-1 text-black",
        {
          "border-gray-100 text-gray-100": props.textColor === "light",
          "border-gray-950 text-gray-950": props.textColor === "dark",
        },
      )}
    >
      {props.category}
    </div>
  );
}
