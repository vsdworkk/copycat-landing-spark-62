import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Column */}
          <div className="flex-1 space-y-6 lg:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-black">
                Craft a Winning
              </span>
              <span className="text-[#4F67FF] bg-gradient-to-r from-[#4F67FF] to-[#7B91FF] bg-clip-text text-transparent">
                APS Pitch in Minutes
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Struggling with your APS pitch? Let Albert craft a professional-grade pitch in just minutes—stress-free. Try your first pitch free and double your interview chances!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Updated Link from /auth to /signup */}
              <Link to="/signup">
                <Button
                  size="lg"
                  className="bg-[#4F67FF] hover:bg-[#4F67FF]/90 text-white rounded-full px-8 py-4 text-base font-medium"
                >
                  Try for Free
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 rounded-full px-8 py-4 text-base font-medium flex items-center gap-2"
              >
                <img
                  src="/lovable-uploads/adb3fc06-d751-4364-a19e-ba1a8732a14b.png"
                  alt="Google"
                  className="w-5 h-5"
                />
                Sign Up with Google
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative rounded-3xl overflow-hidden bg-black">
              <img
                src="/lovable-uploads/9d0bcd6a-e417-4ad0-b0a8-6f64ca4dc280.png"
                alt="Application Preview"
                className="w-full h-auto object-cover mix-blend-luminosity opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-orange-500/30 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;