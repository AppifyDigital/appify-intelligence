"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import Head from "next/head";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    honeypot: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [buttonHover, setButtonHover] = useState(false);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const animatedElements = document.querySelectorAll("[data-animate]");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Honeypot check - if checked, it's a bot
    if (formData.honeypot) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", company: "", message: "", honeypot: false });
      } else {
        setSubmitStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (_error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
      console.error(_error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Appify Intelligence Ireland</title>
        <meta
          name="description"
          content="Get in touch with Appify Intelligence for AI development, automation, and consulting services. Contact our expert team for your AI project needs."
        />
        <link rel="canonical" href="https://appifyintelligence.com/contact" />
      </Head>
      <main className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-8 lg:py-32">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-blue-100/40 to-purple-100/40 blur-3xl"></div>
          <div
            className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-purple-100/40 to-pink-100/40 blur-3xl"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute left-1/2 top-1/2 h-60 w-60 animate-pulse rounded-full bg-gradient-to-br from-cyan-100/30 to-blue-100/30 blur-2xl"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Side - Contact Information */}
            <div
              id="contact-info"
              data-animate="true"
              className={`flex flex-col justify-center transition-all duration-1000 ${
                visibleElements.has("contact-info")
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h1 className="animate-gradient mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-4xl font-bold leading-tight text-gray-900 text-transparent md:text-5xl">
                Ready to unlock the power of AI for your business?
              </h1>
              <p
                className="animate-fade-in-up mb-10 text-lg text-gray-600"
                style={{ animationDelay: "0.3s" }}
              >
                Contact us today to discuss your next AI-driven project.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div
                  id="contact-email"
                  data-animate="true"
                  className={`group flex items-start gap-4 transition-all delay-100 duration-700 hover:scale-105 ${
                    visibleElements.has("contact-email")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  <div className="relative">
                    <Mail className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    <div className="absolute inset-0 scale-0 rounded-full bg-primary/20 transition-all duration-500 group-hover:scale-150"></div>
                  </div>
                  <div>
                    <a
                      href="mailto:hello@appifyintelligence.com"
                      className="text-lg text-primary transition-all duration-300 hover:text-blue-600 hover:underline hover:underline-offset-4"
                    >
                      hello@appifyintelligence.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div
                  id="contact-phone"
                  data-animate="true"
                  className={`group flex items-start gap-4 transition-all delay-200 duration-700 hover:scale-105 ${
                    visibleElements.has("contact-phone")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  <div className="relative">
                    <Phone className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    <div className="absolute inset-0 scale-0 rounded-full bg-primary/20 transition-all duration-500 group-hover:scale-150"></div>
                  </div>
                  <div>
                    <a
                      href="tel:1800852307"
                      className="text-lg text-primary transition-all duration-300 hover:text-blue-600 hover:underline hover:underline-offset-4"
                    >
                      1 800 852 307
                    </a>
                  </div>
                </div>

                {/* Addresses */}
                <div
                  id="contact-address"
                  data-animate="true"
                  className={`group flex items-start gap-4 transition-all delay-300 duration-700 hover:scale-105 ${
                    visibleElements.has("contact-address")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  <div className="relative">
                    <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    <div className="absolute inset-0 scale-0 rounded-full bg-primary/20 transition-all duration-500 group-hover:scale-150"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="transition-all duration-300 group-hover:translate-x-2">
                      <p className="font-medium text-primary transition-colors duration-300 group-hover:text-blue-600">
                        Main office: Appify Ltd., Ashfield, Tullamore, Co. Offaly,
                        Ireland. R35 KX60
                      </p>
                    </div>
                    <div
                      className="transition-all duration-300 group-hover:translate-x-2"
                      style={{ transitionDelay: "0.1s" }}
                    >
                      <p className="font-medium text-primary transition-colors duration-300 group-hover:text-blue-600">
                        UK office: Appify Ltd., The Fold, Spencer St., Leamington Spa, UK.
                        CV31 3NE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex flex-col justify-center">
              <form
                onSubmit={handleSubmit}
                className="animate-fade-in-up space-y-6 sm:mt-20"
                style={{ animationDelay: "0.5s" }}
              >
                {/* Full Name */}
                <div className="group relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    placeholder="Full Name"
                    required
                    className={`w-full rounded-xl border-2 px-6 py-4 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                      focusedField === "name"
                        ? "scale-105 border-primary shadow-lg shadow-primary/20"
                        : "border-black hover:border-gray-600"
                    }`}
                  />
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-blue-500/5 transition-opacity duration-300 ${
                      focusedField === "name" ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Email */}
                <div className="group relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    placeholder="Your Email"
                    required
                    className={`w-full rounded-xl border-2 px-6 py-4 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                      focusedField === "email"
                        ? "scale-105 border-primary shadow-lg shadow-primary/20"
                        : "border-black hover:border-gray-600"
                    }`}
                  />
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-blue-500/5 transition-opacity duration-300 ${
                      focusedField === "email" ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Company Name */}
                <div className="group relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => handleFocus("company")}
                    onBlur={handleBlur}
                    placeholder="Company Name"
                    className={`w-full rounded-xl border-2 px-6 py-4 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                      focusedField === "company"
                        ? "scale-105 border-primary shadow-lg shadow-primary/20"
                        : "border-black hover:border-gray-600"
                    }`}
                  />
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-blue-500/5 transition-opacity duration-300 ${
                      focusedField === "company" ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Honeypot field - hidden from users, visible to bots */}
                <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
                  <label htmlFor="website">
                    Please leave this field blank
                    <input
                      type="checkbox"
                      name="honeypot"
                      id="website"
                      checked={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

                {/* Message */}
                <div className="group relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    placeholder="Tell us about your AI project..."
                    required
                    rows={6}
                    className={`w-full resize-none rounded-xl border-2 px-6 py-4 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                      focusedField === "message"
                        ? "scale-105 border-primary shadow-lg shadow-primary/20"
                        : "border-black hover:border-gray-600"
                    }`}
                  />
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-blue-500/5 transition-opacity duration-300 ${
                      focusedField === "message" ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => setButtonHover(true)}
                  onMouseLeave={() => setButtonHover(false)}
                  className={`relative transform overflow-hidden rounded-full px-10 py-4 font-medium text-white transition-all duration-300 ${
                    isSubmitting
                      ? "scale-95 cursor-not-allowed bg-gray-400"
                      : "bg-gray-900 hover:scale-105 hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-500/25"
                  }`}
                >
                  <div className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send
                          className={`h-4 w-4 transition-transform duration-300 ${
                            buttonHover ? "translate-x-1" : ""
                          }`}
                        />
                        Send message
                      </>
                    )}
                  </div>
                </button>

                {/* Status Messages */}
                {submitStatus.type && (
                  <div
                    className={`animate-fade-in-up rounded-lg p-4 transition-all duration-500 ${
                      submitStatus.type === "success"
                        ? "border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 shadow-lg"
                        : "border border-red-200 bg-gradient-to-r from-red-50 to-rose-50 text-red-800 shadow-lg"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="h-5 w-5 animate-bounce text-green-600" />
                      ) : (
                        <AlertCircle className="h-5 w-5 animate-pulse text-red-600" />
                      )}
                      <span className="font-medium">{submitStatus.message}</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
