import React from "react";
import { cn } from "@/lib/utils";

const PrimaryBtn = ({ content, icon, variant = "border", onClickHandler }) => {
  const isMain = variant === "main";

  const btnClassName =
    "w-[80%] sm:w-fit justify-center whitespace-nowrap group flex p-4 pl-3 gap-2 items-center sm:justify-start rounded-3xl text-sm shadow-sm font-medium h-9 transition-all duration-300 hover:bg-foreground focus:bg-foreground hover:text-background focus:text-background hover:pl-1 focus:pl-1";

  const buttonClasses = isMain
    ? "bg-primary"
    : "border border-primary hover:border-transparent";

  const iconContainerClassesName =
    "aspect-square p-1 rounded-full duration-300   focus:border-foreground hover:border-foreground bg-foreground group-hover:bg-background group-focus:bg-background transition-colors flex items-center";
  return (
    <button
      className={cn(buttonClasses, btnClassName)}
      onClick={onClickHandler}
    >
      <span className={iconContainerClassesName}>{icon}</span>
      <span>{content}</span>
    </button>
  );
};

export default PrimaryBtn;
