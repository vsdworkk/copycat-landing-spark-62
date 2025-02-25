import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Brand Section */}
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <span className="text-[#4F67FF] font-semibold text-base">Free</span>
              <span className="text-black text-base ml-2">
                #1 AI Video Assistant &rarr;
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-8">
              <a
                href="#features"
                className="text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </nav>
            <Button
              className="bg-[#4F67FF] hover:bg-[#4F67FF]/90 text-white text-base rounded-full px-6 py-3 font-medium"
              onClick={() => navigate("/auth")}
            >
              Try for Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-white border-t border-gray-100">
          <div className="px-8 pt-3 pb-5 space-y-2">
            <a
              href="#features"
              className="block px-3 py-2 text-base font-medium text-gray-700 
                         hover:text-gray-900 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-base font-medium text-gray-700 
                         hover:text-gray-900 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 
                         hover:text-gray-900 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="pt-3">
              <Button
                className="w-full bg-[#4F67FF] hover:bg-[#4F67FF]/90 text-white text-base rounded-full py-3 font-medium"
                onClick={() => {
                  navigate("/auth");
                  setIsOpen(false);
                }}
              >
                Try for Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
