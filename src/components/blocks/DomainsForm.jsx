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
        <SelectTrigger className="w-full sm:w-[180px] rounded-full border-oneColor text-center">
          <SelectValue placeholder="Choose Email" className="text-center" />
        </SelectTrigger>
        <SelectContent className="bg-background -ml-1 rounded-xl border-gray-700 [&_.option]:rounded-full [&_.option]:hover:bg-foreground/5">
          <SelectItem key={1} value="test" className="option">
            test
          </SelectItem>
          <SelectItem key={2} value="test2" className="option">
            test 2
          </SelectItem>
        </SelectContent>
      </Select>
      {/* <Button
        disabled={!customEmail}
        type="submit"
        className="w-full sm:w-fit justify-center active:translate-y-[2px] py-1 group relative flex items-center overflow-hidden px-12 whitespace-nowrap group gap-1 sm:justify-start rounded-3xl bg-oneColor text-sm transition-colors duration-300 hover:bg-gray-100 active:bg-gray-400  hover:text-black shadow-sm font-medium h-9"
      >
        <span className="ease absolute right-0 flex h-9 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0 group-active:-rotate-45 group-active:-translate-y-2 group-active:-translate-x-1">
          <svg
            width="1em"
            height="1em"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="relative transform transition-transform duration-300 -translate-x-2 group-hover:-translate-x-3 ">
          Create Email
        </span>
      </Button> */}

      <SecondaryBtn
        type="submit"
        content="Create Email"
        icon={<RightArrow />}
      />
    </form>
  );
};

export default DomainsForm;
