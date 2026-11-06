import { useSite } from "../lib/site";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./ui";

export function Stats() {
  const { t } = useSite();
  const { stats } = t;

  return (
    <section className="border-t border-lt-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20 md:py-24 lg:px-10">
        <SectionLabel>{stats.label}</SectionLabel>

        <div className="mt-10 grid grid-cols-2 gap-px border-y border-lt-border bg-lt-border md:grid-cols-4">
          {stats.items.map((item, index) => (
            <Reveal key={item.label} delay={index * 70}>
              <div className="h-full bg-lt-bg py-8 pr-6">
                <p className="text-[clamp(2.4rem,4.6vw,3.8rem)] font-medium leading-none tracking-[-0.05em] tabular-nums">
                  {item.value}
                </p>
                <p className="mt-3 text-[12.5px] text-lt-muted">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
