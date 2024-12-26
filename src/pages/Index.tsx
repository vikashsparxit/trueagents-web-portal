import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Solutions for Personal and Professional Growth"
        description="TrueAgents.ai offers cutting-edge AI solutions designed to enhance efficiency, drive success, and streamline your life."
      />
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;