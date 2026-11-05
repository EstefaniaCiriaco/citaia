import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, CalendarCheck, Bell, HeartHandshake, Users, Clock, TrendingDown, FolderOpen,
  History, CalendarSearch, MessageSquareText, ClipboardPen, LayoutGrid, Radar, Send,
  ListChecks, Sparkles, TrendingUp, Copy, Check, RotateCcw, ChevronDown, Menu, X, Info,
} from "lucide-react";
import salon from "@/assets/salon.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CitaIA — Tus clientes regresan. Tu negocio crece." },
      { name: "description", content: "Inteligencia de clientes para estéticas, barberías y salones: seguimiento, recordatorios y mensajes personalizados." },
      { property: "og:title", content: "CitaIA — Inteligencia de clientes para negocios de servicios" },
      { property: "og:description", content: "Identifica cuándo tus clientes necesitan volver y facilita su regreso." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["inicio", "Inicio"], ["problema", "El problema"], ["solucion", "Nuestra solución"],
  ["como", "Cómo funciona"], ["beneficios", "Beneficios"], ["demo", "Demo"], ["faq", "Preguntas frecuentes"],
] as const;

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2.5 font-extrabold text-paper text-lg tracking-tight">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect x="3" y="6" width="26" height="23" rx="6" stroke="var(--olive-light)" strokeWidth="2" />
        <path d="M3 12h26M10 3v6M22 3v6" stroke="var(--olive-light)" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 20.5l3.5 3.5L21 17" stroke="var(--gold)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Cita<span className="text-olive-light">IA</span>
    </a>
  );
}

function Btn({ href, children, ghost }: { href: string; children: React.ReactNode; ghost?: boolean }) {
  return (
    <a href={href} className={`group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${ghost ? "border border-slate-blue text-paper hover:border-olive-light hover:text-olive-light" : "bg-olive text-paper shadow-[0_10px_30px_-10px_var(--olive)] hover:bg-olive-light hover:text-navy"}`}>
      {children}
    </a>
  );
}

function Tag({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return <span className={`inline-block text-xs font-bold tracking-[0.2em] ${dark ? "text-olive-light" : "text-olive"}`}>{children}</span>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-blue/60 bg-navy/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-6 xl:flex">
          {NAV.map(([id, l]) => <a key={id} href={`#${id}`} className="text-sm font-medium text-haze transition-colors hover:text-olive-light">{l}</a>)}
        </nav>
        <div className="hidden xl:block"><Btn href="#demo">Probar demostración <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Btn></div>
        <button className="text-paper xl:hidden" onClick={() => setOpen(!open)} aria-label="Menú">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-slate-blue bg-navy px-5 py-4 xl:hidden">
          {NAV.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-haze hover:bg-petrol hover:text-olive-light">{l}</a>)}
          <a href="#demo" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-olive px-4 py-3 text-center font-bold text-paper">Probar demostración →</a>
        </nav>
      )}
    </header>
  );
}

function Dashboard() {
  const bars = [38, 52, 45, 64, 58, 76, 70, 88];
  return (
    <div className="relative">
      <div className="absolute -right-4 -top-6 hidden h-[110%] w-[62%] overflow-hidden rounded-3xl lg:block">
        <img src={salon} alt="Salón de belleza moderno" width={1024} height={1280} className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy" />
      </div>
      <div className="relative rounded-2xl border border-slate-blue bg-petrol/95 p-5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur lg:mr-24 lg:mt-10">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm font-bold text-paper">Panel de clientes</div>
          <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-slate-blue" /><span className="h-2.5 w-2.5 rounded-full bg-slate-blue" /><span className="h-2.5 w-2.5 rounded-full bg-olive" /></div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[["Clientes", "248", "+12"], ["Seguimientos", "17", "esta semana"], ["Recurrentes", "68%", "+5%"]].map(([l, v, s]) => (
            <div key={l} className="rounded-xl border border-slate-blue bg-navy/60 p-3">
              <div className="text-[11px] text-haze">{l}</div>
              <div className="text-xl font-extrabold text-paper">{v}</div>
              <div className="text-[10px] font-semibold text-olive-light">{s}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-slate-blue bg-navy/60 p-3">
          <div className="mb-2 text-[11px] text-haze">Regresos por mes</div>
          <div className="flex h-20 items-end gap-2">
            {bars.map((b, i) => <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-olive to-olive-light transition-all hover:opacity-80" style={{ height: `${b}%` }} />)}
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-slate-blue bg-navy/60 p-3">
            <div className="mb-2 text-[11px] text-haze">Actividad reciente</div>
            {["Ana R. · Tinte", "Luis M. · Corte", "Sofía P. · Manicure"].map((a) => (
              <div key={a} className="flex items-center gap-2 py-1 text-[11px] text-mist"><span className="h-1.5 w-1.5 rounded-full bg-olive-light" />{a}</div>
            ))}
          </div>
          <div className="rounded-xl border border-gold/40 bg-navy/60 p-3">
            <div className="mb-2 flex items-center gap-1 text-[11px] text-gold"><Bell className="h-3 w-3" />Pendientes</div>
            {["Carla · hoy", "Diego · mañana", "Mariana · 3 días"].map((a) => <div key={a} className="py-1 text-[11px] text-mist">{a}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-olive/15 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div>
          <Tag dark>SEGUIMIENTO INTELIGENTE DE CLIENTES</Tag>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-paper sm:text-6xl">
            Tus clientes regresan. Tu negocio <span className="text-olive-light">crece.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-haze">
            CitaIA te ayuda a identificar cuándo tus clientes podrían necesitar nuevamente un servicio, organizar su historial y facilitar el seguimiento para que tu negocio no pierda oportunidades de regreso.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="#demo">Probar demostración <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Btn>
            <Btn href="#solucion" ghost>Conocer más</Btn>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[[CalendarCheck, "Seguimiento organizado"], [Bell, "Recordatorios oportunos"], [HeartHandshake, "Clientes más fieles"]].map(([I, t]) => {
              const Icon = I as typeof Bell;
              return <div key={t as string} className="flex items-center gap-3 text-sm font-semibold text-mist"><span className="grid h-10 w-10 place-items-center rounded-xl border border-slate-blue bg-petrol text-olive-light"><Icon className="h-5 w-5" /></span>{t as string}</div>;
            })}
          </div>
        </div>
        <Dashboard />
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, text, light }: { icon: typeof Bell; title: string; text: string; light?: boolean }) {
  return (
    <div className={`group rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${light ? "border-mist bg-paper shadow-[0_20px_40px_-25px_rgba(11,20,32,0.25)] hover:border-olive" : "border-slate-blue bg-navy/50 hover:border-olive hover:shadow-[0_20px_50px_-25px_var(--olive)]"}`}>
      <span className={`grid h-12 w-12 place-items-center rounded-xl transition-colors ${light ? "bg-sage text-olive group-hover:bg-olive group-hover:text-paper" : "border border-slate-blue text-olive-light group-hover:bg-olive group-hover:text-paper"}`}><Icon className="h-6 w-6" strokeWidth={1.6} /></span>
      <h3 className={`mt-5 text-lg font-bold ${light ? "text-navy" : "text-paper"}`}>{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${light ? "text-slate-blue" : "text-haze"}`}>{text}</p>
    </div>
  );
}

function Problem() {
  return (
    <section id="problema" className="bg-petrol py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Tag dark>EL PROBLEMA</Tag>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-paper sm:text-5xl">¿Cuántos clientes dejas de atender por falta de seguimiento?</h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card icon={Users} title="Clientes olvidados" text="Personas satisfechas que no regresan simplemente porque nadie les recordó su siguiente servicio." />
          <Card icon={Clock} title="Tiempo perdido" text="Revisar libretas, chats y agendas para saber a quién contactar consume horas cada semana." />
          <Card icon={TrendingDown} title="Oportunidades perdidas" text="Cada visita que no se agenda es un ingreso que tu negocio deja pasar." />
          <Card icon={FolderOpen} title="Información dispersa" text="Historiales repartidos entre papel, WhatsApp y memoria impiden un seguimiento real." />
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const items = [
    [History, "Historial organizado de clientes", "Cada visita, servicio y preferencia en un solo lugar."],
    [CalendarSearch, "Próximas fechas de seguimiento", "Identifica cuándo conviene volver a contactar a cada cliente."],
    [MessageSquareText, "Mensajes sugeridos", "Textos personalizados listos para enviar en segundos."],
  ] as const;
  return (
    <section id="solucion" className="bg-paper py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <Tag>NUESTRA SOLUCIÓN</Tag>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-5xl">Un seguimiento más inteligente para tu negocio.</h2>
          <div className="mt-10 space-y-4">
            {items.map(([Icon, t, d]) => (
              <div key={t} className="flex gap-4 rounded-2xl border border-mist bg-paper p-5 transition-all hover:border-olive hover:shadow-[0_20px_40px_-25px_rgba(11,20,32,0.3)]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sage text-olive"><Icon className="h-5 w-5" /></span>
                <div><div className="font-bold text-navy">{t}</div><div className="text-sm text-slate-blue">{d}</div></div>
              </div>
            ))}
          </div>
          <a href="#como" className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-olive">Descubrir cómo funciona <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
        </div>
        <div className="relative rounded-3xl bg-sage p-8">
          <div className="space-y-3">
            {[["Ana Rodríguez", "Tinte · hace 38 días", "Contactar hoy", true], ["Luis Martínez", "Corte · hace 20 días", "En 8 días", false], ["Sofía Pérez", "Manicure · hace 12 días", "En 9 días", false]].map(([n, s, st, hot]) => (
              <div key={n as string} className="flex items-center justify-between rounded-2xl bg-paper p-4 shadow-[0_10px_30px_-20px_rgba(11,20,32,0.4)] transition-transform hover:translate-x-1">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-sm font-bold text-olive-light">{(n as string)[0]}</span>
                  <div><div className="text-sm font-bold text-navy">{n as string}</div><div className="text-xs text-slate-blue">{s as string}</div></div>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${hot ? "bg-olive text-paper" : "bg-mist text-slate-blue"}`}>{st as string}</span>
              </div>
            ))}
            <div className="rounded-2xl border border-olive/30 bg-navy p-4 text-sm text-mist">
              <div className="mb-1 flex items-center gap-1.5 text-xs font-bold text-gold"><Sparkles className="h-3.5 w-3.5" />Mensaje sugerido</div>
              "Hola Ana, ya pasó un mes desde tu tinte. ¿Te gustaría agendar tu retoque esta semana?"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    [ClipboardPen, "REGISTRA", "Anota al cliente y el servicio realizado."],
    [LayoutGrid, "ORGANIZA", "Su historial queda ordenado y accesible."],
    [Radar, "IDENTIFICA", "Calcula cuándo podría necesitar volver."],
    [Send, "CONTACTA", "Envía un mensaje personalizado a tiempo."],
  ] as const;
  return (
    <section id="como" className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <Tag dark>CÓMO FUNCIONA</Tag>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-paper sm:text-5xl">De una visita a una nueva oportunidad.</h2>
        </div>
        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-olive/0 via-olive to-olive/0 md:block" />
          {steps.map(([Icon, t, d], i) => (
            <div key={t} className="group relative text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl border border-slate-blue bg-petrol text-olive-light transition-all group-hover:-translate-y-1 group-hover:border-olive"><Icon className="h-8 w-8" strokeWidth={1.5} /></div>
              <div className="mt-5 text-5xl font-extrabold text-olive">0{i + 1}</div>
              <div className="mt-1 text-sm font-bold tracking-[0.2em] text-paper">{t}</div>
              <p className="mx-auto mt-2 max-w-[220px] text-sm text-haze">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BUSINESS = ["Estética", "Barbería", "Peluquería", "Estudio de uñas", "Depilación", "Otro"];
const SERVICES: Record<string, number> = { Corte: 30, Tinte: 42, Manicure: 15, Pedicure: 21, "Diseño de uñas": 21, Depilación: 28, "Limpieza facial": 30, "Tratamiento capilar": 35 };
const PRESETS = [
  { name: "Ana Rodríguez", business: "Peluquería", service: "Tinte", days: 45, interval: 42 },
  { name: "Luis Martínez", business: "Barbería", service: "Corte", days: 25, interval: 30 },
  { name: "Sofía Pérez", business: "Estudio de uñas", service: "Manicure", days: 3, interval: 15 },
];
const iso = (d: Date) => d.toISOString().slice(0, 10);
const daysAgo = (n: number) => { const d = new Date(); d.setDate(d.getDate() - n); return iso(d); };
const empty = { name: "", business: "Estética", service: "Corte", date: "", interval: "30" };

type Result = { name: string; service: string; business: string; next: Date; left: number };

function Demo() {
  const [f, setF] = useState(empty);
  const [r, setR] = useState<Result | null>(null);
  const [err, setErr] = useState("");
  const [copied, setCopied] = useState(false);
  const set = (k: keyof typeof empty, v: string) => setF((p) => ({ ...p, [k]: v, ...(k === "service" ? { interval: String(SERVICES[v]) } : {}) }));

  const calc = (data = f) => {
    if (!data.name.trim() || !data.date || !(+data.interval > 0)) { setErr("Completa nombre, fecha e intervalo válido."); return; }
    setErr("");
    const next = new Date(data.date + "T00:00:00"); next.setDate(next.getDate() + +data.interval);
    const today = new Date(); today.setHours(0, 0, 0, 0);
    setR({ name: data.name.trim(), service: data.service, business: data.business, next, left: Math.round((next.getTime() - today.getTime()) / 86400000) });
    setCopied(false);
  };

  const status = r ? (r.left < 0 ? { l: "Seguimiento pendiente", c: "bg-gold text-navy", rec: `Han pasado ${-r.left} días desde la fecha sugerida. Contacta hoy con una invitación cálida.` }
    : r.left <= 7 ? { l: "Próximo seguimiento", c: "bg-olive text-paper", rec: "Es buen momento para enviar un recordatorio y ofrecer horarios disponibles." }
    : { l: "Fecha futura", c: "bg-slate-blue text-mist", rec: `Programa el contacto unos días antes: faltan ${r.left} días.` }) : null;

  const fmt = (d: Date) => d.toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" });
  const msg = r ? `Hola ${r.name.split(" ")[0]}, ¡esperamos que estés muy bien! 😊 Ya se acerca el momento ideal para tu próximo servicio de ${r.service.toLowerCase()}${r.left < 0 ? "" : ` (alrededor del ${fmt(r.next)})`}. ¿Te gustaría que te apartemos un espacio esta semana? Será un gusto atenderte de nuevo.` : "";

  const copy = async () => { try { await navigator.clipboard.writeText(msg); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { setCopied(false); } };
  const input = "w-full rounded-xl border border-slate-blue bg-navy px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-olive-light";

  return (
    <section id="demo" className="bg-petrol py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Tag dark>DEMO INTERACTIVA</Tag>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-paper sm:text-5xl">Conoce cómo CitaIA transforma los datos en oportunidades.</h2>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-haze">Ejemplos rápidos:</span>
          {PRESETS.map((p) => (
            <button key={p.name} onClick={() => { const d = { name: p.name, business: p.business, service: p.service, date: daysAgo(p.days), interval: String(p.interval) }; setF(d); calc(d); }}
              className="rounded-full border border-slate-blue px-3 py-1.5 text-xs font-semibold text-mist transition-all hover:border-olive-light hover:text-olive-light">{p.name} · {p.service}</button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <form onSubmit={(e) => { e.preventDefault(); calc(); }} className="space-y-4 rounded-2xl border border-slate-blue bg-navy/50 p-6">
            <label className="block"><span className="mb-1.5 block text-xs font-semibold text-haze">Nombre del cliente</span><input className={input} value={f.name} onChange={(e) => set("name", e.target.value)} placeholder="Ej. Carla Gómez" /></label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block"><span className="mb-1.5 block text-xs font-semibold text-haze">Tipo de negocio</span><select className={input} value={f.business} onChange={(e) => set("business", e.target.value)}>{BUSINESS.map((b) => <option key={b}>{b}</option>)}</select></label>
              <label className="block"><span className="mb-1.5 block text-xs font-semibold text-haze">Servicio realizado</span><select className={input} value={f.service} onChange={(e) => set("service", e.target.value)}>{Object.keys(SERVICES).map((b) => <option key={b}>{b}</option>)}</select></label>
              <label className="block"><span className="mb-1.5 block text-xs font-semibold text-haze">Fecha de última visita</span><input type="date" max={iso(new Date())} className={`${input} [color-scheme:dark]`} value={f.date} onChange={(e) => set("date", e.target.value)} /></label>
              <label className="block"><span className="mb-1.5 block text-xs font-semibold text-haze">Intervalo recomendado (días)</span><input type="number" min={1} className={input} value={f.interval} onChange={(e) => set("interval", e.target.value)} /></label>
            </div>
            {err && <p className="text-sm font-semibold text-gold">{err}</p>}
            <div className="flex flex-wrap gap-3 pt-2">
              <button type="submit" className="group inline-flex items-center gap-2 rounded-xl bg-olive px-5 py-3 text-sm font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-olive-light hover:text-navy">Calcular próximo seguimiento <ArrowRight className="h-4 w-4" /></button>
              <button type="button" onClick={() => { setF(empty); setR(null); setErr(""); }} className="inline-flex items-center gap-2 rounded-xl border border-slate-blue px-4 py-3 text-sm font-semibold text-haze hover:text-paper"><RotateCcw className="h-4 w-4" />Limpiar</button>
            </div>
          </form>

          <div className="rounded-2xl border border-slate-blue bg-navy p-6">
            {!r || !status ? (
              <div className="grid h-full min-h-[320px] place-items-center text-center">
                <div><CalendarSearch className="mx-auto h-12 w-12 text-slate-blue" strokeWidth={1.3} /><p className="mt-4 text-sm text-haze">Completa el formulario o elige un ejemplo<br />para ver el análisis del cliente.</p></div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div><div className="text-xs text-haze">{r.business}</div><div className="text-2xl font-extrabold text-paper">{r.name}</div></div>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${status.c}`}>{status.l}</span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[["Último servicio", r.service], ["Regreso estimado", fmt(r.next)], ["Días restantes", r.left < 0 ? `${r.left}` : `${r.left}`]].map(([l, v]) => (
                    <div key={l} className="rounded-xl border border-slate-blue bg-petrol p-3"><div className="text-[11px] text-haze">{l}</div><div className="mt-1 text-sm font-bold text-paper">{v}</div></div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2 rounded-xl bg-petrol p-4 text-sm text-mist"><ListChecks className="h-5 w-5 shrink-0 text-olive-light" />{status.rec}</div>
                <div className="mt-4 rounded-xl border border-olive/40 p-4">
                  <div className="mb-2 flex items-center gap-1.5 text-xs font-bold text-gold"><Sparkles className="h-3.5 w-3.5" />Mensaje sugerido</div>
                  <p className="text-sm leading-relaxed text-mist">{msg}</p>
                  <button onClick={copy} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-olive px-4 py-2 text-xs font-bold text-paper transition-colors hover:bg-olive-light hover:text-navy">{copied ? <><Check className="h-4 w-4" />¡Copiado!</> : <><Copy className="h-4 w-4" />Copiar mensaje</>}</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="mt-6 flex items-center gap-2 text-xs text-haze"><Info className="h-3.5 w-3.5" />Prototipo académico: los cálculos se realizan en tu navegador, sin IA externa ni almacenamiento permanente.</p>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="bg-sage/40 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Tag>BENEFICIOS</Tag>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-navy sm:text-5xl">Más que recordar citas: construir relaciones con tus clientes.</h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <Card light icon={LayoutGrid} title="Organización" text="Toda la información de tus clientes, clara y en un solo lugar." />
          <Card light icon={CalendarCheck} title="Seguimiento" text="Sabe a quién contactar y cuándo hacerlo." />
          <Card light icon={MessageSquareText} title="Personalización" text="Mensajes que suenan a ti y a tu negocio." />
          <Card light icon={HeartHandshake} title="Fidelización" text="Clientes que se sienten recordados y valorados." />
          <Card light icon={TrendingUp} title="Crecimiento" text="Más visitas recurrentes, ingresos más estables." />
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  ["¿Qué es CitaIA?", "Es un prototipo académico de una plataforma de seguimiento de clientes para negocios de servicios personales como estéticas, barberías y estudios de uñas."],
  ["¿Utiliza inteligencia artificial real?", "En esta versión no. El cálculo de fechas y los mensajes se generan con reglas y plantillas dentro de tu navegador. El nombre refleja la visión futura del producto."],
  ["¿Se guardan los datos que ingreso en la demo?", "No. Nada se envía a servidores ni se almacena de forma permanente; al recargar la página la información desaparece."],
  ["¿Cómo se calcula la fecha de seguimiento?", "Se suma el intervalo recomendado (en días) a la fecha de la última visita y se compara con la fecha actual para determinar el estado."],
  ["¿Puedo usarlo en mi negocio hoy?", "CitaIA es un concepto en desarrollo. La demostración ilustra cómo funcionaría una versión completa del producto."],
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-petrol py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center"><Tag dark>PREGUNTAS FRECUENTES</Tag><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-paper sm:text-5xl">Resolvemos tus dudas.</h2></div>
        <div className="mt-12 space-y-3">
          {FAQS.map(([q, a], i) => (
            <div key={q} className={`rounded-2xl border transition-colors ${open === i ? "border-olive bg-navy/60" : "border-slate-blue bg-navy/30"}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-paper" aria-expanded={open === i}>
                {q}<ChevronDown className={`h-5 w-5 shrink-0 text-olive-light transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><div className="overflow-hidden"><p className="px-5 pb-5 text-sm leading-relaxed text-haze">{a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-olive/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-paper sm:text-5xl">Cada cliente que regresa es una nueva <span className="text-olive-light">oportunidad.</span></h2>
        <div className="mt-8 flex justify-center"><Btn href="#demo">Explorar demostración <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Btn></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-blue bg-navy py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-start md:justify-between">
        <div><Logo /><p className="mt-3 text-sm text-haze">Tus clientes regresan. Tu negocio crece.</p></div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">{NAV.map(([id, l]) => <a key={id} href={`#${id}`} className="text-sm text-haze hover:text-olive-light">{l}</a>)}</nav>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-blue px-5 pt-6 text-xs text-haze">© 2026 · Prototipo académico — CitaIA</div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-navy font-sans antialiased">
      <Navbar /><Hero /><Problem /><Solution /><HowItWorks /><Demo /><Benefits /><Faq /><Cta /><Footer />
    </div>
  );
}
