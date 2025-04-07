# ⚙️ Configuration

This document covers the project's configuration, including Node.js version management, editor settings, and project structure.

---

## Development Environment Setup

To ensure consistency across all developers, use the following tools and configurations:

### Required Tools

- **Node.js:** (version specified in `.nvmrc`) - [**https://nodejs.org/**](https://nodejs.org/)
- **npm:** (comes with Node.js) - [**https://www.npmjs.com/**](https://www.npmjs.com/)
- **nvm (Node Version Manager):** (recommended) - [**https://github.com/nvm-sh/nvm**](https://github.com/nvm-sh/nvm)
- **VS Code:** (recommended editor) - [**https://code.visualstudio.com/**](https://code.visualstudio.com/)
- **VS Code Extensions:**
  - ESLint: `dbaeumer.vscode-eslint`
  - Prettier: `esbenp.prettier-vscode`
  - Stylelint: `stylelint.vscode-stylelint`

---

## Node Version Management (.nvmrc)

### What and Why❓

- **NVM (Node Version Manager):** A tool to easily switch between Node.js versions, preventing version conflicts and ensuring consistent behavior. It ensures everyone is working with the same environment, reducing the risk of unexpected errors.

- **What is a .nvmrc file?** A `.nvmrc` file specifies the Node.js version _required_ for the project, ensuring consistency across development environments and/or CI/CD pipelines. Including this file in your project allows NVM to automatically select the correct version.

### Setup

1.  **Install NVM:** If not installed, follow the instructions for your OS on the [NVM GitHub page](https://github.com/nvm-sh/nvm).
2.  **Create `.nvmrc`:** In the project root, create `.nvmrc` and add the desired Node.js version (e.g., `v22.9.0`).

    ```
    v22.9.0  // Example: Use Node.js version 22.9.0
    ```

### Usage

1.  **Check current Node.js version:** `node -v`
2.  **Automatic Switching (Recommended):** In the project directory, run `nvm use`. NVM will check the `.nvmrc` file and automatically switch to (or prompt you to install) the specified version. This is the easiest way to ensure you're using the right version.
3.  **Manual Check and Switch:**
    - `nvm ls`: List managed Node.js versions (the active version is marked with an asterisk).
    - `nvm use <version>`: Switch to a specific version (replace `<version>` with the version from the `.nvmrc` file).

Reference material: [Change project, change Node version: let `.nvmrc` help you](https://thawinwats.medium.com/change-project-change-node-version-let-nvmrc-help-you-630b34dafd09) for more information.

## Editor Configuration (.editorconfig)

EditorConfig ([https://editorconfig.org](https://editorconfig.org/)) helps maintain consistent coding styles across different editors and IDEs. This is important for collaboration and code readability, and helps prevent style inconsistencies and merge conflicts.

### What and Why❓

- **What is `.editorconfig`?** A file format and a set of plugins for various text editors and IDEs that help developers maintain consistent coding styles.
- **How it works:** The `.editorconfig` file in the project root defines the coding style rules, which editors and IDEs with the plugin automatically apply.
- **Why use it?** Ensures consistent code formatting across the project, preventing style inconsistencies and merge conflicts, and improving code readability and maintainability.

### Setup

1.  In the project root directory, create a file named `.editorconfig` (no file extension).
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

### Explanation of `.editorconfig` settings:

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

## VS Code Configuration

This section describes the recommended VS Code settings and extensions for this project. Using these settings and extensions will ensure a consistent development experience across all developers, improving collaboration and reducing potential issues.

### VS Code Settings (.vscode/settings.json)

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

4.  ✅ **Crucial: Add `.vscode/*` to your `.gitignore` file except `!.vscode/extensions.json` if you share recommended extensions.** This directory often contains user-specific settings and should _not_ be committed to version control. The standard approach is to ignore everything within the `.vscode` directory _except_ the `extensions.json` file (which lists recommended extensions). If you are _not_ sharing recommended extensions, simply add the following line to the `.gitignore` file:

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

### VS Code Recommended Extensions

To further enhance the development experience and ensure consistency, the project recommends installing specific VS Code extensions. These extensions provide essential features like linting, formatting, spell checking, and improved Markdown preview. When you open the project in VS Code, you _may_ be prompted to install the suggested extensions.

#### Setup Instructions

1.  Inside `.vscode`, create a file named `extensions.json`.
2.  Copy the following JSON and paste it into `extensions.json`:

```json
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode", "stylelint.vscode-stylelint", "streetsidesoftware.code-spell-checker", "bierner.markdown-preview-github-styles", "ms-vscode.vscode-typescript-next"]
}
```

> When you open the project, VS Code may prompt you to install these for optimal experience.

3.  **Reminder: Ensure `.vscode/*` is in your `.gitignore`.** Whether or not you include `extensions.json` depends on whether you want to share recommended extensions.

- **To share recommended extensions:** Add `!.vscode/extensions.json` to your `.gitignore`.
- **Not sharing extensions:** No additional `.gitignore` rule is needed (just `.vscode/*`).

### Recommended Extensions and Their Purpose

| Extension                                | Purpose                                                                                |
| ---------------------------------------- | -------------------------------------------------------------------------------------- |
| `dbaeumer.vscode-eslint`                 | **ESLint** - Integrates ESLint for linting JavaScript and TypeScript code.             |
| `esbenp.prettier-vscode`                 | **Prettier** - Integrates Prettier for automatic code formatting.                      |
| `stylelint.vscode-stylelint`             | **Stylelint** - Integrates Stylelint for linting CSS/SCSS/Less files.                  |
| `streetsidesoftware.code-spell-checker`  | **Spell Checker** - Helps catch typos in code comments and strings.                    |
| `bierner.markdown-preview-github-styles` | **Markdown Preview** - Styles Markdown previews to resemble GitHub's styling.          |
| `ms-vscode.vscode-typescript-next`       | **Improved TypeScript Support** - Provides the latest TypeScript features and updates. |

## 🧠 Why Configure All This?

- Ensures consistent dev experience
- Prevents merge conflicts from style differences
- Speeds up onboarding new team members
- Encourages best practices across the board

---

## 🔗 Related Docs

- [Project Structure](./PROJECT_STRUCTURE.md)
- [Code Quality](./CODE_QUALITY.md)
- [Installation Guide](./INSTALLATION.md)
