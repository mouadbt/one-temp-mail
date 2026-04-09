import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import SecondaryBtn from "../elements/SecondaryBtn";
import { RightArrow } from "@/assets/icons";
import useEmailContext from "@/hooks/useEmailContext";
import { toast } from "sonner";
import LoadingState from "../elements/LoadingState";
import ErrorState from "../elements/ErrorState";

const DomainsForm = () => {
  const {
    state,
    setCustomEmail,
    setEmailDisplayVisible,
    domainsLoading,
    domainsError,
    setSelectedDomain,
  } = useEmailContext();
  const { username, customEmail, domains } = state;

  useEffect(() => {
    if (domainsError) {
      toast.error("Failed to load email domains. Please try again.");
    }
  }, [domainsError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && customEmail) setEmailDisplayVisible(true);
  };

  return (
    <>
      {domainsLoading && (
        <LoadingState message="Fetching temp email domains..." />
      )}

      {domainsError && (
        <ErrorState
          message="Failed to load email domains"
          onRetry={() => window.location.reload()}
        />
      )}

      {domains && domains.length > 0 && (
        <form
          action="#"
          onSubmit={(e) => handleSubmit(e)}
          className="max-w-[80%] mx-auto *:w-full sm:w-1/2 md:max-w-1/4 flex gap-4 flex-col sm:flex-row items-stretch justify-center"
        >
          <Select
            onValueChange={(value) => {
              setCustomEmail(value);
              setSelectedDomain(value);
            }}
          >
            <SelectTrigger className="h-9! w-full rounded-full border-primary text-center">
              <SelectValue placeholder="Choose Email" className="text-center" />
            </SelectTrigger>
            <SelectContent className="bg-background -ml-1 rounded-2xl [&_.option]:rounded-full [&_.option]:hover:bg-primary [&_.option]:focus:bg-primary p-1">
              {domains.map((domain) => (
                <SelectItem
                  key={domain.domain}
                  value={domain.domain}
                  className="option"
                >
                  {`${username}@${domain.domain}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <SecondaryBtn
            type="submit"
            content="Create Email"
            icon={<RightArrow />}
          />
        </form>
      )}
    </>
  );
};

export default DomainsForm;
