import Inbox from "./components/layout/Inbox.jsx";
import "./App.css";
import Faq from "./components/layout/Faq";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import VerificationDrawer from "./components/blocks/VerificationDrawer.jsx";
import { Toaster } from "sonner";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Inbox />
      <Faq />
      <Footer />
      <VerificationDrawer/>
      <Toaster richColors/>
    </main>
  );
}

export default App;
