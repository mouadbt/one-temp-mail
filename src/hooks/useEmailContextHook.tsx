import { useContext } from "react";
import { EmailContext } from "../context/context/EmailContext";

export default function useEmailContextHook() {
  const context = useContext(EmailContext);
  if (!context)
    throw new Error(
      "useEmailContext must be used within a EmailContextProvider",
    );
  return context;
}