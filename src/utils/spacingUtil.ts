export function getSpacing(
  spacing: "none" | "small" | "medium" | "regular" | "large" | "xl" | "xxl",
): string {
  switch (spacing) {
    case "none":
      return "0";
    case "small":
      return "0.5rem";
    case "medium":
      return "1rem";
    case "regular":
      return "var(--lxy-spacing)";
    case "large":
      return "var(--lxy-spacing-lg)";
    case "xl":
      return "calc(2 * var(--lxy-spacing-lg))";
    case "xxl":
      return "calc(3 * var(--lxy-spacing-lg))";
  }
}
