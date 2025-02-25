import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AIAssistant from "@/components/AIAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* 
        We add a centered main wrapper with 80% width 
        to increase left and right margins 
      */}
      <main className="mx-auto w-[80%]">
        <Hero />
        <AIAssistant />
      </main>
    </div>
  );
};

export default Index;
