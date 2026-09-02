import HeroContent from "#components/blocks/HeroContent";
import { RightArrow } from "#components/Icons/RightArrow";
import PrimaryBtn from "#components/ui/PrimaryBtn";
import type { DrawerTriggerProps } from "../../types/drawer";

export default function Hero({ setDrawerOpen }: DrawerTriggerProps) {
  return (
    <section className="w-full pt-32 md:pt-48 space-y-6 px-[5%] relative overflow-hidden pb-2">
      <HeroContent />
      <PrimaryBtn
        content="Generate Your Temp Email"
        className="mx-auto z-50"
        onClickHandler={() => setDrawerOpen(true)}
        icon={
          <RightArrow
            className="stroke-foreground text-[0px] translate-x-[-200%] group-active:-rotate-45 group-hover:text-lg group-hover:translate-x-0 group-focus:text-lg group-focus:translate-x-0 transition-all duration-300 group-active:text-lg group-active:translate-x-0"
            width="1em"
            height="1em"
          />
        }
      />
    </section>
  );
}
