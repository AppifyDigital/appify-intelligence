"use client";

import { useEffect, useState, useRef } from "react";

const services = [
  {
    id: 0,
    name: "AI consulting",
    title: "AI consulting",
    description:
      "Strategic AI consulting. Roadmap development. Opportunity analysis. Implementation planning.",
    tags: ["Strategy", "Model selection", "Implementation support"],
    image: "/assets/images/home/AI_consulting.png",
  },
  {
    id: 1,
    name: "AI augmented web solutions",
    title: "AI augmented web solutions",
    description:
      "AI-powered web development. Personalisation and automation. Smart user experiences.",
    tags: ["Smart", "Adaptive websites", "AI integration"],
    image: "/assets/images/home/AI_augmented_web_solutions.png",
  },
  {
    id: 2,
    name: "AI chatbots & agents",
    title: "AI chatbots & agents",
    description:
      "Intelligent conversational AI. 24/7 customer support. Natural language processing.",
    tags: ["Conversational AI", "NLP", "Automation"],
    image: "/assets/images/home/AI_chatbots_&_agents.png",
  },
  {
    id: 3,
    name: "AI automation",
    title: "AI automation",
    description:
      "Process automation. Workflow optimization. Intelligent task management.",
    tags: ["Workflow", "Process optimization", "Efficiency"],
    image: "/assets/images/home/AI_automation.png",
  },
  {
    id: 4,
    name: "RAG Systems",
    title: "RAG Systems",
    description:
      "Retrieval-Augmented Generation. Knowledge base integration. Intelligent document processing.",
    tags: ["Knowledge base", "Document AI", "Semantic search"],
    image: "/assets/images/home/RAG_Systems.png",
  },
  {
    id: 5,
    name: "AI dashboards",
    title: "AI dashboards",
    description: "Real-time analytics. Predictive insights. Custom reporting solutions.",
    tags: ["Analytics", "Insights", "Reporting"],
    image: "/assets/images/home/AI_dashboards.png",
  },
];

export default function AIServices() {
  const [activeService, setActiveService] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isUserInteracting) return;

    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  // Handle service selection
  const handleServiceClick = (index: number) => {
    setActiveService(index);
    setIsUserInteracting(true);

    // Resume auto-scrolling after 10 seconds of no interaction
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 10000);
  };

  // Scroll to active service
  useEffect(() => {
    if (scrollRef.current && containerRef.current) {
      const scrollContainer = scrollRef.current;
      const containerWidth = containerRef.current.offsetWidth;
      const scrollPosition = activeService * containerWidth;

      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeService]);

  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        {/* Section Title */}
        <h2 className="mb-12 text-5xl font-bold text-gray-900 md:text-6xl">
          AI Services
        </h2>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Sidebar - Service Tabs */}
          <div className="flex-shrink-0 lg:w-80">
            <div className="flex flex-col gap-3">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(index)}
                  className={`rounded-full px-6 py-4 text-left font-medium transition-all ${
                    activeService === index
                      ? "bg-gray-900 text-white"
                      : "border-2 border-gray-200 bg-white text-gray-900 hover:border-gray-400"
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative flex-1 overflow-hidden">
            {/* Desktop: Show partial next item */}
            <div className="hidden lg:block">
              <div
                ref={scrollRef}
                className="scrollbar-hide flex gap-6 overflow-x-auto"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className="group w-[calc(100%-150px)] flex-shrink-0 cursor-pointer transition-transform hover:scale-105"
                    ref={index === 0 ? containerRef : undefined}
                    onClick={() => handleServiceClick(index)}
                  >
                    <div className="relative h-[500px] overflow-hidden rounded-3xl">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${service.image})`,
                        }}
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      {/* Interactive indicator */}
                      <div className="absolute right-4 top-4 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>

                      {/* Content */}
                      <div className="relative flex h-full flex-col justify-between p-8 text-white md:p-12">
                        <div>
                          <h3 className="mb-4 text-4xl font-bold md:text-5xl">
                            {service.title}
                          </h3>
                        </div>

                        <div>
                          <p className="mb-6 text-xl leading-relaxed md:text-2xl">
                            {service.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-3">
                            {service.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Show only active section */}
            <div className="block lg:hidden">
              <div
                className="group relative h-[500px] cursor-pointer overflow-hidden rounded-3xl transition-transform hover:scale-105"
                onClick={() => handleServiceClick(activeService)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${services[activeService].image})`,
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Interactive indicator */}
                <div className="absolute right-4 top-4 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative flex h-full flex-col justify-between p-8 text-white">
                  <div>
                    <h3 className="mb-4 text-4xl font-bold">
                      {services[activeService].title}
                    </h3>
                  </div>

                  <div>
                    <p className="mb-6 text-xl leading-relaxed">
                      {services[activeService].description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {services[activeService].tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
