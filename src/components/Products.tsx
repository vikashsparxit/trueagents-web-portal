import { MessageSquare, Users, Code, PiggyBank } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Products = () => {
  const products = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      name: "Chat Agent",
      description: "Advanced conversational AI for seamless communication",
      link: "/chat",
    },
    {
      icon: <Users className="h-8 w-8" />,
      name: "Lead Evaluator Agent",
      description: "Intelligent lead qualification and management",
      link: "/lead-evaluator",
    },
    {
      icon: <Code className="h-8 w-8" />,
      name: "Code Reviewer Agent",
      description: "Automated code quality assurance and review",
      link: "/code-reviewer",
    },
    {
      icon: <PiggyBank className="h-8 w-8" />,
      name: "Wealth Manager",
      description: "AI-powered financial planning and wealth management",
      link: "/wealth-manager",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
          Explore Our AI Agents
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-secondary mb-4">{product.icon}</div>
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