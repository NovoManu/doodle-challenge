import type { FC } from "react";
import type { Message as MessageType } from "../../types";
import styles from "./Message.module.scss";

interface MessageProps {
  message: MessageType;
  isCurrentUser: boolean;
  role?: string; // Add role prop for accessibility
}

export const Message: FC<MessageProps> = ({ message, isCurrentUser, role }) => {
  return (
    <div
      className={`${styles.message} ${
        isCurrentUser ? styles["message-you"] : null
      }`}
      role={role}
    >
      <div className={styles.sender}>{message.author}</div>
      <div className={styles.text}>{message.message}</div>
      <div className={styles.timestamp}>
        {new Date(message.createdAt)
          .toLocaleString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })
          .replace(",", "")}
      </div>
    </div>
  );
};
