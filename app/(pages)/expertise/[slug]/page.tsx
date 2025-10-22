"use client";

import questions from "@/data/questions.json";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function QuestionPage() {
  const params = useParams();
  const [visibleElements, setVisibleElements] = useState(new Set<string>());

  const currentIndex = useMemo(() => {
    return questions.findIndex((q) => q.id === (params.slug as string));
  }, [params.slug]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setVisibleElements((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll('[data-animate="true"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const question = useMemo(() => {
    return questions.find((q) => q.id === (params.slug as string));
  }, [params.slug]);

  const previousQuestion = useMemo(() => {
    return currentIndex > 0 ? questions[currentIndex - 1] : null;
  }, [currentIndex]);

  const nextQuestion = useMemo(() => {
    return currentIndex < questions.length - 1 ? questions[currentIndex + 1] : null;
  }, [currentIndex]);

  if (currentIndex === -1 || !question) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <div className="bg-white pb-8 pt-20 lg:pt-24">
        <div
          id="header-section"
          data-animate="true"
          className={`mx-auto max-w-7xl px-4 py-12 transition-all duration-1000 sm:px-6 lg:px-8 ${
            visibleElements.has("header-section")
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Appify Intelligence - your go-to experts for everything AI.
          </h1>
          <p className="max-w-5xl text-lg leading-relaxed text-gray-700">
            At Appify Intelligence, we make artificial intelligence simple, strategic, and
            accessible. Whether you&apos;re exploring automation, data insights, or
            generative AI, our experts have the answers to every question - helping you
            understand, implement, and grow with AI that truly transforms your business.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            id="question-card"
            data-animate="true"
            className={`relative transition-all duration-1000 ${
              visibleElements.has("question-card")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {previousQuestion && (
              <Link
                href={`/expertise/${previousQuestion.id}`}
                className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 rounded-full bg-white p-3 shadow-md transition-all hover:bg-gray-50 lg:-translate-x-16"
                aria-label="Previous question"
              >
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </Link>
            )}

            <div className="rounded-[8px] bg-white px-8 py-10 shadow-sm lg:px-12 lg:py-12">
              <h2 className="mb-4 text-2xl font-normal text-primary sm:text-3xl lg:text-4xl">
                {question.question}
              </h2>
              <div className="mb-6 h-px bg-gray-200" />
              <p className="whitespace-pre-line text-base leading-relaxed text-gray-900 sm:text-lg">
                {question.answer}
              </p>
            </div>

            {nextQuestion && (
              <Link
                href={`/expertise/${nextQuestion.id}`}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 rounded-full bg-white p-3 shadow-md transition-all hover:bg-gray-50 lg:translate-x-16"
                aria-label="Next question"
              >
                <svg
                  className="h-6 w-6 text-gray-600"
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
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            id="cta-section"
            data-animate="true"
            className={`group relative rounded-3xl bg-gray-50 p-12 shadow-2xl transition-all duration-1000 ${
              visibleElements.has("cta-section")
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
            }`}
          >
            <div className="absolute left-1/2 top-0 h-[5px] w-16 -translate-x-1/2 rounded-t-3xl bg-[#FFB300] transition-all duration-500 group-hover:left-0 group-hover:w-full group-hover:translate-x-0"></div>
            <div className="absolute right-0 top-1/2 h-16 w-[5px] -translate-y-1/2 rounded-r-3xl bg-[#FFB300] transition-all duration-500 group-hover:top-0 group-hover:h-full group-hover:translate-y-0"></div>
            <div className="absolute bottom-0 left-1/2 h-[5px] w-16 -translate-x-1/2 rounded-b-3xl bg-[#FFB300] transition-all duration-500 group-hover:left-0 group-hover:w-full group-hover:translate-x-0"></div>
            <div className="absolute left-0 top-1/2 h-16 w-[5px] -translate-y-1/2 rounded-l-3xl bg-[#FFB300] transition-all duration-500 group-hover:top-0 group-hover:h-full group-hover:translate-y-0"></div>
            <div className="relative z-10">
              <h2 className="mb-8 text-center text-2xl text-4xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                Let&apos;s start your AI journey
              </h2>

              <div className="relative mb-12 text-center">
                <p className="text-base text-gray-700 sm:text-lg">
                  Apply here for a free 30-minute consultation and discover how Appify
                  Intelligence can accelerate your profitability.
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
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: question.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: question.answer,
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
