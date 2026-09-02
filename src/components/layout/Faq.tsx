import { RightArrow } from "#components/Icons/RightArrow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "#components/ui/accordion";
import PrimaryBtn from "#components/ui/PrimaryBtn";
import type { DrawerTriggerProps } from "../../types/drawer";

const Faq = ({ setDrawerOpen }: DrawerTriggerProps) => {
  const faqs = [
    {
      q: "What is a temporary email?",
      a: "A temporary email is a short-lived inbox you can use to receive emails without using your personal address.",
    },
    {
      q: "How does it work?",
      a: "Generate an email instantly and use it anywhere. Incoming messages appear in real time without registration.",
    },
    {
      q: "How long are emails stored?",
      a: "Emails are stored for a limited time and automatically deleted.",
    },
    {
      q: "Can I receive verification codes?",
      a: "Yes, most standard emails including OTP and verification messages are supported.",
    },
    {
      q: "What is One Temp Mail? (Temporary Email, Disposable Email, Temp Mail)",
      a: "One Temp Mail is a free temporary email service that lets you instantly generate a disposable email address to receive emails online without exposing your real inbox. It's perfect for testing, sign-ups, one-time verification codes, and protecting your privacy.",
    },
    {
      q: "Can I receive attachments and verification codes?",
      a: "Yes, you can receive standard messages including common verification codes (OTP). Large or executable attachments may be blocked for safety.",
    },
    {
      q: "What are the benefits of disposable email vs. regular email?",
      a: "Disposable email protects your privacy, reduces spam, and keeps marketing lists away from your primary address. It's ideal for short-term needs like trials, downloads, beta testing, and one-time sign-ups.",
    },
  ];
  return (
    <section className="w-full mx-auto px-[5%] mt-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 pb-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Need Help?
            <br />
            <span className="text-foreground/60">We're here to assist.</span>
          </h2>
          <p className="text-md sm:text-lg text-foreground/50 md:text-xl">
            One Temp Mail is a simple, free tool for creating disposable emails.
            Check the answers on the right or generate an email to see how it
            works in seconds.
          </p>

          <PrimaryBtn
            content="Generate Your Temp Email"
            onClickHandler={() => setDrawerOpen(true)}
            icon={
              <RightArrow
                className="stroke-foreground text-[0px] translate-x-[-200%] group-active:-rotate-45 group-hover:text-lg group-hover:translate-x-0 group-focus:text-lg group-focus:translate-x-0 transition-all duration-300 group-active:text-lg group-active:translate-x-0"
                width="1em"
                height="1em"
              />
            }
          />
        </div>

        <div className="w-full">
          <Accordion className="w-full">
            {faqs.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b border-foreground/30 last:border-b-0"
              >
                <AccordionTrigger className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] flex-1 items-start justify-between gap-4 rounded-md py-4 text-sm font-medium outline-none hover:underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground/60 leading-relaxed">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
