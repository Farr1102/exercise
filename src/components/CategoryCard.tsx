"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getTerm } from "@/lib/terms";

const bodyPartIcons: Record<string, string> = {
  back: "🔙",
  cardio: "❤️",
  chest: "💪",
  "lower arms": "✊",
  "lower legs": "🦵",
  neck: "🧘",
  shoulders: "🏋️",
  "upper arms": "💪",
  "upper legs": "🦵",
  waist: "🧎",
};

export default function CategoryCard({
  bodyPart,
  count,
}: {
  bodyPart: string;
  count: number;
}) {
  const { lang, t } = useLanguage();
  return (
    <Link
      href={`/exercises?bodyPart=${encodeURIComponent(bodyPart)}`}
      className="glass-card press group flex flex-col items-center gap-3 rounded-xl p-6 transition-all hover:border-[var(--accent)]"
    >
      <span className="text-3xl">{bodyPartIcons[bodyPart] || "🏃"}</span>
      <div className="text-center">
        <h3 className="text-sm font-semibold">{getTerm(bodyPart, lang)}</h3>
        <p className="text-xs text-[var(--muted)]">
          {count} {t("count_exercises")}
        </p>
      </div>
    </Link>
  );
}
