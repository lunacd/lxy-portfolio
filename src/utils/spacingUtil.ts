export type Spacing =
  | "none"
  | "small"
  | "medium"
  | "regular"
  | "large"
  | "xl"
  | "xxl";

export function getSpacing(spacing: Spacing): string {
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
