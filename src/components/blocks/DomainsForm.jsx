import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import SecondaryBtn from "../elements/SecondaryBtn";
import { RightArrow } from "@/assets/icons";

const DomainsForm = () => {
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
          <SelectItem key={1} value="test" className="option">
            test
          </SelectItem>
          <SelectItem key={2} value="test2" className="option">
            test 2
          </SelectItem>
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
