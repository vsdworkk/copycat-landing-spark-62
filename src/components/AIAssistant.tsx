import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, Clock, Target, ChevronDown, Star } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useRef, useEffect } from "react";

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

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    image: "/lovable-uploads/69a5a957-54e8-46fd-8a89-5295518afffc.png",
    feedback: "This tool completely transformed how I write my pitches. What used to take days now only takes minutes, and the quality is excellent!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    image: "/lovable-uploads/4702d390-6ea5-44f4-91cc-11963ef1fd71.png",
    feedback: "This tool has been a game-changer for our team. The AI understands exactly what we need and delivers perfect pitches every time.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "/lovable-uploads/9d0bcd6a-e417-4ad0-b0a8-6f64ca4dc280.png",
    feedback: "I was skeptical at first, but the results speak for themselves. Our pitch success rates have increased dramatically since we started using this platform.",
    rating: 5
  },
  {
    name: "David Wilson",
    role: "Startup Founder",
    image: "/lovable-uploads/adb3fc06-d751-4364-a19e-ba1a8732a14b.png",
    feedback: "The platform's ability to tailor pitches to specific APS requirements is remarkable. It's become an essential part of our toolkit.",
    rating: 5
  }
];

const faqs = [
  {
    question: "Why should I use an AI pitch builder?",
    answer: "An AI pitch builder saves time, ensures consistency, and leverages data-driven insights to create compelling pitches. It eliminates writer's block and helps you focus on what matters most - your core business activities."
  },
  {
    question: "Why is our APS Pitch Builder the best choice?",
    answer: "Our platform is specifically designed for APS requirements, offers real-time optimization, and has been trained on successful pitches. We provide unlimited revisions and 24/7 support to ensure your success."
  },
  {
    question: "Do I need different pitches for different APS roles?",
    answer: "Yes, each APS role has unique requirements and expectations. Our AI automatically tailors your pitch to the specific role you're applying for, highlighting relevant skills and experiences."
  },
  {
    question: "Are the generated pitches APS-compliant?",
    answer: "Absolutely! Our AI is trained on APS guidelines and requirements, ensuring that every pitch meets compliance standards while maintaining your unique voice and experience."
  },
  {
    question: "Is the APS Pitch Builder really free?",
    answer: "Yes, you can try your first pitch completely free. We offer a generous free tier to help you experience the full potential of our platform before deciding to upgrade."
  }
];

const AIAssistant = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp = 0;
    // The current slowed speed
    const SCROLL_SPEED = 0.137;

    const animate = (timestamp: number) => {
      if (!scrollRef.current) return;
      if (lastTimestamp) {
        const deltaTime = timestamp - lastTimestamp;
        const scrollAmount = deltaTime * SCROLL_SPEED;

        // Loop seamlessly at halfway
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += scrollAmount;
        }
      }
      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container px-[10%] sm:px-[13%] lg:px-[15%] mx-auto">
        {/* Video Section */}
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-bold mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F67FF] to-blue-400">
              Albert, Your AI Assistant,
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F67FF] to-blue-400">
              Does All the Heavy Lifting
            </span>
          </h2>
          {/* 16:9 aspect ratio video */}
          <div className="mx-auto w-[80%] max-w-4xl aspect-[16/9] rounded-3xl overflow-hidden shadow-xl relative">
            <iframe
              src="https://www.youtube.com/embed/ig9JzoT76yI"
              title="AI Assistant Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          <div className="mt-12">
            <button className="bg-[#4F67FF] text-white rounded-full px-8 py-3 font-medium hover:bg-[#4F67FF]/90 transition-colors">
              Get Started Now
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32">
          <h2 className="text-5xl sm:text-6xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F67FF] to-blue-400">
              Why choose us?
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-none rounded-[2rem] shadow-lg hover:shadow-xl transition-shadow duration-300 text-center bg-white"
              >
                <CardHeader className="pt-12">
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#2D3648]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-12">
                  <p className="text-gray-600 text-lg">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reviews Section - Horizontal Carousel */}
        <div className="mt-32 relative">
          <h2 className="text-center text-5xl sm:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F67FF] to-blue-400">
              Real feedback from real users
            </span>
          </h2>

          {/* Fade overlays on the left/right edges */}
          <div className="relative max-w-[1200px] mx-auto overflow-hidden mt-12">
            <div className="absolute left-0 top-0 w-[10%] h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 w-[10%] h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

            <div
              ref={scrollRef}
              className="flex overflow-x-hidden gap-6 whitespace-nowrap py-4"
            >
              {/* Duplicate array so it loops seamlessly */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div 
                  key={index}
                  className="inline-block align-top w-[42.5%] px-2 box-border"
                >
                  {/* Increase height by ~20%; using h-80 for the card */}
                  <div className="bg-white shadow-md rounded-xl p-6 flex flex-col h-80 overflow-hidden">
                    {/* Profile and Name */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black">
                          {testimonial.name}
                        </h3>
                        <p className="text-blue-600 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i}
                          className="w-5 h-5 text-[#4F67FF]"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    {/* Review Text - truncated at 6 lines */}
                    <div className="flex-1 overflow-hidden">
                      <p className="text-gray-600 text-base text-left break-words line-clamp-6">
                        {testimonial.feedback}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32">
          <h2 className="text-6xl font-bold text-center mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F67FF] to-blue-400">
              Frequently Asked
            </span>
          </h2>
          <h2 className="text-6xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F67FF] to-blue-400">
              Questions
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index}>
                <Card className="border-none shadow-md">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-6">
                      <h3 className="text-xl font-semibold text-left">
                        {faq.question}
                      </h3>
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.answer}
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
