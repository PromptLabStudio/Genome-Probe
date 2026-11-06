import { useSite } from "../lib/site";
import { Reveal } from "./Reveal";
import { ArrowUpRight, SectionLabel } from "./ui";

export function Process() {
  const { t } = useSite();
  const { process } = t;

  return (
    <section
      id="cara-kerja"
      className="scroll-mt-24 border-t border-lt-border bg-lt-surface/50"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel>{process.label}</SectionLabel>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="max-w-[24ch] text-[clamp(1.7rem,3.6vw,2.9rem)] leading-[1.14] tracking-[-0.03em]">
                {process.heading}
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 border-b border-lt-border">
          {process.items.map((item, index) => (
            <Reveal key={item.no} delay={index * 60}>
              <div className="group -mx-3 grid gap-3 rounded-xl border-t border-lt-border px-3 py-8 transition-colors duration-500 hover:bg-lt-bg/60 lg:-mx-5 lg:grid-cols-12 lg:items-baseline lg:gap-6 lg:px-5">
                <span className="font-mono text-[11px] tracking-[0.14em] text-lt-muted lg:col-span-1">
                  {item.no}
                </span>

                <h3 className="hover-thick text-[clamp(1.35rem,2.2vw,1.75rem)] tracking-[-0.025em] lg:col-span-4">
                  {item.title}
                </h3>

                <div className="lg:col-span-6">
                  <p className="max-w-[46ch] text-[13.5px] leading-relaxed text-lt-muted">
                    {item.desc}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-[0.14em] text-lt-muted/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden justify-end lg:col-span-1 lg:flex">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-lt-border text-lt-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-lt-fg/30 group-hover:text-lt-fg">
                    <ArrowUpRight />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
