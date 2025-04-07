# 🧪 Unit Testing with Vitest

This project uses **Vitest** as its unit testing framework. It’s fast, developer-friendly, and integrates seamlessly with Vite. Combined with React Testing Library and JSDOM, you get a full-featured testing setup for your React components.

---

## ⚙️ Installation

Install the required dev dependencies:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

> 💡 `vitest` is the test runner.
> 💡 `@testing-library/react` allows DOM testing of components.
> 💡 `@testing-library/jest-dom` extends matchers (e.g., `.toBeInTheDocument()`), improving assertions.
> 💡 `jsdom` simulates a DOM environment in Node.js.

---

## 📁 Suggested File Structure

```txt
tests/
  └── setupTests.ts     # Global test setup
src/
  └── App.test.tsx      # Component/unit tests
```

> 🗂 Keep global setups in `tests/`, unit/component tests alongside the components they test, or in a `__tests__` folder if preferred.

---

## 🔧 Vite Config for Testing

Update your `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'tests/setupTests.ts',
    include: ['src/**/*.test.{ts,tsx}'], // Adjust as needed
    coverage: {
      reporter: ['text', 'html'], // Optional
    },
  },
});
```

---

## 🧰 Global Test Setup (`tests/setupTests.ts`)

```ts
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup(); // Automatically unmounts components after each test
});
```

---

## ✅ Example Test (`App.test.tsx`)

```tsx
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders hello world text', () => {
    render(<App />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
```

> 🔍 Use `screen` for consistent queries
> 🎯 Prefer queries like `getByRole`, `getByText`, `findBy*` for better accessibility alignment

---

## 📜 NPM Scripts (`package.json`)

Add these to your `scripts` section:

```json
"scripts": {
  "test": "vitest",
  "test:watch": "vitest --watch",
  "test:coverage": "vitest run --coverage"
}
```

> 🧪 `test`: Run tests once
> 🔁 `test:watch`: Re-runs tests as files change
> 📊 `test:coverage`: Generate test coverage reports

---

## 🧠 Tips for Testing

| Practice                     | Why It Matters                                                  |
| ---------------------------- | --------------------------------------------------------------- |
| Use `describe` + `it` blocks | Helps organize and describe your tests clearly                  |
| Clean up after each test     | Prevents memory leaks, stale elements, and flaky tests          |
| Write tests for behavior     | Test from the user’s perspective — not implementation details   |
| Use `data-testid` sparingly  | Prefer accessible queries (`getByRole`, `getByLabelText`, etc.) |
| Avoid unnecessary mocks      | Favor real component integration where possible                 |

---

## 🧪 Vitest + Husky: Pre-Commit Testing

You can (and often should) run tests **before committing code** to catch regressions early. This is especially useful in small teams or solo projects where you want a strong safety net.

### 🪝 Add Vitest to Your Husky Pre-Commit Hook

Update your `.husky/pre-commit` file to run the tests along with your other checks:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "🔍 Running lint-staged"
npx lint-staged

echo "🧠 Type checking..."
npx tsc --noEmit --skipLibCheck

echo "🧪 Running tests..."
npm run test -- --run
```

> 💡 `--run` tells Vitest to run once (not in watch mode) — perfect for automation.

---

## 🤝 Husky vs CI: When Should You Run Tests?

| Environment    | Run Tests?             | Why                                                            |
| -------------- | ---------------------- | -------------------------------------------------------------- |
| **Pre-commit** | ✅ Optional but useful | Catches issues before code even enters Git history             |
| **CI**         | ✅ Required            | Validates that code is correct _before merging_ or _deploying_ |

**Best Practice:**

- Keep Husky’s tests lightweight — test only fast, focused units.
- Run full test suites (and coverage) in CI, where time isn't as critical.

---

## 🚦 GitHub Actions + Tests = Safety Net

In your GitHub Actions CI config (like the one you created earlier), you're already running:

```yaml
- name: 🧪 Run unit tests
  run: npm run test
```

> Add `--run` or `--coverage` to tailor it:

```yaml
npm run test -- --run --coverage
```

This ensures **every PR is validated** before it can be merged — with no need to trust manual checks.

---

## 🧩 Optional Enhancements

- **Add a coverage badge**: Use `vitest run --coverage` with a CI badge for public repos.
- **Enable snapshot testing** (with `@vitest/snapshot`).
- **Use mocks or spies** (via `vi.fn()` from Vitest).

---

## 🔎 Resources

- 📘 [Vitest Documentation](https://vitest.dev/)
- 🧪 [React Testing Library Docs](https://testing-library.com/docs/)
- 🌐 [JSDOM GitHub](https://github.com/jsdom/jsdom)

---

✅ With this setup, you’re equipped to write reliable, readable, and maintainable tests for your React components. Let your code tell the truth—and your tests confirm it. 💯

---
