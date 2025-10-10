"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
    <main className="bg-white py-8 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side - Contact Information */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Ready to unlock the power of AI for your business?
            </h1>
            <p className="mb-10 text-lg text-gray-600">
              Contact us today to discuss your next AI-driven project.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <a
                    href="mailto:hello@appifyintelligence.com"
                    className="text-lg text-primary transition-colors hover:text-primary"
                  >
                    hello@appifyintelligence.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <a
                    href="tel:1800852307"
                    className="text-lg text-primary transition-colors hover:text-primary"
                  >
                    1 800 852 307
                  </a>
                </div>
              </div>

              {/* Addresses */}
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-primary">
                      Main office: Appify Ltd., Ashfield, Tullamore, Co. Offaly, Ireland.
                      R35 KX60
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-primary">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl border-2 border-gray-200 px-6 py-4 text-gray-900 placeholder-gray-400 transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl border-2 border-gray-200 px-6 py-4 text-gray-900 placeholder-gray-400 transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              {/* Company Name */}
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full rounded-xl border-2 border-gray-200 px-6 py-4 text-gray-900 placeholder-gray-400 transition-colors focus:border-primary focus:outline-none"
                />
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
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your AI project..."
                  required
                  rows={6}
                  className="w-full resize-none rounded-xl border-2 border-gray-200 px-6 py-4 text-gray-900 placeholder-gray-400 transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-gray-900 px-10 py-4 font-medium text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>

              {/* Status Messages */}
              {submitStatus.type && (
                <div
                  className={`rounded-lg p-4 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
