import { apiService } from './base'
import type { Message } from '../types'
import { messageSchema } from '../utils/validation';

const RESOURCE = '/messages'

interface MessageQueryOptions {
  [key: string]: string | number | boolean;
}

async function getAll(options?: MessageQueryOptions): Promise<Message[]> {
  // Remove undefined values from options
  const queryParams = options
    ? Object.fromEntries(Object.entries(options).filter(([, v]) => v !== undefined))
    : undefined;
  return await apiService.get(RESOURCE, queryParams) as Message[]
}

async function create(message: Pick<Message, 'author' | 'message'>): Promise<Message> {
  // Only send author and message fields to the API
  const parsedMessage = messageSchema.parse(message);
  return (await apiService.post(RESOURCE, parsedMessage, { 'Content-Type': 'application/json' })) as Message;
}

export const messages = {
  getAll,
  create,
}
