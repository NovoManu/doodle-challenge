import { render } from '@testing-library/react';
import Loader from './Loader';
import { describe, it, expect } from 'vitest';

describe('Loader', () => {
  it('renders overlay and spinner', () => {
    const { container } = render(<Loader />);
    // Check for overlay div
    const overlay = container.querySelector('div');
    expect(overlay).toBeInTheDocument();
    // Check for spinner div inside overlay
    const spinner = overlay?.querySelector('div');
    expect(spinner).toBeInTheDocument();
  });
});
