import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const InfoTooltip = ({
  children,
  content,
  ariaLabel = "note",
  triggerClassName = "",
  handleClick,
}) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            aria-label={ariaLabel}
            className={triggerClassName}
            onClick={handleClick}
            role={handleClick ? "button" : undefined}
            tabIndex={handleClick ? 0 : undefined}
          >
            {children}
          </div>
        </TooltipTrigger>
        <TooltipContent className="">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default InfoTooltip;
