import React from "react";
import chatHistory from "@/data/chatData.json"; // Ensure this path is correct
import ChatUI from "@/components/chatUI"; // Adjust the path according to your file structure
import ChatType from "@/types/chatType";

const SingleChat = ({ params }: { params: { chatId: string } }) => {
  // Find the chat that matches the chatId from the params
  const chatData: ChatType | undefined = chatHistory.find(
    (chat) => chat.id === params.chatId
  );

  return (
    <div>
      {chatData ? (
        <ChatUI
          chat={chatData.chat.map((item) => ({
            message: item.message,
            userRole: item.userRole as "user" | "bot",
          }))}
          id={chatData.id}
          name={chatData.name}
          timeStamp={chatData.timeStamp}
        />
      ) : (
        <div>No chat found with ID: {params.chatId}</div>
      )}
    </div>
  );
};

export default SingleChat;
