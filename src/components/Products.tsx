import { Button } from "@/components/ui/button";

export const Products = () => {
  const products = [
    {
      image: "/lovable-uploads/d5f54f85-cec9-4230-9980-4a74248f47b7.png",
      name: "Chat Agent",
      description: "Advanced conversational AI for seamless communication",
      link: "/chat",
    },
    {
      image: "/placeholder.svg",
      name: "Lead Evaluator Agent",
      description: "Intelligent lead qualification and management",
      link: "/lead-evaluator",
    },
    {
      image: "/placeholder.svg",
      name: "Code Reviewer Agent",
      description: "Automated code quality assurance and review",
      link: "/code-reviewer",
    },
    {
      image: "/placeholder.svg",
      name: "Wealth Manager",
      description: "AI-powered financial planning and wealth management",
      link: "/wealth-manager",
    },
    {
      image: "/placeholder.svg",
      name: "Rapid Onboarding (KYC Agent)",
      description: "Automate KYC processes with AI for faster customer onboarding",
      link: "/kyc",
    },
    {
      image: "/placeholder.svg",
      name: "AI Powered Forms",
      description: "Intelligent form processing and automation",
      link: "/forms",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
          Explore Our AI Agents
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => console.log(`Navigating to ${product.link}`)}
              >
                Explore
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Stay Tuned!</h3>
          <p className="text-gray-600">More exciting agents in development</p>
        </div>
      </div>
    </section>
  );
};