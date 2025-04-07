# 📏 Code Quality Guide ✨

This guide details how to set up and configure code quality tools for a React + Vite project using **ESLint**, **Prettier**, and **Stylelint**. These tools help enforce consistent code style, catch errors early, and improve maintainability.

---

## 🔧 Tool Overview

| Tool      | Purpose                                                                 |
| --------- | ----------------------------------------------------------------------- |
| ESLint    | Lints JavaScript/TypeScript code for errors and enforces code standards |
| Prettier  | Automatically formats code consistently across your codebase            |
| Stylelint | Lints and enforces style rules in CSS/SCSS                              |

---

## Table of Contents

- [1️⃣ ESLint Setup](#eslint-setup)
- [2️⃣ Prettier Setup](#prettier-setup)
- [3️⃣ Stylelint Setup](#stylelint-setup)

---

## ESLint Setup 🛠️

ESLint is a **JavaScript/TypeScript linter** that helps enforce coding standards and detect potential errors. By default, Vite includes ESLint v.9, but additional plugins and configurations can enhance your project's code quality.

### **Installation**

**ESLint plugins for React, hooks, refresh, and compiler**

```bash
npm install -D eslint-plugin-react eslint-plugin-react-compiler eslint-plugin-react-hooks
```

**TypeScript ESLint plugins and parser**

```bash
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

**Prettier integration and import sorting**

```bash
npm install -D \
  eslint-plugin-prettier \
  eslint-config-prettier \
  eslint-plugin-simple-import-sort \
  eslint-plugin-unused-imports \
  prettier
```

### **ESLint Configuration (`eslint.config.js`)**

Vite includes a default `eslint.config.js` file in the project's root. Enhancing this configuration improves **type-aware linting**, **React best practices**, and **code formatting**.

```js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import reactCompiler from 'eslint-plugin-react-compiler';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

export default tseslint.config(
  {
    ignores: ['node_modules', 'coverage', 'dist', 'build'],
  },
  {
    extends: [
      js.configs.recommended,
      // ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strict,
      eslintPluginPrettier,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-compiler': reactCompiler,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react-compiler/react-compiler': 'error',
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$', '^@?\\w'], // Packages
            ['^\\u0000'], // Side effects
            ['^@', '^'], // Aliases and other imports
            ['^\\./'], // Relative imports
            ['^.+\\.(module.css|module.scss|css|scss)$'], // Styles
            ['^.+\\.(gif|png|svg|jpg)$'], // Assets
          ],
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'simple-import-sort/imports': 'error',
      'unused-imports/no-unused-imports': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
);
```

> ESLint now supports flat config (`eslint.config.js`). No `.eslintignore` is needed with Vite's default setup.

For more advanced ESLint rules, see [ESLint Documentation](https://eslint.org/docs/latest/).

---

## 2️⃣ Prettier Setup 🖌️

Prettier is an **automatic code formatter** that enforces a consistent style.

### **Installation**

```bash
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

### **Prettier Configuration (`.prettierrc`)**

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "arrowParens": "always"
}
```

### **Run Prettier**

```bash
npm run format:fix
```

### 🙈 Prettier Ignore (`.prettierignore`)

In the project root directory, create a file named `.prettierignore` (no file extension). Add the following content:

```ini
# Ignore artifacts
build
coverage
dist
.coverage
.vscode
tmp/
node_modules
package-lock.json
yarn.lock
pnpm-lock.yaml
logs/
*.log
```

For more details, visit the [Prettier Documentation](https://prettier.io/).

---

## 3️⃣ Stylelint Setup 🎨

Stylelint enforces **best practices in CSS/SCSS** to maintain clean styles.

### Installation

```bash
npm install -D stylelint stylelint-config-standard
```

#### Optional Add-Ons

- For **SCSS**:

```bash
npm install -D stylelint-config-recommended-scss
```

- For **CSS Modules**:

```bash
npm install -D stylelint-config-css-modules
```

### Basic Stylelint Configuration (`.stylelintrc`)

```json
{
  "extends": ["stylelint-config-standard", "stylelint-config-recommended-scss", "stylelint-config-css-modules"],
  "rules": {
    "indentation": 2,
    "max-empty-lines": 2,
    "block-no-empty": true,
    "string-quotes": "single",
    "color-no-invalid-hex": true,
    "font-family-no-missing-generic-family-keyword": true,
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]*$",
    "selector-id-pattern": "^[a-z][a-zA-Z0-9]*$",
    "selector-pseudo-class-no-unknown": [true, { "ignorePseudoClasses": ["global"] }],
    "property-no-unknown": true,
    "value-keyword-case": "lower",
    "declaration-block-no-duplicate-properties": true,
    "no-descending-specificity": true
  }
}
```

### 🙈 Stylelint Ignore (`.stylelintignore`)

```txt
node_modules
dist
coverage
.vscode
```

---

### **Run Stylelint**

```bash
npm run lint:stylelint
```

For more details, visit the [Stylelint Documentation](https://stylelint.io/).

---

## 📜 Package.json Scripts

```json
"scripts": {
  "lint:eslint": "eslint src/**/*.{ts,tsx,js,jsx,json}",
  "lint:eslint:fix": "eslint src/**/*.{ts,tsx,js,jsx,json} --fix",
  "lint:stylelint": "stylelint src/**/*.{css,scss}",
  "lint:stylelint:fix": "stylelint src/**/*.{css,scss} --fix",
  "format:check": "prettier --check . --log-level warn --ignore-path ./.gitignore",
  "format:fix": "prettier --write .",
  "type-check": "tsc --noEmit",
  "type-check:watch": "tsc --watch --noEmit",
  "lint:fix": "npm run lint:eslint && npm run lint:stylelint:fix && npm run format:fix && npm run type-check"
}
```

---

## 🧠 Why Use These Tools?

- 🚫 Catch errors early
- ✅ Maintain code consistency
- 🤝 Reduce merge conflicts
- 💡 Improve onboarding for new devs
- 📦 Improve long-term maintainability

---

## 🔮 Future Considerations: Shared Ignore Files

Create a `.common-ignore` file and reference it across `.prettierignore`, `.stylelintignore`, etc. for easier maintenance in larger projects.

```ini
# .common-ignore
node_modules
build
dist
coverage
.vscode
*.log
```

```txt
# .prettierignore
.common-ignore
```

```txt
# .stylelintignore
.common-ignore
```

---

✅ With these tools in place, your codebase is clean, consistent, and ready to scale!
