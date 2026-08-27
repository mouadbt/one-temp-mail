import GradientBg from "#components/blocks/GradientBg";
import HeroContent from "#components/blocks/HeroContent";
import PrimaryBtn from "#components/ui/PrimaryBtn";

export default function Hero() {
  return (
    <section className="w-full pt-32 md:pt-48 space-y-6 px-[5%] relative overflow-hidden">
      <GradientBg />
      <HeroContent />
      <PrimaryBtn
        content="gg"
        onClickHandler={() => {
          return;
        }}
        icon={
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 12H20M20 12L14 6M20 12L14 18"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        }
      />
    </section>
  );
}
