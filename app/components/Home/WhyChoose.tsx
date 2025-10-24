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
  const [animationDirection, setAnimationDirection] = useState<"left" | "right" | null>(
    null,
  );

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
    setAnimationDirection("right");
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      setIsTransitioning(false);
      setAnimationDirection(null);
    }, 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAnimationDirection("left");
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => {
      setIsTransitioning(false);
      setAnimationDirection(null);
    }, 1000);
  };

  const getSlideOffset = (index: number) => {
    let diff = index - activeSlide;

    // Normalize difference to handle wrap-around
    if (diff > slides.length / 2) diff -= slides.length;
    if (diff < -slides.length / 2) diff += slides.length;

    return diff;
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slideFromTop {
          0% {
            transform: translateY(-100%) rotateZ(0deg);
            opacity: 0;
          }
          100% {
            transform: translateY(0) rotateZ(0deg);
            opacity: 1;
          }
        }
      `,
        }}
      />
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
          <div
            className="relative mx-auto flex h-[550px] max-w-[1200px] items-center justify-center overflow-visible"
            style={{ perspective: "1500px" }}
          >
            <div
              className="relative h-full w-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              {slides.map((slide, index) => {
                const offset = getSlideOffset(index);

                // During animation, we need to render extra slides for the rotation effect
                const shouldRenderForAnimation =
                  isTransitioning &&
                  ((animationDirection === "left" && offset === 2) || // Far right wrapping to left
                    (animationDirection === "right" && offset === -2)); // Far left wrapping to right

                // Only render visible slides (prev, current, next) + animation slides
                if (Math.abs(offset) > 1 && !shouldRenderForAnimation) return null;

                const isCenter = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;

                // Calculate horizontal position with rotation effect
                let translateX = "0px";

                if (animationDirection === "left") {
                  // When going left (prevSlide), the far right (offset=2) wraps to left
                  if (offset === 2)
                    translateX = "400px"; // Start from right
                  else if (isLeft) translateX = "-400px";
                  else if (isRight) translateX = "400px";
                } else if (animationDirection === "right") {
                  // When going right (nextSlide), the far left (offset=-2) wraps to right
                  if (offset === -2)
                    translateX = "-400px"; // Start from left
                  else if (isLeft) translateX = "-400px";
                  else if (isRight) translateX = "400px";
                } else {
                  // No animation
                  if (isLeft) translateX = "-400px";
                  if (isRight) translateX = "400px";
                }

                // Calculate rotation - cards flip and exchange shapes during transition
                let rotationZ = 0;
                let rotationY = 0;
                let scaleValue = 1;
                let cardOpacity = 1;

                // All cards should end with rotationZ = 0 (facing forward)
                // Only apply Z-rotation during the transition itself
                if (isCenter) {
                  // Center card
                  rotationZ = 0; // Always face forward when settled
                  scaleValue = 1;
                  cardOpacity = 1;
                  rotationY = 0;
                } else {
                  // Side cards - squares with Y-axis perspective
                  rotationY = isLeft ? -10 : 10;
                  rotationZ = 0; // Side cards also face forward (no Z rotation)
                  scaleValue = 0.92;
                  cardOpacity = 0.7;
                }

                // Apply rotation ONLY during active transition
                if (isTransitioning) {
                  if (isCenter) {
                    // Center card leaving - flip it as it moves to side
                    rotationZ = 90;
                    scaleValue = 0.85;
                  } else if (
                    (animationDirection === "left" && isRight) ||
                    (animationDirection === "right" && isLeft)
                  ) {
                    // Side card becoming center - counter-flip as it comes in
                    rotationZ = -90;
                    rotationY = rotationY * 0.5;
                    cardOpacity = 0.85;
                  } else {
                    // Non-participating side card fades more
                    cardOpacity = 0.5;
                  }
                }

                return (
                  <div
                    key={slide.id}
                    className="absolute left-1/2 top-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${translateX}), -50%)`,
                      opacity: cardOpacity,
                      zIndex: isCenter ? 20 : 10,
                      transition:
                        "transform 1000ms cubic-bezier(0.4, 0.0, 0.2, 1), opacity 1000ms ease-out, z-index 0ms",
                    }}
                  >
                    {/* Unified card structure with animated dimensions and rotation */}
                    <div
                      className="relative cursor-pointer overflow-hidden rounded-[8px] shadow-2xl"
                      style={{
                        width: isCenter ? "350px" : "300px",
                        height: isCenter ? "520px" : "300px",
                        transform: `perspective(1200px) rotateZ(${rotationZ}deg) rotateY(${rotationY}deg) scale(${scaleValue})`,
                        transformStyle: "preserve-3d",
                        transformOrigin: "center center",
                        transition: isTransitioning
                          ? "transform 1000ms cubic-bezier(0.4, 0.0, 0.2, 1), width 0ms 500ms, height 0ms 500ms"
                          : "all 1000ms cubic-bezier(0.4, 0.0, 0.2, 1)",
                      }}
                      onClick={() => {
                        if (isLeft) prevSlide();
                        if (isRight) nextSlide();
                      }}
                    >
                      <div
                        style={{
                          transform: `rotateZ(${-rotationZ}deg)`,
                          transition: "transform 1000ms cubic-bezier(0.4, 0.0, 0.2, 1)",
                          transformOrigin: "center center",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <Image
                          width={isCenter ? 350 : 300}
                          height={isCenter ? 520 : 300}
                          src={slide.cardImage}
                          alt={slide.title}
                          title={slide.title}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Text Overlay - Only visible on center card, animates from top */}
                      {isCenter && (
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6"
                          style={{
                            transform: `rotateZ(${-rotationZ}deg)`,
                            animation: !isTransitioning
                              ? "slideFromTop 0.6s ease-out 0.1s backwards"
                              : "none",
                            opacity: isTransitioning ? 0 : 1,
                            transition: "opacity 300ms ease-out",
                          }}
                        >
                          <h3 className="mb-2 text-2xl font-bold text-white">
                            {slide.title}
                          </h3>
                          <p className="text-base leading-relaxed text-white/90">
                            {slide.description}
                          </p>
                        </div>
                      )}
                    </div>
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
    </>
  );
}
