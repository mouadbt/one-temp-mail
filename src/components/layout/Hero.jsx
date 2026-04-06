import useEmailContext from "@/hooks/useEmailContext";
import CreateEmailBlock from "../blocks/CreateEmailBlock";
import DomainsForm from "../blocks/DomainsForm";
import NameForm from "../blocks/NameForm";

const Hero = () => {
  const { state } = useEmailContext();
  const { isNameFormVisible, isDomainsFormVisible } = state;
  return (
    <section className="w-full relative pt-32 md:pt-48 space-y-6 px-[5%]">
      <div className="absolute inset-x-0 top-0 overflow-x-hidden pointer-events-none">
        <div className="bg z-0 rounded-full h-[60vh] aspect-[2] w-full left-0 -top-[25%] md:-top-[50%] absolute blur-[100px]"></div>
      </div>
      <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] relative">
        One Temp Mail <br />
        Temporary Email Service
      </h1>
      <span className="block mx-auto text-foreground/60 max-w-[750px] text-center text-lg font-light relative">
        Generate temporary email addresses for testing and privacy. Easily
        create, manage, and monitor your temp emails using our intuitive
        dashboard.
      </span>
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
