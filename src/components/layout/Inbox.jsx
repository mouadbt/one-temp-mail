import EmptyInbox from "../blocks/EmptyInbox";

const Inbox = () => {
  return (
    <section className="px-[5%]">
      <div className="w-full flex flex-col items-stretch justify-start border border-foreground/10 z-20 m-0 bgshadow mt-12 rounded-3xl p-8 min-h-60">
      <h1 className="text-2xl select-none">Inbox</h1>
      <hr className="border-foreground/20 mb-2" />
      <EmptyInbox />
    </div>
    </section>
  );
};

export default Inbox;
