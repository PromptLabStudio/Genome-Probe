import { useSite } from "../lib/site";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./ui";

export function About() {
  const { t } = useSite();
  const { about } = t;

  return (
    <section id="tentang" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <SectionLabel>{about.label}</SectionLabel>
            <p className="mt-8 max-w-[220px] text-[13px] leading-relaxed text-lt-muted lg:mt-24">
              {about.note}
            </p>
          </div>

          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="max-w-[20ch] text-[clamp(1.9rem,4.2vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.035em]">
                {about.heading.split(" ").map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    className="hover-thick mr-[0.24em] inline-block"
                  >
                    {word}
                  </span>
                ))}
              </h2>
            </Reveal>

            <div className="mt-10 grid max-w-3xl gap-8 sm:grid-cols-2">
              {about.body.map((paragraph, index) => (
                <Reveal key={index} delay={80 + index * 80}>
                  <p className="text-[14.5px] leading-relaxed text-lt-muted">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-lt-border bg-lt-border sm:grid-cols-3">
                {about.values.map((value) => (
                  <div key={value.title} className="bg-lt-bg p-6">
                    <h3 className="text-[14px] font-medium tracking-tight">
                      {value.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-lt-muted">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
