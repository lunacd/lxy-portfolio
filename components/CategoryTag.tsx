interface CategoryTagProps {
  className?: string;
  category: string;
}

export default function CategoryTag(props: CategoryTagProps) {
  return (
    <div
      className={`rounded-full border border-black px-2 py-1 text-xs text-black md:text-sm
        ${props.className}`}
    >
      {props.category}
    </div>
  );
}
