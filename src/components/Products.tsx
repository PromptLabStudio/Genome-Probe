import { useSite } from "../lib/site";
import { Reveal } from "./Reveal";
import { ArrowRight, ArrowUpRight, SectionLabel } from "./ui";

export function Products() {
  const { t } = useSite();
  const { products } = t;
  const { items, next } = products;

  return (
    <section id="produk" className="scroll-mt-24 border-t border-lt-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel>{products.label}</SectionLabel>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="max-w-[24ch] text-[clamp(1.7rem,3.6vw,2.9rem)] leading-[1.14] tracking-[-0.03em]">
                {products.heading}
              </h2>
            </Reveal>
          </div>
        </div>

        {items.map((product, index) => (
          <Reveal key={product.name} delay={60 + index * 60}>
            <article
              className={`${
                index === 0 ? "mt-14" : "mt-6"
              } overflow-hidden rounded-2xl border border-lt-border bg-lt-surface/40`}
            >
              <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[clamp(2rem,3.4vw,2.8rem)] font-medium leading-none tracking-[-0.04em]">
                      {product.name}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-lt-border px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-lt-muted">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lt-fg/40" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lt-fg/70" />
                      </span>
                      {product.status}
                    </span>
                  </div>

                  <p className="mt-4 max-w-[26ch] text-[clamp(1.05rem,1.6vw,1.3rem)] leading-snug tracking-[-0.015em] text-lt-fg/85">
                    {product.tagline}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-[0.14em] text-lt-muted/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <p className="max-w-[52ch] text-[15px] leading-relaxed text-lt-muted">
                    {product.desc}
                  </p>

                  <div className="mt-8 grid grid-cols-3 border-y border-lt-border">
                    {product.facts.map((fact, factIndex) => (
                      <div
                        key={fact.label}
                        className={`py-5 ${factIndex > 0 ? "border-l border-lt-border pl-3 sm:pl-4" : ""} ${factIndex < 2 ? "pr-3 sm:pr-4" : ""}`}
                      >
                        <p className="whitespace-nowrap text-[15px] font-medium leading-none tracking-[-0.03em] tabular-nums sm:text-[clamp(1.1rem,2vw,1.55rem)]">
                          {fact.value}
                        </p>
                        <p className="mt-2 text-[10.5px] leading-snug text-lt-muted sm:text-[11.5px]">
                          {fact.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={product.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group mt-8 inline-flex items-center gap-2 text-[13.5px] font-medium"
                  >
                    {product.linkLabel}
                    <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal delay={60 + items.length * 60}>
          <div className="mt-6 grid gap-6 rounded-2xl border border-dashed border-lt-border p-6 md:grid-cols-12 md:items-center md:p-8">
            <div className="md:col-span-7">
              <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-lt-muted">
                <span className="h-1 w-1 rounded-full bg-lt-muted/60" />
                {next.title}
              </p>
              <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-lt-muted">
                {next.body}
              </p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <a
                href="#kontak"
                className="group inline-flex items-center gap-2 text-[13px] text-lt-fg/80 transition-colors hover:text-lt-fg"
              >
                {next.linkLabel}
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
