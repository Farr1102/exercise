"use client";

import Link from "next/link";
import type { Exercise } from "@/lib/exercises";
import { useLanguage } from "@/components/LanguageProvider";
import { DEFAULT_LANG } from "@/lib/i18n";
import { getTerm } from "@/lib/terms";
import { translateExerciseName } from "@/lib/nameTerms";

export default function ExerciseDetail({ exercise }: { exercise: Exercise }) {
  const { t, lang } = useLanguage();
  const displayName = translateExerciseName(exercise.name, lang);

  const steps =
    exercise.instruction_steps[lang] ||
    exercise.instruction_steps[DEFAULT_LANG] ||
    [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--accent)]">
          {t("nav_home")}
        </Link>
        <span className="mx-2">/</span>
        <Link href="/exercises" className="hover:text-[var(--accent)]">
          {t("nav_exercises")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--foreground)]">{displayName}</span>
      </nav>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Media — opaque video, so a CSS glass frame (not GlassSurface: its
            refraction needs a see-through surface over the background). */}
        <div className="glass-card overflow-hidden rounded-2xl p-1.5 md:sticky md:top-20 md:self-start">
          <video
            src={`/${exercise.video_url}`}
            poster={`/${exercise.image}`}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{displayName}</h1>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-lg bg-[var(--accent)]/10 px-3 py-1 text-sm text-[var(--accent)]">
              {getTerm(exercise.body_part, lang)}
            </span>
            <span className="rounded-lg bg-[var(--surface-subtle)] px-3 py-1 text-sm text-[var(--muted)]">
              {getTerm(exercise.equipment, lang)}
            </span>
            <span className="rounded-lg bg-[var(--surface-subtle)] px-3 py-1 text-sm text-[var(--muted)]">
              {getTerm(exercise.target, lang)}
            </span>
          </div>

          <div>
            <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              {t("primary_muscle")}
            </h2>
            <p>{getTerm(exercise.muscle_group, lang)}</p>
          </div>

          {exercise.secondary_muscles.length > 0 && (
            <div>
              <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                {t("secondary_muscles")}
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {exercise.secondary_muscles.map((m) => (
                  <span
                    key={m}
                    className="rounded-md bg-[var(--surface-subtle)] px-2.5 py-0.5 text-sm text-[var(--muted)]"
                  >
                    {getTerm(m, lang)}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              {t("instructions")}
            </h2>
            <ol className="space-y-3">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10 text-xs font-bold text-[var(--accent)]">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-6 text-[var(--foreground)]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-2 text-xs text-[var(--muted)]">{exercise.attribution}</p>
        </div>
      </div>
    </div>
  );
}
