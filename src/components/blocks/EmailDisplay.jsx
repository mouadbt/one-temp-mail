import React, { useEffect } from "react";
import InfoTooltip from "./InfoTooltip";
import { Clipboard } from "lucide-react";
import useEmailContext from "@/hooks/useEmailContext";
import useEmailCreationMutation from "@/hooks/useEmailCreationMutation";

const EmailDisplay = () => {
  const {
    state,
    handleEmailCreated,
    domainsLoading,
    domainsError,
    setSelectedDomain,
  } = useEmailContext();
  const { username, selectedDomain, domains, email, isEmailCreated } = state;
  
  // React Query mutation for email creation
  const emailCreationMutation = useEmailCreationMutation((data) => {
    // On success, dispatch to reducer to set email & token and isEmailCreated
    if (handleEmailCreated) {
      handleEmailCreated(data);
    }
  });
  
  useEffect(() => {
    // Don't create if already created or currently creating
    if (isEmailCreated || email || emailCreationMutation.isPending) return;
  }, [username, selectedDomain, domains, email, isEmailCreated]);

  return (
    <div className="z-50 flex flex-col items-center justify-center">
      <p className="text-foreground/60 text-base sm:text-xl font-medium mb-2">
        Your temporary email address is:
      </p>
      <div className="flex items-center gap-4">
        <p className="text-lg sm:text-4xl font-bold" id="EmailAddr">
          {/* {email} */}
        </p>
        <InfoTooltip
          ariaLabel="Copy email"
          triggerClassName="rounded-full p-1 [&_svg]:-translate-y-[.5px]"
          content="Copy Email address"
        >
          <Clipboard className="translate-y-[.1rem] w-5 h-5 sm:w-8 sm:h-8 text-primary" />
        </InfoTooltip>
      </div>
    </div>
  );
};

export default EmailDisplay;
