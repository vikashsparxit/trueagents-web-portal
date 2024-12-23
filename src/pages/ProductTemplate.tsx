import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

interface ProductTemplateProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const ProductTemplate = ({ title, description, image, features }: ProductTemplateProps) => {
  return (
    <div className="min-h-screen">
      <SEO 
        title={title}
        description={description}
        image={image}
      />
      <Navigation />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/90 to-secondary/90">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{title}</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">{description}</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <img src={image} alt={title} className="w-full h-auto mb-12 rounded-lg shadow-xl" />
              
              <h2 className="text-3xl font-bold mb-8">Key Features</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-4 text-primary">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 text-center">
                <Button
                  onClick={() => window.open("https://www.sparxitsolutions.com/contact-global.shtml", "_blank")}
                  size="lg"
                >
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};