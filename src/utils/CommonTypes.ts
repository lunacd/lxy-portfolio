export type TextColor = "dark" | "light";

export type PortfolioType =
  | "product-designer"
  | "instructional-designer"
  | "industrial-designer"
  | "designer";

export const portfolioTypes: PortfolioType[] = [
  "product-designer",
  "instructional-designer",
  "industrial-designer",
  "designer",
];

export type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down";

export function stringIsType(value: string): value is PortfolioType {
  return portfolioTypes.includes(value as PortfolioType);
}
