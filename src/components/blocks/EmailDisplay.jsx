import React from "react";
import { Clipboard, TimerReset } from "lucide-react";
import { toast } from "sonner";
import InfoTooltip from "./InfoTooltip";

const EmailDisplay = ({
  email = "b8hzsh@deltajohnsons.com",
  onReset = () => {
    return;
  },
}) => {
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email address is copied to clipboard");
  };
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
