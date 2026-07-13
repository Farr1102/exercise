"use client";

import Link from "next/link";
import type { ExerciseSummary } from "@/lib/exercises";
import CategoryCard from "@/components/CategoryCard";
import ExerciseCard from "@/components/ExerciseCard";
import GlassSurface from "@/components/GlassSurface";
import { useLanguage } from "@/components/LanguageProvider";
import { getTerm } from "@/lib/terms";

const EQUIPMENT_TAGS = [
  "body weight",
  "dumbbell",
  "barbell",
  "kettlebell",
  "cable",
  "band",
  "resistance band",
  "medicine ball",
  "stability ball",
];

export default function HomeContent({
  bodyPartCounts,
  featured,
}: {
  bodyPartCounts: Record<string, number>;
  featured: ExerciseSummary[];
}) {
  const { t, lang } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 py-16 text-center sm:py-24">
        <h1 className="text-balance text-4xl font-bold sm:text-5xl lg:text-6xl">
          {t("hero_title_1")}{" "}
          <span className="text-[var(--accent)]">{t("hero_title_accent")}</span>{" "}
          {t("hero_title_2")}
        </h1>
        <p className="max-w-2xl text-base text-[var(--muted)] sm:text-lg">
          {t("hero_subtitle")}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/exercises" className="press inline-block" aria-label={t("hero_browse_all")}>
            <GlassSurface
              width={200}
              height={52}
              borderRadius={14}
              backgroundOpacity={0.18}
              className="font-semibold text-[var(--accent)]"
            >
              {t("hero_browse_all")}
            </GlassSurface>
          </Link>
          <Link href="#categories" className="press inline-block" aria-label={t("hero_browse_body")}>
            <GlassSurface
              width={200}
              height={52}
              borderRadius={14}
              className="font-semibold text-[var(--foreground)]"
            >
              {t("hero_browse_body")}
            </GlassSurface>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-12">
        <h2 className="mb-6 text-2xl font-bold">{t("body_parts")}</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Object.entries(bodyPartCounts).map(([part, count]) => (
            <CategoryCard key={part} bodyPart={part} count={count} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{t("featured")}</h2>
          <Link
            href="/exercises"
            className="text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-light)]"
          >
            {t("view_all")} &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {featured.map((ex) => (
            <ExerciseCard key={ex.id} exercise={ex} />
          ))}
        </div>
      </section>

      {/* Equipment overview */}
      <section className="py-12">
        <h2 className="mb-6 text-2xl font-bold">{t("train_any_way")}</h2>
        <div className="flex flex-wrap gap-2">
          {EQUIPMENT_TAGS.map((eq) => (
            <Link
              key={eq}
              href={`/exercises?equipment=${encodeURIComponent(eq)}`}
              className="press inline-block"
            >
              <GlassSurface
                width="auto"
                height={40}
                borderRadius={999}
                className="px-4 text-sm text-[var(--foreground)]"
              >
                {getTerm(eq, lang)}
              </GlassSurface>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
