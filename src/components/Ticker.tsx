import { useSite } from "../lib/site";

export function Ticker() {
  const { t } = useSite();

  return (
    <section className="border-y border-lt-border">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-5 px-6 py-7 md:flex-row md:items-center md:gap-10 lg:px-10">
        <p className="shrink-0 text-[10.5px] uppercase tracking-[0.18em] text-lt-muted">
          {t.ticker.label}
        </p>

        <div className="marquee relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee-track flex w-max">
            {[0, 1].map((set) => (
              <div
                key={set}
                className="flex items-center gap-12 pr-12"
                aria-hidden={set === 1 ? true : undefined}
              >
                {t.ticker.items.map((name) => (
                  <span
                    key={`${set}-${name}`}
                    className="whitespace-nowrap text-[17px] tracking-[0.06em] text-lt-fg/40 transition-colors duration-300 hover:text-lt-fg/70"
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
