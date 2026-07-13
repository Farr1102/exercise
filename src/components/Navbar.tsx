"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav_home") },
    { href: "/exercises", label: t("nav_exercises") },
  ];

  return (
    <nav className="glass sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="press flex items-center gap-2 text-xl font-bold tracking-tight"
        >
          <span className="text-[var(--accent)]">💪</span>
          <span>FitBase</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[var(--accent)] ${
                pathname === link.href
                  ? "text-[var(--accent)]"
                  : "text-[var(--muted)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <LanguageSwitcher />
          <button
            className="p-2 text-[var(--muted)] hover:text-[var(--foreground)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[var(--border)] px-4 py-3 sm:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors hover:text-[var(--accent)] ${
                pathname === link.href
                  ? "text-[var(--accent)]"
                  : "text-[var(--muted)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
