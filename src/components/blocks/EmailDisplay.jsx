import React, { useEffect, useRef } from "react";
import { Clipboard, Loader2 } from "lucide-react";
import { toast } from "sonner";
import InfoTooltip from "./InfoTooltip";
import useEmailContext from "@/hooks/useEmailContext";
import useEmailCreationMutation from "@/hooks/useEmailCreationMutation";
import { generateRandomName } from "@/lib/utils";

const EmailDisplay = () => {
  const { state, handleEmailCreated } = useEmailContext();
  const { customEmail, domains, email, isEmailCreated } = state;
  const isCreatingRef = useRef(false);

  // React Query mutation for email creation
  const emailCreationMutation = useEmailCreationMutation((data) => {
    // On success, dispatch to reducer to set email and isEmailCreated
    if (handleEmailCreated) {
      handleEmailCreated(data);
    }
    isCreatingRef.current = false;
  });

  // Trigger email creation when component mounts or customEmail changes
  useEffect(() => {
    // Don't create if already created or currently creating
    if (isEmailCreated || email || isCreatingRef.current) return;

    // Don't create if no domains available
    if (!domains || domains.length === 0) {
      toast.error("No domains available. Please try again.");
      return;
    }

    // Prevent duplicate creation
    isCreatingRef.current = true;

    let name, domain;

    if (customEmail) {
      // Validate custom email format
      const emailRegex = /^[^@]+@[^@]+$/;
      if (!emailRegex.test(customEmail)) {
        toast.error("Invalid custom email format");
        isCreatingRef.current = false;
        return;
      }
      // Parse custom email (format: name@domain)
      const parts = customEmail.split('@');
      name = parts[0];
      domain = parts[1];
    } else {
      // Generate random email
      name = generateRandomName();
      const selectedDomain = domains[Math.floor(Math.random() * domains.length)];
      if (!selectedDomain?.domain) {
        toast.error("Invalid domain selected");
        isCreatingRef.current = false;
        return;
      }
      domain = selectedDomain.domain;
    }

    // Execute email creation via React Query
    emailCreationMutation.mutate({ name, domain });
  }, [customEmail, domains, isEmailCreated, email, emailCreationMutation]);

  const copyEmail = () => {
    if (!email) return;
    navigator.clipboard.writeText(email);
    toast.success("Email address is copied to clipboard");
  };

  // Show loading state while creating
  if (emailCreationMutation.isPending || !email) {
    return (
      <div className="z-50 flex flex-col items-center justify-center">
        <p className="text-foreground/60 text-base sm:text-xl font-medium mb-2">
          Creating your temporary email address...
        </p>
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Show error state
  if (emailCreationMutation.isError) {
    isCreatingRef.current = false;
    return (
      <div className="z-50 flex flex-col items-center justify-center">
        <p className="text-red-500 text-base sm:text-xl font-medium mb-2">
          Failed to create email. Please try again.
        </p>
      </div>
    );
  }

  return (
    <div className="z-50 flex flex-col items-center justify-center">
      <p className="text-foreground/60 text-base sm:text-xl font-medium mb-2">
        Your temporary email address is:
      </p>
      <div className="flex items-center gap-4">
        <p className="text-lg sm:text-4xl font-bold" id="EmailAddr">
          {email}
        </p>
        <InfoTooltip
          ariaLabel="Copy email"
          triggerClassName="rounded-full p-1 [&_svg]:-translate-y-[.5px]"
          content="Copy Email address"
          handleClick={copyEmail}
        >
          <Clipboard className="translate-y-[.1rem] w-5 h-5 sm:w-8 sm:h-8 text-primary" />
        </InfoTooltip>
      </div>
    </div>
  );
};

export default EmailDisplay;
