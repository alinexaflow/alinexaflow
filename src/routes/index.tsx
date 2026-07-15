import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroInteriorAsset from "@/assets/illyrian-interior-real.jpg.asset.json";
import exteriorAsset from "@/assets/illyrian-exterior-real.jpg.asset.json";
import outdoorAsset from "@/assets/illyrian-outdoor-real.jpg.asset.json";

const heroInterior = heroInteriorAsset.url;
const exteriorImg = exteriorAsset.url;
const outdoorImg = outdoorAsset.url;

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Illyrian Lounge Bar — Franciacorta · Rovato (BS)" },
      {
        name: "description",
        content:
          "Illyrian Lounge Bar, elegante rifugio nel Parco Aldo Moro di Rovato (Franciacorta). Colazione, caffè, cocktail e gelato artigianale immersi nel verde.",
      },
      { property: "og:title", content: "Illyrian Lounge Bar — Franciacorta" },
      {
        property: "og:description",
        content:
          "Un rifugio elegante nel verde del parco di Rovato, tra caffè, cocktail e gelato artigianale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={heroInterior}
          alt="Interno di Illyrian Lounge Bar Franciacorta con bancone in marmo e luci calde"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="text-[color:var(--illy-gold)] tracking-[0.5em] uppercase text-xs md:text-sm mb-6">
            Franciacorta · Rovato
          </div>
          <h1 className="font-display text-white text-4xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] max-w-5xl">
            Illyrian Lounge Bar
            <span className="block text-[color:var(--illy-gold)] italic text-2xl md:text-4xl font-normal mt-4">
              Franciacorta
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed">
            Un rifugio elegante nel verde del parco di Rovato, tra caffè, cocktail e gelato artigianale.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="/menu" className="illy-btn illy-btn-gold">Scopri il Menu</a>
            <a href="/contatti" className="illy-btn illy-btn-ghost">Prenota un Tavolo</a>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-[10px] tracking-[0.4em] uppercase">
            Scroll ↓
          </div>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section className="relative bg-[color:var(--illy-bg)] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 border border-[color:var(--illy-gold)]/30 -z-0" />
            <img
              src={exteriorImg}
              alt="Edificio circolare in legno di Illyrian Lounge Bar circondato dagli alberi del parco"
              loading="lazy"
              className="relative z-10 w-full h-[520px] object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="text-[color:var(--illy-gold)] tracking-[0.4em] uppercase text-xs mb-4">
              Chi siamo
            </div>
            <h2 className="font-display text-white text-3xl md:text-5xl leading-tight">
              Il volto di Illyrian: <span className="italic text-[color:var(--illy-gold)]">Patrick</span>
            </h2>
            <div className="mt-8 space-y-5 text-white/75 text-base md:text-lg leading-relaxed">
              <p>
                Ciao, sono <strong className="text-white">Patrick</strong>, il volto di Illyrian Lounge Bar.
                Da sempre appassionato di ospitalità, ho creato questo spazio nel cuore del parco di Rovato
                per offrire un'esperienza autentica.
              </p>
              <p>
                Dalla colazione con le nostre <em>brioche artigianali</em>, al caffè perfetto, fino
                all'aperitivo con i migliori cocktail e gelati cremosi. Vi aspetto per farvi vivere un
                momento di puro relax immerso nel verde.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="h-px w-16 bg-[color:var(--illy-gold)]" />
              <span className="text-[color:var(--illy-gold)] italic font-display text-xl">Patrick Begaj</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUTDOOR BANNER */}
      <section
        className="relative h-[70vh] min-h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${outdoorImg})` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="text-[color:var(--illy-gold)] tracking-[0.5em] uppercase text-xs mb-6">
            Il nostro salotto all'aperto
          </div>
          <h2 className="font-display text-white text-3xl md:text-6xl leading-tight">
            Immersi nel verde,<br />
            <span className="italic text-[color:var(--illy-gold)]">sotto gli ombrelloni rossi</span>
          </h2>
          <p className="mt-6 text-white/85 text-lg">
            Divani, poltrone e tavolini nel prato del Parco Aldo Moro: il tuo posto perfetto per una pausa autentica.
          </p>
        </div>
      </section>

      {/* MAPPA */}
      <section className="bg-[color:var(--illy-bg)] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="text-[color:var(--illy-gold)] tracking-[0.4em] uppercase text-xs mb-4">Dove siamo</div>
          <h2 className="font-display text-white text-3xl md:text-5xl">
            Largo Cattaneo, Parco Aldo Moro
          </h2>
          <p className="text-white/70 mt-3">25038 Rovato (BS) — Franciacorta, Italia</p>
        </div>
        <div className="max-w-6xl mx-auto border border-[color:var(--illy-gold)]/30 overflow-hidden">
          <iframe
            title="Mappa Illyrian Lounge Bar Rovato"
            src="https://www.google.com/maps?q=Largo+Cattaneo,+Parco+Aldo+Moro,+25038+Rovato+BS&output=embed"
            width="100%"
            height="480"
            style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
