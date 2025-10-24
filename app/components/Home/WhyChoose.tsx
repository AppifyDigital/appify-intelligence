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
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const getSlideOffset = (index: number) => {
    let diff = index - activeSlide;

    // Normalize difference to handle wrap-around
    if (diff > slides.length / 2) diff -= slides.length;
    if (diff < -slides.length / 2) diff += slides.length;

    return diff;
  };

  return (
    <section id="success-stories" className="relative overflow-hidden py-16">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              activeSlide === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
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
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Why choose Appify Intelligence?
          </h2>
        </div>

        {/* Three-Element Layout: Prev, Active, Next */}
        <div className="relative mx-auto flex h-[450px] max-w-[1100px] items-center justify-center overflow-visible">
          <div className="relative h-full w-full">
            {slides.map((slide, index) => {
              const offset = getSlideOffset(index);

              // Only render visible slides (prev, current, next)
              if (Math.abs(offset) > 1) return null;

              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              // Calculate horizontal position
              let translateX = "0%";
              if (isLeft) translateX = "-380px";
              if (isRight) translateX = "380px";

              return (
                <div
                  key={slide.id}
                  className="absolute left-1/2 top-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${translateX}), -50%)`,
                    opacity: isCenter ? 1 : 0.7,
                    zIndex: isCenter ? 20 : 10,
                    transition: 'transform 1000ms cubic-bezier(0.4, 0.0, 0.2, 1), opacity 1000ms ease-out, z-index 0ms',
                  }}
                >
                  {isCenter ? (
                    /* Active Element (Center) */
                    <div
                      className="relative h-[450px] w-[400px] overflow-hidden rounded-[8px] shadow-2xl"
                    >
                      <Image
                        width={400}
                        height={450}
                        src={slide.cardImage}
                        alt={slide.title}
                        title={slide.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />

                      {/* Text Overlay at Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6">
                        <h3 className="mb-2 text-2xl font-bold text-white">
                          {slide.title}
                        </h3>
                        <p className="text-base leading-relaxed text-white/90">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Side Elements */
                    <div
                      className="relative h-[280px] w-[280px] cursor-pointer overflow-hidden rounded-[8px] shadow-xl transition-transform duration-300 hover:scale-105"
                      onClick={() => {
                        if (isLeft) prevSlide();
                        if (isRight) nextSlide();
                      }}
                    >
                      <Image
                        width={280}
                        height={280}
                        src={slide.cardImage}
                        alt={slide.title}
                        title={slide.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrow for Mobile/Small Screens */}
        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={prevSlide}
            className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-900 transition-all duration-300 hover:bg-gray-800"
            aria-label="Previous slide"
          >
            <div className="absolute inset-0 translate-x-full transform bg-primary transition-transform duration-300 group-hover:translate-x-0" />
            <ChevronRight className="relative z-10 h-6 w-6 rotate-180 transform text-white transition-transform duration-300 group-hover:-translate-x-1" />
          </button>
          <button
            onClick={nextSlide}
            className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-900 transition-all duration-300 hover:bg-gray-800"
            aria-label="Next slide"
          >
            <div className="absolute inset-0 translate-x-full transform bg-primary transition-transform duration-300 group-hover:translate-x-0" />
            <ChevronRight className="relative z-10 h-6 w-6 transform text-white transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
