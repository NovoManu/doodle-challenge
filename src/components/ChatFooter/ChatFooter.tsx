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
    <form className={styles["chat-input"]} onSubmit={handleSendMessage}>
      <input
        type="text"
        placeholder="Message"
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
        disabled={sending}
      />
      <button type="submit" disabled={sending}>
        {sending ? "Sending..." : "Send"}
      </button>
    </form>
  </div>
);
