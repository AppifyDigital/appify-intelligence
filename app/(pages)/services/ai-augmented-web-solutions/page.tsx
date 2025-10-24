"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AIAugmentedWebSolutions() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll("[data-animate]");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gray-50 md:pb-20">
          {/* Animated Background */}
          <div className="absolute inset-0">
            {/* Base Background */}
            <div className="absolute inset-0 bg-gray-50"></div>

            {/* Shimmer Effect */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.5) 50%, transparent 60%)",
                animation: "shimmer 3s ease-in-out infinite",
              }}
            ></div>

            {/* Secondary Shimmer */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)",
                animation: "shimmer 4s ease-in-out infinite reverse",
              }}
            ></div>
          </div>

          <style jsx>{`
            @keyframes shimmer {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
          `}</style>
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:pb-32 md:pt-64 lg:px-20">
            <div
              id="hero-content"
              data-animate="true"
              className={`text-center transition-all duration-1000 ${
                visibleElements.has("hero-content")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="mb-8 text-5xl font-bold text-gray-900 md:text-6xl">
                AI-augmented web solutions
              </h1>
              <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-700 md:text-2xl">
                Transform your online presence with AI-powered web platforms that learn,
                adapt, and optimise for results. Appify Intelligence integrates advanced
                AI capabilities into websites to deliver dynamic experiences, boost
                engagement, and improve conversion.
              </p>
            </div>
          </div>
          <div
            className="relative bg-white px-4 py-16 sm:px-6 lg:px-20"
            style={{
              boxShadow: "0px 0px 14.18px 9.05px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div
              id="testimonial"
              data-animate="true"
              className={`flex items-center justify-center gap-2 transition-all duration-1000 ${
                visibleElements.has("testimonial")
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0"
              }`}
            >
              {/* Opening Quote */}
              <div className="flex items-start">
                <span className="text-6xl font-bold text-gray-900 md:text-8xl">
                  &ldquo;
                </span>
              </div>

              {/* Testimonial Content */}
              <div className="text-center">
                <blockquote className="mb-6 text-xl font-medium leading-relaxed text-gray-900 md:text-2xl">
                  Appify has developed a strong partnership built upon trust, value, and
                  collaboration.
                </blockquote>
                <cite className="block text-lg font-semibold text-[#FFB300]">
                  Director, The Online Coach Limited
                </cite>
              </div>

              {/* Closing Quote */}
              <div className="flex items-start">
                <span className="text-6xl font-bold text-gray-900 md:text-8xl">
                  &rdquo;
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Appify Intelligence Section */}
        <section className="w-full bg-gray-100 py-20">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              {/* Text Content */}
              <div
                id="why-appify-text"
                data-animate="true"
                className={`transition-all duration-1000 ${
                  visibleElements.has("why-appify-text")
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }`}
              >
                <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
                  Why Appify Intelligence
                </h2>
                <div className="space-y-6 text-lg text-gray-900">
                  <p>
                    <strong>Advanced AI integration:</strong> We embed machine learning
                    and intelligent automation into your site architecture for real-time
                    personalisation and continuous optimisation.
                  </p>
                  <p>
                    <strong>Personalised experiences:</strong> Dynamic content,
                    recommendation engines, and predictive UX ensure every visitor&apos;s
                    journey is tailored for maximum impact.
                  </p>
                  <p>
                    <strong>Operational efficiency:</strong> Automate support, streamline
                    workflows, and integrate with business systems to reduce costs and
                    complexity.
                  </p>
                  <p>
                    <strong>Future-proof design:</strong> Our solutions evolve alongside
                    your users&apos; expectations and emerging technologies.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div
                id="why-appify-image"
                data-animate="true"
                className={`flex h-full justify-center transition-all duration-1000 lg:justify-end ${
                  visibleElements.has("why-appify-image")
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-[8px]">
                  <Image
                    width={600}
                    height={500}
                    src="/assets/images/services/ai-augmented-web-solutions/ai-augmented-web-solutions-image-1.webp"
                    alt="AI-augmented web solutions with intelligent automation and personalization"
                    title="AI Augmented Web Solutions"
                    loading="lazy"
                    className="h-full w-full rounded-[8px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Capabilities Section */}
        <section className="w-full bg-gray-100 py-20">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              {/* Image */}
              <div
                id="capabilities-image"
                data-animate="true"
                className={`flex h-full justify-center transition-all duration-1000 lg:justify-start ${
                  visibleElements.has("capabilities-image")
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-[8px]">
                  <Image
                    width={600}
                    height={500}
                    src="/assets/images/services/ai-augmented-web-solutions/ai-augmented-web-solutions-image-2.webp"
                    alt="Advanced AI web capabilities including personalization and automation"
                    title="AI Web Capabilities"
                    loading="lazy"
                    className="h-full w-full rounded-[8px] object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div
                id="capabilities-text"
                data-animate="true"
                className={`transition-all duration-1000 ${
                  visibleElements.has("capabilities-text")
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
              >
                <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
                  Our capabilities
                </h2>
                <div className="space-y-4 text-lg text-gray-900">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-[#FFB300]"></span>
                      AI-driven personalisation and recommendations
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-[#FFB300]"></span>
                      Intelligent search and content curation
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-[#FFB300]"></span>
                      Automated customer support and chatbots
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-[#FFB300]"></span>
                      Data-led UX optimisation
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-[#FFB300]"></span>
                      Business system integrations
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-[#FFB300]"></span>
                      Solutions based on cutting-edge industry knowledge
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="w-full bg-white py-20">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-20">
            <h2
              id="what-we-deliver"
              data-animate="true"
              className={`mb-16 text-center text-4xl font-bold text-gray-900 transition-all duration-1000 md:text-5xl ${
                visibleElements.has("what-we-deliver")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              What we deliver
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="animate-fade-in-up group rounded-[8px] bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-4 h-1 w-12 bg-[#FFB300]"></div>
                <h3 className="text-xl font-semibold text-gray-900">
                  AI-powered web applications
                </h3>
              </div>

              {/* Card 2 */}
              <div className="animate-fade-in-up animation-delay-100 group rounded-[8px] bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-4 h-1 w-12 bg-[#FFB300]"></div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Intelligent user interfaces
                </h3>
              </div>

              {/* Card 3 */}
              <div className="animate-fade-in-up animation-delay-200 group rounded-[8px] bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-4 h-1 w-12 bg-[#FFB300]"></div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Automated content generation
                </h3>
              </div>

              {/* Card 4 */}
              <div className="animate-fade-in-up animation-delay-300 group rounded-[8px] bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-4 h-1 w-12 bg-[#FFB300]"></div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Smart search and recommendations
                </h3>
              </div>

              {/* Card 5 */}
              <div className="animate-fade-in-up animation-delay-400 group rounded-[8px] bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-4 h-1 w-12 bg-[#FFB300]"></div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Performance optimization
                </h3>
              </div>

              {/* Card 6 */}
              <div className="animate-fade-in-up animation-delay-500 group rounded-[8px] bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-4 h-1 w-12 bg-[#FFB300]"></div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Scalable cloud solutions
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantage Section */}
        <section className="w-full bg-gray-100 py-20">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              {/* Text Content */}
              <div
                id="competitive-text"
                data-animate="true"
                className={`transition-all duration-1000 ${
                  visibleElements.has("competitive-text")
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }`}
              >
                <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
                  Competitive advantage
                </h2>
                <p className="text-lg text-gray-900">
                  Your website becomes a living platform - learning from user behaviour,
                  improving continuously, and driving measurable business outcomes. We
                  combine technical depth with creative execution to build digital assets
                  that outperform competitors.
                </p>
              </div>

              {/* Image */}
              <div
                id="competitive-image"
                data-animate="true"
                className={`flex h-full justify-center transition-all duration-1000 lg:justify-end ${
                  visibleElements.has("competitive-image")
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-[8px]">
                  <Image
                    width={700}
                    height={400}
                    src="/assets/images/services/ai-augmented-web-solutions/ai-augmented-web-solutions-image-3.webp"
                    alt="AI web solutions competitive advantages and business benefits"
                    title="AI Web Solutions Competitive Advantage"
                    loading="lazy"
                    className="h-full w-full rounded-[8px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proven Impact Section */}
        <section className="w-full bg-white py-20">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Header */}
              <div
                id="proven-impact-header"
                data-animate="true"
                className={`mb-16 max-w-xl transition-all duration-1000 md:p-4 ${
                  visibleElements.has("proven-impact-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                  Proven impact
                </h2>
                <p className="text-lg text-gray-900">
                  We&apos;ve delivered intelligent web platforms across recruitment,
                  e-learning, legal, and logistics sectors — from personalised candidate
                  experiences to interactive training environments.
                </p>
              </div>
              <div
                id="success-card-1"
                data-animate="true"
                className={`group relative overflow-hidden rounded-[8px] bg-gray-900 transition-all duration-700 md:col-span-1 lg:col-span-1 ${
                  visibleElements.has("success-card-1")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <Image
                  width={400}
                  height={300}
                  src="/assets/images/home/Proven_track_record.webp"
                  alt="Proven track record in AI development and automation projects"
                  title="Proven Track Record"
                  loading="lazy"
                  className="h-full w-full rounded-[8px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="mb-2 text-2xl font-bold">Proven Track Record</h3>
                  <p className="text-sm text-gray-200">
                    Extensive experience across web, mobile, and automation projects
                  </p>
                </div>
              </div>

              {/* Card 2 - Deep AI Expertise */}
              <div
                id="success-card-2"
                data-animate="true"
                className={`group relative overflow-hidden rounded-[8px] bg-gray-900 transition-all delay-100 duration-700 md:col-span-1 lg:col-span-1 ${
                  visibleElements.has("success-card-2")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <Image
                  width={400}
                  height={300}
                  src="/assets/images/home/Deep_AI_Expertise.webp"
                  alt="Deep AI expertise across machine learning, automation, and intelligent systems"
                  title="Deep AI Expertise"
                  loading="lazy"
                  className="h-full w-full rounded-[8px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="mb-2 text-2xl font-bold">Deep AI Expertise</h3>
                  <p className="text-sm text-gray-200">
                    Specialized knowledge in AI integration and custom solution
                    development
                  </p>
                </div>
              </div>

              {/* Card 3 - Full-Service AI */}
              <div
                id="success-card-3"
                data-animate="true"
                className={`group relative overflow-hidden rounded-[8px] bg-gray-900 transition-all delay-200 duration-700 md:col-span-2 lg:col-span-1 ${
                  visibleElements.has("success-card-3")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <Image
                  width={400}
                  height={300}
                  src="/assets/images/home/Full_Service_AI.webp"
                  alt="Full-service AI solutions from strategy to implementation"
                  title="Full-Service AI"
                  loading="lazy"
                  className="h-full w-full rounded-[8px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="mb-2 text-2xl font-bold">Full-Service AI</h3>
                  <p className="text-sm text-gray-200">
                    Complete range of end-to-end AI services and solutions
                  </p>
                </div>
              </div>

              {/* Card 4 - Global Trust */}
              <div
                id="success-card-4"
                data-animate="true"
                className={`group relative overflow-hidden rounded-[8px] bg-gray-900 transition-all delay-300 duration-700 md:col-span-1 lg:col-span-1 ${
                  visibleElements.has("success-card-4")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <Image
                  width={400}
                  height={300}
                  src="/assets/images/home/Global_Trust.webp"
                  alt="Globally trusted AI solutions with proven reliability"
                  title="Global Trust"
                  loading="lazy"
                  className="h-full w-full rounded-[8px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="mb-2 text-2xl font-bold">Global Trust</h3>
                  <p className="text-sm text-gray-200">
                    Trusted by leading organizations in Ireland and internationally
                  </p>
                </div>
              </div>

              {/* Card 5 - Award Recognition */}
              <div
                id="success-card-5"
                data-animate="true"
                className={`group relative overflow-hidden rounded-[8px] bg-gray-900 transition-all delay-500 duration-700 md:col-span-1 lg:col-span-1 ${
                  visibleElements.has("success-card-5")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <Image
                  width={400}
                  height={300}
                  src="/assets/images/home/Award_Recognition.webp"
                  alt="Award-winning AI development and recognition in the industry"
                  title="Award Recognition"
                  loading="lazy"
                  className="h-full w-full rounded-[8px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="mb-2 text-2xl font-bold">Award Recognition</h3>
                  <p className="text-sm text-gray-200">
                    Award-nominated for excellence in AI and agency services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Let's Start Your AI Journey */}
        <section className="w-full bg-white py-20">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-20">
            <div
              id="cta-section"
              data-animate="true"
              className={`group relative rounded-3xl bg-gray-50 p-12 shadow-2xl transition-all duration-1000 ${
                visibleElements.has("cta-section")
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0"
              }`}
            >
              {/* Animated Border Lines */}
              {/* Top border */}
              <div className="absolute left-1/2 top-0 h-[5px] w-16 -translate-x-1/2 rounded-t-3xl bg-[#FFB300] transition-all duration-500 group-hover:left-0 group-hover:w-full group-hover:translate-x-0"></div>
              {/* Right border */}
              <div className="absolute right-0 top-1/2 h-16 w-[5px] -translate-y-1/2 rounded-r-3xl bg-[#FFB300] transition-all duration-500 group-hover:top-0 group-hover:h-full group-hover:translate-y-0"></div>
              {/* Bottom border */}
              <div className="absolute bottom-0 left-1/2 h-[5px] w-16 -translate-x-1/2 rounded-b-3xl bg-[#FFB300] transition-all duration-500 group-hover:left-0 group-hover:w-full group-hover:translate-x-0"></div>
              {/* Left border */}
              <div className="absolute left-0 top-1/2 h-16 w-[5px] -translate-y-1/2 rounded-l-3xl bg-[#FFB300] transition-all duration-500 group-hover:top-0 group-hover:h-full group-hover:translate-y-0"></div>
              <div className="relative z-10">
                <h2 className="mb-8 text-center text-4xl font-bold text-gray-900 md:text-5xl">
                  Let&apos;s build your intelligent web platform
                </h2>

                <div className="relative mb-12 text-center">
                  <p className="text-xl text-gray-700 md:text-2xl">
                    Apply here for a free 30-minute consultation to see how AI can
                    transform your digital performance.
                  </p>
                </div>

                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    className="rounded-full bg-gray-900 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
                  >
                    Let&apos;s start
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
