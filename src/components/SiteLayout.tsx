import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

const WHATSAPP_URL = "https://wa.me/393473941979";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "text-sm tracking-[0.28em] uppercase font-medium transition-colors text-white/85 hover:text-[color:var(--illy-gold)]";
  const activeProps = { className: `${linkClass} !text-[color:var(--illy-gold)]` };

  return (
    <div className="illy-root">
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-black/85 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-gradient-to-b from-black/60 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-display text-xl md:text-2xl tracking-[0.2em] text-white group-hover:text-[color:var(--illy-gold)] transition-colors">
              ILLYRIAN
            </span>
            <span className="hidden sm:inline text-[10px] tracking-[0.35em] text-[color:var(--illy-gold)] uppercase">
              Lounge Bar
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" activeOptions={{ exact: true }} className={linkClass} activeProps={activeProps}>
              Home
            </Link>
            <Link to="/menu" className={linkClass} activeProps={activeProps}>
              Menu
            </Link>
            <Link to="/contatti" className={linkClass} activeProps={activeProps}>
              Contatti
            </Link>
          </nav>
          <button
            aria-label="Menu"
            className="md:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-6 h-px bg-white mb-1.5" />
            <span className="block w-6 h-px bg-white mb-1.5" />
            <span className="block w-4 h-px bg-white ml-auto" />
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-black/95 border-t border-white/5">
            <div className="px-6 py-6 flex flex-col gap-5">
              {[
                { to: "/" as const, label: "Home" },
                { to: "/menu" as const, label: "Menu" },
                { to: "/contatti" as const, label: "Contatti" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={linkClass}
                  activeProps={activeProps}
                  activeOptions={l.to === "/" ? { exact: true } : undefined}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-black text-white/60 border-t border-white/5 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl tracking-[0.2em] text-white">ILLYRIAN</div>
            <div className="text-[10px] tracking-[0.35em] text-[color:var(--illy-gold)] uppercase mt-1">
              Lounge Bar — Franciacorta
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Un rifugio elegante nel verde del Parco Aldo Moro di Rovato, tra caffè, cocktail e gelato artigianale.
            </p>
          </div>
          <div className="text-sm space-y-2">
            <div className="text-white uppercase tracking-[0.25em] text-xs mb-3">Dove siamo</div>
            <div>Largo Cattaneo, Parco Aldo Moro</div>
            <div>25038 Rovato (BS) — Franciacorta</div>
          </div>
          <div className="text-sm space-y-2">
            <div className="text-white uppercase tracking-[0.25em] text-xs mb-3">Contatti</div>
            <div>Tel / WhatsApp: <a href="tel:+393473941979" className="hover:text-[color:var(--illy-gold)]">+39 347 3941979</a></div>
            <div>Aperti tutti i giorni · 7:00 — 24:00</div>
          </div>
        </div>
        <div className="border-t border-white/5 py-5 text-center text-xs tracking-[0.25em] uppercase text-white/40">
          © {new Date().getFullYear()} Illyrian Lounge Bar
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        className="illy-whatsapp"
      >
        <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
          <path
            fill="#ffffff"
            d="M19.11 17.42c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.19 3.02.15.19 2.06 3.15 5 4.42.7.3 1.24.48 1.67.62.7.22 1.34.19 1.85.12.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM16.02 5.33h-.01c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.72 1.42 5.34L5 27l5.79-1.52a10.66 10.66 0 0 0 5.23 1.34h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.14-7.58a10.66 10.66 0 0 0-7.57-3.21zm0 19.6h-.01a8.87 8.87 0 0 1-4.53-1.24l-.32-.19-3.44.9.92-3.35-.21-.34a8.9 8.9 0 0 1-1.37-4.77c0-4.92 4-8.92 8.93-8.92 2.38 0 4.63.93 6.31 2.62a8.88 8.88 0 0 1 2.62 6.31c0 4.92-4 8.92-8.9 8.98z"
          />
        </svg>
      </a>
    </div>
  );
}
