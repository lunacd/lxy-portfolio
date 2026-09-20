const config = {
  extends: "stylelint-config-recommended",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "theme", "reference"],
      },
    ],
    "at-rule-no-deprecated": [
      true,
      {
        ignoreAtRules: ["apply"],
      },
    ],
    "at-rule-prelude-no-invalid": [
      true,
      {
        ignoreAtRules: ["apply"],
      },
    ],
  },
};

export default config;
