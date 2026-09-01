import type { ReactNode } from "react";

type PrimaryBtnProps = {
  content: string;
  icon: ReactNode;
  className?: string;
  onClickHandler?: () => void;
};
const PrimaryBtn = ({
  content,
  icon,
  onClickHandler,
  className,
}: PrimaryBtnProps) => {
  const btnClassName =
    "outline-none w-[80%] sm:w-fit justify-center whitespace-nowrap group flex p-4 pl-3 gap-2 items-center sm:justify-start rounded-3xl text-sm shadow-sm font-medium h-9 transition-all duration-300 hover:bg-foreground focus:bg-foreground hover:text-background focus:text-background hover:pl-1 focus:pl-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 bg-primary active:translate-y-1";

  const iconContainerClassesName =
    "aspect-square p-1 rounded-full duration-300   focus:border-foreground hover:border-foreground bg-foreground group-hover:bg-background group-focus:bg-background transition-colors flex items-center";
  return (
    <button className={`${btnClassName} ${className}`} onClick={onClickHandler}>
      <span className={iconContainerClassesName}>{icon}</span>
      <span>{content}</span>
    </button>
  );
};

export default PrimaryBtn;
