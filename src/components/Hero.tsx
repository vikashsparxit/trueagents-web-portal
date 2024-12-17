import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 -z-10" />
      <div className="absolute inset-0 bg-[url('/lovable-uploads/55ea624f-72ae-487e-a505-333bdfb6a7e0.png')] bg-center bg-no-repeat opacity-10 -z-20" />
      
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-up space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-5xl mx-auto leading-tight">
            AI Solutions for Personal and<br />Professional Growth
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
            TrueAgents.ai offers cutting-edge AI solutions designed to enhance efficiency, drive success, and streamline your life.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={scrollToProducts}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            >
              Explore AI Agents
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};