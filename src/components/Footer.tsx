"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-[var(--border)] py-6 px-4 text-center text-sm text-[var(--muted)]">
      <p>
        {t("footer")} — {new Date().getFullYear()}
      </p>
    </footer>
  );
}
