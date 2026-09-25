import "./App.css"

import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Logos from "./Component/Logos/Logos";
import Services from "./Component/Services/Services";
import Platform from "./Component/Platform/Platform";
import Agents from "./Component/Agents/Agents";
import CustomSoftware from "./Component/CustomSoftware/CustomSoftware";
import Verticals from "./Component/Verticals/Verticals";
import Quote from "./Component/Quote/Quote";
import FAQ from "./Component/FAQ/FAQ";
import CTA from "./Component/CTA/CTA";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logos />
      <Services />
      <Platform />
      <Agents />
      <CustomSoftware />
      <Verticals />
      <Quote />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;