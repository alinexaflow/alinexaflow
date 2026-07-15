import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroInteriorAsset from "@/assets/illyrian-interior-real.jpg.asset.json";
import cornettoAsset from "@/assets/cornetto-frutti.jpg.asset.json";
import caffeImg from "@/assets/menu-caffe.jpg";
import gelatoImg from "@/assets/menu-gelato.jpg";
import cocktailImg from "@/assets/menu-cocktail.jpg";
import viniImg from "@/assets/menu-vini.jpg";
import birreImg from "@/assets/menu-birre.jpg";
import juiceOrange from "@/assets/juice-orange.jpg";

const heroInterior = heroInteriorAsset.url;
const cornettoImg = cornettoAsset.url;

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — Illyrian Lounge Bar Franciacorta" },
      {
        name: "description",
        content:
          "Caffè, cornetti artigianali, gelato, cocktail bar, vini di Franciacorta, birre e spremute fresche. Il menu di Illyrian Lounge Bar a Rovato.",
      },
      { property: "og:title", content: "Menu — Illyrian Lounge Bar" },
      {
        property: "og:description",
        content: "Caffè, gelato, cocktail, vini, birre, cornetti e spremute della Franciacorta.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

type Category = {
  key: string;
  title: string;
  tag: string;
  img: string;
  items: string[];
};

const categories: Category[] = [
  {
    key: "caffe",
    title: "Caffè",
    tag: "Il rito italiano",
    img: caffeImg,
    items: [
      "Espresso · Espresso doppio",
      "Cappuccino · Caffè latte",
      "Macchiato · Marocchino",
      "Shakerato · Americano · Moka",
      "Ginseng · Orzo · Decaffeinato",
    ],
  },
  {
    key: "cornetti",
    title: "Cornetti",
    tag: "Sfoglia dorata artigianale",
    img: cornettoImg,
    items: [
      "Frutti di bosco",
      "Crema pasticcera",
      "Cioccolato fondente",
      "Albicocca",
      "Pistacchio siciliano",
    ],
  },
  {
    key: "gelateria",
    title: "Gelateria",
    tag: "Cremoso, artigianale",
    img: gelatoImg,
    items: [
      "Gusti classici e creativi",
      "Coppette e coni",
      "Anche con panna fresca",
      "Granite di stagione",
    ],
  },
  {
    key: "cocktail",
    title: "Cocktail",
    tag: "Signature & grandi classici",
    img: cocktailImg,
    items: [
      "Illyrian Spritz",
      "Negroni · Old Fashioned",
      "Aperol Spritz · Hugo",
      "Moscow Mule · Mojito",
      "Gin Tonic Botanico · Margarita",
    ],
  },
  {
    key: "vini",
    title: "Vini",
    tag: "La Franciacorta nel bicchiere",
    img: viniImg,
    items: [
      "Franciacorta DOCG Brut",
      "Franciacorta Satèn",
      "Franciacorta Rosé",
      "Curtefranca Bianco DOC",
      "Curtefranca Rosso DOC",
    ],
  },
  {
    key: "birre",
    title: "Birre",
    tag: "Alla spina & artigianali",
    img: birreImg,
    items: [
      "Lager alla spina",
      "IPA artigianale",
      "Weiss di frumento",
      "Bottiglie selezionate",
    ],
  },
  {
    key: "spremute",
    title: "Spremute",
    tag: "Frutta fresca, spremuta al momento",
    img: juiceOrange,
    items: [
      "Spremuta d'arancia",
      "ACE (arancia, carota, limone)",
      "Pompelmo rosa",
      "Estratto verde · Estratto rosso",
      "Ananas & zenzero",
    ],
  },
];

function MenuPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={heroInterior}
          alt="Interno di Illyrian Lounge Bar con insegna Franciacorta"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[color:var(--illy-bg)]" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <div className="text-[color:var(--illy-gold)] tracking-[0.5em] uppercase text-xs mb-6">
            La nostra selezione
          </div>
          <h1 className="font-display text-[color:var(--illy-text)] text-4xl md:text-7xl font-semibold">
            Il <span className="italic text-[color:var(--illy-gold)]">Menu</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[color:var(--illy-text)]/80 text-lg">
            Dal caffè del mattino al cocktail della sera — tutto artigianale, tutto in un solo luogo.
          </p>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="bg-[color:var(--illy-bg)] py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[color:var(--illy-gold)] tracking-[0.4em] uppercase text-xs mb-4">
              Le categorie
            </div>
            <h2 className="font-display text-[color:var(--illy-text)] text-3xl md:text-5xl">
              Tutto ciò che <span className="italic text-[color:var(--illy-gold)]">Illyrian</span> ti offre
            </h2>
            <div className="mx-auto mt-6 h-px w-20 bg-[color:var(--illy-gold)]" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((c) => (
              <article key={c.key} className="illy-card overflow-hidden group flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={c.img}
                    alt={`${c.title} — Illyrian Lounge Bar`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="text-[color:var(--illy-gold)] tracking-[0.3em] uppercase text-[10px] mb-2">
                    {c.tag}
                  </div>
                  <h3 className="font-display text-[color:var(--illy-text)] text-2xl md:text-3xl mb-4">
                    {c.title}
                  </h3>
                  <ul className="space-y-2 text-[color:var(--illy-text)]/75 text-sm leading-relaxed">
                    {c.items.map((it) => (
                      <li key={it} className="border-b border-white/5 pb-2 last:border-b-0">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[color:var(--illy-text)]/70 max-w-2xl mx-auto">
              Il menu completo con tutti i prezzi è disponibile in locale. Per prenotazioni o informazioni scrivici su WhatsApp.
            </p>
            <a
              href="https://wa.me/393473941979"
              target="_blank"
              rel="noopener noreferrer"
              className="illy-btn illy-btn-gold mt-8"
            >
              Prenota un tavolo
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
