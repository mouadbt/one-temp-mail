import { RightArrow } from "@/assets/icons";
import { MailOpen } from "lucide-react";
import React from "react";
import PrimaryBtn from "../elements/PrimaryBtn";

const CreateEmailBlock = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full justify-center items-center z-50">
      <PrimaryBtn
        content="Random Email"
        variant="main"
        icon={
          <MailOpen className="text-background text-[0px] w-0 h-0 -translate-y-px group-hover:w-5 group-hover:h-5 group-focus:w-5 group-focus:h-5 group-active:scale-75 group-hover:text-lg group-hover:translate-x-0 group-focus:text-lg group-focus:translate-x-0 transition-all duration-300" />
        }
      />
      <span>or</span>
      <PrimaryBtn
        content="Choose a name and domain"
        icon={
          <RightArrow
            className="stroke-foreground text-[0px] -translate-x-[200%] group-active:-rotate-45 group-hover:text-lg group-hover:translate-x-0 group-focus:text-lg group-focus:translate-x-0 transition-all duration-300 group-active:text-lg group-active:translate-x-0"
            width="1em"
            height="1em"
          />
        }
      />
    </div>
  );
};

export default CreateEmailBlock;
