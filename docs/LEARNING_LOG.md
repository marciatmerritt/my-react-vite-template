# 🧠 Learning Log ✍️📘✨📚📝💭

This document is a personal reference space to collect decisions, justifications, resources, and insights that came up while building this React + Vite starter template.

It’s not meant to be formal documentation — just helpful context for my future self when I am curious about the “why” behind the “how”, or when I have the same question that I know that I've asked before.

---

## Understanding Vite's Default Configurations & Development Server ⚡️🎯🛠️🚀

The build tool, [Vite](https://vitejs.dev/), provides a significantly faster and more efficient development experience compared to traditional bundlers like Webpack. This speed boost comes from Vite's native ES module support and on-demand compilation. It also offers lightning-fast Hot Module Replacement (HMR) for instant updates during development.

**Vite Default Features (Brief Overview):**

- Fast development server
- Hot Module Replacement (HMR)
- Basic ESLint support and configuration

Vite supports React Fast Refresh through two official plugins: `@vitejs/plugin-react` (using Babel) and `@vitejs/plugin-react-swc` (using SWC). This template uses `@vitejs/plugin-react`.

The default React Fast Refresh plugin works well, but using `@vitejs/plugin-react` ensures optimal performance.

For a deeper understanding of Vite's capabilities and configuration options, please refer to the official [Vite documentation](https://vitejs.dev/).

As of Feb 2025, create-react-app has been deprecated.

#### Vite Development Server 🚀⚡

```bash
npm run dev
```

The `dev` script, defined in your `package.json`, typically starts the development server with Hot Module Replacement (HMR) enabled. This launches your React app and provides a local development URL in the terminal.

**Default Port and Configuration:**

By default, Vite serves your application at `http://localhost:5173/`. You can customize the port and other server options using the `--port` flag or by configuring the `server` option in your `vite.config.js` file (see the [Vite documentation on server options](https://vite.dev/config/server-options) for details).

**Example: Changing the Port:**

```bash
npm run dev -- --port 3000
```

**Troubleshooting Port Conflicts:**

If you encounter port conflicts, check for running processes using:

```bash
lsof -i :5173  # Or the port you're trying to use
```

This command will list any processes currently using the specified port. You can then terminate the conflicting process if necessary.

#### Common Errors & Fixes ❌➡️✅

- **Issue:** `npm run dev` fails with dependency errors.

  - **Fix:** Ensure `node_modules` is installed properly:
    ```bash
    rm -rf node_modules package-lock.json
    npm install
    ```

- **Issue:** Vite HMR is not updating changes.
  - **Fix:** Restart the dev server or clear cache:
    ```bash
    npm run dev -- --force
    ```

---

## 2. **Managing Dependencies Effectively** 📦🔄💡

**Installing Dependencies**
The `npm install` command installs the packages listed in your `package.json` file. You'll also use this command (along with the `--save` or `--save-dev` flags, or `-S`, `-D` for short, when adding new packages) whenever you need to add or update dependencies in your project.

**Updating Dependencies:**

`npm-check-updates (ncu)` simplifies the process of updating dependencies:

```bash
npm install -g npm-check-updates  # Install ncu globally (if not already installed)
ncu -u                           # Update package.json to the latest versions
npm install                       # Install the updated packages
```

**Important:** Always review major updates to avoid potential breaking changes. ⚠️🔎🛠️

### Dependency Version Management

Using the latest _stable_ versions of all packages is **highly recommended**. Use `npm-check-updates` (described below) to check for and update packages.

**How to find the latest stable versions (Essential):**

1.  **npm website (npmjs.com):** Search for each package. The latest stable version is usually displayed prominently.

2.  `npm outdated`: Run this command in your project directory to see which packages have newer versions _available_. This command only checks your `package.json` and doesn't consider the `package-lock.json` file.

3.  **`npm-check-updates` (Highly Recommended):** This tool is the best way to manage updates.

    ```bash
    npm install -g npm-check-updates  # Install globally (if needed)
    ncu                             # Check for compatible updates
    ncu -u                          # Update package.json with compatible updates
    npm install                     # Install updated packages
    ```

**Importance of Versioning**

Using `@latest` can cause unpredictable behavior. Dependencies update frequently, and new versions can introduce breaking changes. Pinning specific versions ensures that your project works consistently and that you're in control of when and how you update.

---

## 3. Initializing Git Correctly 🔗🛠️

**📚📝💭:** During the setup process, it was discovered that Husky (and other Git hook tools) cannot be installed or configured until Git has been properly initialized. Therefore, the following steps should be performed _immediately_ after project setup and _before_ installing any Git-related tools.

```bash
git init
```

It’s **crucial** to add a `.gitignore` file _before_ the first commit to exclude unnecessary files (e.g., `node_modules`) from version control. This prevents bloating your repository and avoids committing sensitive information.

#### `.gitignore` What should be included?

While Vite _does_ often include a `.gitignore` file, it's essential to understand its contents and customize it as needed.

**Essential Entries (Almost Always Include):**

- `node_modules/`: This is the most important one. The `node_modules` folder contains all your project's dependencies. It can be huge, and it's regenerated using `npm install` (or `yarn install`, `pnpm install`, etc.), so there's no need to commit it.
- `.DS_Store`: These files are created by macOS Finder and are not relevant to your project's code.
- `*.env` or `.env.*`: Environment files often contain sensitive information (API keys, passwords, database credentials). Never commit these! Use environment variables instead. (You might have `.env.example` in your repo for sharing settings structure.)
- `*.log`: Log files can grow large and are usually not relevant to version control.
- `tmp/` or `temp/`: Temporary files generated by your system or tools.
- `*.swp` or `*.swo`: Swap files created by editors like Vim.
- `.idea/` (If using IntelliJ IDEA): IDE-specific configuration files.
- `.vscode/` (If you are _not_ sharing recommended extensions): VS Code settings (unless you are specifically sharing the `extensions.json` file - see previous response for more info on that case).
- `*.lock` (e.g., `package-lock.json` or `yarn.lock`): While lock files should generally _not_ be in the `.gitignore` file, sometimes they are. If it is, you'll want to remove it from the `.gitignore` file so that it _is_ committed.

**Potentially Include (Depends on Your Project):**

- `build/` or `dist/`: These folders contain the production build of your application. Whether you include them depends on your deployment strategy. Often they are generated by a CI/CD process, so don't need to be tracked.
- `public/` (If it contains generated assets): If your `public` directory contains assets generated during the build process, you might want to exclude them. Static assets that you manually place in `public` should be included.
- `config/` (If it contains sensitive configuration): If your configuration files contain sensitive data, you might want to exclude them. It's better to use environment variables for sensitive configuration.

**Example `.gitignore` (Customized):**

```
node_modules/
.DS_Store
*.env
*.log
tmp/
temp/
*.swp
*.swo
.idea/
.vscode/*
build/
dist/
public/build/*  # Example: Exclude generated assets within public/build
```

**Key Considerations:**

- **Test your `.gitignore`:** After making changes, run `git clean -fd` (be very careful with this command!) to see which files would be removed if you were to clean your repository. This helps you ensure that your `.gitignore` is working as expected. **Important:** Be very careful with `git clean -fd` as it _permanently deletes files_ not tracked by Git.

---

# 🧩 Why I Used Certain Tools

## 4. **Node.js & Version Management (.nvmrc)** 🔄📌

### `.nvmrc`

Using `.nvmrc` ensures all contributors are using the same Node version, avoiding compatibility issues. Especially useful when using Husky, as some features fail silently if Node versions don’t match.

**Consistent Node.js versions are crucial for team collaboration and preventing unexpected errors. Using NVM (Node Version Manager) is highly recommended to ensure everyone is working with the same Node.js version.**

#### What and Why❓

- **NVM (Node Version Manager):** A tool to easily switch between Node.js versions on the same machine, preventing version conflicts and ensuring consistent behavior. This is essential because different projects may require different Node.js versions.

- **What is a .nvmrc?** A file that specifies the Node.js version _required_ for the project, ensuring consistency across development environments and/or CI/CD pipelines. When you use NVM and navigate to your project directory, you can simply run `nvm use`, and NVM will automatically switch to the correct version (or prompt you to install it if you don't have it). This makes it incredibly easy to manage Node.js versions on a per-project basis.

#### Setup

1.  **Install NVM:** If not installed, follow the instructions for your OS on the [NVM GitHub page](https://github.com/nvm-sh/nvm).
2.  **Create `.nvmrc`:** In the project root, create `.nvmrc` and add the desired Node.js version (e.g., `v22.9.0`).

    ```
    v22.9.0  // Example: Use Node.js version 22.9.0
    ```

#### Usage

1.  **Check current Node.js version:** `node -v`
2.  **Automatic Switching (Recommended):** In the project directory, run `nvm use`. NVM will check the `.nvmrc` file and automatically switch to (or prompt you to install) the specified version. This is the easiest way to ensure you're using the right version.
3.  **Manual Check and Switch:**
    - `nvm ls`: List managed Node.js versions (the active version is marked with an asterisk).
    - `nvm use <version>`: Switch to a specific version (replace `<version>` with the version from the `.nvmrc` file).

Reference material: [Change project, change Node version: let `.nvmrc` help you](https://thawinwats.medium.com/change-project-change-node-version-let-nvmrc-help-you-630b34dafd09) for more information.

---

## 5. EditorConfig and EOL settings

I prefer `lf` for Unix/macOS compatibility. VS Code may default to `crlf` on Windows, so this is one place where team-wide consistency helps. Still worth customizing depending on your OS.

EditorConfig ([https://editorconfig.org](https://editorconfig.org/)) helps maintain consistent coding styles across different editors and IDEs. This is important for collaboration, code readability, and preventing style inconsistencies and merge conflicts.

#### What and Why❓

- **What is EditorConfig?** A file format and a set of plugins for various text editors and IDEs that help developers maintain consistent coding styles.
- **How it works:** The `.editorconfig` file in the project root defines the coding style rules, which editors and IDEs with the plugin automatically apply.
- **Why use it?** Ensures consistent code formatting across the project, preventing style inconsistencies and merge conflicts, and improving code readability and maintainability.

#### Setup

1.  **Create `.editorconfig`:** In the project root directory, create a file named `.editorconfig` (no file extension).
2.  **Add the following content:**

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

#### Explanation of `.editorconfig` settings

- **`root = true`:** Declares this as the top-level configuration file.

- **`[*]` (Global Settings):** Applies to all files unless overridden by a more specific section.

  - `charset = utf-8`: Sets the character encoding to UTF-8, the most widely used character encoding.
  - `end_of_line = lf`: Sets line endings to line feed (LF), the standard for Unix-like systems (macOS, Linux).
  - `indent_style = space`: Sets indentation to spaces.
  - `insert_final_newline = true`: Inserts a newline at the end of the file. This is a common practice and can prevent some issues with certain tools.
  - `trim_trailing_whitespace = true`: Removes trailing whitespace. This helps keep files clean and reduces unnecessary diffs.

- **File-Specific Settings:**

  - `[*.bat]`:
    - `end_of_line = crlf`: Sets line endings to carriage return line feed (CRLF), the standard for Windows batch scripts.
  - `[*.{json,html}]`:
    - `indent_size = 2`: Sets indentation size to 2 spaces. JSON and HTML commonly use 2 spaces.
  - `[*.{js,jsx,ts,tsx}]`:
    - `indent_size = 2`: Sets indentation size to 2 spaces for JavaScript, JSX, TypeScript, and TSX files.
  - `[*.{css,scss}]`:
    - `indent_size = 2`: Sets indentation size to 2 spaces for CSS and SCSS files.
  - `[*.yml]`:
    - `indent_size = 2`: Sets indentation size to 2 spaces for YAML files.
  - `[*.md]`:
    - `trim_trailing_whitespace = false`: Does not trim trailing whitespace. Trailing whitespace in Markdown can sometimes have semantic meaning.
    - `max_line_length = off`: Disables the maximum line length check. Markdown often has longer lines, especially in URLs.
  - `[*.tsv]`:
    - `indent_style = tab`: Sets indentation to tabs. TSV files traditionally use tabs as delimiters.
  - `[*.csv]`:
    - `trim_trailing_whitespace = false`: Does not trim trailing whitespace. CSV can sometimes have intentional trailing whitespace.
  - `[*.py]`:
    - `indent_size = 4`: Sets indentation size to 4 spaces. Python commonly uses 4 spaces.

---

## 7 Optimizing VS Code for Development 💻⚙️🛠️

Consistent VS Code settings and extensions are highly recommended for a professional development experience, especially in team settings. They ensure consistent code formatting, linting rules, and editor configurations across all developers, improving collaboration and reducing potential issues.

### 7. 1 VS Code Settings (.vscode/settings.json)

1.  Create a `.vscode` directory in the project root if it doesn't exist.
2.  Inside `.vscode`, create a file named `settings.json`.
3.  Copy the following JSON and paste it into `settings.json`:

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

4.  **Crucial: Add `.vscode/*` to your `.gitignore` file (with the exception of `!.vscode/extensions.json`).** This directory often contains user-specific settings and should _not_ be committed to version control. The standard approach is to ignore everything within the `.vscode` directory _except_ the `extensions.json` file (which lists recommended extensions). If you are _not_ sharing recommended extensions, simply add the following line to the `.gitignore` file:

```
.vscode/*
```

If you _are_ sharing recommended extensions, follow the original instructions with the exception for `extensions.json`:

```
.vscode/*
!.vscode/extensions.json
```

#### Explanation of `.vscode/settings.json`

- **`editor.bracketPairColorization.enabled`:** Enables bracket pair colorization for improved code readability.
- **`editor.defaultFormatter`:** Sets Prettier as the default code formatter for consistent formatting.
- **`editor.formatOnSave`:** Enables automatic code formatting on save using Prettier.
- **`editor.formatOnPaste`:** Disables automatic formatting on paste to prevent unexpected changes.
- **`editor.tabSize`:** Sets the tab size to 2 spaces for better readability and consistency.
- **`editor.insertSpaces`:** Ensures that tabs are represented by spaces, preventing inconsistent indentation.
- **`eslint.validate`:** Configures ESLint to validate JavaScript, JSX, TypeScript, and TSX files.
- **`files.eol`:** Sets the end-of-line character to a newline (LF), the standard for Unix-like systems (macOS, Linux).
- **`files.trimTrailingWhitespace`:** Removes trailing whitespace for cleaner files and reduces unnecessary diffs.
- **`files.insertFinalNewline`:** Ensures a newline at the end of the file, a common best practice.
- **`files.trimFinalNewlines`:** Removes any extra newlines at the end of the file (keeps only one). This works in conjunction with `files.insertFinalNewline` to ensure there's always one and only one newline at the end.
- **`editor.rulers`:** Adds vertical rulers at 80 and 120 characters as visual guides for recommended line length (soft limit at 80, stricter limit at 120), promoting better code readability.
- **`typescript.preferences.importModuleSpecifier`:** Configures TypeScript to use relative paths for module imports, improving portability and less dependent on the project's directory structure.
- **`typescript.updateImportsOnFileMove.enabled`:** Automatically updates import paths when files are moved during refactoring. This helps maintain code integrity when refactoring.

---

### 7.2 VS Code Recommended Extensions (.vscode/extensions.json)

Recommended VS Code extensions provide essential features like linting, formatting, spell checking, and improved Markdown preview. Using these extensions ensures a consistent development experience across all developers. When you open the project in VS Code, you _may_ be prompted to install the suggested extensions.

#### Setup Instructions

1.  Inside `.vscode`, create a file named `extensions.json`.
2.  Copy the following JSON and paste it into `extensions.json`:

```json
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode", "stylelint.vscode-stylelint", "streetsidesoftware.code-spell-checker", "bierner.markdown-preview-github-styles", "ms-vscode.vscode-typescript-next"]
}
```

3.  **Reminder: Ensure `.vscode/*` is in your `.gitignore`.** Whether or not you include `extensions.json` depends on whether you want to share recommended extensions.

- **To share recommended extensions:** Add `!.vscode/extensions.json` to your `.gitignore`.
- **Not sharing extensions:** No additional `.gitignore` rule is needed (just `.vscode/*`).

#### Recommended Extensions and Their Purpose

| Extension                                | Purpose                                                                                |
| ---------------------------------------- | -------------------------------------------------------------------------------------- |
| `dbaeumer.vscode-eslint`                 | **ESLint** - Integrates ESLint for linting JavaScript and TypeScript code.             |
| `esbenp.prettier-vscode`                 | **Prettier** - Integrates Prettier for automatic code formatting.                      |
| `stylelint.vscode-stylelint`             | **Stylelint** - Integrates Stylelint for linting CSS/SCSS/Less files.                  |
| `streetsidesoftware.code-spell-checker`  | **Spell Checker** - Helps catch typos in code comments and strings.                    |
| `bierner.markdown-preview-github-styles` | **Markdown Preview** - Styles Markdown previews to resemble GitHub's styling.          |
| `ms-vscode.vscode-typescript-next`       | **Improved TypeScript Support** - Provides the latest TypeScript features and updates. |

#### Key Takeaways: VS Code Settings and Extensions - Optional or Necessary?

While your application's core functionality doesn't _strictly_ depend on these VS Code configurations, they are **highly recommended** and practically **necessary** for professional development, especially in team settings.

Here's why:

- **Consistency is Key:** These settings ensure consistent code formatting, linting rules, and editor configurations across all developers. This prevents style inconsistencies, reduces merge conflicts, and makes the codebase easier to read and maintain.

- **Code Quality Boost:** Tools like ESLint, Stylelint, and Prettier help catch errors and enforce best practices, leading to higher quality code. Addressing these issues early saves time and effort during development and testing.

- **Collaboration Champion:** Consistent formatting and linting make collaboration much smoother. Code reviews are easier, and merging changes is less prone to conflicts caused by style differences.

- **Maintainability Master:** A well-configured project is easier to maintain in the long run. When you revisit the code later (or when someone else works on it), the consistent style and linting will make it much easier to understand and modify.

- **Onboarding Superhero:** These configurations make onboarding new developers a breeze. They can quickly set up their VS Code environment according to project standards, ensuring everyone is on the same page from day one.

In short, these VS Code configurations are an investment in the long-term health, maintainability, and collaborative nature of your project. Don't skip them! Your future self (and your team) will thank you.

## 8. CSS Reset Libraries

I added notes about Normalize.css, Meyer Reset, and Modern CSS Reset in `INSTALLATION.md` to remind myself to choose one if layout or default spacing becomes inconsistent across browsers.

If you anticipate needing more control over default styles, you can include a more complete CSS reset or normalize library. These libraries aim to make all browsers render elements more consistently. Here are a few options:

- **Normalize.css:** A popular choice that focuses on _normalizing_ styles rather than completely resetting them. You can include it by installing it via npm (`npm install normalize.css`) and then importing it into your `index.css` or by linking to a CDN. [**https://necolas.github.io/normalize.css/**](https://necolas.github.io/normalize.css/)
- **Reset CSS:** A more aggressive approach that aims to completely _reset_ all default styles. It's very minimal but can be a good starting point if you want complete control. You can find various versions online. [**http://meyerweb.com/eric/tools/css/reset/**](http://meyerweb.com/eric/tools/css/reset/)
- **Modern CSS Reset:** A more modern take on CSS resets, often tailored to newer web standards. [**https://www.moderncss.dev/reset/**](https://www.moderncss.dev/reset/)

---

### Linting Philosophy

I chose `eslint-config-prettier` and `eslint-plugin-prettier` together to avoid style conflicts and show prettier errors as ESLint warnings. This helps developers keep everything in one output.

---

### Commitizen Prompt Customization

I picked `cz-customizable` instead of the default adapter so I could tweak types like `style`, `chore`, `docs`, and `refactor`, and eventually group scopes more intentionally.

---

### Husky Behavior

Husky fails silently if `.git` is not initialized **before** installing Husky or running `prepare`. This is why `git init` must happen early in `INSTALLATION.md`.

---

## Explanation of Key Files and Folders

### Root Directory

The root directory contains core project files, configurations, and dependencies.

- **`.config/`** → Stores project-specific configuration files that are **not required to be in the root directory**, keeping the root cleaner., keeping the root cleaner. These configurations are often specific to individual tools or libraries."

  - `cz-config.json`: Commitizen configuration file Used with Commitizen to enforce consistent and standardized commit message formats, making it easier to track changes and automate release processes.

- **`.husky/`** → Manages Git hooks. Husky allows you to easily define scripts that run automatically during various Git stages (like pre-commit, pre-push, etc.) to enforce code quality and other project standards.

  - `pre-commit`: Script that runs before each commit. Typically used to run linters, formatters, and tests to ensure code quality before it's committed.
  - `commit-msg`: Script that runs when a commit message is created. Often used with **Commitlint** to check if the commit message conforms to the project's commit message conventions.

- **`.vscode/`** → Contains VS Code-specific settings and configurations for the project. These settings are shared among developers to ensure a consistent development environment within VS Code.

  - `settings.json`: VS Code settings file. Contains project-specific settings for code formatting, linting, editor behavior, etc. These settings override user-level VS Code settings when the project is opened.
  - `extensions.json`: VS Code extensions recommendations file. Lists the recommended VS Code extensions for the project. When opening the project, VS Code will prompt developers to install these extensions.

- **`docs/`** → "Contains all project documentation files."

- **`.commitlintrc`:** → **Commitlint configuration** file. Used by Commitlint to define the rules for valid commit messages. Ensures that commit messages follow a consistent format.

- **`.editorconfig`** → Editor configuration file. EditorConfig file. Used to define basic code formatting rules (indentation, line endings, character set) that are applied across different editors and IDEs.

- **`.eslint.config.js`** → ESLint configuration file. Used by ESLint to define linting rules for JavaScript and TypeScript code. Helps identify potential code issues and enforce coding style guidelines.

- **`.gitignore`** → Git ignore file. Specifies which files/folders **Git should ignore** and not track in version control (e.g., `node_modules`, build artifacts, environment files).

- **`.lintstagedrc`** → Lint-staged Configuration file. Used by Lint-Staged to run linters and formatters only on _staged_ files (files that are about to be committed). This improves performance and prevents committing code with linting errors.

- **`.nvmrc`** → Node Version Manager (NVM) configuration file. Specifies **Node.js version**, ensuring consistency across developers and CI/CD.

- **`.prettierignore`** → Prettier ignore file. Specifies files and folders that Prettier should ignore and not format.

- **`.prettierrc`** → Prettier configuration file. Used by Prettier to define code formatting rules (e.g., line length, quotes, semicolons).

- **`.stylelintrc`** → Stylelint configuration file. Used by Stylelint to define linting rules for CSS, SCSS, and Less files. Helps maintain consistent styling across the project.

- **`index.html`** → The main HTML file for the application. The entry point for the web application.

- **`package.json`** → Node.js project manifest file. Contains project metadata (name, version, description), dependencies, scripts, and other configuration.

- **`package-lock.json`** → Lock file for project dependencies. Records the exact versions of all dependencies and sub-dependencies. Ensures consistent installations across different environments.

- **`README.md`** → Main project documentation file. Provides an overview of the project, setup instructions, usage examples, and other important information.

- **`tsconfig.json`** → Base TypeScript compiler configuration file. Contains common TypeScript compiler settings that are extended by other `tsconfig` files.

- **`tsconfig.app.json`** → TypeScript compiler configuration file for the application code. Extends `tsconfig.json` and contains settings specific to the application.

- **`tsconfig.node.json`** → TypeScript compiler configuration file for Node.js-related code (e.g., build scripts). Extends `tsconfig.json` and contains settings specific to Node.js environment.

- **`vite.config.ts`** → Vite configuration file. Used to customize how Vite builds and serves the project, including configurations for plugins, aliases, build options, and more.

---

### Source Code (`/src/`)

The `src/` directory contains all the **application's source code**.

- **`App.tsx`** → Main application component. The root component of the React application.
- **`assets/`** → Stores **static assets** like images, logos, and fonts used in the project (e.g., `react.svg`).
- **`components/`** → Contains **reusable UI components** (e.g., `ExampleComponent.tsx`).
- **`index.css`** → Global **CSS styles** for the application.
- **`main.tsx`** → Entry point for the React application. Renders the `App` component to the DOM.
- **`vite-env.d.ts`** → TypeScript declaration file for **Vite**. Provides type definitions for Vite-specific features.
- **`...`** → Other source files, including additional components, utility functions, pages, API clients, and other application logic.

- **`public/`** → Directory containing **static assets** that are served directly to the browser without being processed by Vite (e.g., images, fonts, `favicon.ico`).
  - `placeholder.svg`: Example placeholder logo.

---

### **Configuration File Placement**

Many tools expect configuration files to be in the **root directory**. However, some configurations can be moved into `.config/` for **better organization**.

| **File/Folder**          | **Purpose**                                  | **Placement**  |
| ------------------------ | -------------------------------------------- | -------------- |
| `.eslint.config.js`      | ESLint linting configuration                 | **Root**       |
| `.prettierrc`            | Prettier formatting rules                    | **Root**       |
| `.commitlintrc`          | Commit message linting rules (Commitlint)    | **Root**       |
| `.husky/`                | Pre-commit and commit message hooks          | **Root**       |
| `.config/cz-config.json` | Commitizen configuration for commit messages | **`.config/`** |
| `docs/`                  | Documentation files                          | **Root**       |

---

### config/ vs .config/ — Where Should Tool Configs Go?

Initially, the configuration files for the code quality tools (`.prettierrc`, `.prettierignore`, `.stylelintrc`, `eslint.config.js`, `commitlint.config.js`) should be placed in the root of your project. This is the default location where most tools will look for them.

For better organization, you can move these files to a `config` folder in the root of your project _after_ the initial setup is complete. If you do so, you will need to adjust the commands for some of the tools as shown below:

- **ESLint:** `eslint --config config/eslint.config.js src/**/*.{ts,tsx}`
- **Stylelint:** `stylelint --config config/.stylelintrc src/**/*.{css,scss}`
- **Prettier:** `prettier --config config/.prettierrc . --write`
- **Commitlint:** `commitlint --config config/commitlint.config.js -E HUSKY_GIT_PARAMS`

The `cz-config.json` file used by Commitizen is already configured to be in the `config` folder. So it is the reason that there is already a `config/` folder.

I wasn't sure if I should use `.config/` or `config/` to organize my tool configuration. Most tools look for config files in the **root directory** by default, so if you move them, `config/` is the better choice:

- `config/` is clearly a project folder and not hidden
- `.config/` can conflict with system-level folders (especially on Linux/macOS)
- Many CLI tools ignore dot-prefixed folders unless explicitly told not to
- Common structure in many modern repos and toolkits

✅ Final decision: use `config/` for storing ESLint, Prettier, Commitlint, Stylelint, and Commitizen configs. Just make sure to update CLI commands accordingly in `package.json`.

---

## 📌 Reminders

- Check that all scripts in `package.json` are kept up to date as you install new tools (like `format:fix`, `lint:stylelint`, `test:coverage`).
- When testing fails to run, verify `tests/setupTests.ts` is referenced in `vite.config.ts` correctly.
- Remember to run `chmod +x` on Husky hook files if you're getting "permission denied" errors on pre-commit.

---

## 🧪 Notes to Move From Old README

_(Preserved here from early drafts or sections trimmed during cleanup)_

- Use `--` in `npm create vite@latest` because newer npm versions treat template options as arguments otherwise.
- Husky will not function unless `.git` exists — git must be initialized before calling `prepare`.
- `vite-tsconfig-paths` simplifies aliasing and should be installed early if you're planning deep folder structures.

---

This log evolves as the project grows and reflects learning-in-progress. Don’t delete — add to it! 📚✨

## **Common Project Commands**

Below is a list of frequently used commands to **build, test, and maintain** the project.

### **Installation**

```sh
npm install       # Install project dependencies
nvm use           # Use the correct Node.js version (if using nvm)
```

### **Development**

```sh
npm run dev       # Start the Vite development server
npm run build     # Build the project for production
npm run preview   # Preview the production build
```

### **Code Quality & Formatting**

```sh
npm run lint:eslint       # Run ESLint to check for linting issues
npm run lint:eslint:fix   # Fix ESLint errors automatically
npm run lint:stylelint    # Run Stylelint to check stylesheets
npm run lint:stylelint:fix # Fix Stylelint issues automatically
npm run format:check      # Check formatting with Prettier
npm run format:fix        # Fix formatting issues with Prettier
```

### **Type Checking**

```sh
npm run type-check        # Run TypeScript compiler without emitting files
npm run type-check:watch  # Watch mode for TypeScript type checking
```

### **Testing**

```sh
npm run test              # Run all tests using Vitest
npm run test:watch        # Run tests in watch mode
npm run coverage          # Generate a test coverage report
```

### **Git & Commit Hooks**

```sh
npm run prepare           # Set up Husky Git hooks
npm run commit            # Use Commitizen for structured commit messages
```

### **Husky (Pre-Commit & Commit Linting)**

```sh
npx husky add .husky/pre-commit "npm run lint && npm test" # Add pre-commit hook
chmod +x .husky/pre-commit # Ensure the hook is executable
```

---
