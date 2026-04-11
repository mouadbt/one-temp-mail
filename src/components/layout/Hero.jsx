import useEmailContext from "@/hooks/useEmailContext";
import CreateEmailBlock from "../blocks/CreateEmailBlock";
import DomainsForm from "../blocks/DomainsForm";
import NameForm from "../blocks/NameForm";
import EmailDisplay from "../blocks/EmailDisplay";
import HeroContent from "../blocks/HeroContent";

const Hero = () => {
  const { state } = useEmailContext();
  const { isNameFormVisible, isDomainsFormVisible, isEmailDisplayVisible } =
    state;
  return (
    <section className="w-full pt-32 md:pt-48 space-y-6 px-[5%] relative">
      {/* <HeroContent />
      {isNameFormVisible ? (
        <NameForm />
      ) : isDomainsFormVisible ? (
        <DomainsForm />
      ) : isEmailDisplayVisible ? (
        <EmailDisplay />
      ) : (
        <CreateEmailBlock />
      )} */}
        <EmailDisplay />
    </section>
    
  );
};

export default Hero;
