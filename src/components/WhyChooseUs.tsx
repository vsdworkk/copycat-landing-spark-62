
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, Clock, Target } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-[#4F67FF]" />,
      title: "AI-Powered Writing",
      description: "Our advanced AI understands APS requirements and crafts compelling pitches tailored to your needs."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#4F67FF]" />,
      title: "Lightning Fast",
      description: "Get your professionally written pitch in seconds, not hours. Save time for what matters most."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#4F67FF]" />,
      title: "Time-Saving",
      description: "Focus on your core business while our AI handles the writing. No more writer's block."
    },
    {
      icon: <Target className="w-8 h-8 text-[#4F67FF]" />,
      title: "APS Optimized",
      description: "Content specifically crafted to meet APS requirements and maximize your chances of success."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-16">
          Why choose <span className="text-[#4F67FF]">us?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardHeader>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-[#2D3648]">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
