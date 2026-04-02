const PrimaryBtn = ({ content, icon, variant = "border" }) => {
  const isMain = variant === "main";

  const buttonClasses = isMain
    ? "w-[80%] sm:w-fit justify-center active:translate-y-[2px] whitespace-nowrap group flex pl-2 gap-2 items-center sm:justify-start rounded-3xl bg-primary py-3 px-4 text-sm transition-all duration-300 hover:bg-foreground active:bg-foreground/80 hover:text-background shadow-sm font-medium h-10"
    : "w-[80%] sm:w-fit justify-center active:translate-y-[2px] whitespace-nowrap group flex pl-2 gap-2 items-center sm:justify-start rounded-3xl border border-primary py-3 px-4 text-sm transition-all duration-300 hover:bg-foreground/80 active:bg-foreground/80 hover:border-transparent hover:text-background shadow-sm font-medium h-10";

  const iconContainerClasses = isMain
    ? "aspect-square p-1 bg-foreground rounded-full text-sm group-active:bg-foreground/80 transition-colors duration-300"
    : "aspect-square p-1 bg-foreground rounded-full group-hover:bg-background group-focus:bg-background transition-colors duration-300";

  return (
    <button className={buttonClasses}>
      <span className={iconContainerClasses}>{icon}</span>
      <span>{content}</span>
    </button>
  );
};

export default PrimaryBtn;
