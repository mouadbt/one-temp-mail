import { useState, type ReactNode } from "react";
import {
  type Email,
  type Messages,
  EmailContext,
} from "../context/EmailContext";
import { api } from "#lib/api";
import { toast } from "sonner";

type EmailContextProviderProps = {
  children: ReactNode;
};

type Inbox = {
  address: string;
  token: string;
};

export function EmailContextProvider({
  children,
}: EmailContextProviderProps) {
  const [email, setEmail] = useState<Email>(null);
  const [messages, setMessages] = useState<Messages>([]);

  const generateEmail = async () => {
    const data = await fetchAPI<Inbox>(
      "/inbox",
      "POST",
      "Failed to create email",
      "Creating your temporary email...",
      "Email created successfully"
    );

    if (data) {
      console.log(data);
    }
  };

  const fetchAPI = async <T,>(
    endpoint: string,
    method: string,
    errorToastMsg: string,
    fetchingToastMsg: string,
    successToastMsg: string
  ): Promise<T | null> => {
    const toastId = toast.loading(fetchingToastMsg);

    try {
      const data: T = await api(endpoint, method);

      toast.success(successToastMsg, {
        id: toastId,
      });

      return data;
    } catch (error) {
      console.error(error);

      toast.error(errorToastMsg, {
        id: toastId,
      });

      return null;
    }
  };

  return (
    <EmailContext.Provider
      value={{
        email,
        messages,
        setEmail,
        setMessages,
        generateEmail,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
}