import { Shield, Clock, Scale, Brain, Sparkles, Lock } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Tailored Solutions",
      description: "Custom-built AI tools designed for your unique challenges",
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Scalable Platform",
      description: "Flexible and scalable to grow with your business",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Proven Expertise",
      description: "Backed by SparxIT's extensive experience in AI innovation",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Ease of Use",
      description: "Intuitive interfaces and seamless integrations for effortless adoption",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Access your AI agents whenever you need them",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Solutions",
      description: "Enterprise-grade security for your data and interactions",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
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