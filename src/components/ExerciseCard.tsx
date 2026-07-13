"use client";

import Link from "next/link";
import type { ExerciseSummary } from "@/lib/exercises";
import { useLanguage } from "@/components/LanguageProvider";
import { getTerm } from "@/lib/terms";
import { translateExerciseName } from "@/lib/nameTerms";

export default function ExerciseCard({ exercise }: { exercise: ExerciseSummary }) {
  const { lang } = useLanguage();
  return (
    <Link
      href={`/exercises/${exercise.id}`}
      className="glass-card press group flex flex-col overflow-hidden rounded-xl transition-all hover:border-[var(--accent)]"
    >
      <div className="relative aspect-square overflow-hidden bg-[var(--background)]">
        <video
          src={`/${exercise.video_url}`}
          poster={`/${exercise.image}`}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2.5 py-0.5 text-xs text-white">
          {getTerm(exercise.body_part, lang)}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <h3 className="line-clamp-1 text-sm font-semibold">{translateExerciseName(exercise.name, lang)}</h3>
        <div className="mt-auto flex flex-wrap gap-1.5">
          <span className="rounded-md bg-[var(--accent)]/10 px-2 py-0.5 text-xs text-[var(--accent)]">
            {getTerm(exercise.target, lang)}
          </span>
          <span className="rounded-md bg-[var(--surface-subtle)] px-2 py-0.5 text-xs text-[var(--muted)]">
            {getTerm(exercise.equipment, lang)}
          </span>
        </div>
      </div>
    </Link>
  );
}
