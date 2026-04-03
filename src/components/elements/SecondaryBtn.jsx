import React from "react";
import { Button } from "../ui/button";

const SecondaryBtn = ({content,icon,classname,...props}) => {
  return (
    <Button className={`w-full sm:w-fit justify-center py-1 group relative flex items-center overflow-hidden px-12 whitespace-nowrap group gap-1 sm:justify-start rounded-3xl bg-primary text-sm transition-colors duration-300 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background active:bg-foreground/80 shadow-sm font-medium h-9 [&_svg]:w-[1.25em]! [&_svg]:h-[1.25em]! [&_path]:stroke-2! ${classname}`} {...props}>
      <span className="absolute right-0 flex items-center justify-start h-9 w-10 translate-x-full transform  duration-300 group-hover:translate-x-0 group-focus:translate-x-0 group-active:-rotate-45 origin-center group-active:-translate-y-2">
        {icon}
      </span>
      <span className="relative transform transition-transform duration-300 -translate-x-2 group-hover:-translate-x-3 group-focus:-translate-x-3">
        {content}
      </span>
    </Button>
  );
};

export default SecondaryBtn;
