import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import { messages } from './messages';
import { apiService } from './base';

vi.mock('./base', () => ({
  apiService: {
    get: vi.fn(),
    post: vi.fn(),
  },
}));

describe('messages api', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls apiService.get with correct params in getAll', async () => {
    (apiService.get as Mock).mockResolvedValueOnce([{ _id: '1', author: 'A', message: 'M', createdAt: 'now' }]);
    const result = await messages.getAll({ limit: 5 });
    expect(apiService.get).toHaveBeenCalledWith('/messages', { limit: 5 });
    expect(result).toEqual([{ _id: '1', author: 'A', message: 'M', createdAt: 'now' }]);
  });

  it('calls apiService.post with correct params in create', async () => {
    (apiService.post as Mock).mockResolvedValueOnce({ _id: '2', author: 'B', message: 'N', createdAt: 'now' });
    const result = await messages.create({ author: 'B', message: 'N' });
    expect(apiService.post).toHaveBeenCalledWith(
      '/messages',
      { author: 'B', message: 'N' },
      { 'Content-Type': 'application/json' }
    );
    expect(result).toEqual({ _id: '2', author: 'B', message: 'N', createdAt: 'now' });
  });
});
