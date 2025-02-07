export default {
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
  },
};
