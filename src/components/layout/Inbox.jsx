import React, { useState, useEffect } from "react";
import useEmailContext from "@/hooks/useEmailContext";
import useMessagesQuery from "@/hooks/useMessagesQuery";
import useMessageContentMutation from "@/hooks/useMessageContentMutation";
import EmptyInbox from "../blocks/EmptyInbox";
import InboxMessageList from "../blocks/InboxMessageList";
import LoadingState from "../elements/LoadingState";

// Helper functions for localStorage seenMessages
const getSeenMessages = () => {
  try {
    const stored = localStorage.getItem("seenMessages");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to load seenMessages from localStorage:", error);
    return [];
  }
};

const markMessageAsSeen = (id) => {
  try {
    const seenMessages = getSeenMessages();
    if (!seenMessages.includes(id)) {
      seenMessages.push(id);
      localStorage.setItem("seenMessages", JSON.stringify(seenMessages));
    }
  } catch (error) {
    console.error("Failed to save seenMessage to localStorage:", error);
  }
};

const Inbox = () => {
  const { state } = useEmailContext();
  const { token, isEmailCreated } = state;

  // Local state for UI
  const [seenMessages, setSeenMessages] = useState(getSeenMessages());
  const [currentMessageContent, setCurrentMessageContent] = useState(null);

  // React Query: Fetch messages list
  const {
    data: messages = [],
    isLoading: messagesLoading,
    isError: messagesError,
  } = useMessagesQuery(token);

  // React Query: Fetch individual message content
  const messageContentMutation = useMessageContentMutation();

  // Sync seenMessages from localStorage on mount
  useEffect(() => {
    setSeenMessages(getSeenMessages());
  }, []);

  // Handler: Fetch message content and mark as seen
  const handleFetchMessageContent = async (messageId) => {
    // Mark as seen in localStorage and state
    markMessageAsSeen(messageId);
    setSeenMessages(getSeenMessages());

    // Fetch message content
    if (token) {
      const content = await messageContentMutation.mutateAsync({
        id: messageId,
        token,
      });
      setCurrentMessageContent(content);
    }
  };

  // Determine if messages are ready (email created + token available)
  const messagesReady = isEmailCreated && !!token;

  return (
    <section className="px-[5%]">
      <div className="w-full flex flex-col items-stretch justify-start border border-foreground/10 z-20 m-0 bgshadow mt-12 rounded-3xl p-8 min-h-60">
        <h1 className="text-2xl select-none">Inbox</h1>
        <hr className="border-foreground/20 mb-2" />

        {/* Loading state */}
        {messagesLoading && messagesReady && (
          <LoadingState message="Loading messages..." />
        )}

        {/* Error state */}
        {!messagesLoading && messagesError && (
          <div className="flex flex-col items-center justify-center py-8">
            <p className="text-foreground/60 text-lg">
              Failed to load messages
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90"
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty state */}
        {!messagesLoading &&
          !messagesError &&
          (!messages || messages.length === 0) && (
            <EmptyInbox messagesReady={messagesReady} />
          )}

        {/* Message list */}
        {!messagesLoading && !messagesError && messages.length > 0 && (
          <InboxMessageList
            messages={messages}
            seenMessages={seenMessages}
            onFetchMessageContent={handleFetchMessageContent}
            messageContent={currentMessageContent}
          />
        )}
      </div>
    </section>
  );
};

export default Inbox;
