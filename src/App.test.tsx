import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App Component', () => {
  it('renders "Hello world!" text', () => {
    render(<App />);
    expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
    screen.debug();
  });

  it('renders without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });
});
