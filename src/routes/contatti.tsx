import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import outdoorAsset from "@/assets/illyrian-outdoor-real.jpg.asset.json";
const outdoorImg = outdoorAsset.url;

export const Route = createFileRoute("/contatti")({
  component: ContattiPage,
  head: () => ({
    meta: [
      { title: "Contatti — Illyrian Lounge Bar Franciacorta · Rovato (BS)" },
      {
        name: "description",
        content:
          "Contatta Illyrian Lounge Bar: Largo Cattaneo, Parco Aldo Moro, Rovato (BS). Tel/WhatsApp +39 347 3941979. Aperti tutti i giorni 7:00 — 24:00.",
      },
      { property: "og:title", content: "Contatti — Illyrian Lounge Bar" },
      {
        property: "og:description",
        content: "Trova Illyrian Lounge Bar nel Parco Aldo Moro di Rovato (Franciacorta).",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function ContattiPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={outdoorImg}
          alt="Lounge esterno di Illyrian con ombrelloni rossi nel Parco Aldo Moro"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[color:var(--illy-bg)]" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <div className="text-[color:var(--illy-gold)] tracking-[0.5em] uppercase text-xs mb-6">
            Vieni a trovarci
          </div>
          <h1 className="font-display text-white text-4xl md:text-7xl font-semibold">
            <span className="italic text-[color:var(--illy-gold)]">Contatti</span> & Prenotazioni
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg">
            Nel cuore del Parco Aldo Moro, Rovato. Aperti tutti i giorni dalle 7:00 alle 24:00.
          </p>
        </div>
      </section>

      {/* INFO GRID */}
      <section className="bg-[color:var(--illy-bg)] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="illy-card p-10">
            <div className="text-[color:var(--illy-gold)] tracking-[0.35em] uppercase text-xs mb-3">
              L'insegna
            </div>
            <h2 className="font-display text-white text-3xl md:text-4xl mb-8">
              Illyrian Lounge Bar
            </h2>

            <InfoRow label="Titolare" value="Petrit Begaj" />
            <InfoRow
              label="Indirizzo"
              value="Largo Cattaneo, Parco Aldo Moro, 25038 Rovato (BS), Franciacorta, Italia"
            />
            <InfoRow
              label="Telefono / WhatsApp"
              value={
                <a href="tel:+393473941979" className="hover:text-[color:var(--illy-gold)]">
                  +39 347 3941979
                </a>
              }
            />
            <InfoRow label="Orari" value="Tutti i giorni · 7:00 — 24:00" />

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://wa.me/393473941979"
                target="_blank"
                rel="noopener noreferrer"
                className="illy-btn illy-btn-gold"
              >
                Prenota su WhatsApp
              </a>
              <a href="tel:+393473941979" className="illy-btn illy-btn-ghost">
                Chiama ora
              </a>
            </div>
          </div>

          <div className="illy-card p-10 flex flex-col">
            <div className="text-[color:var(--illy-gold)] tracking-[0.35em] uppercase text-xs mb-3">
              Un momento autentico
            </div>
            <h3 className="font-display text-white text-2xl md:text-3xl leading-tight mb-6">
              Che tu voglia un caffè al mattino, un pranzo veloce nel verde o un cocktail al tramonto — qui trovi il tuo posto.
            </h3>
            <p className="text-white/70 leading-relaxed">
              Consigliamo di prenotare per il tuo tavolo lounge nel weekend e per le serate estive.
              Scrivici su WhatsApp o chiamaci: rispondiamo velocemente e con piacere.
            </p>
            <div className="mt-auto pt-8 border-t border-white/10 flex items-center gap-4">
              <div className="h-px w-12 bg-[color:var(--illy-gold)]" />
              <span className="font-display italic text-[color:var(--illy-gold)] text-xl">
                Ti aspettiamo, Patrick
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <div className="text-[color:var(--illy-gold)] tracking-[0.4em] uppercase text-xs mb-4">
            Come raggiungerci
          </div>
          <h2 className="font-display text-white text-3xl md:text-5xl">
            Nel verde del <span className="italic text-[color:var(--illy-gold)]">Parco Aldo Moro</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto border border-[color:var(--illy-gold)]/30 overflow-hidden">
          <iframe
            title="Mappa Illyrian Lounge Bar Rovato"
            src="https://www.google.com/maps?q=Largo+Cattaneo,+Parco+Aldo+Moro,+25038+Rovato+BS&output=embed"
            width="100%"
            height="560"
            style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-4 py-4 border-t border-white/10 first:border-t-0">
      <div className="text-[color:var(--illy-gold)] uppercase tracking-[0.25em] text-[10px] pt-1">
        {label}
      </div>
      <div className="text-white/85 text-base leading-relaxed">{value}</div>
    </div>
  );
}
