import { createContext } from "react";

export type Email = string | null;

export type Token = string | null;

export type Message = {
  id: string;
  from: string;
  fromName: string;
  subject: string;
  intro: string;
  date: string;
};

export type Messages = Message[];

export type EmailContextType = {
  email: Email;
  token: Token;
  messages: Messages;
  setEmail: React.Dispatch<React.SetStateAction<Email>>;
  setToken: React.Dispatch<React.SetStateAction<Token>>;
  setMessages: React.Dispatch<React.SetStateAction<Messages>>;
  generateEmail: () => Promise<void>;
};

export const EmailContext = createContext<EmailContextType | null>(null);