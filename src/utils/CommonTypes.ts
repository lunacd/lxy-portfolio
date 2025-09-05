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

export function stringIsType(value: string): value is PortfolioType {
  return portfolioTypes.includes(value as PortfolioType);
}
