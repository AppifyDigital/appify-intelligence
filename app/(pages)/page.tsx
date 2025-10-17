"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import WhyChoose from "../components/Home/WhyChoose";
import AIServices from "../components/Home/AIServices";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const industries = [
  "AI for Healthcare",
  "AI for Retail",
  "AI for Logistics",
  "AI for SME",
  "AI for Enterprise",
  "AI for Fitness",
  "AI for Sports",
  "AI for Finance",
];

// Duplicate industries for seamless loop
const allIndustries = [
  ...industries,
  ...industries,
  ...industries,
  ...industries,
  ...industries,
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
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
        rootMargin: "0px 0px -50px 0px",
      },
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll("[data-animate]");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 h-full w-full">
          <video
            autoPlay
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/assets/video/home.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-white/90 to-white/100" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32 lg:px-20">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 className="animate-fade-in-up mb-8 text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
              BUILDING AI SYSTEMS THAT DELIVER REAL RESULTS.
            </h1>

            {/* Subheading */}
            <p className="animate-fade-in-up animation-delay-200 mb-6 text-2xl font-medium leading-snug text-primary md:text-3xl lg:text-4xl">
              At Appify Intelligence, we are Ireland&apos;s specialists in full-stack AI
              development - delivering world-class software.
            </p>

            {/* Body Text */}
            <p className="animate-fade-in-up animation-delay-400 mb-10 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
              From web and mobile development to advanced process automation, we turn
              complex AI into measurable business outcomes.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up animation-delay-600 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-900 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl"
              >
                <span className="relative z-10">Start your AI project</span>
                <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
              </Link>
              <Link
                // href="/success-stories"
                href="#success-stories"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-gray-900 bg-transparent px-8 py-4 text-base font-medium text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:text-white hover:shadow-xl"
              >
                <span className="relative z-10">See our work</span>
                <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
              <Link
                // href="/services"
                href="#services"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-gray-900 bg-transparent px-8 py-4 text-base font-medium text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:text-white hover:shadow-xl"
              >
                <span className="relative z-10">Explore services</span>
                <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-hidden border-b border-t border-black bg-white py-4">
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />

          {/* Scrolling container */}
          <div ref={scrollRef} className="animate-scroll flex gap-8 whitespace-nowrap">
            {allIndustries.map((industry, index) => (
              <div key={index} className="inline-flex items-center gap-3 px-6 py-3">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span className="text-lg font-medium text-gray-900">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Services Section */}
      <AIServices />

      {/* AI Expertise Across Industries Section */}
      <section id="expertise" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2
              id="expertise-title"
              data-animate
              className={`duration-800 mb-4 text-4xl font-bold text-gray-900 transition-all md:text-5xl ${
                visibleElements.has("expertise-title")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              AI expertise across industries
            </h2>
            <p
              id="expertise-desc"
              data-animate
              className={`duration-800 mx-auto max-w-3xl text-lg text-gray-600 transition-all delay-200 ${
                visibleElements.has("expertise-desc")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              We implement advanced AI across diverse industries, helping organisations
              achieve measurable improvements.
            </p>
          </div>

          {/* Industry Cards */}
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Training & Education Card */}
            <div
              id="card-1"
              data-animate
              className={`overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                visibleElements.has("card-1")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src="/assets/images/home/Training_&_education.png"
                  alt="AI-powered training and education platform showcasing digital learning solutions"
                  title="Training & Education - AI Learning Platform"
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Training & education
                </h3>
                <p className="leading-relaxed text-gray-600">
                  AI-powered learning platforms that improve student outcomes and learning
                  efficiency.
                </p>
              </div>
            </div>

            {/* HR & Recruitment Card */}
            <div
              id="card-2"
              data-animate
              className={`overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                visibleElements.has("card-2")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src="/assets/images/home/HR_&_recruitment.png"
                  alt="AI-driven HR and recruitment platform with intelligent candidate screening"
                  title="HR & Recruitment - AI Talent Management"
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">HR & recruitment</h3>
                <p className="leading-relaxed text-gray-600">
                  Smart automation for candidate sourcing, matching, and onboarding.
                </p>
              </div>
            </div>

            {/* Mental Health & Wellbeing Card */}
            <div
              id="card-3"
              data-animate
              className={`overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                visibleElements.has("card-3")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src="/assets/images/home/Mental_health_&_wellbeing.png"
                  alt="AI-powered mental health and wellbeing support platform with CBT features"
                  title="Mental Health & Wellbeing - AI Support Platform"
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Mental health & wellbeing
                </h3>
                <p className="leading-relaxed text-gray-600">
                  Secure AI apps that support patients, doctors, mental health
                  professionals and all other users.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div
            id="testimonial"
            data-animate
            className={`duration-800 delay-400 mx-auto max-w-4xl text-center transition-all ${
              visibleElements.has("testimonial")
                ? "animate-fade-in-up"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative">
              <p className="mb-6 text-xl leading-relaxed text-gray-800 md:text-2xl">
                <span className="text-4xl text-gray-400">&ldquo;</span>
                Appify has developed a strong partnership built upon trust, value, and
                collaboration. This has then been backed by excellent technical
                capability.
                <span className="text-4xl text-gray-400">&rdquo;</span>
              </p>
              <div>
                <p className="mb-1 text-lg font-bold text-primary">Stephen Gribben</p>
                <p className="text-gray-600">the owner of Genio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-house AI Product Innovation Section */}
      <section id="products" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2
              id="products-title"
              data-animate
              className={`duration-800 mb-4 text-4xl font-bold text-gray-900 transition-all md:text-5xl ${
                visibleElements.has("products-title")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              In-house AI product innovation
            </h2>
            <p
              id="products-desc"
              data-animate
              className={`duration-800 mx-auto max-w-3xl text-lg text-gray-600 transition-all delay-200 ${
                visibleElements.has("products-desc")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Appify Intelligence is at the forefront of AI product development, with two
              flagship solutions
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* AppifyWebX Card */}
            <div
              id="product-1"
              data-animate
              className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                visibleElements.has("product-1")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src="/assets/images/home/AppifyWebX_image.png"
                  alt="AppifyWebX Global Platform - AI-powered web development and automation solution"
                  title="AppifyWebX Global Platform"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="mb-3">
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Global Platform
                  </span>
                </div>
                <h3 className="mb-4 text-3xl font-bold text-gray-900">AppifyWebX</h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  A global, leading-edge web development platform, harnessing AI to
                  deliver high-performance, scalable, secure, production-ready and
                  cost-effective web solutions for clients worldwide, within 24 hours.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border-2 border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
                    AI-powered
                  </span>
                  <span className="rounded-full border-2 border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
                    24-Hour Delivery
                  </span>
                  <span className="rounded-full border-2 border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
                    Production Ready
                  </span>
                </div>
              </div>
            </div>

            {/* AppifyX Card */}
            <div
              id="product-2"
              data-animate
              className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                visibleElements.has("product-2")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src="/assets/images/home/AppifyX_image.png"
                  alt="AppifyX Agency Tool - Comprehensive AI automation and workflow management platform"
                  title="AppifyX Agency Tool"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="mb-3">
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Agency Tool
                  </span>
                </div>
                <h3 className="mb-4 text-3xl font-bold text-gray-900">AppifyX</h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  An innovative end-to-end agency management tool designed for creative,
                  media, development, communications, and marketing agencies. Uses AI
                  intelligence to optimize sales, staff resourcing, allocation, capacity
                  management, and profitability.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border-2 border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
                    Resource Management
                  </span>
                  <span className="rounded-full border-2 border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
                    AI Intelligence
                  </span>
                  <span className="rounded-full border-2 border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
                    Profit Optimisation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Award-winning AI Expertise Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
          {/* Section Header */}
          <div className="mb-8 text-center">
            <h2
              id="awards-title"
              data-animate
              className={`duration-800 mb-6 text-4xl font-bold text-gray-900 transition-all md:text-5xl ${
                visibleElements.has("awards-title")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Award-winning AI expertise
            </h2>
            <p
              id="awards-subtitle"
              data-animate
              className={`duration-800 mb-4 text-xl font-semibold text-gray-900 transition-all delay-200 ${
                visibleElements.has("awards-subtitle")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Our commitment to AI innovation has been recognized at the highest level
            </p>
            <p
              id="awards-desc"
              data-animate
              className={`duration-800 delay-400 mx-auto max-w-4xl text-lg text-gray-600 transition-all ${
                visibleElements.has("awards-desc")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Appify Intelligence is proud to be shortlisted as finalists for multiple
              Digital Media Awards, including:
            </p>
          </div>

          {/* Awards Cards */}
          <div className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {/* Best App Award */}
            <div
              id="award-1"
              data-animate
              className={`rounded-xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                visibleElements.has("award-1")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-32 items-center justify-center">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/images/home/digital_media_awards.png"
                    alt="Digital Media Awards - Best App recognition badge"
                    title="Best App Award"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Best App</h3>
            </div>

            {/* Best Small Agency Award */}
            <div
              id="award-2"
              data-animate
              className={`rounded-xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                visibleElements.has("award-2")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-32 items-center justify-center">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/images/home/digital_media_awards.png"
                    alt="Digital Media Awards - Best Small Agency recognition badge"
                    title="Best Small Agency Award"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Best Small Agency</h3>
            </div>

            {/* Best Use of AI Award */}
            <div
              id="award-3"
              data-animate
              className={`rounded-xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                visibleElements.has("award-3")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-32 items-center justify-center">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/images/home/digital_media_awards.png"
                    alt="Digital Media Awards - Best Use of AI recognition badge"
                    title="Best Use of AI Award"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Best Use of AI</h3>
            </div>
          </div>

          {/* Closing Statement */}
          <div
            id="awards-closing"
            data-animate
            className={`duration-800 delay-400 mx-auto max-w-4xl text-center transition-all ${
              visibleElements.has("awards-closing")
                ? "animate-fade-in-up"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-lg leading-relaxed text-gray-600">
              This recognition highlights our demonstrable expertise and leadership in
              delivering AI-powered solutions that drive real business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <WhyChoose />

      {/* Solutions In Action Section */}
      <div className="bg-white py-20">
        {/* Section 1: See our AI solutions in action */}
        <section className="container relative mx-auto border border-gray-200 shadow-lg">
          <div>
            <div className="absolute inset-0 overflow-hidden">
              {/* Top border line */}
              <div className="animate-border-top absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"></div>
              {/* Right border line */}
              <div className="animate-border-right absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-80"></div>
              {/* Bottom border line */}
              <div className="animate-border-bottom absolute bottom-0 right-0 h-1 w-full bg-gradient-to-l from-transparent via-primary to-transparent opacity-80"></div>
              {/* Left border line */}
              <div className="animate-border-left absolute bottom-0 left-0 h-full w-1 bg-gradient-to-t from-transparent via-primary to-transparent opacity-80"></div>
            </div>
            <div className="relative mx-auto max-w-5xl px-4 py-4 text-center sm:px-6 sm:py-10 lg:px-20">
              <h2
                id="solutions-title"
                data-animate
                className={`duration-800 mb-6 text-4xl font-bold text-gray-900 transition-all md:text-5xl ${
                  visibleElements.has("solutions-title")
                    ? "animate-fade-in-up"
                    : "translate-y-8 opacity-0"
                }`}
              >
                See our AI solutions in action
              </h2>
              <p
                id="solutions-desc"
                data-animate
                className={`duration-800 mx-auto mb-8 max-w-3xl text-lg text-gray-600 transition-all delay-200 ${
                  visibleElements.has("solutions-desc")
                    ? "animate-fade-in-up"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Explore real-world implementations and the results we&apos;ve delivered
                for clients across various industries.
              </p>
              <Link
                // href="/success-stories"
                href="#success-stories"
                id="solutions-button"
                data-animate
                className={`inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-lg ${
                  visibleElements.has("solutions-button")
                    ? "animate-fade-in-up"
                    : "translate-y-8 opacity-0"
                }`}
              >
                View success stories
              </Link>
            </div>
          </div>

          {/* Section 2: Infinite Scrolling Industries */}
          <div className="overflow-hidden border-t border-black bg-white py-4">
            <div className="relative">
              {/* Gradient overlays for fade effect */}
              <div className="absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
              <div className="absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />

              {/* Scrolling container */}
              <div
                ref={scrollRef}
                className="animate-scroll flex gap-8 whitespace-nowrap"
              >
                {allIndustries.map((industry, index) => (
                  <div key={index} className="inline-flex items-center gap-3 px-6 py-3">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span className="text-lg font-medium text-gray-900">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Contact CTA */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-20">
            <h2
              id="contact-title"
              data-animate
              className={`duration-800 mb-6 text-4xl font-bold text-gray-900 transition-all md:text-5xl ${
                visibleElements.has("contact-title")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Let&apos;s make your business{" "}
              <span className="border-b-4 border-black">intelligent</span>.
            </h2>
            <div
              id="contact-cta"
              data-animate
              className={`duration-800 flex flex-col items-center justify-center gap-4 transition-all delay-200 sm:flex-row ${
                visibleElements.has("contact-cta")
                  ? "animate-fade-in-up"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <Link
                href="/contact"
                className="hover:bg-primary/90 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-2xl font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Contact us
              </Link>
              <span className="text-2xl text-gray-700">
                to start your AI transformation.
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
