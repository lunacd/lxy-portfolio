const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
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
  importOrder: ["<THIRD_PARTY_MODULES>", "^\\.{1,2}\\/.*"],
};

export default config;
