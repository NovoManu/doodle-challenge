import { z } from 'zod';
import { MAX_MESSAGE_LENGTH, MAX_AUTHOR_LENGTH, AUTHOR_PATTERN } from './constants';

export const messageSchema = z.object({
  message: z
    .string()
    .min(1, 'Message cannot be empty')
    .max(MAX_MESSAGE_LENGTH, `Message cannot be longer than ${MAX_MESSAGE_LENGTH} characters`)
    .trim(),
  author: z
    .string()
    .min(1, 'Author name cannot be empty')
    .max(MAX_AUTHOR_LENGTH, `Author name cannot be longer than ${MAX_AUTHOR_LENGTH} characters`)
    .regex(
      AUTHOR_PATTERN,
      'Author name can only contain letters, numbers, spaces, hyphens and underscores'
    )
    .trim(),
});

export const messageResponseSchema = z.object({
  _id: z.string(),
  message: z.string(),
  author: z.string(),
  createdAt: z.string(),
});

export const messagesResponseSchema = z.object({
  messages: z.array(messageResponseSchema),
  total: z.number(),
});

export type MessageInput = z.infer<typeof messageSchema>;
export type MessageResponse = z.infer<typeof messageResponseSchema>;
export type MessagesResponse = z.infer<typeof messagesResponseSchema>;
