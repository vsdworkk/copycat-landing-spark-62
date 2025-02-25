import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Wann",
    date: "January 06",
    rating: 5,
    text: "Very easy to use and easy to download and use site.",
  },
  {
    name: "Hannah Smith",
    date: "January 05",
    rating: 5,
    text: "This was the best customer service I ever had! The knowledge and expertise was outstanding.",
  },
  {
    name: "Zoe Plasencia",
    date: "January 05",
    rating: 5,
    text: "Easy and expedite process. Very clear directions and outstanding outcome.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-[65%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1A1F2C]">
          Highly rated by job seekers ⭐️
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-[#F1F0FB] rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-[#1A1F2C] fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-lg text-[#8E9196] mb-4">{testimonial.text}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-[#1A1F2C]">
                        {testimonial.name}
                      </span>
                      <span className="text-[#8E9196]">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;