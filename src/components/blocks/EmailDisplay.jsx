import React, { useEffect, useState } from "react";
import InfoTooltip from "./InfoTooltip";
import { ArrowBigDown, Clipboard } from "lucide-react";
import ResetIcon from "@/assets/icons/ResetIcon";
import useEmailContext from "@/hooks/useEmailContext";
import useEmailCreationMutation from "@/hooks/useEmailCreationMutation";
import LoadingState from "../elements/LoadingState";
import ErrorState from "../elements/ErrorState";
import ConfirmDialog from "../elements/ConfirmDialog";
import { generateRandomName } from "@/lib/utils";
import { toast } from "sonner";

const EmailDisplay = () => {
  const {
    state,
    handleEmailCreated,
    domainsLoading,
    domainsError,
    setSelectedDomain,
    resetAll,
  } = useEmailContext();
  const { username, selectedDomain, domains, email, isEmailCreated } = state;

  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);

  // React Query mutation for email creation
  const emailCreationMutation = useEmailCreationMutation((data) => {
    // On success, dispatch to reducer to set email & token and isEmailCreated
    if (handleEmailCreated) {
      handleEmailCreated(data);
    }
  });

  // Loading domains
  const isWaitingForDomains = domainsLoading && domains.length === 0;

  // Creating email
  const isCreatingEmail = emailCreationMutation.isPending;

  // Loading: either waiting for domains OR creating email
  const isLoading = isWaitingForDomains || isCreatingEmail;

  // Determine what loading message to show
  const loadingMessage = isWaitingForDomains
    ? "Loading available domains..."
    : "Creating your temporary email address...";

  useEffect(() => {
    // Don't create if email already exists
    if (email || isEmailCreated) return;

    // Don't create if currently creating
    if (emailCreationMutation.isPending) return;

    // Wait for domains to finish loading first
    if (domainsLoading) return;

    // If domains failed to load, don't attempt creation
    if (domainsError || domains.length === 0) return;

    // Domains are ready, proceed with email creation
    const name = username || generateRandomName();
    const domain =
      selectedDomain?.domain ||
      domains[Math.floor(Math.random() * domains.length)]?.domain;

    if (!domain) {
      toast.error("Invalid domain selected");
      return;
    }

    setSelectedDomain(domain);

    // Execute email creation via React Query
    emailCreationMutation.mutate({ name, domain });
  }, [
    email,
    isEmailCreated,
    emailCreationMutation,
    domainsLoading,
    domainsError,
    domains,
    username,
    selectedDomain,
    setSelectedDomain,
  ]);

  const copyEmail = () => {
    if (!email) return;
    navigator.clipboard.writeText(email);
    toast.success("Email address is copied to clipboard");
  };

  const handleReset = () => {
    resetAll();
    setIsResetDialogOpen(false);
    toast.info("Email reset successfully");
  };

  return (
    <>
      {isLoading && <LoadingState message={loadingMessage} />}

      {!isLoading && domainsError && (
        <ErrorState
          message="Failed to load email domains"
          onRetry={() => window.location.reload()}
        />
      )}

      {!isLoading && !domainsError && domains.length === 0 && (
        <ErrorState
          message="No email domains available"
          onRetry={() => window.location.reload()}
        />
      )}

      {email && !isLoading && (
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
              triggerClassName="rounded-full p-1 focus:outline-1 outline-primary/50 [&_svg]:-translate-y-[.5px] "
              content="Copy Email address"
              handleClick={copyEmail}
            >
              <Clipboard className="translate-y-[.1rem] w-5 h-5 sm:w-8 sm:h-8 text-primary" />
            </InfoTooltip>
          </div>

            {/* Reset */}
            <InfoTooltip
              ariaLabel="Reset"
              triggerClassName="flex items-center justify-center mt-4 rounded-full p-1 focus:outline-1 outline-primary/50 "
              content="Reset"
              handleClick={() => setIsResetDialogOpen(true)}
            >
              <ResetIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </InfoTooltip>

          <ConfirmDialog
              open={isResetDialogOpen}
              onOpenChange={setIsResetDialogOpen}
              title="Are you absolutely sure?"
              description={
                <>
                  This action cannot be undone. This will permanently delete
                  this email and remove all the messages.
                  <button
                    onClick={handleReset}
                    className="active:translate-y-[2px] py-1 group relative flex items-center overflow-hidden px-8 whitespace-nowrap gap-1 justify-start rounded-3xl bg-primary text-sm transition-colors duration-300 hover:bg-primary/90 active:bg-primary/70 shadow-sm font-medium h-9"
                  >
                    <span className="ease absolute right-0 flex h-9 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
                      <ResetIcon className="w-3 h-3 text-foreground" />
                    </span>
                    <span className="relative transform transition-transform duration-300 group-hover:-translate-x-3 text-foreground">
                      Yes Reset
                    </span>
                  </button>
                </>
              }
              dialogContentClassName="bg-background border-foreground/10 max-w-[90%] sm:max-w-md rounded-xl *:text-start"
            />
        </div>
      )}
    </>
  );
};

export default EmailDisplay;
