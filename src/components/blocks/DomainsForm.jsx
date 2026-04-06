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
import { getDomains } from "@/lib/api";
import { toast } from "sonner";
import useEmailContext from "@/hooks/useEmailContext";
import { useQuery } from "@tanstack/react-query";

const DomainsForm = () => {
  const { state } = useEmailContext();
  const { username } = state;

  const {
    data: domains = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["domains"],
    queryFn: getDomains,
  });

  useEffect(() => {
    if (isError) {
      toast.error("Failed to fetch domains");
      console.error(error);
    }
  }, [isError, error]);

  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center py-4">
          <div className="animate-spin h-6 w-6 border-2 border-foreground/30 border-t-foreground rounded-full" />
          <span className="ml-3 text-sm text-foreground/60">
            Fetching temp email domains...
          </span>
        </div>
      )}

      {!isLoading && domains.length === 0 && (
        <p className="text-center text-sm text-foreground/60">
          Failed to load domains. Please try again later.
        </p>
      )}

      {domains.length > 0 && (
        <form
          action="#"
          className="max-w-[80%] mx-auto *:w-full sm:w-1/2 md:max-w-1/4 flex gap-4 flex-col sm:flex-row items-stretch justify-center"
        >
          <Select>
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
