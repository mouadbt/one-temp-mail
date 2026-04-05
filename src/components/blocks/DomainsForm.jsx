import React, { useEffect, useState } from "react";
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

const DomainsForm = () => {
  const [domains, setDomains] = useState([]);

  // Fetch domains from api
  const fetchDomains = async () => {
    try {
      const domains = await getDomains();
      setDomains(domains);
    } catch (err) {
      toast.error("Failed to fetch domains");
    }
  };

  // Fetch domains on mount
  useEffect(() => {
    fetchDomains();
  }, []);

  return (
    <form
      action="#"
      className="mx-auto *:w-full sm:w-1/2 md:max-w-1/4 flex gap-4 flex-col items-stretch justify-center sm:flex-row"
    >
      <Select>
        <SelectTrigger className="w-full sm:w-[180px] rounded-full border-primary text-center">
          <SelectValue placeholder="Choose Email" className="text-center" />
        </SelectTrigger>
        <SelectContent className="bg-background -ml-1 rounded-2xl [&_.option]:rounded-full [&_.option]:hover:bg-primary [&_.option]:focus:bg-primary p-1">
          {domains &&
            domains.length > 0 &&
            domains.map((domain) => (
              <SelectItem
                key={domain.domain}
                value={domain.domain}
                className="option"
              >
                {/* {`${username}@${domain.domain}`} */}
                {domain.domain}
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
  );
};

export default DomainsForm;
