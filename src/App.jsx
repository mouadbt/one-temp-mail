import { lazy, Suspense } from "react";
import "./App.css";
import Inbox from "./components/layout/Inbox.jsx";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import GradientBg from "./components/elements/GradientBg.jsx";
import { Toaster } from "sonner";

const Faq = lazy(() => import("./components/layout/Faq"));
const Footer = lazy(() => import("./components/layout/Footer"));
const VerificationDrawer = lazy(() => import("./components/blocks/VerificationDrawer.jsx"));

function App() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <GradientBg />
      <Hero />
      <Inbox />
      <Suspense fallback={null}>
        <Faq />
        <Footer />
        <VerificationDrawer />
      </Suspense>
      <Toaster
        toastOptions={{
          className: "toast !bg-primary !text-foreground !border-foreground/10",
        }}
      />
    </main>
  );
}

export default App;