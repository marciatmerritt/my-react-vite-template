import { cache } from "react";

export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules"
  ],
  rules: {
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "font-family-no-missing-generic-family-keyword": true,
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]*$",
    "selector-id-pattern": "^[a-z][a-zA-Z0-9]*$",
    "selector-pseudo-class-no-unknown": [true, { "ignorePseudoClasses": ["global"] }],
    "property-no-unknown": true,
    "value-keyword-case": "lower",
    "declaration-block-no-duplicate-properties": true,
    "no-descending-specificity": true
  },
};
