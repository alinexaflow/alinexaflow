import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Code2, Bot, Workflow, Database, MessageCircle, Mail, MapPin,
  Sparkles, ArrowRight, Check, Zap, Globe2, Clock, Infinity as InfinityIcon,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { ChatWidget } from "@/components/ChatWidget";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ali.nexaflow — Web, AI Assistants & Automation · Brescia, Italy" },
      { name: "description", content: "Freelance web development, AI assistants and business automation. Premium digital solutions from Brescia, Italy. Packages from €100." },
      { property: "og:title", content: "ali.nexaflow — Build Smarter. Automate Faster." },
      { property: "og:description", content: "Web, AI assistants and automation crafted in Brescia, Italy." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" },
    ],
  }),
});

const WHATSAPP = "https://wa.me/393273271978";
const EMAIL = "mailto:worldwithai33@gmail.com";

function Index() {
  useReveal();
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      const el = document.getElementById(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Animated background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-secondary/30 blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px] animate-glow-pulse" style={{ animationDelay: "3s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,#060810_75%)]" />
      </div>

      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Why />
      <Pricing />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>ali<span className="text-primary">.</span>nexaflow</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {[
            ["Services", "#services"],
            ["Process", "#process"],
            ["Pricing", "#pricing"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-muted-foreground transition hover:text-foreground">{l}</a>
          ))}
        </div>
        <a href="#contact" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_20px_rgba(0,229,255,0.4)] transition hover:scale-105">
          Get Started
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative px-6 pb-24 pt-40">
      <div className="mx-auto max-w-5xl text-center">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          Available for new projects · Brescia, Italy
        </div>
        <h1 className="reveal mt-8 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
          Build Smarter. <br />
          <span className="text-gradient">Automate Faster.</span>
        </h1>
        <p className="reveal mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Premium web development, AI assistants and business automation
          designed in Europe to help your brand move faster, look sharper and scale smarter.
        </p>
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#pricing" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-[0_0_30px_rgba(0,229,255,0.4)] transition hover:scale-105">
            View Packages <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 font-semibold backdrop-blur transition hover:border-primary/50 hover:text-primary">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: "7+", l: "Languages", i: Globe2 },
    { v: "48h", l: "Delivery", i: Clock },
    { v: "100%", l: "Satisfaction", i: Check },
    { v: "∞", l: "Automations", i: InfinityIcon },
  ];
  return (
    <section className="px-6 pb-24">
      <div className="reveal mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {items.map(({ v, l, i: Icon }) => (
          <div key={l} className="flex flex-col items-center gap-2 bg-card/60 px-4 py-8 text-center backdrop-blur">
            <Icon className="h-5 w-5 text-primary" />
            <div className="font-display text-4xl font-bold text-gradient">{v}</div>
            <div className="text-sm text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div className="reveal mx-auto mb-14 max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs uppercase tracking-widest text-primary">
        {tag}
      </div>
      <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Services() {
  const items = [
    { icon: Code2, title: "Web Development", desc: "Fast, responsive sites built with HTML, CSS, JS and Shopify. Pixel-precise and SEO-ready.", tags: ["HTML/CSS/JS", "Shopify", "SEO"] },
    { icon: Bot, title: "AI Assistants", desc: "Custom GPT-4 & Claude chatbots integrated with WhatsApp, websites and your tools.", tags: ["GPT-4", "Claude", "WhatsApp"] },
    { icon: Workflow, title: "Business Automation", desc: "Connect your stack with Make.com, Zapier and custom APIs to automate the repetitive.", tags: ["Make.com", "Zapier", "APIs"] },
    { icon: Database, title: "Data Collection", desc: "Web scraping, data pipelines and API integrations powered by Python.", tags: ["Python", "Scraping", "APIs"] },
  ];
  return (
    <section id="services" className="px-6 py-24">
      <SectionHeader tag="Services" title="Crafted to move your business" sub="Four focused offerings, one outcome: a smarter, faster brand." />
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
        {items.map(({ icon: Icon, title, desc, tags }) => (
          <div key={title} className="reveal card-hover group rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary ring-1 ring-primary/30">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-semibold">{title}</h3>
            <p className="mt-3 text-muted-foreground">{desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Discovery", d: "We define goals, audience and success metrics in a focused call." },
    { n: "02", t: "Proposal", d: "Clear scope, timeline and fixed pricing — no surprises." },
    { n: "03", t: "Build", d: "Design & development with daily updates and rapid feedback loops." },
    { n: "04", t: "Launch", d: "Deploy, train and hand-off. Optional ongoing support." },
  ];
  return (
    <section id="process" className="px-6 py-24">
      <SectionHeader tag="Process" title="From idea to live in days" />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="reveal card-hover relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xl">
            <div className="font-display text-5xl font-bold text-gradient">{s.n}</div>
            <h3 className="mt-3 font-display text-xl font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs uppercase tracking-widest text-primary">
            Why NexaFlow
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            European craft meets <span className="text-gradient">AI expertise</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Based in Brescia, Italy, ali.nexaflow blends precise European design sensibility
            with deep AI and automation know-how. You get a partner that ships fast,
            communicates clearly and treats your business like its own.
          </p>
          <ul className="mt-6 space-y-3">
            {["Fixed pricing, no surprises", "Direct WhatsApp access", "Multilingual delivery", "Built to scale with you"].map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary"><Check className="h-3.5 w-3.5" /></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[420px]">
          {[
            { v: "24/7", l: "AI on duty", c: "top-4 left-4", d: "0s" },
            { v: "3×", l: "Faster delivery", c: "top-32 right-2", d: "1s" },
            { v: "48h", l: "First prototype", c: "bottom-6 left-16", d: "2s" },
          ].map((card) => (
            <div
              key={card.v}
              className={`reveal absolute ${card.c} w-52 animate-float rounded-2xl border border-primary/30 bg-card/80 p-5 backdrop-blur-xl glow-cyan`}
              style={{ animationDelay: card.d }}
            >
              <div className="font-display text-4xl font-bold text-gradient">{card.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{card.l}</div>
            </div>
          ))}
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Base", price: "€100", featured: false,
      feats: ["Single page site", "Mobile responsive", "SEO basics", "Contact form", "WhatsApp button", "3 revisions", "3-day delivery"],
    },
    {
      name: "Standard", price: "€250", featured: true,
      feats: ["Multi-page site", "AI chatbot integration", "CMS / Shopify", "Advanced SEO", "Contact + booking", "5 revisions", "5-day delivery"],
    },
    {
      name: "Premium", price: "€450", featured: false,
      feats: ["Full site + AI assistant", "Automation setup", "Multilingual chatbot", "Data pipeline", "Priority support", "Unlimited revisions", "7-day delivery"],
    },
  ];
  return (
    <section id="pricing" className="px-6 py-24">
      <SectionHeader tag="Pricing" title="Simple packages, premium results" sub="Fixed pricing. Fast delivery. No surprises." />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`reveal card-hover relative flex flex-col rounded-2xl border p-8 backdrop-blur-xl ${
              p.featured
                ? "border-primary/60 bg-gradient-to-b from-primary/10 to-card/80 shadow-[0_0_40px_rgba(0,229,255,0.25)]"
                : "border-border bg-card/60"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-[0_0_20px_rgba(0,229,255,0.5)]">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-display text-5xl font-bold text-gradient">{p.price}</span>
              <span className="text-sm text-muted-foreground">/ project</span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {p.feats.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP} target="_blank" rel="noreferrer"
              className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                p.featured
                  ? "bg-primary text-primary-foreground hover:scale-105 shadow-[0_0_25px_rgba(0,229,255,0.4)]"
                  : "border border-border bg-card/50 hover:border-primary/50 hover:text-primary"
              }`}
            >
              Start {p.name} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const cards = [
    { icon: MessageCircle, label: "WhatsApp", value: "+39 327 327 1978", href: WHATSAPP, external: true },
    { icon: Mail, label: "Email", value: "worldwithai33@gmail.com", href: EMAIL, external: false },
    { icon: MapPin, label: "Location", value: "Brescia, Italy", href: "#", external: false },
  ];
  return (
    <section id="contact" className="px-6 py-24">
      <SectionHeader tag="Contact" title="Let's build something great" sub="Replies within hours — usually faster." />
      <div className="mx-auto mb-10 grid max-w-5xl gap-5 sm:grid-cols-3">
        {cards.map((c) => {
          const Icon = c.icon;
          const Tag = (c.href === "#" ? "div" : "a") as "a" | "div";
          return (
            <Tag
              key={c.label}
              {...(c.href !== "#" ? { href: c.href, ...(c.external ? { target: "_blank", rel: "noreferrer" } : {}) } : {})}
              className="reveal card-hover block rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary"><Icon className="h-5 w-5" /></div>
              <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
              <div className="mt-1 font-display text-lg font-semibold">{c.value}</div>
            </Tag>
          );
        })}
      </div>
      <div className="reveal flex flex-wrap items-center justify-center gap-4">
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-[0_0_30px_rgba(0,229,255,0.4)] transition hover:scale-105">
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </a>
        <a href={EMAIL} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 font-semibold backdrop-blur transition hover:border-primary/50 hover:text-primary">
          <Mail className="h-4 w-4" /> Send an Email
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2 font-display font-semibold text-foreground">
          <Zap className="h-4 w-4 text-primary" />
          ali<span className="text-primary">.</span>nexaflow
        </div>
        <div>© {new Date().getFullYear()} ali.nexaflow. All rights reserved.</div>
        <div className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Brescia, Italy</div>
      </div>
    </footer>
  );
}
