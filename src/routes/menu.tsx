import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroInterior from "@/assets/illyrian-interior.jpg";
import brioFrutti from "@/assets/brioche-frutti.jpg";
import brioCrema from "@/assets/brioche-crema.jpg";
import brioCioccolato from "@/assets/brioche-cioccolato.jpg";
import brioAlbicocca from "@/assets/brioche-albicocca.jpg";
import brioPistacchio from "@/assets/brioche-pistacchio.jpg";
import juiceOrange from "@/assets/juice-orange.jpg";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — Illyrian Lounge Bar Franciacorta" },
      {
        name: "description",
        content:
          "Caffetteria, brioche artigianali, gelato, cocktail bar, spremute fresche, vini e birre di Franciacorta. Il menu di Illyrian Lounge Bar a Rovato.",
      },
      { property: "og:title", content: "Menu — Illyrian Lounge Bar" },
      {
        property: "og:description",
        content: "Caffetteria, brioche artigianali, cocktail, spremute e vini della Franciacorta.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const caffetteria = [
  "Espresso",
  "Espresso doppio",
  "Caffè macchiato",
  "Cappuccino",
  "Caffè latte",
  "Latte macchiato",
  "Marocchino",
  "Caffè corretto",
  "Caffè d'orzo",
  "Caffè decaffeinato",
  "Ginseng",
  "Caffè shakerato",
  "Caffè americano",
  "Moka",
];

const brioche = [
  { name: "Frutti di Bosco", desc: "Confettura di more, mirtilli e lamponi", img: brioFrutti },
  { name: "Crema", desc: "Crema pasticcera alla vaniglia", img: brioCrema },
  { name: "Cioccolato", desc: "Cuore fondente di cioccolato", img: brioCioccolato },
  { name: "Albicocca", desc: "Confettura di albicocche del territorio", img: brioAlbicocca },
  { name: "Pistacchio", desc: "Crema di pistacchio siciliano", img: brioPistacchio },
];

const cocktails = [
  { name: "Illyrian Spritz", desc: "Franciacorta, Aperol, agrumi, soda" },
  { name: "Negroni", desc: "Gin, Vermouth rosso, Campari" },
  { name: "Old Fashioned", desc: "Bourbon, zucchero, angostura, twist d'arancia" },
  { name: "Aperol Spritz", desc: "Aperol, Prosecco, soda" },
  { name: "Hugo", desc: "Prosecco, sciroppo di sambuco, menta, lime" },
  { name: "Moscow Mule", desc: "Vodka, ginger beer, lime" },
  { name: "Gin Tonic Botanico", desc: "Gin premium, tonica, botaniche" },
  { name: "Mojito", desc: "Rum, menta, lime, zucchero di canna" },
  { name: "Margarita", desc: "Tequila, triple sec, lime" },
  { name: "Americano", desc: "Campari, Vermouth rosso, soda" },
];

const juices = [
  { name: "Spremuta d'Arancia", desc: "Arance fresche spremute al momento" },
  { name: "ACE", desc: "Arancia, carota, limone" },
  { name: "Pompelmo Rosa", desc: "Spremuta fresca di pompelmo" },
  { name: "Estratto Verde", desc: "Mela, sedano, zenzero, limone" },
  { name: "Estratto Rosso", desc: "Barbabietola, carota, arancia" },
  { name: "Ananas & Zenzero", desc: "Estratto fresco energizzante" },
];

const vini = [
  { name: "Franciacorta DOCG Brut", desc: "Bollicine del territorio, metodo classico" },
  { name: "Franciacorta Satèn", desc: "Elegante e cremoso, solo uve bianche" },
  { name: "Franciacorta Rosé", desc: "Fresco, note di piccoli frutti rossi" },
  { name: "Curtefranca Bianco DOC", desc: "Bianco fermo della Franciacorta" },
  { name: "Curtefranca Rosso DOC", desc: "Rosso strutturato del territorio" },
];

const birre = [
  { name: "Birra alla Spina Lager", desc: "Chiara, fresca, in caraffa" },
  { name: "Birra Artigianale IPA", desc: "Luppolata, agrumata" },
  { name: "Weiss", desc: "Birra di frumento non filtrata" },
  { name: "Bottiglie Selezionate", desc: "Italiane e internazionali" },
];

const bibite = [
  "Coca-Cola",
  "Coca-Cola Zero",
  "Fanta",
  "Sprite",
  "Acqua Tonica",
  "Ginger Beer",
  "Chinotto",
  "Acqua Naturale / Frizzante",
];

function MenuPage() {
  return (
    <SiteLayout>
      {/* MENU HERO */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={heroInterior}
          alt="Bancone illuminato di Illyrian Lounge Bar"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[color:var(--illy-bg)]" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <div className="text-[color:var(--illy-gold)] tracking-[0.5em] uppercase text-xs mb-6">
            La nostra selezione
          </div>
          <h1 className="font-display text-white text-4xl md:text-7xl font-semibold">
            Il <span className="italic text-[color:var(--illy-gold)]">Menu</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg">
            Dal risveglio con un caffè perfetto alla sera con i nostri cocktail signature.
          </p>
        </div>
      </section>

      {/* CAFFETTERIA */}
      <Section title="Caffetteria" tag="Il rito del caffè italiano">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {caffetteria.map((c) => (
            <div
              key={c}
              className="illy-card px-5 py-4 text-center text-white/85 hover:text-[color:var(--illy-gold)]"
            >
              {c}
            </div>
          ))}
        </div>
      </Section>

      {/* BRIOCHE */}
      <Section title="Brioche & Pasticceria" tag="Sfoglia dorata, cuore artigianale" dark>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brioche.map((b) => (
            <article key={b.name} className="illy-card overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={b.img}
                  alt={`Brioche al gusto ${b.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-white">{b.name}</h3>
                <p className="text-white/70 mt-2 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* GELATERIA */}
      <Section title="Gelateria" tag="Artigianale, cremoso, quotidiano">
        <div className="illy-card p-10 md:p-14 text-center max-w-3xl mx-auto">
          <p className="font-display italic text-white text-2xl md:text-3xl leading-relaxed">
            Disponibilità di gelato artigianale, gusti classici e creativi,{" "}
            <span className="text-[color:var(--illy-gold)]">anche con panna</span>.
          </p>
        </div>
      </Section>

      {/* COCKTAIL */}
      <Section title="Cocktail Bar" tag="Signature e grandi classici" dark>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 max-w-5xl mx-auto">
          {cocktails.map((c) => (
            <MenuRow key={c.name} name={c.name} desc={c.desc} />
          ))}
        </div>
      </Section>

      {/* SPREMUTE */}
      <Section title="Spremute & Succhi Freschi" tag="Frutta fresca, spremuta al momento">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 border border-[color:var(--illy-gold)]/30" />
            <img
              src={juiceOrange}
              alt="Spremuta d'arancia fresca con schizzi e fette in aria"
              loading="lazy"
              className="relative w-full h-[520px] object-cover"
            />
          </div>
          <div className="space-y-1">
            {juices.map((j) => (
              <MenuRow key={j.name} name={j.name} desc={j.desc} />
            ))}
          </div>
        </div>
      </Section>

      {/* VINI, BIRRE, BIBITE */}
      <Section title="Vini, Birre & Bibite" tag="La Franciacorta nel bicchiere" dark>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <SubList title="Vini di Franciacorta" items={vini} />
          <SubList title="Birre" items={birre} />
          <div>
            <h3 className="font-display text-2xl text-[color:var(--illy-gold)] mb-4">Bibite</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              {bibite.map((b) => (
                <li key={b} className="border-b border-white/10 pb-2">{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Section({
  title,
  tag,
  children,
  dark,
}: {
  title: string;
  tag: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`py-20 md:py-28 px-6 ${dark ? "bg-black" : "bg-[color:var(--illy-bg)]"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-[color:var(--illy-gold)] tracking-[0.4em] uppercase text-xs mb-4">{tag}</div>
          <h2 className="font-display text-white text-3xl md:text-5xl">{title}</h2>
          <div className="mx-auto mt-6 h-px w-20 bg-[color:var(--illy-gold)]" />
        </div>
        {children}
      </div>
    </section>
  );
}

function MenuRow({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-white/10 py-4">
      <div>
        <div className="font-display text-white text-lg">{name}</div>
        <div className="text-white/60 text-sm">{desc}</div>
      </div>
    </div>
  );
}

function SubList({ title, items }: { title: string; items: { name: string; desc: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-2xl text-[color:var(--illy-gold)] mb-4">{title}</h3>
      <div className="space-y-1">
        {items.map((i) => (
          <MenuRow key={i.name} name={i.name} desc={i.desc} />
        ))}
      </div>
    </div>
  );
}
