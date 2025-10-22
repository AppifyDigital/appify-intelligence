import questions from "@/data/questions.json";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateStaticParams() {
  return questions.map((q) => ({
    slug: q.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const question = questions.find((q) => q.id === slug);

  if (!question) {
    return {
      title: "Question Not Found | Appify Intelligence",
    };
  }

  const description = question.answer.slice(0, 155);

  return {
    title: `${question.question} | Appify Intelligence`,
    description,
    openGraph: {
      title: question.question,
      description: question.answer.slice(0, 200),
      type: "article",
    },
    alternates: {
      canonical: `https://appifyintelligence.com/expertise/${question.id}`,
    },
  };
}

export default function QuestionLayout({ children }: Props) {
  return <>{children}</>;
}
