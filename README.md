# React Vite Starter Template with TypeScript, ESLint, Stylelint, Prettier, Husky, Commitlint, Commitizen, Lint-Staged, and Vitest

> ⚛️ A modern React + Vite starter template featuring TypeScript, ESLint, Prettier, Stylelint, Commitlint, Husky, and Vitest — with clean code and scalable structure in mind.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#️-prerequisites-and-required-tools)
3. [Quick Start](#-quick-start-tldr)
4. [For Beginners](#-for-beginners-what-is-all-this)
5. [Getting Started](#getting-started-project-setup)
   - [Create a New Vite Project](#create-a-new-vite-project)
   - [Initialize Git](#initialize-git)
   - [Clean Up Boilerplate](#clean-up-boilerplate)
   - [Configure `.gitignore`](#configure-gitignore)
   - [Create `.nvmrc`](#create-nvmrc)
   - [Run the Dev Server](#run-the-dev-server)
6. [Editor & VS Code Setup](#editor--vs-code-setup)
7. [Code Quality Tooling](#code-quality-tooling)
   - [ESLint](#eslint)
   - [Prettier](#prettier)
   - [Stylelint](#stylelint)
8. [Git Hooks & Commit Standards](#-git-hooks--commit-standards)
9. [Testing with Vitest](#-testing-with-vitest)
10. [Environment Variables](#-environment-variables)
11. [Path Aliases](#-path-aliases)

## Introduction

This template is designed to streamline the setup of a new **React Vite** project with essential configurations for linting, formatting, testing, and best practices. It provides a solid foundation for scalable applications, featuring **TypeScript** for type safety and a robust suite of developer tools.

### Features 🎁✨

- ⚡ **Vite + React + TypeScript** – Fast and modern development stack.
- 🎨 **ESLint, Prettier, Stylelint** – Automated linting & formatting.
- 🔄 **Husky & Lint-Staged** – Pre-commit Git hooks automation.
- 📝 **Commitlint & Commitizen** – Enforces and standardizes commit messages.
- 🧪 **Vitest** – Unit testing framework.
- 🔗 `vite-tsconfig-paths` – Automatically maps TypeScript path aliases in Vite.

For more in-depth explanations, visit the [**LEARNING_LOG.md**](docs/LEARNING_LOG.md) file 📚💡.

## 🛠️ Prerequisites and Required Tools

To ensure consistency, install these required tools:

- **Node.js:** (Use the latest LTS version or check `.nvmrc` for the specific version.) - [**Node.js**](https://nodejs.org/)
- **npm:** (comes with Node.js) - [**npm**](https://www.npmjs.com/)
- **nvm (Node Version Manager):** - [**nvm**](https://github.com/nvm-sh/nvm)
- **VS Code:** (recommended editor) - [**VS Code**](https://code.visualstudio.com/)
- **VS Code Extensions:**
  - ESLint: `dbaeumer.vscode-eslint`
  - Prettier: `esbenp.prettier-vscode`
  - Stylelint: `stylelint.vscode-stylelint`
  - Code Spell Checker: `streetsidesoftware.code-spell-checker`
  - Markdown Preview GitHub Styles: `bierner.markdown-preview-github-styles`
  - Typescript Next: `ms-vscode.vscode-typescript-next`

---

## ⚡ Quick Start (TL;DR)

```bash
git clone <your-repository-url>
cd <your-project-name>
nvm use
npm install
npm run dev
```

This will start the Vite development server at `http://localhost:5173/`.

---

## 🧠 For Beginners: What Is All This?

If you're new to these tools, here's what they do in plain English:

- **Vite**: Development server and build tool, fast and modern, Like Create React App but faster. It's the engine running your app.
- **TypeScript**: Helps catch bugs early by adding types to JavaScript.
- **ESLint**: Finds and fixes problems in your JavaScript/TypeScript code.
- **Prettier**: Automatically formats your code so it looks consistent.
- **Stylelint**: Does what ESLint does, but for your CSS.
- **Husky + Lint-Staged**: Makes sure your code is clean before you commit it.
- **Commitlint + Commitizen**: Helps you write structured commit messages via prompts.
- **Vitest**: A testing library and fast way to test your code to make sure it works.

---

### When to Use This Boilerplate

This template is designed for **fast, modern React development** using [Vite](https://vitejs.dev/) as the build tool. Use this boilerplate when:

- You're building a **single-page application (SPA)** or frontend-only app
- You want a fast, lightweight, and highly customizable React setup
- You don’t need built-in server-side rendering (SSR) or file-based routing
- You prefer to manage your own routing (e.g., using `react-router-dom`)
- You're building **component libraries, admin panels, dashboards**, or design systems
- You want a robust developer experience with:
  - TypeScript
  - ESLint, Prettier, and Stylelint
  - Commit hooks with Husky and Commitizen
  - Vitest for unit testing

> ⚠️ If you need server-side rendering (SSR), static site generation (SSG), API routes, or file-based routing, consider using a Next.js-based boilerplate instead.

### Who is this for? 🤔💡

This template is designed **for my future self**—someone who wants to quickly set up a new **React + Vite** project with all the essential tools, configurations, and best practices in place. It serves as both a **starter template** and a **personal knowledge base** to:

- 🚀 **Kickstart new projects** without redoing setup steps.
- 🔧 **Reference commonly used tools** (ESLint, Prettier, Stylelint, Husky, Vitest, etc.).
- 📌 **Solve recurring issues** without having to research them again.
- 🏗️ **Maintain consistency** across different projects by using a structured, well-documented setup.

### 🗂️ Project Structure

```
my-app/
├── .vscode/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
├── .editorconfig
├── .eslintrc.js
├── .prettierrc
├── .stylelintrc
├── .gitignore
├── vite.config.ts
├── package.json
└── tsconfig.json
```

---

## Getting Started: Project Setup

⚙️📑🛠️

### 📂 Create a New Vite Project

Use this command, replacing `<your-app-name>` with your desired project name

```bash
npm create vite@latest <your-app-name> -- --template react-ts
cd <your-app-name>
npm install
```

### Initialize Git

```bash
git init
```

After running this command, your project is now a Git repository.

### Clean Up Boilerplate

The default Vite React template includes example content that may not be necessary for your project. This section helps you **remove boilerplate code** and create a **cleaner, minimal starting point**.

**🗑️ Delete Unnecessary Files (`App.css` and `assets` directory)**
Run the following commands to delete default assets and styles:

```bash
rm ./src/App.css
rm -r ./src/assets
```

**✂️ Simplify `App.tsx`**
Replace the default content in `src/App.tsx` with a minimal version:

```tsx
function App() {
  return <div>Hello world!</div>;
}

export default App;
```

**🎨 Minimize `index.css`**
Update `src/index.css` to only include essential styles:

```css
body {
  margin: 0; /* Keeps spacing minimal */
}
```

### Configure `.gitIgnore`

Vite automatically generates a `.gitignore` when creating a new project. Ensure that it includes the following:

```ini
# VS Code settings
.vscode/

# Dependency and lock files
node_modules/
yarn.lock
pnpm-lock.yaml

# Build output
dist/
build/

# Environment variables
  .env*

# Logs and caches
*.log*

tmp/
```

If using any additional tools or directories that should be ignored, update the `.gitignore` accordingly.

### Create `nvmrc`:

In the project root, create `.nvmrc` and add the desired Node.js version (e.g., `v22.9.0`).

    ```
    v22.9.0  // Example: Use Node.js version 22.9.0
    ```

### Run the Dev Server

```bash
npm run dev
```

- Default URL: **http://localhost:5173/**

## Editor & VS Code Setup

### `.editorconfig`

Create `.editorconfig` in root directory and add the following content:

```ini
root = true

[*]
charset = utf-8
end_of_line = crlf
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

End_of_line = crlf is the windows line endings. If you are working on a linux or mac machine, you will want to change this to lf.

### VS Code Settings (`.vscode/settings.json`)

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
  "files.eol": "\r\n",
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

## 🎨 Code Quality Tooling

### ESLint

🛠️ ESLint is a **JavaScript/TypeScript linter** that helps enforce coding standards and detect potential errors.

**ESLint plugins for React, hooks, refresh, and compiler**

```bash
npm install -D eslint-plugin-react eslint-plugin-react-compiler
```

**TypeScript ESLint plugins and parser**

```bash
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### Prettier

Prettier 🖌️ is an **automatic code formatter** that enforces a consistent style.

```bash
npm install -D \
  eslint-plugin-prettier \
  eslint-config-prettier \
  eslint-plugin-simple-import-sort \
  eslint-plugin-unused-imports \
  prettier
```

#### Modify `eslint.config.js`:

Vite includes a default `eslint.config.js` file in the project's root. This configuration uses ESLint's newer flat config format (v9+), which provides better performance and flexibility compared to the older configuration format. Enhancing this configuration improves **type-aware linting**, **React best practices**, and **code formatting**.

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

For more advanced ESLint rules, see [ESLint Documentation](https://eslint.org/docs/latest/).

#### Create `.prettierrc`

In your **project root**, create a file named `.prettierrc` and add the following configuration:

```json
{
  "bracketSpacing": true,
  "semi": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "arrowParens": "always",
  "endOfLine": "crlf"
}
```

#### Create `.prettierignore` (Ignored Files)

To prevent Prettier from formatting unnecessary files (e.g., **node_modules**, build artifacts), create a `.prettierignore` file in the root directory:

```ini
# Ignore dependency and configuration lock files
node_modules/
package-lock.json
yarn.lock

# Editor settings and system files
.vscode/
.idea/
.DS_Store

# Ignore Next.js build artifacts
.next

# Logs and temporary files
*.log
.tmp/

# Build and output directories
dist/
build/
coverage/
```

For more details, visit the [Prettier Documentation](https://prettier.io/).

---

#### Add Scripts to `package.json`

```json
"scripts": {
  "lint:eslint": "eslint src/**/*.{ts,tsx,js,jsx,json}",
  "lint:eslint:fix": "eslint src/**/*.{ts,tsx,js,jsx,json} --fix",
  "type-check": "tsc --noEmit",
  "type-check:watch": "tsc --watch --noEmit",
  "format:check": "prettier --check . --log-level warn --ignore-path ./.gitignore",
  "format:fix": "prettier --write .",
  // ... other scripts
}
```

### Stylelint

Stylelint enforces **best practices in CSS/SCSS** to maintain clean styles. If your project uses **SCSS or CSS Modules**, you’ll need additional Stylelint configurations for proper linting.

To install **Stylelint and the Standard Config**:

```bash
npm install -D stylelint stylelint-config-standard
```

To enable **SCSS linting**, install:

```bash
npm install -D stylelint-config-recommended-scss
```

To enable **CSS Modules linting** properly, install:

```bash
npm install -D stylelint-config-css-modules
```

#### 1. Create `.stylelintrc` (Linting Rules) in project root and add:

```json
{
    "extends": [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss" // Include if needed, Enables SCSS-specific linting rules
    "stylelint-config-css-modules" // Include if needed, Enables CSS Modules-specific rules
  ],
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

Create a copy of `.prettierignore` and rename it to `.stylelintignore`:

```bash
copy .prettierignore .stylelintignore
```

#### Add Scripts to `package.json`

```json
"scripts": {
  "lint:stylelint": "stylelint src/**/*.{css,scss}",
  "lint:stylelint:fix": "stylelint src/**/*.{css,scss} --fix",
  "lint": "npm run lint:eslint && npm run lint:stylelint && npm run format:check && npm run type-check",
  // ... other scripts
}
```

---

## 🔒 Git Hooks & Commit Standards

### Husky + Lint-Staged + Commitlint + Commitizen

#### Install Dependencies

```bash
npm install -D \
husky \
@commitlint/{config-conventional,cli} \
commitizen \
cz-customizable \
lint-staged
```

#### Configure Husky

Initializing Husky will create a `pre-commit` script in `.husky/` and creates a prepare script in the `package.json`.

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

#### Run Prepare

Run prepare script to create a `.husky/` directory

```bash
npm run prepare
```

#### Pre-commit Hook

Modify your `.husky/pre-commit` script to run lint staged:

`pre-commit`:

```sh
echo "🚀 Running pre-commit checks..."
npx lint-staged
```

#### Configure commitlint:

Create `.commitlintrc` in root directory:

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```

Then, set up a Husky **commit-msg** hook:

Create `.husky/commit-msg` and include:

```sh
echo "🚀 Running commitlint checks..."
npx --no -- commitlint --edit $1
```

Ensure that the `.husky/pre-commit` and `.husky/commit-msg` have executable permissions by using the following command:

```bash
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
```

---

#### Configure Commitizen

Add the following to your `package.json` file:

```json
"scripts": {
  "commit": "git-cz",
  // ... other scripts
},
"config": {
  "commitizen": {
    "path": "cz-customizable"
  },
  "cz-customizable": {
    "config": "config/cz-config.json"
  },
},
```

Create a directory for the Commitizen configuration:

```bash
mkdir -p config
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

To use Commitizen, run `npm run commit`.

#### Configure Lint-Staged

The `.lintstagedrc` file allows for more in-depth configuration of Lint-Staged, and allows for running different commands on different file types.

Create `.lintstagedrc`:

```json
{
  "**/*.{ts,tsx,js,jsx}": ["prettier --write", "eslint --fix --cache"],
  "*.ts?(x)": ["tsc --noEmit"],
  "*.{json,md}": ["prettier --write"],
  "*.{css,scss}": ["stylelint --fix --cache", "prettier --write"],
  "*.{yaml,yml,toml}": ["prettier --write"]
}
```

#### Add Lint-Staged Scripts to `package.json`

```json
"scripts": {
  "pre-commit": "lint-staged",
  // ... other scripts
}
```

---

## ✅ Testing with Vitest

### Install Vitest and Related Dependencies

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitest/coverage-v8
```

#### 📌 What Each Package Does:

- `vitest` → Unit testing framework for Vite.
- `@testing-library/react` → Utilities for rendering React components in tests.
- `@testing-library/jest-dom` → Custom matchers for asserting the state of the DOM.
- `@testing-library/user-event` → Simulates real user interactions (clicks, typing, etc.).
- `jsdom` → Simulates a browser environment for tests.
- `@vitest/coverage-v8` → Generates test coverage reports.

### Add Vitest Settings

Modify your **`vite.config.ts`** file to include Vitest settings:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    includeSource: ['src/**/*.{js,ts}'],
    environment: 'jsdom',
    setupFiles: 'tests/setupTests.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/**'],
      exclude: ['src/tests/**', 'tests/**'],
    },
  },
});
```

#### Create Setup file

Create a directory for the tests:

```bash
mkdir -p tests
```

Create a **setup file** to configure global test settings for testing `tests/setupTests.ts`

📌 Create the file:
📂 **`tests/setupTests.ts`**

```ts
import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
```

#### Update TypeScript Config

Modify your **`tsconfig.app.json`** to ensure TypeScript recognizes test files.

📌 Add the following under `"compilerOptions"`:

```json
"types": ["vitest/globals", "node"]
```

📌 Ensure test files are included:

```json
"include": ["src", "tests"]
```

#### Create Test File

(`src/App.test.tsx`)

Let's create a **React component test** for `App.tsx`.

```ts
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App Component', () => {
  it('renders "Hello world!" text', () => {
    render(<App />);
    expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });
});

```

#### Add Vitest Scripts

📌 Modify your `package.json`:

```json
"scripts": {
  "test": "vitest",
  "test:watch": "vitest --watch",
  "test:coverage": "vitest run --coverage"
}
```

#### Run Tests

✅ Run **all tests**:

```bash
npm test
```

✅ Run **tests in watch mode**:

```bash
npm run test:watch
```

✅ Run **test coverage report**:

```bash
npm run test:coverage
```

---

## 🌐 Environment Variables

Environment variables are essential for managing sensitive data, configuring different environments (development, production), and customizing your application's behavior.

### Setting Up Environment Variables

1.  **Create `.env` Files:**

    - In the root of your project, create `.env` files for different environments:
      - `.env.development` for development settings.
      - `.env.production` for production settings.
      - `.env` for default settings (if needed).

2.  **Define Variables:**

    - Add your environment variables to the `.env` files. Remember to prefix variables intended for client-side use with `VITE_`.
      ```ini
      # .env.development
      VITE_API_URL=http://localhost:3000/api
      VITE_APP_TITLE=My Development App
      ```

3.  **Access Variables in Code:**

    - Access environment variables in your code using `import.meta.env`.
      ```ts
      const apiUrl = import.meta.env.VITE_API_URL;
      console.log(apiUrl);
      ```

4.  **Type Declarations (TypeScript):**

    - To ensure type safety, add your custom environment variables to `src/vite-env.d.ts` (create this file if it doesn't exist):

      ```ts
      /// <reference types="vite/client" />

      interface ImportMetaEnv {
        readonly VITE_API_URL: string;
        readonly VITE_APP_TITLE: string;
        // Add other environment variables here...
      }

      interface ImportMeta {
        readonly env: ImportMetaEnv;
      }
      ```

5.  In order to use the env variable with the Server in `vite.config.ts`, must change the `vite.config.ts` to the following:

```ts
/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@assets': path.resolve(__dirname, './src/assets'),
      },
    },
    css: {
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
      },
    },
    server: {
      port: parseInt(env.VITE_PORT || '5173'),
    },
    test: {
      globals: true,
      includeSource: ['src/**/*.{js,ts}'],
      environment: 'jsdom',
      setupFiles: 'tests/setupTests.ts',
      coverage: {
        reporter: ['text', 'json', 'html', 'lcov'],
        include: ['src/**'],
        exclude: ['src/tests/**', 'tests/**'],
      },
    },
  };
});
```

### Important Notes

- **Security:** Never commit `.env` files to version control, especially those containing sensitive data. Add all `.env` to `.gitignore` file.
- **Restart Server:** After creating or modifying `.env` files, restart your Vite development server for the changes to take effect.
- **Variable Prefix:** Only variables prefixed with `VITE_` are exposed to the browser. Other variables will only be available during build time.

---

## 📦 Path Aliases

Aliases simplify import paths, making your code cleaner and more maintainable.

### Install:

```bash
npm install -D vite-tsconfig-paths
```

### Configuring Aliases

1.  **Modify `vite.config.ts`:**

    - Open your `vite.config.ts` file and add or modify the `resolve.alias` section:

      ```ts
      import react from '@vitejs/plugin-react';
      import * as path from 'path';
      import { defineConfig, loadEnv } from 'vite';

      export default defineConfig(({ mode }) => {
        const env = loadEnv(mode, process.cwd(), '');

        return {
          plugins: [react(), tsconfigsPaths()],
          resolve: {
            alias: {
              '@components': path.resolve(__dirname, env.VITE_COMPONENTS_DIR),
              '@utils': path.resolve(__dirname, 'src/utils'),
              '@assets': path.resolve(__dirname, './src/assets'),
              // Add more aliases as needed
            },
          },
          // ... other configurations
        };
      });
      ```

    - **Optional:** You can use environment variables to dynamically set alias paths:
      ```ts
      // ... (Example code with loadEnv) ...
      ```
    - Otherwise, you can define static aliases:
      ```ts
      // ... (Example code without loadEnv) ...
      ```

2.  Configure TypeScript Path Aliases

To configure path aliases, update your `tsconfig.app.json` file with the following:

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "allowJs": false,
    "jsx": "react-jsx",
    "types": ["vite/client", "vitest/globals", "node"],

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "forceConsistentCasingInFileNames": true,

    /* Path Aliases */
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"],
      "@assets/*": ["src/assets/*"],
      "@hooks/*": ["src/hooks/*"],
      "@services/*": ["src/services/*"],
      "@pages/*": ["src/pages/*"],
      "@types/*": ["src/types/*"]
    }
  },
  "include": ["src", "tests"],
  "exclude": ["node_modules", "dist"]
}
```

Use in code:

```ts
import Button from '@components/Button';
import { formatDate } from '@utils/dateHelpers';
import logo from '@assets/logo.svg';
```

### Benefits of Aliases

- **Clean Imports:** Reduces the need for long relative paths.
- **Maintainability:** Makes refactoring easier, as you only need to update the alias configuration.
- **Readability:** Improves code readability by using meaningful aliases.

### TypeScript Path Aliases (Optional)

If you're using TypeScript, you can also set up path aliases in your `tsconfig.json` for better type checking:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"],
      "@assets/*": ["src/assets/*"]
      // Add more aliases here
    }
  }
  // ... other configurations
}
```

**Important:** Make sure your `tsconfig.json` `baseUrl` is correctly set.

### Module Resolution: Bundler vs. Node

- **`moduleResolution: "bundler"`:**
  - Optimized for modern bundlers like Vite and Webpack.
  - Assumes your bundler handles module resolution, leading to potentially faster build times.
  - More geared towards modern javascript development.
- **`moduleResolution: "Node"` (or `"Node16"`):**
  - Mimics Node.js's module resolution algorithm.
  - Useful for projects that heavily rely on Node.js-style module resolution.
  - `"Node16"` is for node versions 16 and above, and has some improvements over `"Node"`.
  - More compatible with older javascript development.

## In most Vite projects, `bundler` is recommended for its performance benefits. If you encounter module resolution issues, try `"Node"` or `"Node16"`.

🚀 **Happy Coding!** 🎉🎨💻
