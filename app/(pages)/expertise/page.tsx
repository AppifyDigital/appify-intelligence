"use client";

import questions from "@/data/questions.json";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function QuestionsIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const query = searchQuery.toLowerCase();
      return (
        q.question.toLowerCase().includes(query) ||
        q.answer.toLowerCase().includes(query) ||
        q.category.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  const toggleQuestion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <div className="relative overflow-hidden pb-8 pt-20 lg:pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/questions/question-bg.webp"
            alt=""
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 text-left sm:px-6 xl:px-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Appify Intelligence - your go-to experts for everything AI.
          </h1>
          <p className="mb-12 max-w-5xl text-left text-lg leading-relaxed text-gray-700">
            At Appify Intelligence, we make artificial intelligence simple, strategic, and
            accessible. Whether you&apos;re exploring automation, data insights, or
            generative AI, our experts have the answers to every question - helping you
            understand, implement, and grow with AI that truly transforms your business.
          </p>
          <div>
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-20 w-full rounded-lg border-2 border-yellow-400 bg-white px-4 py-3 pl-12 text-lg text-gray-900 placeholder-gray-500 transition-all focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                aria-label="Search questions"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:mt-2 lg:px-8">
        <div className="overflow-hidden rounded-[8px] bg-white shadow-sm">
          {filteredQuestions.length === 0 ? (
            <div className="animate-fadeIn p-12 py-24 text-center">
              <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                No questions found
              </h3>
              <p className="mb-2 text-lg text-gray-600">
                We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-base text-gray-500">Try adjusting your search.</p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-white transition-all hover:opacity-90"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Clear search
                </button>
              )}
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredQuestions.map((q, index) => {
                const isExpanded = expandedId === q.id;
                return (
                  <div
                    key={q.id}
                    className="animate-slideIn border-gray-200"
                    style={{
                      animationDelay: `${index * 30}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    <button
                      onClick={() => toggleQuestion(q.id)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                      aria-expanded={isExpanded}
                    >
                      <span
                        className={`pr-8 text-base font-normal sm:text-lg ${
                          isExpanded ? "text-primary" : "text-gray-900"
                        }`}
                      >
                        {q.question}
                      </span>
                      <svg
                        className={`h-5 w-5 flex-shrink-0 text-gray-600 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? "max-h-[2000px]" : "max-h-0"
                      }`}
                    >
                      <div className="bg-white px-6 pb-6 pt-2">
                        <p className="mb-3 whitespace-pre-line text-base leading-relaxed text-gray-900">
                          {q.answer.slice(0, 200)}
                          {q.answer.length > 200 ? "..." : ""}
                        </p>
                        <div className="flex justify-end">
                          <Link
                            href={`/expertise/${q.id}`}
                            className="text-base font-normal text-primary hover:opacity-70"
                          >
                            View More...
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {filteredQuestions.length > 0 && (
          <p className="mt-4 text-center text-sm text-gray-500 transition-all">
            Showing {filteredQuestions.length} of {questions.length} questions
          </p>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: questions.map((q) => ({
              "@type": "Question",
              name: q.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: q.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
