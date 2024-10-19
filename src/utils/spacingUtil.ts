export function getSpacing(
  spacing: "small" | "medium" | "regular" | "large" | "xl" | "xxl",
): string {
  switch (spacing) {
    case "small":
      return "0.5rem";
    case "medium":
      return "1rem";
    case "regular":
      return "var(--spacing)";
    case "large":
      return "var(--spacing-lg)";
    case "xl":
      return "calc(2 * var(--spacing-lg))";
    case "xxl":
      return "calc(3 * var(--spacing-lg))";
  }
}
