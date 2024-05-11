const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-classnames",
    "prettier-plugin-merge",
  ],
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: ["^(?!@/).*", "^@/(?!images).*/.*", "^@/images/.*"],
};

export default config;
