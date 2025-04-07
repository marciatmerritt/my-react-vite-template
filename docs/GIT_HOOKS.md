# 🪝 Git Hooks & Commit Conventions

This project uses **Husky**, **Commitlint**, **Commitizen**, and **Lint-Staged** to enforce consistent commits and automated code checks during development.

---

## 🧰 Tool Breakdown

| Tool            | Purpose                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| **Husky**       | Runs scripts automatically on Git events (pre-commit, commit-msg)                                              |
| **Lint-Staged** | Runs linters only on staged files (improves performance)                                                       |
| **Commitlint**  | Validates commit messages based on [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) rules |
| **Commitizen**  | Provides a prompt to help you write standardized commits                                                       |

---

## ⚙️ Setup Instructions

Install the required dev dependencies:

```bash
npm install -D husky lint-staged @commitlint/cli @commitlint/config-conventional commitizen cz-customizable
```

Initialize Husky and set up the `prepare` script:

```bash
npx husky install
```

> 💡 If `.husky` hooks don't run after cloning, run `npm run prepare` to reinitialize them.

Update `package.json`:

```json
"scripts": {
  "prepare": "husky",
  "commit": "git-cz"
},
"config": {
  "commitizen": {
    "path": "cz-customizable"
  }
}
```

---

## ✅ Lint-Staged Setup

Create `.lintstagedrc`:

```json
{
  "*.{js,ts,tsx,jsx}": ["eslint --fix", "prettier --write"],
  "*.{css,scss}": ["stylelint --fix"],
  "*.{json,md}": ["prettier --write"]
}
```

Add a Husky `pre-commit` hook:

```bash
echo "🚀 Running pre-commit checks... Lint-staged"
npx lint-staged

echo "🚀 Running pre-commit checks... Typescript Type-check"
npx tsc --noEmit --skipLibCheck --noErrorTruncation

echo "🚀 Running pre-commit checks... Vitest"
npm run test -- --run
```

---

## 📝 Commitlint Setup

Create `.commitlintrc`:

```json
{
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    "type-enum": [2, "always", ["init", "feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"]],
    "scope-enum": [2, "always", [" ", "core", "ui", "backend", "api", "database", "docs", "config"]]
  }
}
```

Add a Husky `commit-msg` hook:

```bash
npx husky add .husky/commit-msg "npx commitlint --edit $1"
```

---

## 🧪 Commitizen Setup

Create a config file: `config/cz-config.json`

```json
{
  "types": [
    { "value": "init", "name": "🚀 init: initial commit or setup" },
    { "value": "feat", "name": "✨ feat: add new functionality" },
    { "value": "fix", "name": "🐛 fix: resolve bug in existing functionality" },
    { "value": "docs", "name": "📚 docs: update documentation only" },
    {
      "value": "style",
      "name": "💄 style: apply code style changes (formatting, whitespace)"
    },
    {
      "value": "refactor",
      "name": "♻️ refactor: restructure code without changing behavior"
    },
    { "value": "perf", "name": "🚀 perf: improve performance" },
    { "value": "test", "name": "🧪 test: add or update tests" },
    {
      "value": "build",
      "name": "🏗 build: modify build system or dependencies"
    },
    {
      "value": "ci",
      "name": "⚙️ ci: update CI/CD configuration (GitHub Actions, Jenkins, etc.)"
    },
    {
      "value": "chore",
      "name": "🛠 chore: perform maintenance tasks (configs, scripts, etc.)"
    },
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

You can now run:

```bash
npm run commit
```

This will launch a guided CLI prompt to help format your commit message.

---

## 🧠 Why Use This Setup?

- 🔒 Prevent bad code from entering Git history
- ✅ Ensure proper linting and formatting before committing
- 📓 Enforce meaningful, standardized commit messages
- 🚦 Improve team collaboration and CI automation

---

## 📁 Related Files

| File / Folder           | Purpose                                            |
| ----------------------- | -------------------------------------------------- |
| `.husky/`               | Git hook scripts (e.g. `pre-commit`, `commit-msg`) |
| `.lintstagedrc`         | Defines which linters run on staged files          |
| `.commitlintrc`         | Commitlint configuration                           |
| `config/cz-config.json` | Commitizen custom prompt setup                     |

---

## 📝 Commit Conventions

### ✅ How to Make a Commit

Use the following command instead of `git commit`:

```bash
npm run commit
```

This launches an interactive prompt (powered by Commitizen) to guide you through writing a structured commit message.

### 💡 Example Commit Types

| Type       | Purpose                                   |
| ---------- | ----------------------------------------- |
| `init`     | 🚀 Initial commit or setup                |
| `feat`     | ✨ Add new functionality                  |
| `fix`      | 🐛 Fix a bug                              |
| `docs`     | 📚 Documentation changes only             |
| `style`    | 💄 Code style changes (formatting, etc.)  |
| `refactor` | ♻ Code changes without changing behavior |
| `test`     | 🧪 Add or update tests                    |
| `chore`    | 🛠 Maintenance, configs, build scripts    |
| `build`    | 🏗 Build system or dependency updates     |
| `ci`       | ⚙️ Changes to CI/CD pipelines             |
| `perf`     | 🚀 Performance improvements               |
| `revert`   | ⏪ Revert a previous commit               |

### 🎯 Commit Message Format

```
<type>(optional-scope): short description

optional longer body...

optional footer (e.g., issues closed)
```

> Example:
> `feat(ui): add animated navbar`

---

## 🧪 Running Tests on Pre-Commit

To help catch bugs early and maintain a stable codebase, this project runs unit tests automatically during the commit process.

### ✅ Why?

- Prevents commits that break functionality
- Catches regressions before they reach CI
- Encourages test-driven habits

### 🔧 How It Works

In `.husky/pre-commit`, tests are executed along with linting and type checks:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "🔍 Running lint-staged..."
npx lint-staged

echo "🧠 Type checking..."
npx tsc --noEmit --skipLibCheck

echo "🧪 Running unit tests..."
npm run test -- --run
```

> 💡 `--run` ensures Vitest runs once and exits — great for automation and speed.

---

## 🔍 Optional Pre-Commit Testing Strategies

While this project runs the full test suite on every commit, here are additional strategies you might consider:

### 1. **Only Run Tests for Changed Files**

Use Vitest’s built-in changed mode:

```bash
npx vitest --changed
```

> ⚡️ Great for large codebases or slower test suites.

### 2. **Skip Tests for Specific File Types**

Update your `.husky/pre-commit` file:

```bash
if git diff --cached --name-only | grep -qE '\.(md|json)$'; then
  echo "📝 Skipping tests: non-code files only"
else
  echo "🧪 Running tests..."
  npm run test -- --run
fi
```

> 🧠 Useful for documentation-only changes.

### 3. **Filter by Tag or Name**

Tag slow tests (e.g., `@slow`) and skip them in local pre-commit runs:

```bash
npm run test -- --run --testNamePattern="^((?!@slow).)*$"
```

Then in CI, run the full suite:

```bash
npm run test -- --run
```

---

✅ This setup ensures your project stays **clean**, **consistent**, and **production-ready** from the very first commit.
