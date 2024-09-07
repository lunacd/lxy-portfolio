interface CategoryTagProps {
  className?: string;
  category: string;
}

export default function CategoryTag(props: CategoryTagProps) {
  return (
    <div
      className={`rounded-full border border-[#7E4001] px-2 py-1 text-xs text-[#7E4001] md:text-sm
        ${props.className}`}
    >
      {props.category}
    </div>
  );
}
