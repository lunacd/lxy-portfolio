interface CategoryTagProps {
  className?: string;
  category: string;
}

export default function CategoryTag(props: CategoryTagProps) {
  return (
    <div
      className={`rounded-full border border-[#7E4001] px-2 py-1 text-sm text-[#7E4001]
        ${props.className}`}
    >
      {props.category}
    </div>
  );
}
