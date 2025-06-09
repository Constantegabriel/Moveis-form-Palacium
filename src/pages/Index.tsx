
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FormularioOrcamento } from "@/components/FormularioOrcamento";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Map } from "@/components/Map";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <FormularioOrcamento />
      <About />
      <Features />
      <Gallery />
      <Contact />
      <Map />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
