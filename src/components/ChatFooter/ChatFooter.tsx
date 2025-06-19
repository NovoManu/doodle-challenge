import { type FC, type FormEvent } from "react";
import styles from "./ChatFooter.module.scss";

interface ChatFooterProps {
  newMessage: string;
  setNewMessage: (msg: string) => void;
  handleSendMessage: (e: FormEvent) => void;
  sending: boolean;
}

export const ChatFooter: FC<ChatFooterProps> = ({
  newMessage,
  setNewMessage,
  handleSendMessage,
  sending,
}) => (
  <div className={styles["chat-footer"]}>
    <form
      className={styles["chat-input"]}
      onSubmit={handleSendMessage}
      aria-busy={sending}
    >
      <label htmlFor="chat-message-input" className="visually-hidden">
        Type your message
      </label>
      <input
        id="chat-message-input"
        type="text"
        placeholder="Message"
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
        disabled={sending}
        aria-label="Type your message"
        autoComplete="off"
      />
      <button type="submit" disabled={sending} aria-label="Send message">
        {sending ? "Sending..." : "Send"}
      </button>
    </form>
  </div>
);
