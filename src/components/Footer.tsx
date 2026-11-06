import { useSite } from "../lib/site";
import { ArrowUpRight } from "./ui";

export function Footer() {
  const { t } = useSite();
  const { footer, nav } = t;

  const links = [
    { href: "#tentang", label: nav.about },
    { href: "#produk", label: nav.products },
    { href: "#cara-kerja", label: nav.process },
    { href: "#kontak", label: nav.contact },
  ];

  const elsewhere = [
    { label: "SwiftLink", href: t.products.items[0].href },
    { label: "Muse Topup", href: t.products.items[1].href },
    { label: "Telegram", href: "https://t.me/jxzvzz" },
    { label: "WhatsApp", href: "https://wa.me/6285156188626" },
  ];

  return (
    <footer className="border-t border-lt-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 pt-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-baseline gap-1.5">
              <span className="text-[15px] font-medium tracking-[0.22em]">
                PROMPTLAB
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-lt-fg" />
            </a>
            <p className="mt-5 max-w-[36ch] text-[13px] leading-relaxed text-lt-muted">
              {footer.tagline}
            </p>
          </div>

          <nav className="md:col-span-2" aria-label="Footer">
            <p className="text-[10.5px] uppercase tracking-[0.18em] text-lt-muted">
              {footer.columns.nav}
            </p>
            <ul className="mt-4 space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-lt-fg/70 transition-colors hover:text-lt-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-[10.5px] uppercase tracking-[0.18em] text-lt-muted">
              {footer.columns.contact}
            </p>
            <ul className="mt-4 space-y-2.5 text-[13px] text-lt-fg/70">
              <li>
                <a
                  href={`mailto:${t.cta.button}`}
                  className="transition-colors hover:text-lt-fg"
                >
                  {t.cta.button}
                </a>
              </li>
              <li className="pt-1 text-[12.5px] leading-relaxed text-lt-muted">
                {footer.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10.5px] uppercase tracking-[0.18em] text-lt-muted">
              {footer.columns.links}
            </p>
            <ul className="mt-4 space-y-2.5">
              {elsewhere.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-1 text-[13px] text-lt-fg/70 transition-colors hover:text-lt-fg"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 overflow-x-clip [container-type:inline-size]">
          <p
            aria-hidden="true"
            style={{
              // Fit the giant wordmark to the container for any brand length.
              fontSize: `min(26cqw, ${(157 / footer.big.length).toFixed(2)}cqw)`,
            }}
            className="select-none whitespace-nowrap font-medium leading-none tracking-[-0.055em] text-lt-fg/[0.055]"
          >
            {footer.big}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-lt-border py-6 text-[11px] text-lt-muted sm:flex-row sm:items-center sm:justify-between">
          <span>{footer.legal}</span>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-lt-fg"
          >
            {t.footer.backToTop}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-3 w-3"
              aria-hidden="true"
            >
              <path
                d="M12 19V5M6 11l6-6 6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
