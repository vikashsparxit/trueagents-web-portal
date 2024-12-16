import { Shield, Clock, Scale, Globe, Cpu } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI-Driven Insights",
      description: "Leverage advanced algorithms for intelligent decision-making",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Access your AI agents whenever you need them",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Solutions",
      description: "Enterprise-grade security for your data and interactions",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multilingual Support",
      description: "Communicate in multiple languages with our AI agents",
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Scalable Platform",
      description: "Grow with a platform that scales with your needs",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
          Why Choose TrueAgents.ai?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="text-secondary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};