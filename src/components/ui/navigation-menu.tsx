import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex items-center h-28">
          {/* Brand as a rounded pill */}
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <span className="text-[#4F67FF] font-semibold text-base">Free</span>
            <span className="text-black text-base ml-2">
              #1 AI Video Assistant &rarr;
            </span>
          </a>

          {/* Desktop Navigation (centered) */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-12">
            <a
              href="#features"
              className="text-lg text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-lg text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-lg text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA (right) */}
          <div className="hidden md:flex">
            <Button
              className="bg-[#4F67FF] hover:bg-[#4F67FF]/90 text-white text-lg rounded-full px-10 py-6"
              onClick={() => navigate("/auth")}
            >
              Try for Free
            </Button>
          </div>

          {/* Mobile menu button (hamburger) */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                         hover:text-gray-500 hover:bg-gray-100 focus:outline-none 
                         focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-28 inset-x-0 bg-white border-b border-gray-100">
          <div className="px-8 pt-2 pb-3 space-y-2">
            <a
              href="#features"
              className="block px-3 py-2 text-lg font-medium text-gray-700 
                         hover:text-gray-900 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-lg font-medium text-gray-700 
                         hover:text-gray-900 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-lg font-medium text-gray-700 
                         hover:text-gray-900 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="px-3 pt-2">
              <Button
                className="w-full bg-[#4F67FF] hover:bg-[#4F67FF]/90 text-white 
                           text-lg rounded-full py-6"
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
