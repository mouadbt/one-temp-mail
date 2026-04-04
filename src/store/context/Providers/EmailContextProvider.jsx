import React from "react";
import { EmailContext } from "../contexts/EmailContext";
import useEmailReducer from "@/hooks/useEmailReducer";

const EmailContextProvider = ({ children }) => {
  const emailContext = useEmailReducer();
  const Context = EmailContext;
  return (
    <Context.Provider value={emailContext}>{children}</Context.Provider>
  );
};

export default EmailContextProvider;
