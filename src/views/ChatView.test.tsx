import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ChatView } from './ChatView';
import * as apiModule from '../api';

// Mock scrollIntoView globally for JSDOM
window.HTMLElement.prototype.scrollIntoView = vi.fn();

const mockMessages = [
  {
    _id: '1',
    author: 'TempStaticUser',
    message: 'Hello!',
    createdAt: '2025-06-19T12:00:00.000Z',
  },
  {
    _id: '2',
    author: 'OtherUser',
    message: 'Hi there!',
    createdAt: '2025-06-19T12:01:00.000Z',
  },
];

describe('ChatView', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.spyOn(apiModule.api.users, 'getCurrentUser').mockReturnValue('TempStaticUser');
    vi.spyOn(apiModule.api.messages, 'getAll').mockResolvedValue([...mockMessages]);
    vi.spyOn(apiModule.api.messages, 'create').mockImplementation(async ({ author, message }) => ({
      _id: '3',
      author,
      message,
      createdAt: new Date().toISOString(),
    }));
  });

  it('renders loader initially and then messages', async () => {
    render(<ChatView />);
    // Loader: look for the loader by test id
    expect(screen.getByTestId('loader')).toBeInTheDocument();
    await screen.findByText('Hello!');
    expect(screen.getByText('Hi there!')).toBeInTheDocument();
  });

  it('shows error if loading messages fails', async () => {
    vi.spyOn(apiModule.api.messages, 'getAll').mockRejectedValueOnce(new Error('fail'));
    render(<ChatView />);
    await screen.findByText(/Failed to load messages/);
    expect(screen.getByText(/Failed to load messages/)).toBeInTheDocument();
  });

  it('can send a new message', async () => {
    render(<ChatView />);
    await screen.findByText('Hello!');
    const input = screen.getAllByPlaceholderText('Message')[0];
    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(screen.getAllByText('Send')[0]);
    await waitFor(() => expect(screen.getByText('Test message')).toBeInTheDocument());
  });

  it('shows validation error for empty message', async () => {
    render(<ChatView />);
    await waitFor(() => expect(screen.getAllByText('Hello!')[0]).toBeInTheDocument());
    const input = screen.getAllByPlaceholderText('Message')[0];
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(screen.getAllByText('Send')[0]);
    await screen.findByText(/Message cannot be empty/);
    expect(screen.getByText(/Message cannot be empty/)).toBeInTheDocument();
  });
});
