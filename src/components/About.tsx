import { Lightbulb, Zap, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About TrueAgents.ai</h2>
          <p className="text-lg text-gray-600">
            TrueAgents.ai combines innovative technology with practical solutions to address real-world challenges in personal and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Lightbulb className="h-8 w-8" />,
              title: "Innovation",
              description: "Cutting-edge AI technology driving next-generation solutions",
            },
            {
              icon: <Zap className="h-8 w-8" />,
              title: "Efficiency",
              description: "Streamlined processes that save time and resources",
            },
            {
              icon: <Sparkles className="h-8 w-8" />,
              title: "Simplicity",
              description: "Intuitive interfaces making advanced AI accessible to everyone",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow rounded-lg"
            >
              <div className="inline-block p-3 bg-secondary/10 rounded-full text-secondary mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};