"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
  cardImage: string;
}

export default function WhyChoose() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const slides: Slide[] = [
    {
      id: 0,
      title: "Proven track record",
      description: "Extensive experience across web, mobile, and automation projects",
      backgroundImage: "/assets/images/home/Proven_track_record.webp",
      cardImage: "/assets/images/home/Proven_track_record.webp",
    },
    {
      id: 1,
      title: "Deep AI expertise",
      description:
        "Leveraging the latest AI models and frameworks for optimal performance",
      backgroundImage: "/assets/images/home/Deep_AI_Expertise.webp",
      cardImage: "/assets/images/home/Deep_AI_Expertise.webp",
    },
    {
      id: 2,
      title: "Full-service AI solutions",
      description: "From strategy and design to development and deployment",
      backgroundImage: "/assets/images/home/Full_Service_AI.webp",
      cardImage: "/assets/images/home/Full_Service_AI.webp",
    },
    {
      id: 3,
      title: "Global trust",
      description: "Trusted by clients worldwide for delivering exceptional AI solutions",
      backgroundImage: "/assets/images/home/Global_Trust.webp",
      cardImage: "/assets/images/home/Global_Trust.webp",
    },
    {
      id: 4,
      title: "Award recognition",
      description: "Award-winning expertise recognized by industry leaders",
      backgroundImage: "/assets/images/home/Award_Recognition.webp",
      cardImage: "/assets/images/home/Award_Recognition.webp",
    },
  ];

  const nextSlide = () => {
    setDirection("right");
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="success-stories" className="relative overflow-hidden py-20">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              activeSlide === index ? "scale-100 opacity-100" : "scale-110 opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
              }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        {/* Title */}
        <div className="mb-32 text-center">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Why choose Appify Intelligence?
          </h2>
        </div>

        {/* Cards Container */}
        <div className="relative flex min-h-[500px] items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute transition-all duration-700 ease-in-out ${
                activeSlide === index
                  ? "z-10 translate-x-0 scale-100 opacity-100"
                  : direction === "right"
                    ? "z-0 -translate-x-full scale-95 opacity-0"
                    : "z-0 translate-x-full scale-95 opacity-0"
              }`}
            >
              {/* Main Card */}
              <div className="mx-auto max-w-md transform overflow-hidden rounded-3xl bg-white shadow-2xl transition-transform duration-300 hover:scale-105">
                {/* Card Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={slide.cardImage}
                    alt={`${slide.title} - ${slide.description}`}
                    title={slide.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  {/* Floating decorative elements */}
                  <div className="absolute right-4 top-4 h-16 w-16 animate-pulse rounded-full bg-primary opacity-60 blur-xl" />
                  <div className="absolute bottom-8 left-8 h-20 w-20 animate-pulse rounded-full bg-blue-400 opacity-50 blur-xl delay-300" />
                </div>

                {/* Card Content */}
                <div className="relative p-8">
                  {/* Animated Text */}
                  <div className="space-y-4">
                    <h3 className="animate-fade-in text-3xl font-bold text-gray-900">
                      {slide.title}
                    </h3>
                    <p className="animate-fade-in-delay text-lg leading-relaxed text-gray-600">
                      {slide.description}
                    </p>
                  </div>

                  {/* Navigation Arrow */}
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={nextSlide}
                      className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-900 transition-all duration-300 hover:bg-gray-800"
                      aria-label="Next slide"
                    >
                      {/* Animated background on hover */}
                      <div className="absolute inset-0 translate-x-full transform bg-primary transition-transform duration-300 group-hover:translate-x-0" />

                      <ChevronRight className="relative z-10 h-6 w-6 transform text-white transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 flex items-center justify-center gap-8">
          {/* Previous Button */}
          {/* <button
            onClick={prevSlide}
            className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 transform group-hover:-translate-x-1 transition-transform duration-300" />
          </button> */}

          {/* Dots Indicator */}
          {/* <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeSlide ? 'right' : 'left')
                  setActiveSlide(index)
                }}
                className={`transition-all duration-300 rounded-full ${
                  activeSlide === index
                    ? 'bg-gray-900 w-12 h-3'
                    : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}

          {/* Next Button */}
          {/* <button
            onClick={nextSlide}
            className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button> */}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        @keyframes pulse-scale {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .animate-pulse {
          animation: pulse-scale 3s ease-in-out infinite;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}
