import Inbox from "./components/layout/Inbox.jsx";
import "./App.css";
import Faq from "./components/layout/Faq";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import VerificationDrawer from "./components/blocks/VerificationDrawer.jsx";
import { Toaster } from "sonner";
import GradientBg from "./components/elements/GradientBg.jsx";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <GradientBg />
      <Hero />
      <Inbox />
      <Faq />
      <Footer />
      <VerificationDrawer />
      <Toaster
        // theme="dark"
        // richColors
        toastOptions={{
          className: "toast !bg-primary !text-foreground !border-foreground/10",
        }}
      />
    </main>
  );
}

export default App;
