import { useState, type ReactNode } from "react";
import {
  type Email,
  type Messages,
  type Token,
  EmailContext,
} from "../context/EmailContext";
import { api } from "#lib/api";
import { toast } from "sonner";
import { getLocalStorage, setLocalStorage } from "#lib/utils";

type EmailContextProviderProps = {
  children: ReactNode;
};

type Inbox = {
  address: string;
  token: string;
};

export function EmailContextProvider({ children }: EmailContextProviderProps) {
  const [email, setEmail] = useState<Email | null>(() => {
    return getLocalStorage<string>("email");
  });
  const [token, setToken] = useState<Token | null>(() => {
    return getLocalStorage<string>("token");
  });
  const [messages, setMessages] = useState<Messages>(() => {
    return getLocalStorage<Messages>("messages") ?? [];
  });

  const generateEmail = async () => {
    const data = await fetchAPI<Inbox>(
      "/inbox",
      "POST",
      "Failed to create email",
      "Creating your temporary email...",
      "Email created successfully",
    );

    if (data) {
      setEmail(data.address);
      setLocalStorage<string>("email", data.address);
      setToken(data.token);
      setLocalStorage<string>("token", data.token);
    }
  };

  const fetchAPI = async <T,>(
    endpoint: string,
    method: string,
    errorToastMsg: string,
    fetchingToastMsg: string,
    successToastMsg: string,
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
        token,
        setToken,
        setEmail,
        setMessages,
        generateEmail,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
}
