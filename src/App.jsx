import Inbox from "./components/layout/Inbox.jsx";
import "./App.css";
import Faq from "./components/layout/Faq";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import VerificationDrawer from "./components/blocks/VerificationDrawer.jsx";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Inbox />
      <Faq />
      <Footer />
      {/* <VerificationDrawer/> */}
    </main>
  );
}

export default App;
