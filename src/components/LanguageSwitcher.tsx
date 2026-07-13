"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { LANGUAGES, type LangCode } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative">
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as LangCode)}
        aria-label="Select language"
        className="cursor-pointer appearance-none rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] py-1.5 pl-3 pr-8 text-sm text-[var(--foreground)] outline-none transition-colors hover:border-[var(--accent)] focus:border-[var(--accent)]"
      >
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}
