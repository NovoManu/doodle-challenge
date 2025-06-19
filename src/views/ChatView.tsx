import { useState, useRef, useEffect, type FC, type FormEvent } from "react";
import { ZodError } from "zod";

import { api } from "../api";
import { ChatFooter } from "../components/ChatFooter/ChatFooter";
import { Message } from "../components/Message";
import Loader from "../components/Loader/Loader";
import styles from "./ChatView.module.scss";
import { messageSchema } from "../utils/validation";

import type { Message as MessageType } from "../types";

export const ChatView: FC = () => {
  const [messageList, setMessageList] = useState<MessageType[]>([]);
  const [sending, setSending] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const currentUser = api.users.getCurrentUser();

  const loadMessages = async () => {
    try {
      setError(null);
      const msgs = await api.messages.getAll({ limit: 100 });
      setMessageList(msgs.reverse());
    } catch {
      setError("Failed to load messages. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    try {
      messageSchema.parse({
        author: currentUser,
        message: newMessage.trim(),
      });
    } catch (validationError) {
      if (validationError instanceof ZodError) {
        setError(validationError.errors?.[0]?.message || "Invalid input");
      } else {
        setError("Invalid input");
      }
      return;
    }
    setSending(true);
    setError(null);
    try {
      const createdMessage = await api.messages.create({
        author: currentUser,
        message: newMessage.trim(),
      } as MessageType);
      setNewMessage("");
      setMessageList(prev => [...prev, createdMessage]);
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => {
        setError(null);
        setShowError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  if (loading) return <Loader />;

  return (
    <>
      <div
        className={error && showError ? styles.error : styles.errorHidden}
        role="alert"
        aria-live="assertive"
      >
        {error}
      </div>
      <div
        className={styles.messages}
        ref={messagesContainerRef}
        role="list"
        aria-label="Chat messages"
      >
        {messageList.map((msg, idx) => (
          <Message
            key={msg._id ? `${msg._id}-${idx}` : idx}
            message={msg}
            isCurrentUser={
              msg.author === currentUser || msg.author === currentUser
            }
            role="listitem"
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatFooter
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage}
        sending={sending}
      />
    </>
  );
};
