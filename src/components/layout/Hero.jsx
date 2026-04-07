import useEmailContext from "@/hooks/useEmailContext";
import CreateEmailBlock from "../blocks/CreateEmailBlock";
import DomainsForm from "../blocks/DomainsForm";
import NameForm from "../blocks/NameForm";
import EmailDisplay from "../blocks/EmailDisplay";
import HeroContent from "../blocks/HeroContent";

const Hero = () => {
  const { state } = useEmailContext();
  const { isNameFormVisible, isDomainsFormVisible } = state;
  return (
    <section className="w-full pt-32 md:pt-48 space-y-6 px-[5%] relative">
      <HeroContent />
      {/* <EmailDisplay /> */}

      {isNameFormVisible ? (
        <NameForm />
      ) : isDomainsFormVisible ? (
        <DomainsForm />
      ) : (
        <CreateEmailBlock />
      )}
    </section>
  );
};

export default Hero;
