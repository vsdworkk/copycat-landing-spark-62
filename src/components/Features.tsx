
import { Clock, FileDown, Layout, Star } from "lucide-react";

const features = [
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Choose a template ✨",
    description: "Select from our collection of professional templates designed to impress.",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Add skills in one click 🚀",
    description: "Our AI helps you write compelling bullet points that highlight your achievements.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Quick & easy ⚡️",
    description: "Our intuitive builder makes it quick and easy to create a professional resume.",
  },
  {
    icon: <FileDown className="h-8 w-8" />,
    title: "Multiple formats 📄",
    description: "Export your resume in multiple formats to suit any application requirement.",
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-[65%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#F1F0FB] p-8 rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-[#1A1F2C] mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1A1F2C] mb-2">{feature.title}</h3>
              <p className="text-[#8E9196]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
