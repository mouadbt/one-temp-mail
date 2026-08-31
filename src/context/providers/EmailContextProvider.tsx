import { useState, type ReactNode } from "react";
import {
  type Email,
  type Messages,
  EmailContext,
} from "../context/EmailContext";

type EmailContextProviderProps = {
  children: ReactNode;
};

export function EmailContextProvider({
  children,
}: EmailContextProviderProps) {
  const [email, setEmail] = useState<Email>(null);
  const [messages, setMessages] = useState<Messages>([]);

  return (
    <EmailContext.Provider
      value={{
        email,
        messages,
        setEmail,
        setMessages,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
}
