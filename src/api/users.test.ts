import { describe, it, expect } from 'vitest';
import { users } from './users';
import { CURRENT_USER } from '../utils/constants';

describe('users api', () => {
  it('getCurrentUser returns CURRENT_USER', () => {
    expect(users.getCurrentUser()).toBe(CURRENT_USER);
  });
});
