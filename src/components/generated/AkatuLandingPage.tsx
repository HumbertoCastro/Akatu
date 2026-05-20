import { ArrowRight, Calendar, CheckCircle2, HeartHandshake, Instagram, Leaf, MapPin, MessageCircle, Phone, Puzzle, Quote, Sprout, Star, Sun } from 'lucide-react';
import heroSprout from '../../assets/hero-sprout.png';
import nataliaPhoto from '../../assets/natalia-crop-source.png';
const palette = {
  teal: '#10B8C5',
  coral: '#EF5B36',
  yellow: '#FFD83D',
  ink: '#25212B',
  paper: '#FFFDF8',
  soft: '#F7F5F0'
};
const PHONE_DISPLAY = '(31) 99559-0050';
const WHATSAPP_NUMBER = '5531995590050';
const INSTAGRAM_URL = 'https://www.instagram.com/espacoakatu?igsh=cmJueHJzcHNmazA5';
const ADDRESS_DISPLAY = 'Av. Sebasti\u00e3o de Brito, 805 - Belo Horizonte, MG';
const MAPS_QUERY = '805 Av. Sebasti\u00e3o de Brito, Belo Horizonte';
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;
const makeWhatsAppUrl = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const scheduleUrl = makeWhatsAppUrl('Ola, quero agendar uma conversa com a Akatu.');
const values = [{
  icon: Sprout,
  color: palette.teal,
  title: 'Crescimento com respeito',
  text: 'Cada crianca tem seu tempo, sua linguagem e sua forma de florescer.'
}, {
  icon: Puzzle,
  color: palette.coral,
  title: 'Brincar como linguagem',
  text: 'Atividades ludicas ajudam corpo, fala, emocoes e autonomia a se organizarem.'
}, {
  icon: HeartHandshake,
  color: palette.yellow,
  title: 'Familia dentro do cuidado',
  text: 'Pais recebem orientacao clara para levar as conquistas para a rotina.'
}];
const professionals = [{
  name: 'Viviane Silva',
  role: 'Fonoaudiologia',
  color: palette.teal,
  focus: 'Comunicacao, linguagem, fala e acompanhamento do desenvolvimento infantil.'
}, {
  name: 'Sarah Nonaka',
  role: 'Terapia ocupacional',
  color: palette.yellow,
  focus: 'Integracao sensorial, autonomia, rotina e brincar funcional.'
}, {
  name: 'Camila Fernandes',
  role: 'Psicologia infantil',
  color: palette.coral,
  focus: 'Regulacao emocional, vinculos, comportamento e orientacao familiar.'
}, {
  name: 'Marina Emilia Andrade',
  role: 'Fonoaudiologia',
  color: palette.teal,
  focus: 'Linguagem, oralidade, comunicacao e desenvolvimento da fala.'
}];
const testimonials = [{
  quote: 'Aqui eu aprendi que tentar de novo tambem pode ser divertido.',
  child: 'L., 7 anos',
  color: palette.yellow,
  style: {
    left: '7%',
    top: '20%',
    transform: 'rotate(-7deg)'
  }
}, {
  quote: 'Eu gosto da sala com brinquedos porque parece que meu corpo entende melhor.',
  child: 'B., 5 anos',
  color: palette.teal,
  style: {
    right: '8%',
    top: '8%',
    transform: 'rotate(5deg)'
  }
}, {
  quote: 'Quando eu consigo falar o que sinto, fica mais facil brincar.',
  child: 'M., 8 anos',
  color: palette.coral,
  style: {
    left: '29%',
    bottom: '10%',
    transform: 'rotate(3deg)'
  }
}, {
  quote: 'Minha sementinha virou uma arvore grande no desenho.',
  child: 'T., 6 anos',
  color: palette.yellow,
  style: {
    right: '25%',
    bottom: '22%',
    transform: 'rotate(-5deg)'
  }
}];
const specialties = [{
  type: 'occupation',
  title: 'Terapia ocupacional',
  lines: ['Terapia', 'ocupacional'],
  label: 'corpo, rotina e autonomia',
  color: palette.teal
}, {
  type: 'speech',
  title: 'Fonoaudiologia',
  lines: ['Fono', 'audiologia'],
  label: 'fala, linguagem e oralidade',
  color: palette.yellow
}, {
  type: 'mind',
  title: 'Psicologia',
  lines: ['Psicologia'],
  label: 'emocoes, vinculos e seguranca',
  color: palette.coral
}];
const contact = [{
  icon: MapPin,
  text: ADDRESS_DISPLAY,
  color: palette.teal,
  href: GOOGLE_MAPS_URL,
  external: true
}, {
  icon: Phone,
  text: PHONE_DISPLAY,
  color: palette.coral,
  href: 'tel:+5531995590050'
}, {
  icon: Instagram,
  text: '@espacoakatu',
  color: palette.yellow,
  href: INSTAGRAM_URL,
  external: true
}];
const footerLinks = [{
  icon: Instagram,
  label: 'Instagram da Akatu',
  href: INSTAGRAM_URL,
  color: palette.teal,
  external: true
}, {
  icon: Calendar,
  label: 'Agendar conversa',
  href: scheduleUrl,
  color: palette.yellow,
  external: true
}, {
  icon: Star,
  label: 'Ver depoimentos',
  href: '#depoimentos',
  color: palette.coral
}];
function SpecialtyIcon({
  type,
  color
}: {
  type: string;
  color: string;
}) {
  if (type === 'occupation') {
    return <svg viewBox="0 0 72 72" className="h-14 w-14" fill="none" aria-hidden="true">
        <rect x="9" y="18" width="54" height="38" rx="18" fill={color} stroke="#25212B" strokeWidth="4" />
        <circle cx="24" cy="37" r="7" fill="#FFFDF8" stroke="#25212B" strokeWidth="4" />
        <circle cx="48" cy="37" r="7" fill="#FFD83D" stroke="#25212B" strokeWidth="4" />
        <path d="M31 37h10M36 27v20" stroke="#25212B" strokeWidth="4" strokeLinecap="round" />
      </svg>;
  }
  if (type === 'speech') {
    return <svg viewBox="0 0 72 72" className="h-14 w-14" fill="none" aria-hidden="true">
        <path d="M13 18h39c6.5 0 12 5.3 12 12v7c0 6.7-5.5 12-12 12H34L20 59v-10h-7C6.5 49 1 43.7 1 37v-7c0-6.7 5.5-12 12-12Z" fill={color} stroke="#25212B" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="25" cy="34" r="4" fill="#25212B" />
        <circle cx="38" cy="34" r="4" fill="#25212B" />
        <path d="M47 34h7" stroke="#25212B" strokeWidth="4" strokeLinecap="round" />
      </svg>;
  }
  return <svg viewBox="0 0 72 72" className="h-14 w-14" fill="none" aria-hidden="true">
      <path d="M36 62c13.3 0 24-10.7 24-24S49.3 14 36 14 12 24.7 12 38s10.7 24 24 24Z" fill={color} stroke="#25212B" strokeWidth="4" />
      <path d="M25 37c0-7 5-13 11-13s11 6 11 13c0 5-3 9-7 11v6h-8v-6c-4-2-7-6-7-11Z" fill="#FFFDF8" stroke="#25212B" strokeWidth="4" strokeLinejoin="round" />
      <path d="M28 17c3-6 13-6 16 0M22 24c-6-1-10 7-6 12M50 24c6-1 10 7 6 12" stroke="#25212B" strokeWidth="4" strokeLinecap="round" />
    </svg>;
}
function LogoMark() {
  return <div className="flex items-center gap-3">
      <div className="akatu-hop relative grid h-14 w-14 place-items-center rounded-[18px] border-2 border-[#25212B] bg-white shadow-[5px_5px_0_#25212B]">
        <div className="absolute -right-2 -top-2 h-5 w-5 rounded-full border-2 border-[#25212B] bg-[#FFD83D]" />
        <div className="absolute -bottom-2 -left-2 h-5 w-5 rounded-full border-2 border-[#25212B] bg-[#10B8C5]" />
        <Sprout className="relative h-7 w-7 text-[#25212B]" strokeWidth={2.4} />
      </div>
      <div>
        <div className="text-3xl font-extrabold tracking-tight text-[#25212B]">Akatu</div>
        <div className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#EF5B36]">desenvolvimento infantil</div>
      </div>
    </div>;
}
function SectionLabel({
  children
}: {
  children: string;
}) {
  return <p className="inline-flex rounded-full border-2 border-[#25212B] bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#25212B] shadow-[4px_4px_0_#25212B]">
      {children}
    </p>;
}
function PrimaryButton({
  children,
  href,
  external = false
}: {
  children: string;
  href: string;
  external?: boolean;
}) {
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="group inline-flex items-center gap-3 rounded-2xl border-2 border-[#25212B] bg-[#25212B] px-7 py-4 text-sm font-extrabold text-white shadow-[6px_6px_0_#10B8C5] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#10B8C5] active:scale-[0.98]">
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>;
}
function SecondaryButton({
  children,
  href,
  external = false
}: {
  children: string;
  href: string;
  external?: boolean;
}) {
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="inline-flex items-center gap-3 rounded-2xl border-2 border-[#25212B] bg-white px-7 py-4 text-sm font-extrabold text-[#25212B] shadow-[6px_6px_0_#FFD83D] transition hover:-translate-y-1 hover:bg-[#FFF7C8] active:scale-[0.98]">
      {children}
    </a>;
}
function GeoBlock({
  className = ''
}: {
  className?: string;
}) {
  return <div className={`relative h-[104px] w-[104px] overflow-hidden border-2 border-[#25212B] bg-white ${className}`} style={{
    display: "none"
  }}>
      <div className="absolute -left-9 top-5 h-[74px] w-[74px] rounded-full bg-[#10B8C5]" />
      <div className="absolute -right-9 top-5 h-[74px] w-[74px] rounded-full bg-[#EF5B36]" />
      <div className="absolute bottom-0 left-0 h-[52px] w-full bg-[#FFD83D]" />
      <div className="absolute bottom-[-26px] left-[26px] h-[52px] w-[52px] rounded-full bg-white" />
    </div>;
}
function PatternRail() {
  return <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[128px] overflow-hidden bg-white xl:block" style={{
    display: "none"
  }}>
      {Array.from({
      length: 22
    }).map((_, index) => <GeoBlock key={index} className={index % 2 === 0 ? 'akatu-float' : 'akatu-float-slow'} />)}
    </div>;
}
function ChildCharacter({
  color = palette.teal,
  shirt = palette.yellow,
  className = ''
}: {
  color?: string;
  shirt?: string;
  className?: string;
}) {
  return <div className={`relative h-44 w-36 ${className}`}>
      <div className="absolute left-1/2 top-1 h-20 w-20 -translate-x-1/2 rounded-full border-4 border-[#25212B] bg-[#FFE6C7]" />
      <div className="absolute left-[44px] top-8 h-3 w-3 rounded-full bg-[#25212B]" />
      <div className="absolute right-[44px] top-8 h-3 w-3 rounded-full bg-[#25212B]" />
      <div className="absolute left-1/2 top-14 h-3 w-8 -translate-x-1/2 rounded-b-full border-b-4 border-[#25212B]" />
      <div className="absolute left-[32px] top-0 h-9 w-14 rounded-t-full border-4 border-[#25212B]" style={{
      backgroundColor: color
    }} />
      <div className="absolute left-1/2 top-[78px] h-20 w-28 -translate-x-1/2 rounded-[28px] border-4 border-[#25212B]" style={{
      backgroundColor: shirt
    }} />
      <div className="absolute left-0 top-[94px] h-12 w-12 rounded-full border-4 border-[#25212B] bg-white" />
      <div className="absolute right-0 top-[94px] h-12 w-12 rounded-full border-4 border-[#25212B] bg-white" />
      <div className="absolute bottom-0 left-7 h-11 w-7 rounded-full border-4 border-[#25212B] bg-[#25212B]" />
      <div className="absolute bottom-0 right-7 h-11 w-7 rounded-full border-4 border-[#25212B] bg-[#25212B]" />
    </div>;
}
function SeedHero() {
  return <div className="relative -mr-4 mx-auto h-[460px] w-full max-w-[360px] overflow-visible sm:h-[560px] sm:max-w-[520px] lg:-mr-14 lg:h-[660px] lg:max-w-[650px]">
      <div className="akatu-spin-slow absolute right-[-18px] top-[-14px] z-0 grid h-20 w-20 place-items-center rounded-full border-4 border-[#25212B] bg-[#FFD83D] shadow-[6px_6px_0_#25212B] sm:h-24 sm:w-24 lg:right-[-44px] lg:top-[-18px]">
        <Sun className="h-9 w-9 text-[#25212B] sm:h-11 sm:w-11" strokeWidth={2.4} />
      </div>
      <div className="akatu-float absolute left-20 top-24 h-20 w-20 rounded-full border-4 border-[#25212B] bg-[#EF5B36]" />
      <div className="akatu-wiggle absolute right-8 top-44 h-20 w-20 rounded-[26px] border-4 border-[#25212B] bg-[#10B8C5]" />
      <img src={heroSprout} alt="Broto colorido saindo de uma semente" className="absolute bottom-[-12px] right-[-8px] h-[460px] w-auto object-contain drop-shadow-[10px_14px_0_rgba(37,33,43,0.12)] sm:h-[560px] lg:right-[-20px] lg:h-[660px]" />
    
      <div className="absolute bottom-8 left-0 z-20 max-w-[260px] rounded-[30px] border-4 border-[#25212B] bg-white px-5 py-4 shadow-[8px_8px_0_#10B8C5] sm:bottom-14 sm:left-[-26px] sm:max-w-[292px] sm:px-6 sm:py-5">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#EF5B36]">sementes</p>
          <p className="mt-2 text-[21px] font-black leading-[1.02] tracking-tight text-[#25212B] sm:text-[25px]">sementes para um mundo mais inclusivo e feliz</p>
        <div className="mt-4 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border-2 border-[#25212B] bg-[#FFD83D]">
            <Sprout className="h-6 w-6 text-[#25212B]" />
          </div>
          <p className="text-[10px] font-extrabold uppercase tracking-wide text-neutral-500">do cuidado ao florescimento</p>
        </div>
      </div>
    </div>;
}
function FounderIllustration() {
  return <div className="relative min-h-[540px] overflow-hidden rounded-[42px] border-4 border-[#25212B] bg-[#FFFDF8] p-8 shadow-[12px_12px_0_#10B8C5]">
      <GeoBlock className="akatu-float absolute right-8 top-8" />
      <div className="absolute left-10 top-16 h-28 w-28 rounded-full border-4 border-[#25212B] bg-[#FFD83D]" />
      <div className="absolute left-1/2 top-16 h-[330px] w-[330px] -translate-x-1/2 overflow-hidden rounded-full border-4 border-[#25212B] bg-[#10B8C5] shadow-[10px_10px_0_#25212B]">
        <img
          src={nataliaPhoto}
          alt="Natália Maia, fundadora da Akatu"
          className="absolute inset-0 h-full w-full object-cover object-[52%_42%]"
        />
      </div>
      <div className="absolute inset-x-8 bottom-8 rounded-3xl border-4 border-[#25212B] bg-white p-6 shadow-[8px_8px_0_#EF5B36]">
        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#10B8C5]">fundadora</p>
        <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-[#25212B]">Natália Maia</h3>
        <p className="mt-3 text-sm font-medium leading-6 text-neutral-600">
          Fundadora da Akatu, terapeuta ocupacional e defensora de uma infancia acompanhada com tecnica, afeto e inclusao.
        </p>
      </div>
    </div>;
}
export const AkatuLandingPage = () => {
  return <div className="min-h-screen w-full bg-[#FFFDF8] font-['Poppins',sans-serif] text-[#25212B]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        * { scrollbar-width: thin; scrollbar-color: #10B8C5 transparent; }
        *::-webkit-scrollbar { width: 10px; height: 10px; }
        *::-webkit-scrollbar-track { background: transparent; }
        *::-webkit-scrollbar-thumb { background: #10B8C5; border: 3px solid transparent; border-radius: 999px; background-clip: content-box; }
        .akatu-bounce { animation: akatu-bounce 2.6s ease-in-out infinite; }
        .akatu-float { animation: akatu-float 4s ease-in-out infinite; }
        .akatu-float-slow { animation: akatu-float 5.5s ease-in-out infinite reverse; }
        .akatu-wiggle { animation: akatu-wiggle 3.4s ease-in-out infinite; transform-origin: center; }
        .akatu-hop { animation: akatu-hop 4.2s ease-in-out infinite; }
        .akatu-spin-slow { animation: akatu-spin 14s linear infinite; }
        @keyframes akatu-bounce { 0%, 100% { translate: 0 0; rotate: -2deg; } 50% { translate: 0 -22px; rotate: 3deg; } }
        @keyframes akatu-float { 0%, 100% { translate: 0 0; rotate: 0deg; } 50% { translate: 0 -18px; rotate: 7deg; } }
        @keyframes akatu-wiggle { 0%, 100% { rotate: -4deg; scale: 1; } 50% { rotate: 7deg; scale: 1.04; } }
        @keyframes akatu-hop { 0%, 88%, 100% { translate: 0 0; } 92% { translate: 0 -10px; } 96% { translate: 0 2px; } }
        @keyframes akatu-spin { to { rotate: 360deg; } }
        @media (prefers-reduced-motion: reduce) { .akatu-bounce, .akatu-float, .akatu-float-slow, .akatu-wiggle, .akatu-hop, .akatu-spin-slow { animation: none; } }
      `}</style>

      <div className="relative min-h-screen w-full overflow-hidden bg-[#FFFDF8]">
        <PatternRail />

        <header className="relative z-20 mx-auto flex w-full max-w-[1180px] items-center justify-between gap-5 px-5 py-8 sm:px-10">
          <LogoMark />
          <nav className="hidden items-center gap-8 text-sm font-extrabold text-[#25212B] lg:flex">
            <a className="rounded-full px-3 py-2 transition hover:bg-[#FFD83D]" href="#sobre">Sobre</a>
            <a className="rounded-full px-3 py-2 transition hover:bg-[#10B8C5] hover:text-white" href="#profissionais">Profissionais</a>
            <a className="rounded-full px-3 py-2 transition hover:bg-[#EF5B36] hover:text-white" href="#fundadora">Fundadora</a>
            <a className="rounded-full px-3 py-2 transition hover:bg-[#FFD83D]" href="#localizacao">Localizacao</a>
          </nav>
          <a href={scheduleUrl} target="_blank" rel="noreferrer" className="rounded-2xl border-2 border-[#25212B] bg-[#FFD83D] px-5 py-3 text-sm font-extrabold text-[#25212B] shadow-[5px_5px_0_#25212B] transition hover:-translate-y-1 active:scale-[0.98]">
            Agendar conversa
          </a>
        </header>

        <main>
          <section className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 px-5 pb-24 pt-12 sm:px-10 lg:grid-cols-[1fr_580px]">
            <div className="absolute -left-16 top-32 hidden h-40 w-40 rounded-full border-4 border-[#25212B] bg-[#10B8C5] sm:block" />
            <div className="absolute left-[48%] top-6 h-16 w-16 rounded-full border-4 border-[#25212B] bg-[#EF5B36]" />
            <div className="relative z-10">
              <div className="mb-9 inline-flex max-w-xl items-center gap-3 rounded-3xl border-4 border-[#25212B] bg-white p-2 pr-5 shadow-[7px_7px_0_#FFD83D]">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-[#25212B] bg-[#10B8C5]">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-extrabold text-[#25212B]">Desenvolvendo sementes para um mundo inclusivo e feliz.</span>
              </div>
              <h1 className="max-w-3xl text-[52px] font-black leading-[0.92] tracking-tight text-[#25212B] sm:text-[64px] lg:text-[78px] lg:leading-[0.9]">
                Um espaco vivo para a infancia florescer.
              </h1>
              <p className="mt-8 max-w-2xl text-xl font-medium leading-8 text-neutral-600">
                Terapia ocupacional, fonoaudiologia e psicologia em uma clinica infantil acolhedora, tecnica e cheia de imaginacao.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <PrimaryButton href="#sobre">Conhecer a Akatu</PrimaryButton>
                <SecondaryButton href="#profissionais">Ver profissionais</SecondaryButton>
              </div>
            </div>
            <SeedHero />
            <div className="relative z-20 -mt-8 grid w-full grid-cols-1 gap-7 md:grid-cols-3 lg:col-span-2">
              {specialties.map(specialty => <div key={specialty.title} className="group flex min-h-[190px] items-center gap-5 overflow-hidden rounded-[32px] border-4 border-[#25212B] bg-white p-6 shadow-[7px_7px_0_#25212B] transition hover:-translate-y-1" style={{
              boxShadow: `8px 8px 0 ${specialty.color}`
            }}>
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[28px] border-4 border-[#25212B] bg-[#FFFDF8] transition group-hover:rotate-6">
                    <SpecialtyIcon type={specialty.type} color={specialty.color} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[25px] font-black leading-[1.02] tracking-tight text-[#25212B]">
                      {specialty.lines.map(line => <span key={line} className="block">{line}</span>)}
                    </div>
                    <div className="mt-3 max-w-[210px] text-[11px] font-extrabold uppercase leading-[1.35] tracking-wide text-neutral-500">{specialty.label}</div>
                  </div>
                </div>)}
            </div>
          </section>

          <section id="sobre" className="border-y-4 border-[#25212B] bg-[#10B8C5]">
            <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-10 py-24 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <SectionLabel>sobre e valores</SectionLabel>
                <h2 className="mt-7 text-5xl font-black leading-tight tracking-tight text-white">
                  Cuidado clinico com linguagem de brincar.
                </h2>
                <p className="mt-6 text-lg font-medium leading-8 text-white">
                  A Akatu nasce para apoiar o desenvolvimento infantil com escuta, ciencia e delicadeza. Cada crianca e vista como uma semente unica: precisa de solo seguro, rotina possivel e vinculos fortes.
                </p>
              </div>
              <div className="grid gap-5">
                {values.map((value, index) => {
                const Icon = value.icon;
                return <div key={value.title} className="group flex gap-5 rounded-3xl border-4 border-[#25212B] bg-white p-6 shadow-[8px_8px_0_#25212B] transition hover:-translate-y-1">
                      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-4 border-[#25212B] text-[#25212B] transition group-hover:rotate-6" style={{
                    backgroundColor: value.color
                  }}>
                        <Icon className="h-8 w-8" strokeWidth={2.3} />
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase tracking-[0.22em] text-neutral-400">valor 0{index + 1}</div>
                        <h3 className="mt-1 text-2xl font-black tracking-tight text-[#25212B]">{value.title}</h3>
                        <p className="mt-2 text-base font-medium leading-7 text-neutral-600">{value.text}</p>
                      </div>
                    </div>;
              })}
              </div>
            </div>
          </section>

          <section id="profissionais" className="mx-auto max-w-[1180px] px-10 py-24">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <SectionLabel>profissionais</SectionLabel>
                <h2 className="mt-7 max-w-2xl text-5xl font-black leading-tight tracking-tight text-[#25212B]">
                  Um grupo alinhado para olhar a crianca por inteiro.
                </h2>
              </div>
              <p className="max-w-md text-base font-medium leading-7 text-neutral-600">
                Especialistas que constroem objetivos em conjunto, com devolutivas claras para pais, escola e rede de apoio.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
              {professionals.map((person, index) => <article key={person.name} className="relative overflow-hidden rounded-[34px] border-4 border-[#25212B] bg-white p-6 shadow-[9px_9px_0_#25212B] transition hover:-translate-y-2" style={{
              boxShadow: `9px 9px 0 ${person.color}`
            }}>
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-4 border-[#25212B]" style={{
                backgroundColor: person.color
              }} />
                  <div className="relative flex items-start justify-between">
                    <div className="grid h-24 w-24 place-items-center rounded-3xl border-4 border-[#25212B] bg-[#FFF7C8]">
                      <ChildCharacter color={person.color} shirt="#FFFFFF" className="scale-[0.48]" />
                    </div>
                    <span className="rounded-full border-2 border-[#25212B] bg-white px-3 py-1 text-xs font-black tracking-widest text-[#25212B]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-black tracking-tight text-[#25212B]">{person.name}</h3>
                  <p className="mt-2 text-sm font-black uppercase tracking-widest" style={{
                color: person.color
              }}>{person.role}</p>
                  <p className="mt-5 text-base font-medium leading-7 text-neutral-600">{person.focus}</p>
                  <a href={makeWhatsAppUrl(`Ola, quero conhecer o perfil de ${person.name}.`)} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-[#25212B] bg-white px-4 py-2 text-sm font-black text-[#25212B] transition hover:bg-[#FFD83D] active:scale-[0.98]">
                    Ver perfil <ArrowRight className="h-4 w-4" />
                  </a>
                </article>)}
            </div>
          </section>

          <section id="fundadora" className="border-y-4 border-[#25212B] bg-[#FFD83D]">
            <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-10 py-24 lg:grid-cols-[0.95fr_1.05fr]">
              <FounderIllustration />
              <div className="self-center">
                <SectionLabel>pagina da fundadora</SectionLabel>
                <h2 className="mt-7 text-5xl font-black leading-tight tracking-tight text-[#25212B]">
                  Uma clinica criada para aproximar ciencia, familia e infancia.
                </h2>
                <p className="mt-7 text-lg font-medium leading-8 text-neutral-700">
                  A fundadora da Akatu acredita que o desenvolvimento infantil acontece melhor quando a crianca se sente segura, a familia entende o processo e a equipe trabalha de forma integrada.
                </p>
                <div className="mt-8 grid gap-4">
                  {['Planos terapeuticos individualizados', 'Devolutivas claras para os pais', 'Ambientes preparados para o brincar terapeutico'].map((item, index) => <div key={item} className="flex items-center gap-4 rounded-3xl border-4 border-[#25212B] bg-white px-5 py-4 shadow-[6px_6px_0_#25212B]">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border-2 border-[#25212B]" style={{
                    backgroundColor: [palette.teal, palette.coral, '#FFFFFF'][index]
                  }}>
                        <CheckCircle2 className="h-6 w-6 text-[#25212B]" />
                      </div>
                      <span className="text-sm font-extrabold text-[#25212B]">{item}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </section>

          <section id="depoimentos" className="relative min-h-[740px] overflow-hidden bg-[#FFFDF8] px-10 py-24">
            <div className="akatu-float absolute left-8 top-20 h-28 w-28 rounded-full border-4 border-[#25212B] bg-[#EF5B36]" />
            <GeoBlock className="akatu-wiggle absolute right-20 top-24" />
            <div className="relative mx-auto max-w-[1180px]">
              <div className="mx-auto max-w-2xl text-center">
                <SectionLabel>depoimentos</SectionLabel>
                <h2 className="mt-7 text-5xl font-black leading-tight tracking-tight text-[#25212B]">
                  Pequenas falas, grandes conquistas.
                </h2>
                <p className="mt-5 text-lg font-medium leading-8 text-neutral-600">
                  Cards soltos no espaco criam uma sensacao de brincadeira, sem perder a leitura limpa para os pais.
                </p>
              </div>
              <div className="relative mt-10 h-[500px]">
                <div className="akatu-bounce absolute left-1/2 top-1/2 grid h-52 w-52 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-[#25212B] bg-[#10B8C5] shadow-[8px_8px_0_#25212B]">
                  <MessageCircle className="h-20 w-20 text-white" strokeWidth={2.2} />
                </div>
                {testimonials.map(item => <article key={item.child} className="absolute max-w-[330px] rounded-[30px] border-4 border-[#25212B] bg-white p-6 shadow-[8px_8px_0_#25212B] transition hover:z-10 hover:-translate-y-2" style={{
                ...item.style,
                boxShadow: `8px 8px 0 ${item.color}`
              }}>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-[#25212B]" style={{
                  backgroundColor: item.color
                }}>
                      <Quote className="h-6 w-6 text-[#25212B]" />
                    </div>
                    <p className="mt-4 text-base font-semibold leading-7 text-[#25212B]">{item.quote}</p>
                    <p className="mt-5 text-sm font-black uppercase tracking-widest text-neutral-500">{item.child}</p>
                  </article>)}
              </div>
            </div>
          </section>

          <section id="localizacao" className="border-y-4 border-[#25212B] bg-[#EF5B36]">
            <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-10 py-24 lg:grid-cols-[1fr_1fr]">
              <div>
                <SectionLabel>localizacao</SectionLabel>
                <h2 className="mt-7 text-5xl font-black leading-tight tracking-tight text-white">
                  Um ponto tranquilo para receber criancas e familias.
                </h2>
                <p className="mt-6 text-lg font-medium leading-8 text-white">
                  A Akatu fica na {ADDRESS_DISPLAY}, com uma proposta de chegada simples, acolhedora e organizada para a rotina das familias.
                </p>
                <div className="mt-9 grid gap-4">
                  {contact.map(item => {
                  const Icon = item.icon;
                  const cardClassName = "flex items-center gap-4 rounded-3xl border-4 border-[#25212B] bg-white px-5 py-4 shadow-[6px_6px_0_#25212B] transition hover:-translate-y-1";
                  const content = <>
                        <div className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-[#25212B]" style={{
                      backgroundColor: item.color
                    }}>
                          <Icon className="h-6 w-6 text-[#25212B]" />
                        </div>
                        <span className="text-sm font-extrabold text-[#25212B]">{item.text}</span>
                      </>;
                  return item.href ? <a key={item.text} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined} className={cardClassName}>
                        {content}
                      </a> : <div key={item.text} className={cardClassName}>
                        {content}
                      </div>;
                })}
                </div>
              </div>
              <div className="relative min-h-[450px] overflow-hidden rounded-[42px] border-4 border-[#25212B] bg-white p-4 shadow-[12px_12px_0_#FFD83D]">
                <iframe
                  title="Mapa da Akatu Desenvolvimento Infantil"
                  src={GOOGLE_MAPS_EMBED_URL}
                  className="h-[450px] w-full rounded-[28px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl border-4 border-[#25212B] bg-white p-5 shadow-[7px_7px_0_#EF5B36]">
                  <p className="text-base font-black text-[#25212B]">Akatu Desenvolvimento Infantil</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-600">{ADDRESS_DISPLAY}</p>
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-[#25212B] bg-[#FFD83D] px-4 py-2 text-sm font-black text-[#25212B] transition hover:-translate-y-1 active:scale-[0.98]">
                    Abrir no Maps <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="mx-auto flex max-w-[1180px] flex-col gap-8 px-10 py-12 lg:flex-row lg:items-center lg:justify-between">
          <LogoMark />
          <div className="flex flex-wrap items-center gap-3">
            {footerLinks.map(item => {
            const Icon = item.icon;
            return <a key={item.label} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined} aria-label={item.label} className="grid h-14 w-14 place-items-center rounded-2xl border-4 border-[#25212B] bg-white text-[#25212B] shadow-[5px_5px_0_#25212B] transition hover:-translate-y-1 active:scale-[0.98]" style={{
            backgroundColor: item.color
          }}>
                <Icon className="h-6 w-6" />
              </a>;
          })}
          </div>
        </footer>
      </div>
    </div>;
};
