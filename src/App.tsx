import { SiteProvider, useSite } from "./lib/site";
import { Nav } from "./components/Nav";
import { LiquidHero } from "./components/LiquidHero";
import { Ticker } from "./components/Ticker";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Process } from "./components/Process";
import { Stats } from "./components/Stats";
import { Manifesto } from "./components/Manifesto";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function Site() {
  const { t, lang } = useSite();
  const { words, subtitle, primary, secondary, proof, proofLabel } = t.hero;

  return (
    <div id="top" className="min-h-screen bg-lt-bg">
      <Nav />
      <main>
        <LiquidHero
          key={lang}
          words={words}
          subtitle={subtitle}
          primary={primary}
          primaryHref={t.products.items[0].href}
          secondary={secondary}
          secondaryHref="#produk"
          proof={proof}
          proofLabel={proofLabel}
        />
        <Ticker />
        <About />
        <Products />
        <Process />
        <Stats />
        <Manifesto />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <SiteProvider>
      <Site />
    </SiteProvider>
  );
}
