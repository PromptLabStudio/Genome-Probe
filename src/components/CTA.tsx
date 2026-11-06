import { useSite } from "../lib/site";
import { Reveal } from "./Reveal";
import { ArrowUpRight, SectionLabel } from "./ui";

export function CTA() {
  const { t } = useSite();
  const { cta } = t;

  return (
    <section
      id="kontak"
      className="relative scroll-mt-24 overflow-hidden border-t border-lt-border"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(60%_80%_at_80%_20%,var(--lt-surface)_0%,transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-24 md:py-36 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel>{cta.label}</SectionLabel>
          </div>

          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[1.02] tracking-[-0.045em]">
                {cta.words.map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    className="hover-thick mr-[0.2em] inline-block"
                  >
                    {word}
                  </span>
                ))}
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-7 max-w-[46ch] text-[14.5px] leading-relaxed text-lt-muted">
                {cta.body}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={`mailto:${cta.button}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-lt-accent px-7 py-4 text-[14.5px] font-medium text-lt-accent-foreground transition-all duration-300 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
                >
                  {cta.button}
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <p className="text-[12.5px] text-lt-muted">{cta.note}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
