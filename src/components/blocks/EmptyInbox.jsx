import React from "react";
import InboxIcon from "@/assets/icons/InboxIcon";
import LoadingSpinner from "@/assets/icons/LoadingSpinner";
import useEmailContext from "@/hooks/useEmailContext";

const EmptyInbox = ({ messagesReady }) => {
  const { state } = useEmailContext();
  const { isNameFormVisible, isEmailCreated } = state;
  
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <div className="relative flex justify-center items-center min-h-[150px]">
        <InboxIcon className="absolute" />
        <LoadingSpinner
          className={`absolute transition-all ${messagesReady ? "opacity-100" : "opacity-0"}`}
        />
      </div>
      <h2 className="text-xl font-bold">
        {messagesReady ? "Waiting for incoming emails" : "Inbox is empty"}
      </h2>
      <h3 className="text-foreground/60 text-lg font-light text-center">
        {messagesReady
          ? "This operation is performed automatically"
          : isEmailCreated
            ? "Your inbox is ready. Waiting for incoming emails..."
            : isNameFormVisible
              ? "Enter your username and create your temporary email"
              : "Generate a random email or enter a username to create a temporary email"}
      </h3>
    </div>
  );
};

export default EmptyInbox;
