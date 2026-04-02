import CreateEmailBlock from "../blocks/CreateEmailBlock";
import DomainsForm from "../blocks/DomainsForm";
import NameForm from "../blocks/NameForm";

const Hero = () => {
  return (
    <section className="w-full relative pt-40 space-y-6">
      <div className="bg z-0 rounded-full h-[60vh] aspect-[2] w-full -top-[50%] absolute blur-[100px]"></div>
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] relative">
        One Temp Mail <br />
        Temporary Email Service
      </h1>
      <span className="block mx-auto text-foreground/60 max-w-[750px] text-center text-lg font-light relative">
        Generate temporary email addresses for testing and privacy. Easily
        create, manage, and monitor your temp emails using our intuitive
        dashboard.
      </span>
      <CreateEmailBlock />
      {/* <NameForm /> */}
      {/* <DomainsForm/> */}
    </section>
  );
};

export default Hero;
