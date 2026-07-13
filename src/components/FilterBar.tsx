"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { BODY_PARTS, EQUIPMENT_TYPES, TARGET_MUSCLES } from "@/lib/constants";
import { useLanguage } from "@/components/LanguageProvider";
import { getTerm } from "@/lib/terms";
import GlassSurface from "@/components/GlassSurface";

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t, lang } = useLanguage();

  const current = {
    bodyPart: searchParams.get("bodyPart") || "",
    equipment: searchParams.get("equipment") || "",
    target: searchParams.get("target") || "",
    search: searchParams.get("search") || "",
  };

  const updateFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      params.delete("page");
      router.push(`/exercises?${params.toString()}`);
    },
    [router, searchParams]
  );

  const clearFilters = () => {
    router.push("/exercises");
  };

  const hasFilters = current.bodyPart || current.equipment || current.target || current.search;

  return (
    <div className="space-y-4">
      {/* Search — GlassSurface is a pointer-events-none refraction layer behind
          the transparent input, so native typing still works. */}
      <div className="relative h-11">
        <div className="pointer-events-none absolute inset-0">
          <GlassSurface width="100%" height={44} borderRadius={12} />
        </div>
        <svg
          className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder={t("search_placeholder")}
          defaultValue={current.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          className="absolute inset-0 z-10 w-full rounded-xl bg-transparent py-2.5 pl-10 pr-4 text-sm text-[var(--foreground)] placeholder-[var(--muted)] outline-none"
        />
      </div>

      {/* Filter row — stacked on mobile, horizontal on md+ */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="relative h-11">
          <div className="pointer-events-none absolute inset-0">
            <GlassSurface width="100%" height={44} borderRadius={12} />
          </div>
          <select
            value={current.bodyPart}
            onChange={(e) => updateFilter("bodyPart", e.target.value)}
            className="absolute inset-0 z-10 h-full w-full rounded-xl bg-transparent px-3 text-sm text-[var(--foreground)] outline-none"
          >
            <option value="">{t("all_body_parts")}</option>
            {BODY_PARTS.map((bp) => (
              <option key={bp} value={bp}>
                {getTerm(bp, lang)}
              </option>
            ))}
          </select>
        </div>

        <div className="relative h-11">
          <div className="pointer-events-none absolute inset-0">
            <GlassSurface width="100%" height={44} borderRadius={12} />
          </div>
          <select
            value={current.equipment}
            onChange={(e) => updateFilter("equipment", e.target.value)}
            className="absolute inset-0 z-10 h-full w-full rounded-xl bg-transparent px-3 text-sm text-[var(--foreground)] outline-none"
          >
            <option value="">{t("all_equipment")}</option>
            {EQUIPMENT_TYPES.map((eq) => (
              <option key={eq} value={eq}>
                {getTerm(eq, lang)}
              </option>
            ))}
          </select>
        </div>

        <div className="relative h-11">
          <div className="pointer-events-none absolute inset-0">
            <GlassSurface width="100%" height={44} borderRadius={12} />
          </div>
          <select
            value={current.target}
            onChange={(e) => updateFilter("target", e.target.value)}
            className="absolute inset-0 z-10 h-full w-full rounded-xl bg-transparent px-3 text-sm text-[var(--foreground)] outline-none"
          >
            <option value="">{t("all_targets")}</option>
            {TARGET_MUSCLES.map((m) => (
              <option key={m} value={m}>
                {getTerm(m, lang)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Clear button */}
      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-sm text-[var(--accent)] transition-colors hover:text-[var(--accent-light)]"
        >
          {t("clear_filters")}
        </button>
      )}
    </div>
  );
}
