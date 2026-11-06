import { useSite } from "../lib/site";
import { Reveal } from "./Reveal";

export function Manifesto() {
  const { t } = useSite();
  const { manifesto } = t;

  return (
    <section className="border-t border-lt-border">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-24 text-center md:py-32">
        <Reveal>
          <span
            aria-hidden="true"
            className="block select-none font-sans text-[72px] leading-[0.5] text-lt-border"
          >
            &ldquo;
          </span>
        </Reveal>

        <Reveal delay={80}>
          <blockquote className="mx-auto mt-6 max-w-[26ch] text-balance text-[clamp(1.45rem,3.4vw,2.6rem)] leading-[1.25] tracking-[-0.03em] sm:max-w-[34ch]">
            {manifesto.quote}
          </blockquote>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 flex flex-col items-center gap-1.5">
            <span className="text-[13.5px] font-medium tracking-tight">
              {manifesto.author}
            </span>
            <span className="text-[12.5px] text-lt-muted">{manifesto.role}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
