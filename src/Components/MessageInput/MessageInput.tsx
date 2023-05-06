import React from "react";
import "./MessageInput.scss";

interface MessageInputProps {
  label: string;
  placeholder: string;
  rows: number;
  cols: number;
}

const MessageInput: React.FC<MessageInputProps> = ({
  label,
  placeholder,
  rows,
  cols,
}) => {
  return (
    <div className="messageInputContainer">
      <label className="messageInputLabel">{label}</label>
      <textarea
        className="messageInputShape"
        placeholder={placeholder}
        rows={rows}
        cols={cols}
      />
    </div>
  );
};

export default MessageInput;
