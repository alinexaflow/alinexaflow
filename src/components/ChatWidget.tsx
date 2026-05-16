import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Lang = "EN" | "IT" | "ES" | "FR" | "DE" | "AR" | "ZH";

const greetings: Record<Lang, string> = {
  EN: "Hi! I'm Ali's assistant. Ask me about pricing, services or how to get in touch.",
  IT: "Ciao! Sono l'assistente di Ali. Chiedimi di prezzi, servizi o come metterti in contatto.",
  ES: "¡Hola! Soy el asistente de Ali. Pregúntame sobre precios, servicios o cómo contactar.",
  FR: "Salut! Je suis l'assistant d'Ali. Demandez-moi les tarifs, services ou contact.",
  DE: "Hallo! Ich bin Alis Assistent. Frag mich nach Preisen, Leistungen oder Kontakt.",
  AR: "مرحبًا! أنا مساعد علي. اسألني عن الأسعار أو الخدمات أو طرق التواصل.",
  ZH: "你好！我是 Ali 的助理。可以询问价格、服务或联系方式。",
};

const replies: Record<Lang, { pricing: string; services: string; contact: string; fallback: string; placeholder: string }> = {
  EN: {
    pricing: "Packages start at €100 (Base), €250 (Standard) and €450 (Premium). Delivery in 3–7 days.",
    services: "Web Development, AI Assistants, Business Automation and Data Collection.",
    contact: "WhatsApp: +39 327 327 1978 · Email: worldwithai33@gmail.com",
    fallback: "Try asking about 'pricing', 'services' or 'contact'.",
    placeholder: "Type a message…",
  },
  IT: {
    pricing: "I pacchetti partono da €100 (Base), €250 (Standard) e €450 (Premium). Consegna in 3–7 giorni.",
    services: "Sviluppo Web, Assistenti AI, Automazione Aziendale e Raccolta Dati.",
    contact: "WhatsApp: +39 327 327 1978 · Email: worldwithai33@gmail.com",
    fallback: "Prova con 'prezzi', 'servizi' o 'contatto'.",
    placeholder: "Scrivi un messaggio…",
  },
  ES: {
    pricing: "Paquetes desde €100 (Base), €250 (Estándar) y €450 (Premium). Entrega 3–7 días.",
    services: "Desarrollo Web, Asistentes IA, Automatización y Recolección de Datos.",
    contact: "WhatsApp: +39 327 327 1978 · Email: worldwithai33@gmail.com",
    fallback: "Pregunta por 'precios', 'servicios' o 'contacto'.",
    placeholder: "Escribe un mensaje…",
  },
  FR: {
    pricing: "Forfaits à partir de €100 (Base), €250 (Standard) et €450 (Premium). Livraison 3–7 jours.",
    services: "Développement Web, Assistants IA, Automatisation et Collecte de Données.",
    contact: "WhatsApp: +39 327 327 1978 · Email: worldwithai33@gmail.com",
    fallback: "Essayez 'tarifs', 'services' ou 'contact'.",
    placeholder: "Écrivez un message…",
  },
  DE: {
    pricing: "Pakete ab €100 (Base), €250 (Standard) und €450 (Premium). Lieferung 3–7 Tage.",
    services: "Webentwicklung, KI-Assistenten, Automatisierung und Datenerfassung.",
    contact: "WhatsApp: +39 327 327 1978 · E-Mail: worldwithai33@gmail.com",
    fallback: "Frag nach 'Preise', 'Leistungen' oder 'Kontakt'.",
    placeholder: "Nachricht schreiben…",
  },
  AR: {
    pricing: "الباقات تبدأ من €100 (أساسية)، €250 (قياسية)، €450 (مميزة). التسليم 3–7 أيام.",
    services: "تطوير الويب، مساعدو الذكاء الاصطناعي، الأتمتة، وجمع البيانات.",
    contact: "واتساب: +39 327 327 1978 · البريد: worldwithai33@gmail.com",
    fallback: "اسأل عن 'الأسعار' أو 'الخدمات' أو 'التواصل'.",
    placeholder: "اكتب رسالة…",
  },
  ZH: {
    pricing: "套餐：基础 €100、标准 €250、高级 €450。3–7 天交付。",
    services: "网站开发、AI 助手、业务自动化、数据采集。",
    contact: "WhatsApp：+39 327 327 1978 · 邮箱：worldwithai33@gmail.com",
    fallback: "可询问“价格”、“服务”或“联系”。",
    placeholder: "输入消息…",
  },
};

const keywords: Record<Lang, { pricing: string[]; services: string[]; contact: string[] }> = {
  EN: { pricing: ["price", "pricing", "cost", "package", "how much"], services: ["service", "what do you do", "offer"], contact: ["contact", "email", "whatsapp", "reach"] },
  IT: { pricing: ["prezz", "costo", "pacchett", "quanto"], services: ["serviz", "offri", "cosa fai"], contact: ["contatt", "email", "whatsapp"] },
  ES: { pricing: ["precio", "coste", "paquete", "cuánto"], services: ["servici", "ofrec"], contact: ["contact", "correo", "whatsapp"] },
  FR: { pricing: ["prix", "tarif", "forfait", "combien"], services: ["servic", "offre"], contact: ["contact", "email", "whatsapp"] },
  DE: { pricing: ["preis", "kosten", "paket", "wie viel"], services: ["leistung", "service", "angebot"], contact: ["kontakt", "email", "whatsapp"] },
  AR: { pricing: ["سعر", "أسعار", "تكلفة", "باقة", "كم"], services: ["خدمة", "خدمات"], contact: ["تواصل", "اتصل", "بريد", "واتساب"] },
  ZH: { pricing: ["价格", "价钱", "套餐", "多少"], services: ["服务", "做什么"], contact: ["联系", "邮箱", "微信", "whatsapp"] },
};

type Msg = { role: "bot" | "user"; text: string };

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("EN");
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "bot", text: greetings.EN }]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMsgs([{ role: "bot", text: greetings[lang] }]);
  }, [lang]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const lower = text.toLowerCase();
    const k = keywords[lang];
    const r = replies[lang];
    let reply = r.fallback;
    if (k.pricing.some((w) => lower.includes(w))) reply = r.pricing;
    else if (k.services.some((w) => lower.includes(w))) reply = r.services;
    else if (k.contact.some((w) => lower.includes(w))) reply = r.contact;
    setMsgs((m) => [...m, { role: "user", text }, { role: "bot", text: reply }]);
    setInput("");
  };

  const langs: Lang[] = ["EN", "IT", "ES", "FR", "DE", "AR", "ZH"];

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_30px_rgba(0,229,255,0.55)] transition-transform hover:scale-110"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div
          dir={lang === "AR" ? "rtl" : "ltr"}
          className="fixed bottom-24 right-6 z-50 flex h-[460px] w-[340px] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-[0_20px_60px_-10px_rgba(0,229,255,0.35)] animate-in fade-in slide-in-from-bottom-4"
        >
          <div className="border-b border-border bg-background/60 p-3">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="font-display text-sm font-semibold">ali.nexaflow</p>
                <p className="text-[11px] text-muted-foreground">AI Assistant · Online</p>
              </div>
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_var(--brand-cyan)]" />
            </div>
            <div className="flex flex-wrap gap-1">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-md px-2 py-0.5 text-[10px] font-medium transition ${
                    lang === l
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/70"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-2 overflow-y-auto p-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                  m.role === "bot"
                    ? "bg-muted text-foreground"
                    : "ml-auto bg-primary text-primary-foreground"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="border-t border-border p-2">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={replies[lang].placeholder}
                className="flex-1 rounded-lg bg-input px-3 py-2 text-sm outline-none ring-primary/40 focus:ring-2"
              />
              <button
                onClick={send}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:opacity-90"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
