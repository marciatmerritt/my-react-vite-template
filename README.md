# React Vite Starter Template with TypeScript, ESLint, Stylelint, Prettier, Husky, Commitlint, Commitizen, Lint-Staged, and Vitest

# Table of Contents

1.  [Introduction](#introduction)
2.  [Features](#features)
3.  [Prerequisites and Required Tools](#prerequisites-and-required-tools)
4.  [Quick Start](#quick-start)
5.  [Project Setup & Configuration](#project-setup--configuration)
    1.  [Create a New Vite Project](#1️⃣-create-a-new-vite-project-📂)
    2.  [Initialize Git](#2️⃣-initialize-git)
    3.  [Clean Up](#3️⃣-clean-up-🧹🗑️)
    4.  [Create `nvmrc`](#4️⃣-create-nvmrc)
    5.  [Start the Development Server](#5️⃣-start-the-development-server)
    6.  [Editor Configuration](#6️⃣editor-configuration)
    7.  [VS Code Configuration](#7️⃣vs-code-configuration)
6.  [Install & Configure Code Quality Tools](#🔍-install--configure-code-quality-tools)
    1.  [ESLint & Prettier](#install-eslint--prettier)
    2.  [Stylelint (`.stylelintrc`)](#install--configure-stylelint-stylelintrc)
7.  [Update Package.json Scripts](#update-packagejson-scripts)
8.  [Git Hooks (Husky, Commitlint, Commitizen, and Lint-Staged)](#git-hooks-husky-commitlint-commitizen-and-lint-staged)
9.  [8️⃣ Vitest Configuration](#8️⃣-vitest-configuration)

## Introduction

This template is designed to streamline the setup of a new **React Vite** project with essential configurations for **linting, formatting, and best practices**. It provides a solid foundation for scalable applications, featuring **TypeScript** for type safety and a robust suite of developer tools.

## Features 🎁✨

- ⚡ **Vite + React + TypeScript** – Fast and modern development stack.
- 🎨 **ESLint, Prettier, Stylelint** – Automated linting & formatting.
- 🔄 **Husky & Lint-Staged** – Pre-commit Git hooks automation.
- 📝 **Commitlint & Commitizen** – Enforces and standardizes commit messages.
- 🧪 **Vitest** – Unit testing framework.

For more in-depth explanations, visit the [**LEARNING_LOG.md**](docs/LEARNING_LOG.md) file 📚💡.

## Prerequisites and Required Tools 🛠️

To ensure consistency, install these required tools:

- **Node.js:** (version specified in `.nvmrc`) - [**Node.js**](https://nodejs.org/)
- **npm:** (comes with Node.js) - [**npm**](https://www.npmjs.com/)
- **nvm (Node Version Manager):** (recommended) - [**nvm**](https://github.com/nvm-sh/nvm)
- **VS Code:** (recommended editor) - [**VS Code**](https://code.visualstudio.com/)
- **VS Code Extensions:**
  - ESLint: `dbaeumer.vscode-eslint`
  - Prettier: `esbenp.prettier-vscode`
  - Stylelint: `stylelint.vscode-stylelint`
  - Code Spell Checker: `streetsidesoftware.code-spell-checker`
  - Markdown Preview GitHub Styles: `bierner.markdown-preview-github-styles`
  - Typescript Next: `ms-vscode.vscode-typescript-next`

---

## Quick Start ⚡

1. 📥 **Clone:** `git clone <your_repository_url>`
2. 📂 **Install:** `cd <your_project_name> && npm install`
3. 🚀 **Start:** `npm run dev`

This will start the Vite development server at `http://localhost:5173/`.

---

## Project Setup & Configuration ⚙️📑🛠️

### 1️⃣ Create a New Vite Project 📂

Use this command, replacing `<your-app-name>` with your desired project name

```bash
# For npm 7+, an extra double-dash is required
npm create vite@latest <your-app-name> -- --template react-ts
cd <your-app-name>
npm install
```

### 2️⃣ Initialize Git

```bash
git init
```

### 3️⃣ Clean Up 🧹🗑️

#### 🗑️ Delete Unnecessary Files (`App.css` and `assets` directory)

```bash
rm ./src/App.css
rm -r ./src/assets
```

- **Removes default styles** from `App.tsx` so you can use your own.
- **Deletes sample assets** to keep the project lightweight (skip if needed).

#### ✂️ Simplify `App.tsx`

Replace its contents with a minimal version:

```tsx
function App() {
  return <div>Hello world!</div>;
}

export default App;
```

#### ✂️ Minimize `index.css` to include only essential styles

```css
body {
  margin: 0; /* Keeps spacing minimal */
}
```

### 4️⃣ Create `nvmrc`:

In the project root, create `.nvmrc` and add the desired Node.js version (e.g., `v22.9.0`).

    ```
    v22.9.0  // Example: Use Node.js version 22.9.0
    ```

### 5️⃣ Start the Development Server

```bash
npm run dev
```

- Default URL: **http://localhost:5173/**

### 6️⃣Editor Configuration

Create `.editorconfig` in root directory and add the following content:

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.bat]
end_of_line = crlf

[*.{json,html}]
indent_size = 2

[*.{js,jsx,ts,tsx}]
indent_size = 2

[*.{css,scss}]
indent_size = 2

[*.yml]
indent_size = 2

[*.md]
trim_trailing_whitespace = false
max_line_length = off

[*.tsv]
indent_style = tab

[*.csv]
trim_trailing_whitespace = false

[*.py]
indent_size = 4
```

### 7️⃣VS Code Configuration

#### VS Code Settings (`.vscode/settings.json`)

📌 _Create and configure VS Code settings:_

1. Open your project in **VS Code**.
2. **Create a `.vscode` directory** if it doesn’t exist.
3. **Inside `.vscode`, create a file named `settings.json`.**
4. Copy and paste the following JSON configuration:

```json
{
  "editor.bracketPairColorization.enabled": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "files.eol": "\n",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "editor.rulers": [80, 120],
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.updateImportsOnFileMove.enabled": "always"
}
```

#### Recommended Extensions (`.vscode/extensions.json`)

1. Inside `.vscode`, **create a file named `extensions.json`**.
2. Copy and paste the following JSON:

```json
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode", "stylelint.vscode-stylelint", "streetsidesoftware.code-spell-checker", "bierner.markdown-preview-github-styles", "ms-vscode.vscode-typescript-next"]
}
```

💡 _When opening the project, VS Code will suggest installing these extensions if missing._

---

## 🔍 Install & Configure Code Quality Tools

Vite includes ESLint v.9 by default, but additional plugins and configurations can enhance your project's code quality.

### ESLint & Prettier

**ESLint plugins for React, hooks, refresh, and compiler**

```bash
npm install -D eslint-plugin-react eslint-plugin-react-compiler
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

The **Airbnb style guide** provides stricter coding standards and consistency but is **optional**. Omit it if you prefer flexibility.

```bash
npm install -D eslint-config-airbnb-base eslint-config-airbnb-typescript
```

#### Modify `eslint.config.js`:

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
      ...tseslint.configs.strict, // 'airbnb-base',
      // 'airbnb-typescript',
      // If using Airbnb style guide, uncomment the following lines:
      eslintPluginPrettier, // Prettier should be last
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
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
      ...react.configs.recommended.rules, // Enables recommended React rules
      ...react.configs['jsx-runtime'].rules, // Important for React 17+
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'], // Side effects
            ['^react$', '^@?\\w'], // Packages
            ['^@', '^'], // Aliases and other imports
            ['^\\./'], // Relative imports
            ['^.+\\.(module.css|module.scss|css|scss)$'], // Styles
            ['^.+\\.(gif|png|svg|jpg)$'], // Assets
          ],
        },
      ],
      // 'react/react-in-jsx-scope': 'off', // Often needed with newer React versions
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
);
```

#### Create `.prettierrc` (Formatting Rules)

In your **project root**, create a file named `.prettierrc` and add the following configuration:

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

#### Create `.prettierignore` (Ignored Files)

To prevent Prettier from formatting unnecessary files (e.g., **node_modules**, build artifacts), create a `.prettierignore` file in the root directory:

```txt
# Ignore dependency and configuration lock files
package-lock.json
yarn.lock

# Ignore development environment files
.vscode
.idea
.DS_Store

# Ignore Next.js build artifacts
.next

# Ignore build and output directories
build
dist
coverage
node_modules

# Ignore all HTML files
**/*.html

```

---

### Install & Configure Stylelint (`.stylelintrc`)

Stylelint helps enforce **consistent CSS/SCSS styling** and prevents **common errors** in stylesheets.

To install **Stylelint and the Standard Config**:

```bash
npm install -D stylelint stylelint-config-standard
```

Stylelint uses:

1️⃣ **`.stylelintrc`** – Defines styling rules.
2️⃣ **`.stylelintignore`** – Specifies files to **exclude from linting** (e.g., third-party styles, `node_modules`).

#### 1. Create `.stylelintrc` (Linting Rules)

In your **project root**, create a `.stylelintrc` file and add:

```json
{
  "extends": ["stylelint-config-standard"],
  "rules": {
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
  }
}
```

#### 2. Create `.stylelintignore` (Ignored Files)

To exclude unnecessary files from Stylelint, create a **`.stylelintignore`** file:

```txt
# Ignore dependency and configuration lock files
package-lock.json
yarn.lock

# Ignore development environment files
.vscode
.idea
.DS_Store

# Ignore Next.js build artifacts
.next

# Ignore build and output directories
build
dist
coverage
node_modules
public
```

If your project uses **SCSS or CSS Modules**, additional Stylelint configurations are required.

#### 1️⃣ SCSS Support

To enable **SCSS linting**, install:

```bash
npm install -D stylelint-config-recommended-scss
```

Then update **`.stylelintrc`**:

```json
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss" // Enables SCSS-specific linting rules
  ]
  // ... other rules
}
```

---

#### 2️⃣ CSS Modules Support

To lint **CSS Modules** properly, install:

```bash
npm install -D stylelint-config-css-modules
```

Then update **`.stylelintrc`**:

```json
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-css-modules" // Enables CSS Modules-specific rules
  ]
  // ... other rules
}
```

---

## Update Package.json Scripts

The following scripts are added to your `package.json` file to provide convenient commands for running the code quality tools.

```json
"scripts": {
  "lint:eslint": "eslint src/**/*.{ts,tsx,js,jsx,json}", // Runs ESLint on all specified files.
  "lint:eslint:fix": "eslint src/**/*.{ts,tsx,js,jsx,json} --fix", // Runs ESLint and attempts to fix issues.
  "lint:stylelint": "stylelint src/**/*.{css,scss}", // Runs Stylelint on all specified style files.
  "lint:stylelint:fix": "stylelint src/**/*.{css,scss} --fix", // Runs Stylelint and attempts to fix issues.
  "format:check": "prettier --check . --log-level warn --ignore-path ./.gitignore", // Checks if files are formatted with Prettier.
  "format:fix": "prettier --write .", // Formats all files with Prettier.
  "type-check": "tsc --noEmit", // Runs TypeScript type checking.
  "type-check:watch": "tsc --watch --noEmit", // Runs TypeScript type checking in watch mode.
  "lint": "npm run lint:eslint && npm run lint:stylelint && npm run format:check && npm run type-check" // Runs all linting and type checking scripts.
},
```

## Git Hooks

### 7️⃣ Husky, Commitlint, Commitizen, and Lint-Staged

#### a. Install Dependencies

```bash
npm install -D \
husky \
@commitlint/{config-conventional,cli} \
commitizen \
cz-customizable \
cz-conventional-changelog \
lint-staged \
imagemin-lint-staged
```

#### b. Configure Husky

Initializing Husky will create a `pre-commit` script in `.husky/` and updates the prepare script in the `package.json`.

```bash
npx husky init
```

Alternatively, you can manually modify `package.json` to include a `prepare` script.

✅ **If `.git` is in the same directory as `package.json`:**

```json
{
  "scripts": {
    "prepare": "husky"
  }
}
```

✅ **If `.git` is at the root but `package.json` is in `frontend/`:**

Your folder structure:

```
/project
  |-- .git/
  |-- backend/
  |-- frontend/
      |-- package.json
```

Since Git is in the root (`project/`), but Husky needs to be installed inside `frontend/`, update `package.json` like this:

```json
{
  "scripts": {
    "prepare": "cd .. && husky install frontend/.husky"
  }
}
```

This ensures Husky is installed inside `frontend/` but recognizes `.git` from the root.

#### c. Run the Prepare Script to create a `.husky/` directory

```bash
npm run prepare
```

#### d. Update `.husky/pre-commit` Hook

Modify your `.husky/pre-commit` script to run lint staged:

`pre-commit`:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "Running pre-commit checks..."

# Run lint-staged
echo "Running lint-staged..."
npx lint-staged

# Check if lint-staged was successful
if [ $? -ne 0 ]; then
  echo "lint-staged failed. Aborting commit."
  exit 1
fi

echo "Pre-commit checks passed!"

exit 0
```

Ensure that the `.husky/pre-commit` file has executable permissions. You can add these permissions using the following command: `chmod +x .husky/pre-commit`

#### e. Configure commitlint (.commitlintrc):

Create `.commitlintrc`:

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```

Then, set up a Husky **commit-msg** hook:

```sh
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

This ensures that commit messages follow the conventional commit format.

---

#### f. Configure Commitizen

Add the following to your `package.json` file:

```json
"config": {
  "commitizen": {
    "path": "cz-customizable"
  },
  "cz-customizable": {
    "config": "cz-config.json"
  }
}
```

Create `config/cz-config.json` (customize as needed):

```json
{
  "types": [
    { "value": "init", "name": "🚀 init: start project or task" },
    { "value": "feat", "name": "✨ feat: add new functionality" },
    { "value": "fix", "name": "🐛 fix: resolve bug in existing functionality" },
    { "value": "docs", "name": "📚 docs: update documentation only" },
    { "value": "style", "name": "💄 style: apply code style changes (formatting, whitespace)" },
    { "value": "refactor", "name": "♻️ refactor: restructure code without changing behavior" },
    { "value": "perf", "name": "🚀 perf: improve performance" },
    { "value": "test", "name": "🧪 test: add or update tests" },
    { "value": "build", "name": "🏗 build: modify build system or dependencies" },
    { "value": "ci", "name": "⚙️ ci: update CI/CD configuration (GitHub Actions, Jenkins, etc.)" },
    { "value": "chore", "name": "🛠 chore: perform maintenance tasks (configs, scripts, etc.)" },
    { "value": "revert", "name": "⏪ revert: undo previous commit" }
  ],
  "scopes": [{ "name": " " }, { "name": "core" }, { "name": "ui" }, { "name": "backend" }, { "name": "api" }, { "name": "database" }, { "name": "docs" }, { "name": "config" }],
  "messages": {
    "type": "select the type of change:",
    "scope": "specify the scope of this change (optional, press enter to skip):",
    "subject": "write a short, lowercase, imperative description (max 50 chars):\n",
    "body": "provide a longer description (optional, press enter to skip):\n",
    "footer": "reference any issues (e.g., #123) (optional, press enter to skip):\n",
    "confirmCommit": "confirm commit message?"
  },
  "allowBreakingChanges": ["feat", "fix", "refactor"],
  "subjectLimit": 50
}
```

To use Commitizen, run `git cz` or `npm run commit`.

#### g. Configure Lint-Staged (.lintstagedrc)

The `.lintstagedrc` file allows for more in-depth configuration of Lint-Staged, and allows for running different commands on different file types.

Create `.lintstagedrc`:

```json
{
  "src/**/*.{ts,tsx,js,jsx}": ["prettier --write", "eslint --fix --cache", "tsc --noEmit"],
  "*.{json,md}": ["prettier --write"],
  "*.{css,scss}": ["stylelint --fix --cache", "prettier --write"],
  "*.{yaml,yml,toml}": ["prettier --write"],
  "*.{png,*.jpeg,*.jpg,*.gif,*.svg}": ["imagemin-lint-staged"]
}
```

#### h. Add Husky hooks and scripts to `package.json`

```json
"scripts": {
  "prepare": "husky",
  "pre-commit": "lint-staged",
  "commit": "git-cz",
  // ... other scripts
}
```

Then, set up a Husky **pre-commit** hook:

```sh
npx husky add .husky/pre-commit "npx lint-staged"
```

---

### 8️⃣ Vitest Configuration

#### a. Install Vitest

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

#### b. Vitest Configuration (vite.config.ts)

Add vitest configuration to your `vite.config.ts` file:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
```

#### c. Create setupTests.ts

Create a `src/setupTests.ts` file:

```typescript
import '@testing-library/jest-dom/vitest';
```

#### d. Create a Test File

Create a test file, for example, `src/App.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
```

#### e. Update package.json scripts

```json
"scripts": {
  // ... other scripts
  "test": "vitest",
  "test:coverage": "vitest run --coverage"
}
```

---

🚀 **Happy Coding!** 🎉🎨💻
