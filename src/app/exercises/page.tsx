import { Suspense } from "react";
import { getAllSummaries } from "@/lib/exercises";
import ExercisesBrowser from "@/components/ExercisesBrowser";

export const metadata = {
  title: "Exercises — FitBase",
  description: "Browse and filter through our complete exercise library.",
};

export default function ExercisesPage() {
  const summaries = getAllSummaries();

  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="h-32 animate-pulse rounded-xl bg-[var(--background-secondary)]" />
        </div>
      }
    >
      <ExercisesBrowser summaries={summaries} />
    </Suspense>
  );
}
