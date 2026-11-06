import { useEffect, useRef } from "react";
import gsap from "gsap";

type LiquidHeroProps = {
  words: string[];
  subtitle: string;
  primary: string;
  primaryHref: string;
  secondary: string;
  secondaryHref: string;
  proof: string;
  proofLabel: string;
};

type CharState = {
  cx: number;
  cy: number;
  weight: number;
  wVel: number;
  scale: number;
  sVel: number;
  ready: boolean;
};

type Particle = {
  x: number;
  y: number;
  size: number;
  age: number;
  maxAge: number;
};

type Wave = {
  x: number;
  y: number;
  radius: number;
  max: number;
};

export function LiquidHero({
  words,
  subtitle,
  primary,
  primaryHref,
  secondary,
  secondaryHref,
  proof,
  proofLabel,
}: LiquidHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const slotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Keep the headline on a single line at every viewport width.
  // The em budget fills the container edge to edge.
  const glyphs = words.join(" ").length;
  const headlineSize = `clamp(2.4rem, ${Math.min(11, 176 / glyphs).toFixed(2)}vw, 9.6rem)`;

  const offsets: number[] = [];
  let running = 0;
  for (const word of words) {
    offsets.push(running);
    running += word.length;
  }

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const h1 = h1Ref.current;
    if (!section || !canvas || !h1) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = charRefs.current;
    const slots = slotRefs.current;
    const root = document.documentElement;

    if (!root.getAttribute("data-theme")) {
      root.setAttribute(
        "data-theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
    }

    const theme = { dark: root.getAttribute("data-theme") === "dark" };
    const themeObserver = new MutationObserver(() => {
      theme.dark = root.getAttribute("data-theme") === "dark";
    });
    themeObserver.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const states: CharState[] = chars.map(() => ({
      cx: 0,
      cy: 0,
      weight: 300,
      wVel: 0,
      scale: 1,
      sVel: 0,
      ready: false,
    }));

    const pointer = { x: -9999, y: -9999, speed: 0, inside: false };
    const particles: Particle[] = [];
    const waves: Wave[] = [];
    let presence = 1;
    let lastParticle = 0;
    let measured = false;
    let width = section.clientWidth;
    let height = section.clientHeight;
    let raf = 0;
    let cancelled = false;

    const resize = () => {
      width = section.clientWidth;
      height = section.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const measurePositions = () => {
      const rect = section.getBoundingClientRect();
      chars.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        states[i].cx = r.left - rect.left + r.width / 2;
        states[i].cy = r.top - rect.top + r.height / 2;
      });
    };

    const measureWidths = () => {
      slots.forEach((el) => {
        if (el) el.style.width = "";
      });
      chars.forEach((el) => {
        if (el) el.style.fontVariationSettings = "'wght' 300";
      });
      // force a reflow so the unweighted widths are readable
      void h1.offsetHeight;

      const widths = slots.map((el) =>
        el ? el.getBoundingClientRect().width : 0,
      );

      slots.forEach((el, i) => {
        if (el) el.style.width = `${widths[i]}px`;
      });
      measured = true;
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      pointer.speed = pointer.inside
        ? Math.hypot(x - pointer.x, y - pointer.y)
        : 0;
      pointer.x = x;
      pointer.y = y;
      pointer.inside = true;
      if (!measured) {
        measureWidths();
        measurePositions();
      }
    };

    const onMouseLeave = () => {
      pointer.inside = false;
    };

    const onClick = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      waves.push({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        radius: 0,
        max: 0.6 * Math.max(width, height),
      });
    };

    const onResize = () => {
      resize();
      if (measured) measureWidths();
      measurePositions();
    };

    const frame = (now: number) => {
      const seconds = now / 1000;
      ctx.clearRect(0, 0, width, height);

      const trail = theme.dark ? [245, 235, 210] : [100, 90, 75];
      const trailAlpha = theme.dark ? 0.055 : 0.045;
      const glow = theme.dark ? [245, 235, 210] : [80, 70, 55];
      const ring = theme.dark ? [200, 190, 170] : [140, 130, 110];

      // cursor trail
      if (pointer.inside && now - lastParticle > 18) {
        lastParticle = now;
        particles.push({
          x: pointer.x,
          y: pointer.y,
          size: Math.max(3, 12 - 0.04 * pointer.speed),
          age: 0,
          maxAge: 45 + 15 * Math.random(),
        });
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age += 1;
        const life = 1 - p.age / p.maxAge;
        if (life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        const size = p.size * (0.5 + 0.5 * life);
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(${trail[0]}, ${trail[1]}, ${trail[2]}, ${life * trailAlpha})`;
        ctx.fill();
      }

      // click shockwaves
      for (let i = waves.length - 1; i >= 0; i--) {
        const wave = waves[i];
        const progress = wave.radius / wave.max;
        const fade = (1 - progress) * (1 - progress);

        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(${ring[0]}, ${ring[1]}, ${ring[2]}, ${0.22 * fade})`;
        ctx.lineWidth = 2.5 * (1 - 0.5 * progress);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(wave.x, wave.y, 0.92 * wave.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(${ring[0]}, ${ring[1]}, ${ring[2]}, ${0.1 * fade})`;
        ctx.lineWidth = 8 * (1 - progress);
        ctx.stroke();

        const force = 1 - wave.radius / wave.max;
        for (const state of states) {
          const distance = Math.abs(
            Math.hypot(state.cx - wave.x, state.cy - wave.y) - wave.radius,
          );
          if (distance < 60) {
            const strength = 1 - distance / 60;
            state.wVel += force * strength * 45;
            state.sVel += force * strength * 0.008;
          }
        }

        wave.radius += 5;
        if (wave.radius > wave.max) waves.splice(i, 1);
      }

      presence += ((pointer.inside ? 0 : 1) - presence) * 0.05;

      for (let i = 0; i < states.length; i++) {
        const state = states[i];
        if (!state.ready) continue;

        let targetWeight = 300;
        let targetScale = 1;

        if (pointer.inside) {
          const distance = Math.hypot(state.cx - pointer.x, state.cy - pointer.y);
          if (distance < 180) {
            const falloff = Math.pow(1 - distance / 180, 2);
            targetWeight = 300 + 550 * falloff;
            targetScale = 1 + 0.12 * falloff;
          }
        }

        // idle breathing so the type never sits completely still
        targetWeight +=
          (0.5 * Math.sin(0.8 * seconds + 0.5 * now) + 0.5) * 20 * presence;

        state.wVel += (targetWeight - state.weight) * 0.035;
        state.wVel *= 0.92;
        state.weight += state.wVel;

        state.sVel += (targetScale - state.scale) * 0.035;
        state.sVel *= 0.92;
        state.scale += state.sVel;

        const el = chars[i];
        if (!el) continue;

        const weight = Math.max(100, Math.min(900, Math.round(state.weight)));
        el.style.fontVariationSettings = `'wght' ${weight}`;
        el.style.transform = `scale(${state.scale.toFixed(4)})`;

        const glowAmount = Math.max(0, (state.weight - 300) / 550);
        el.style.textShadow =
          glowAmount > 0.1
            ? `0 0 ${(30 * glowAmount).toFixed(2)}px rgba(${glow[0]}, ${glow[1]}, ${glow[2]}, ${(0.15 * glowAmount).toFixed(3)})`
            : "none";
      }

      raf = requestAnimationFrame(frame);
    };

    resize();
    requestAnimationFrame(measurePositions);

    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);
    section.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);

    raf = requestAnimationFrame(frame);

    document.fonts.ready.then(() => {
      if (cancelled) return;
      measureWidths();
      measurePositions();
    });

    const tweens: gsap.core.Tween[] = [];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!reduceMotion) {
      tweens.push(
        gsap.fromTo(
          canvas,
          { opacity: 0 },
          { opacity: 1, duration: 2, ease: "power2.inOut" },
        ),
      );

      chars.forEach((el, index) => {
        if (!el) return;
        const isLast = index === chars.length - 1;
        tweens.push(
          gsap.fromTo(
            el,
            { opacity: 0, y: 40, scale: 0.85, filter: "blur(8px)" },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.9,
              ease: "power4.out",
              delay: 0.5 + 0.045 * index,
              onComplete: () => {
                el.style.filter = "";
                states[index].ready = true;
                if (isLast) measurePositions();
              },
            },
          ),
        );
      });
    } else {
      chars.forEach((el, index) => {
        if (!el) return;
        el.style.opacity = "1";
        states[index].ready = true;
      });
      canvas.style.opacity = "1";
    }

    const revealElements = section.querySelectorAll<HTMLElement>("[data-reveal]");
    revealElements.forEach((el, index) => {
      if (reduceMotion) {
        el.style.opacity = "1";
        return;
      }
      tweens.push(
        gsap.fromTo(
          el,
          { opacity: 0, y: 30, scale: 0.94, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
            delay: 0.4 + 0.13 * index,
            onComplete: () => {
              el.style.filter = "";
            },
          },
        ),
      );
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
      section.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      themeObserver.disconnect();
      tweens.forEach((tween) => tween.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label={words.join(" ")}
      className="relative h-screen w-full cursor-default select-none overflow-hidden bg-lt-bg"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 z-0"
      />

      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-6 pt-14 pb-16">
        <h1
          ref={h1Ref}
          aria-label={words.join(" ")}
          className="pointer-events-auto m-0 text-center font-sans text-lt-fg"
          style={{
            fontSize: headlineSize,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          {words.map((word, wordIndex) => (
            <span
              key={`${word}-${wordIndex}`}
              aria-hidden="true"
              className="inline-block"
              style={{
                marginRight:
                  wordIndex < words.length - 1 ? "0.22em" : undefined,
              }}
            >
              {word.split("").map((char, charIndex) => {
                const index = offsets[wordIndex] + charIndex;
                return (
                  <span
                    key={charIndex}
                    ref={(el) => {
                      slotRefs.current[index] = el;
                    }}
                    className="inline-block overflow-visible text-center align-top"
                  >
                    <span
                      ref={(el) => {
                        charRefs.current[index] = el;
                      }}
                      className="inline-block will-change-transform"
                      style={{
                        opacity: 0,
                        fontVariationSettings: "'wght' 300",
                      }}
                    >
                      {char}
                    </span>
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <p
          data-reveal
          className="mt-6 max-w-xl text-center text-[17px] leading-relaxed text-lt-muted/80"
          style={{ opacity: 0 }}
        >
          {subtitle}
        </p>

        <div
          data-reveal
          className="pointer-events-auto mt-9 flex flex-wrap items-center justify-center gap-4"
          style={{ opacity: 0 }}
        >
          <a
            href={primaryHref}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full bg-lt-accent px-8 py-3.5 text-[15px] font-medium text-lt-accent-foreground transition-all duration-300 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
          >
            {primary}
          </a>
          <a
            href={secondaryHref}
            className="rounded-full border border-lt-border bg-lt-surface px-8 py-3.5 text-[15px] font-medium text-lt-fg/70 transition-all duration-300 hover:border-lt-border-hover hover:text-lt-fg"
          >
            {secondary}
          </a>
        </div>

        <div
          data-reveal
          className="mt-9 flex items-center gap-2.5"
          style={{ opacity: 0 }}
        >
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lt-fg/40" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lt-fg/70" />
          </span>
          <p className="text-[12px] text-lt-muted/80">
            <span className="font-medium text-lt-fg/70">{proof}</span>
            <span className="mx-1.5 text-lt-muted/45" aria-hidden="true">
              ·
            </span>
            {proofLabel}
          </p>
        </div>
      </div>
    </section>
  );
}
