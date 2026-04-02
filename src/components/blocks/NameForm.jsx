import React from "react";
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

const NameForm = () => {
  return (
    <>
      <form
        action="#"
        className="w-full sm:w-1/2 lg:w-1/3 mx-auto flex gap-4 flex-wrap items-stretch sm:flex-nowrap"
      >
        <Input
          className="h-9 rounded-full border-primary"
          placeholder="enter your name"
        />
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger
              aria-label="note"
              className="hidden -ml-12 mt-1 sm:flex items-center justify-center rounded-full w-9 h-7"
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

        <SecondaryBtn
          type="submit"
          content="Next"
          icon={<RightArrow />}
        />
      </form>
      <p className="text-xs text-center max-w-sm mx-auto mt-2 -mb-6 text-gray-400 z-50">
        Choose a unique username for your temporary email. Avoid common names,
        brands, or well-known words
      </p>
    </>
  );
};

export default NameForm;
