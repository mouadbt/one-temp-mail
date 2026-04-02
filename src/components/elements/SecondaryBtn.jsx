import React from "react";
import { Button } from "../ui/button";

const SecondaryBtn = ({content,icon,classname,...props}) => {
  return (
    <Button className={`w-full sm:w-fit justify-center active:translate-y-[2px] py-1 group relative flex items-center overflow-hidden px-12 whitespace-nowrap group gap-1 sm:justify-start rounded-3xl bg-primary text-sm transition-colors duration-300 hover:bg-foreground active:bg-foreground/80 hover:text-background shadow-sm font-medium h-9 [&_svg]:w-[1.25em]! [&_svg]:h-[1.25em]! [&_path]:stroke-2! ${classname}`} {...props}>
      <span className="ease absolute right-0 flex h-9 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0 group-active:-rotate-45 group-active:-translate-y-2 group-active:-translate-x-1">
        {icon}
      </span>
      <span className="relative transform transition-transform duration-300 -translate-x-2 group-hover:-translate-x-3 ">
        {content}
      </span>
    </Button>
  );
};

export default SecondaryBtn;
