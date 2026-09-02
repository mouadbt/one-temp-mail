import GradientBg from "#components/blocks/GradientBg";
import HumanVerification from "#components/blocks/HumanVerification";
import Faq from "#components/layout/Faq";
import Footer from "#components/layout/Footer";
import Header from "#components/layout/Header";
import Hero from "#components/layout/Hero";
import Inbox from "#components/layout/Inbox";
import { useState } from "react";

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <>
      <Header />
      <GradientBg />
      <Hero setDrawerOpen={setDrawerOpen} />
      <HumanVerification onOpenChange={setDrawerOpen} open={drawerOpen} />
      <Inbox />
      <Faq setDrawerOpen={setDrawerOpen} />
      <Footer />
    </>
  );
}
export default App;
