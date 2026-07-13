"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import type { ExerciseSummary } from "@/lib/exercises";
import ExerciseCard from "@/components/ExerciseCard";
import FilterBar from "@/components/FilterBar";
import { useLanguage } from "@/components/LanguageProvider";

export default function ExercisesBrowser({
  summaries,
}: {
  summaries: ExerciseSummary[];
}) {
  const { t } = useLanguage();
  const searchParams = useSearchParams();

  const bodyPart = searchParams.get("bodyPart") || "";
  const equipment = searchParams.get("equipment") || "";
  const target = searchParams.get("target") || "";
  const search = searchParams.get("search")?.toLowerCase() || "";

  const results = useMemo(
    () =>
      summaries.filter((e) => {
        if (bodyPart && e.body_part !== bodyPart) return false;
        if (equipment && e.equipment !== equipment) return false;
        if (target && e.target !== target) return false;
        if (search && !e.name.toLowerCase().includes(search)) return false;
        return true;
      }),
    [summaries, bodyPart, equipment, target, search]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="mb-2 text-3xl font-bold">{t("exercises_title")}</h1>
      <p className="mb-8 text-[var(--muted)]">{t("exercises_subtitle")}</p>

      <FilterBar />

      <div className="mt-6">
        <p className="mb-4 text-sm text-[var(--muted)]">
          {results.length} {t("exercises_found")}
        </p>
        {results.length === 0 ? (
          <div className="flex flex-col items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] py-16">
            <span className="text-4xl">🔍</span>
            <p className="text-[var(--muted)]">{t("no_results")}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {results.map((ex) => (
              <ExerciseCard key={ex.id} exercise={ex} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
