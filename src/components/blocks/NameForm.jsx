import React, { useState } from "react";
import { Input } from "../ui/input";
import { Info } from "lucide-react";
import SecondaryBtn from "../elements/SecondaryBtn";
import { RightArrow } from "@/assets/icons";
import useEmailContext from "@/hooks/useEmailContext";
import InfoTooltip from "./InfoTooltip";

const NameForm = () => {
  const [name, setName] = useState("");
  const { setUserName } = useEmailContext();
  const pattern = /^[a-z]{2,}[a-z\d]*$/;

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "" || pattern.test(value)) {
      setName(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (pattern.test(name) && name.length > 0) {
      setUserName(name);
    }
  };
  
  return (
    <>
      <form
        onSubmit={(e) => onSubmit(e)}
        action="#"
        className="max-w-[80%] w-full sm:w-1/2 lg:w-1/3 mx-auto flex gap-4 flex-wrap items-stretch sm:flex-nowrap"
      >
        <Input
          className="h-9 rounded-full border-primary"
          placeholder="enter your name"
          onChange={(e) => onChange(e)}
        />
        <InfoTooltip
          ariaLabel="note"
          triggerClassName="hidden -ml-12 mt-1 sm:flex items-center justify-center rounded-full w-7 min-w-7 h-7"
          content="Choose a unique username for your temporary email. Avoid common names, brands, or well-known words"
        >
          <Info className="w-4 h-4 text-foreground" />
        </InfoTooltip>

        <SecondaryBtn
          type="submit"
          content="Next"
          icon={<RightArrow />}
          disabled={!pattern.test(name)}
        />
      </form>
      <p className="text-xs text-center max-w-sm mx-auto mt-2 -mb-6 text-foreground/60 z-50">
        Choose a unique username for your temporary email. Avoid common names,
        brands, or well-known words
      </p>
    </>
  );
};

export default NameForm;
