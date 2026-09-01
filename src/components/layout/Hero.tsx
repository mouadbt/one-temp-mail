import HeroContent from "#components/blocks/HeroContent";
import HumanVerification from "#components/blocks/HumanVerification";

export default function Hero() {
  return (
    <section className="w-full pt-32 md:pt-48 space-y-6 px-[5%] relative overflow-hidden pb-2">
      <HeroContent />
      <HumanVerification/>
    </section>
  );
}
