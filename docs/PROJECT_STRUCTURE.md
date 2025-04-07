# 🗂️ Project Structure Guide

This document outlines the structure of the React + Vite Starter Template, explaining what each folder and file is for, how to organize configuration files, and where things live across your project.

---

## 🧱 Base Layout

```text
my-app/
├── public/                  # Static assets (favicons, images, etc.)
├── src/                     # Application source code
│   ├── components/          # Reusable UI components
│   ├── pages/               # Top-level views or routes (optional)
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API utilities or external integrations
│   ├── utils/               # General helper functions
│   ├── App.tsx              # Root app component
│   ├── index.css            # Global CSS styles
│   ├── main.tsx             # Entry point
│   └── vite-env.d.ts        # Type declarations for Vite
├── tests/                   # Unit tests and setup files
│   └── setupTests.ts        # Global setup for Vitest
├── .vscode/                 # Editor settings (VS Code)
│   ├── settings.json        # VS Code settings (formatting, linting, etc.)
│   └── extensions.json      # Recommended VS Code extensions
├── .husky/                  # Git hooks (managed by Husky)
│   ├── pre-commit           # Pre-commit hook script
│   └── commit-msg           # Commit message hook script
├── config/                  # Optional project-specific config files
│   └── cz-config.json       # Commitizen configuration
├── docs/                    # All documentation markdown files
├── coverage/                # Test coverage output
├── .commitlintrc            # Commitlint configuration (or use config/commitlint.config.js)
├── .env                     # Base environment variables (use VITE_ prefix for frontend access)
├── .lintstagedrc            # Lint-staged configuration
├── .nvmrc                   # Node version control
├── .prettierignore          # Files/folders ignored by Prettier
├── .prettierrc              # Prettier configuration (or use config/.prettierrc)
├── .stylelintrc             # Stylelint configuration (or use config/.stylelintrc)
├── .editorconfig            # Shared editor formatting rules
├── .eslint.config.js        # ESLint config (or use config/eslint.config.js)
├── .gitignore               # Files to ignore in Git
├── index.html               # Entry point for the application's HTML
├── package.json             # Scripts, dependencies, metadata
├── package-lock.json        # Records exact dependency versions
├── tsconfig.json            # Base TypeScript compiler configuration
├── tsconfig.app.json        # TypeScript config for app code
├── tsconfig.node.json       # TypeScript config for Node.js (build scripts, etc.)
├── vite.config.ts           # Vite setup and plugins
└── README.md or index.md    # Main documentation entry
```

> 📘 Use `README.md` for GitHub repository landing pages. Use `index.md` as the entry point when building documentation with GitHub Pages or a static site generator.

---

## 🧩 Configuration File Placement

Most tools expect config files in the project root by default. However, once setup is stable, you can organize them under a `config/` folder:

| Tool       | Default File            | Optional (organized)          |
| ---------- | ----------------------- | ----------------------------- |
| ESLint     | `.eslint.config.js`     | `config/eslint.config.js`     |
| Stylelint  | `.stylelintrc`          | `config/.stylelintrc`         |
| Prettier   | `.prettierrc`           | `config/.prettierrc`          |
| Commitlint | `.commitlintrc`         | `config/commitlint.config.js` |
| Commitizen | `config/cz-config.json` | ✅ Already structured         |

> 💡 If you move files to `config/`, remember to update CLI commands in `package.json` to reflect the new paths.

---

## 📁 src Folder Philosophy

Keep the source folder clean and feature-driven.

Organize your `src/` by logical concern:

- `components/`: Dumb UI blocks or partials
- `hooks/`: Shared stateful logic
- `pages/`: Routes rendered by the router
- `services/`: API wrappers (like Axios fetchers)
- `utils/`: Pure functions and helpers

Use aliases like `@components`, `@utils` (enabled by `vite-tsconfig-paths`) to simplify imports.

```ts
import Button from '@components/Button';
import formatDate from '@utils/formatDate';
```

---

## 🧪 Testing Directory

- Place reusable test setup files (like `setupTests.ts`) under `tests/`
- Keep test helpers or global setup in `tests/`, separate from source
- Co-locate tests near components if preferred, or centralize them in `tests/`

---

## 🔐 Config Files

- `.nvmrc`: Enforces consistent Node version
- `.editorconfig`: Controls editor defaults
- `.vscode/`: Recommended for team-wide formatting/linting extensions
- `.prettierrc`, `.stylelintrc`, `.eslint.config.js`: Tool configs (or move to `config/`)

---

## 📦 Scripts & Commands

Common scripts in `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "vitest",
  "lint": "eslint src --ext .ts,.tsx",
  "format:check": "prettier --check .",
  "format:fix": "prettier --write .",
  "type-check": "tsc --noEmit"
}
```

---

## 🧪 Common Project Commands

```bash
npm install             # Install dependencies
nvm use                 # Use the correct Node.js version (if using nvm)
npm run dev             # Start local server
npm run build           # Build production assets
npm run preview         # Preview production build

npm run lint            # Run all linters
npm run format:check    # Check formatting
npm run format:fix      # Auto-format
npm run test            # Run unit tests
```

> For a complete list of scripts, see the `package.json` or related docs.

---

## 🔗 Related Docs

- [Installation](./INSTALLATION.md)
- [Configuration](./CONFIGURATION.md)
- [Code Quality](./CODE_QUALITY.md)
- [Git Hooks](./GIT_HOOKS.md)
- [Testing](./TESTING.md)
- [Learning Log](./LEARNING_LOG.md) – Notes on structure philosophy and decisions

---

Use this layout as a solid default for your apps. It’s designed to be scalable, readable, and easily understood by your future self. 💡
