import { afterEach, describe, it, expect } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { Message } from './Message';
import type { Message as MessageType } from '../../types';

describe('Message component', () => {
  const baseMessage: MessageType = {
    _id: '1',
    author: 'Alice',
    message: 'Hello, world!',
    createdAt: '2025-06-19T12:34:56.000Z',
  };

  afterEach(() => {
    cleanup();
  });

  it('renders the message content', () => {
    render(<Message message={baseMessage} isCurrentUser={false} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });

  it('renders the timestamp in en-GB format', () => {
    render(<Message message={baseMessage} isCurrentUser={false} />);
    const timestamps = screen.getAllByText(/19 Jun 2025/);
    expect(timestamps).toHaveLength(1);
    expect(timestamps[0]).toBeInTheDocument();
  });

  it('applies the correct class for current user', () => {
    const { container } = render(<Message message={baseMessage} isCurrentUser={true} />);
    const messageDiv = container.querySelector('div');
    expect(messageDiv?.className).toMatch(/message/);
    expect(messageDiv?.className).toMatch(/message-you/);
  });

  it('does not apply the current user class for others', () => {
    const { container } = render(<Message message={baseMessage} isCurrentUser={false} />);
    const messageDiv = container.querySelector('div');
    expect(messageDiv?.className).toMatch(/message/);
    expect(messageDiv?.className).not.toMatch(/message-you/);
  });
});
