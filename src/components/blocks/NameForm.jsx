import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Info } from "lucide-react";
import SecondaryBtn from "../elements/SecondaryBtn";
import { RightArrow } from "@/assets/icons";
import useEmailContext from "@/hooks/useEmailContext";

const NameForm = () => {
  const [name, setName] = useState(null);
  const { setUserName } = useEmailContext();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserName(name);
        }}
        action="#"
        className="w-full sm:w-1/2 lg:w-1/3 mx-auto flex gap-4 flex-wrap items-stretch sm:flex-nowrap"
      >
        <Input
          className="h-9 rounded-full border-primary"
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger
              aria-label="note"
              type="button"
              className="hidden -ml-12 mt-1 sm:flex items-center justify-center rounded-full w-7 min-w-7 h-7"
            >
              <Info className="w-4 h-4 text-foreground" />
            </TooltipTrigger>
            <TooltipContent className="">
              <p>
                Choose a unique username for your temporary email. Avoid common
                names, brands, or well-known words
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <SecondaryBtn type="submit" content="Next" icon={<RightArrow />} />
      </form>
      <p className="text-xs text-center max-w-sm mx-auto mt-2 -mb-6 text-foreground/60 z-50">
        Choose a unique username for your temporary email. Avoid common names,
        brands, or well-known words
      </p>
    </>
  );
};

export default NameForm;
