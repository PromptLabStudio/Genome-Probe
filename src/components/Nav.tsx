import { useEffect, useState } from "react";
import { useSite } from "../lib/site";
import type { Lang } from "../content";

const LANGS: Lang[] = ["id", "en"];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Nav() {
  const { t, lang, setLang, theme, toggleTheme } = useSite();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const links = [
    { href: "#tentang", label: t.nav.about },
    { href: "#produk", label: t.nav.products },
    { href: "#cara-kerja", label: t.nav.process },
    { href: "#kontak", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-lt-border bg-lt-bg/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-6 md:h-20 lg:px-10">
          <a
            href="#top"
            className="group flex items-baseline gap-1.5"
            aria-label="PromptLab Studios"
          >
            <span className="text-[12.5px] font-medium tracking-[0.16em] sm:text-[15px] sm:tracking-[0.22em]">
              PROMPTLAB
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-lt-fg transition-transform duration-300 group-hover:scale-125" />
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover-thick text-[13.5px] text-lt-muted hover:text-lt-fg"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center rounded-full border border-lt-border p-0.5"
              role="group"
              aria-label={t.nav.langLabel}
            >
              {LANGS.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  className={`rounded-full px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                    lang === code
                      ? "bg-lt-fg text-lt-bg"
                      : "text-lt-muted hover:text-lt-fg"
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t.nav.themeLabel}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-lt-border text-lt-fg/70 transition-colors duration-300 hover:border-lt-border-hover hover:text-lt-fg"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              href={t.products.items[0].href}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden items-center gap-1.5 rounded-full bg-lt-accent px-5 py-2.5 text-[13px] font-medium text-lt-accent-foreground transition-all duration-300 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] lg:inline-flex"
            >
              {t.nav.cta}
              <ArrowIcon />
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.nav.menu}
              aria-expanded={open}
              className="flex h-8 items-center gap-1.5 rounded-full border border-lt-border px-3 text-[10.5px] font-medium uppercase tracking-[0.12em] text-lt-fg/70 md:hidden"
            >
              <span className="flex flex-col gap-[3px]" aria-hidden="true">
                <span className="block h-px w-3 bg-current" />
                <span className="block h-px w-3 bg-current" />
              </span>
              {t.nav.menu}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-lt-bg md:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <span className="text-[15px] font-medium tracking-[0.22em]">
              PROMPTLAB
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.nav.close}
              className="flex h-9 items-center rounded-full border border-lt-border px-4 text-[11px] uppercase tracking-[0.12em] text-lt-fg/70"
            >
              {t.nav.close}
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Mobile">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-lt-border py-4 text-[28px] font-medium tracking-tight"
              >
                <span className="font-mono text-[11px] text-lt-muted">
                  0{index + 1}
                </span>
                {link.label}
              </a>
            ))}
            <a
              href={t.products.items[0].href}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-lt-accent px-6 py-3 text-[14px] font-medium text-lt-accent-foreground"
            >
              {t.nav.cta}
              <ArrowIcon />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
