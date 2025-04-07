# 🛠️ Installation Guide

This guide walks through how to set up your **React + Vite Starter Template** from scratch, clean it up for a fresh start, and configure your development environment for long-term success.

---

## 📦 Create and Install the Project

The project was initialized using Vite with the React TypeScript template:

### 1️⃣ Create a New Vite Project

Use this command, replacing `<your-app-name>` with your desired project name.

```bash
npm create vite@latest <your-app-name> -- --template react-ts
cd <your-app-name>
npm install
```

> 💡 Use the extra `--` when using npm 7+ or you'll get an error.
> 💡 The above will also navigate into your project folder
> 💡`npm install` installs the packages/dependencies listed in your `package.json` file. Crucially, you'll also use this `npm install` command (along with the `--save` or `--save-dev` flags, or `-S`, `-D` for short, when adding new packages) whenever you need to add or update dependencies in your project later on. So, keep this command handy!

### 2️⃣ Initialize Git

💡 _Initializing Git early helps with version control._

```bash
git init
```

> This initializes a new Git repository in your project directory. This is essential for version control and for using tools that rely on `git`. Do this _immediately_ after installing your initial dependencies.

> 🧠 Tools like Husky rely on `.git` being present. Initialize Git before installing pre-commit hooks or running `prepare`.

#### 3️⃣ Start the Development Server

```bash
npm run dev
```

The `dev` script, defined in your `package.json`, typically starts the development server with Hot Module Replacement (HMR) enabled.
This will launch your React app and provide a local development URL in the terminal. Open the URL in your browser to see your app running.

- Default URL: [http://localhost:5173](http://localhost:5173)
- Change the port if needed:

```bash
npm run dev -- --port 3000  # Example: Using port 3000
```

---

## ✂️ Project Cleanup (Optional but Recommended) 🧹🗑️

Clean up default Vite boilerplate to give yourself a clean slate:

### 1. Remove Default Assets & Styles

- **Delete `App.css`:**

```bash
rm ./src/App.css
rm -r ./src/assets
```

> Removes placeholder styles and images to reduce noise and file clutter.
> Deletes sample assets to keep the project lightweight (skip if needed).

### 2. Simplify `App.tsx`

Replace its contents with a minimal version:

```tsx
function App() {
  return <div>Hello world!</div>;
}

export default App;
```

This removes the example JSX and all of the imports.

### 3. Minimize `index.css` to include only essential styles

```css
body {
  margin: 0; /* Keeps spacing minimal */
}
```

This removes any unnecessary styles that came with the template and is often all you _need_ in `index.css` to start.

## ✨ CSS Reset (Optional)

For better cross-browser consistency:

- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Meyer Reset](http://meyerweb.com/eric/tools/css/reset/)
- [Modern CSS Reset](https://www.moderncss.dev/reset/)

---

## ✅ Configure Your Environment

- Set up your preferred editor, formatting rules, and Node version.
- See the full details in [Configuration.md](./CONFIGURATION.md)

---

## ✅ Add Code Quality Tools

Install and configure linting and formatting tools like [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), and [Stylelint](https://stylelint.io/).

> 📄 For full installation commands, configuration files, and usage tips, see [Code_Quality.md](./CODE_QUALITY.md)

---

## 🧪 Test Your Setup

Run these commands to verify everything is working:

```bash
npm run dev             # Start dev server
```

> You should see your app at [http://localhost:5173](http://localhost:5173)

---

## ✅ Next Steps

- 🔧 [Configuration.md](./CONFIGURATION.md) — Node version, environment, editor setup
- ✨ [Code_Quality.md](./CODE_QUALITY.md) — Linting, formatting, style
- 🔁 [GIT_HOOKS.md](./GIT_HOOKS.md) — Pre-commit hooks and commit conventions
- 🔬 [Testing.md](./TESTING.md) — Add Vitest and React Testing Library

---

> 🚀 Your project is initialized and cleaned up — continue with configuration, code quality, and testing to complete your setup.
