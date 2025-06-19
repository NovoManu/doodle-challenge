import { describe, it, expect, vi, beforeEach } from 'vitest';
import { apiService } from './base';

const mockFetch = vi.fn();

// Use globalThis for fetch in Vitest/JSDOM
globalThis.fetch = mockFetch;

const API_BASE_URL = 'http://localhost:3000/api/v1';

beforeEach(() => {
  vi.resetAllMocks();
});

describe('apiService', () => {
  it('calls fetch with correct GET params', async () => {
    mockFetch.mockResolvedValueOnce({ ok: true, status: 200, json: async () => ({ data: 123 }) });
    const result = await apiService.get('/test', { foo: 'bar' });
    expect(mockFetch).toHaveBeenCalledWith(
      `${API_BASE_URL}/test?foo=bar`,
      expect.objectContaining({ method: 'GET', headers: expect.objectContaining({ Authorization: expect.any(String) }) })
    );
    expect(result).toEqual({ data: 123 });
  });

  it('calls fetch with correct POST params', async () => {
    mockFetch.mockResolvedValueOnce({ ok: true, status: 200, json: async () => ({ success: true }) });
    const result = await apiService.post('/test', { foo: 'bar' });
    expect(mockFetch).toHaveBeenCalledWith(
      `${API_BASE_URL}/test`,
      expect.objectContaining({ method: 'POST', body: JSON.stringify({ foo: 'bar' }) })
    );
    expect(result).toEqual({ success: true });
  });

  it('throws on non-ok response', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 500, statusText: 'Server Error' });
    await expect(apiService.get('/fail')).rejects.toThrow('Error: 500 Server Error');
  });

  it('returns null for 204 No Content', async () => {
    mockFetch.mockResolvedValueOnce({ ok: true, status: 204 });
    const result = await apiService.get('/no-content');
    expect(result).toBeNull();
  });
});
