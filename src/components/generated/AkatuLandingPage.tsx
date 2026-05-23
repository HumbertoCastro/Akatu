import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, CheckCircle2, ChevronDown, HeartHandshake, Instagram, Leaf, MapPin, MessageCircle, Phone, Puzzle, Quote, Sprout, Star, Sun } from 'lucide-react';
import heroSprout from '../../assets/hero-sprout.png';
import hcWebSolutionsIcon from '../../assets/hc-web-solutions-icon.png';
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
const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJr3P4RdebpgARJQJGhlPSyT8';
const ADDRESS_DISPLAY = 'Av. Sebasti\u00e3o de Brito, 805 - Belo Horizonte, MG';
const MAPS_QUERY = '805 Av. Sebasti\u00e3o de Brito, Belo Horizonte';
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;
const makeWhatsAppUrl = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const scheduleUrl = makeWhatsAppUrl('Olá, quero agendar uma conversa com a Akatu.');
const values = [{
  icon: Sprout,
  color: palette.teal,
  title: 'Crescimento com respeito',
  text: 'Cada criança tem seu tempo, sua linguagem e sua forma de florescer.'
}, {
  icon: Puzzle,
  color: palette.coral,
  title: 'Brincar como linguagem',
  text: 'Atividades lúdicas ajudam corpo, fala, emoções e autonomia a se organizarem.'
}, {
  icon: HeartHandshake,
  color: palette.yellow,
  title: 'Família dentro do cuidado',
  text: 'Pais recebem orientação clara para levar as conquistas para a rotina.'
}];
type Professional = {
  name: string;
  role: string;
  color: string;
  focus: string;
  detail: string;
  image?: string;
  imageAlt?: string;
};
type FounderKpi = {
  label: string;
  detail: string;
  color: string;
} & ({
  kind: 'number';
  value: number;
  prefix?: string;
  suffix?: string;
} | {
  kind: 'text';
  text: string;
});
const professionals = [{
  name: 'Natália Lara',
  role: 'Fundadora e terapeuta ocupacional',
  color: palette.coral,
  focus: 'Integra ciência, rotina e vínculo para construir planos terapêuticos possíveis para cada família.',
  detail: 'À frente da Akatu, organiza o cuidado entre equipe, pais e escola para que cada criança seja acompanhada por inteiro, com objetivos claros e acolhimento constante.',
  image: nataliaPhoto,
  imageAlt: 'Natália Lara, fundadora e terapeuta ocupacional da Akatu'
}, {
  name: 'Viviane Silva',
  role: 'Fonoaudiologia',
  color: palette.teal,
  focus: 'Comunicação, linguagem, fala e acompanhamento do desenvolvimento infantil.',
  detail: 'Acompanha a construção da comunicação com escuta clínica, brincadeiras dirigidas e orientações práticas para a rotina.'
}, {
  name: 'Sarah Nonaka',
  role: 'Terapia ocupacional',
  color: palette.yellow,
  focus: 'Integração sensorial, autonomia, rotina e brincar funcional.',
  detail: 'Transforma objetivos terapêuticos em experiências concretas para ampliar autonomia, organização corporal e participação no dia a dia.'
}, {
  name: 'Camila Fernandes',
  role: 'Psicologia infantil',
  color: palette.coral,
  focus: 'Regulação emocional, vínculos, comportamento e orientação familiar.',
  detail: 'Cuida dos aspectos emocionais e relacionais com intervenções sensíveis, devolutivas objetivas e apoio para famílias.'
}, {
  name: 'Marina Emília Andrade',
  role: 'Fonoaudiologia',
  color: palette.teal,
  focus: 'Linguagem, oralidade, comunicação e desenvolvimento da fala.',
  detail: 'Trabalha oralidade, fala e linguagem com estratégias lúdicas para fortalecer a comunicação em diferentes contextos.'
}] satisfies Professional[];
const testimonials = [{
  quote: 'Estrutura moderna e exemplar.',
  author: 'Victor Candelori',
  source: 'Google • 11 meses',
  rating: 5,
  color: palette.yellow,
  tilt: 'lg:-rotate-3',
  offset: 'lg:translate-y-10'
}, {
  quote: 'A criança se sente confortável e acolhida.',
  author: 'Lilian Diniz',
  source: 'Google • 11 meses',
  rating: 5,
  color: palette.teal,
  tilt: 'lg:rotate-2',
  offset: 'lg:-translate-y-4'
}, {
  quote: 'Espaço incrível, com profissionais exemplares.',
  author: 'Luisa Lira',
  source: 'Google • 11 meses',
  rating: 5,
  color: palette.coral,
  tilt: 'lg:-rotate-1',
  offset: 'lg:translate-y-16'
}, {
  quote: 'Espaço muito bem estruturado, organizado e acolhedor.',
  author: 'gaby diniz',
  source: 'Google • 11 meses',
  rating: 5,
  color: palette.yellow,
  tilt: 'lg:rotate-3',
  offset: 'lg:translate-y-2'
}, {
  quote: 'Equipe nota mil desde o primeiro contato.',
  author: 'Izabella Gonçalves',
  source: 'Google • 11 meses',
  rating: 5,
  color: palette.teal,
  tilt: 'lg:-rotate-2',
  offset: 'lg:translate-y-12'
}, {
  quote: 'Extremamente aconchegante e preparado.',
  author: 'Humberto Castro',
  source: 'Google • 11 meses',
  rating: 5,
  color: palette.coral,
  tilt: 'lg:rotate-1',
  offset: 'lg:-translate-y-2'
}, {
  quote: 'Profissionais muito capacitados.',
  author: 'Isadora Teixeira Neto',
  source: 'Google • 11 meses',
  rating: 5,
  color: palette.yellow,
  tilt: 'lg:-rotate-2',
  offset: 'lg:translate-y-8'
}, {
  quote: 'Espaço muito bom, completo, excelentes profissionais.',
  author: 'sarah nonaka',
  source: 'Google • 3 dias',
  rating: 5,
  color: palette.teal,
  tilt: 'lg:rotate-2',
  offset: 'lg:-translate-y-1'
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
  label: 'emoções, vínculos e segurança',
  color: palette.coral
}];
const clinicSpaces = [{
  icon: Puzzle,
  title: 'Salas para o brincar terapêutico',
  text: 'Ambientes organizados para atividades lúdicas, avaliação e desenvolvimento de habilidades.',
  color: palette.teal
}, {
  icon: Sun,
  title: 'Recursos sensoriais e funcionais',
  text: 'Materiais escolhidos para apoiar corpo, comunicação, autonomia e regulação emocional.',
  color: palette.yellow
}, {
  icon: HeartHandshake,
  title: 'Espaço para família e devolutivas',
  text: 'Conversas claras para transformar observações clínicas em orientações possíveis na rotina.',
  color: palette.coral
}, {
  icon: Leaf,
  title: 'Chegada acolhedora',
  text: 'Uma estrutura pensada para receber crianças e responsáveis com previsibilidade e cuidado.',
  color: palette.teal
}];
const founderKpis = [{
  kind: 'number',
  value: 6,
  prefix: '+',
  label: 'anos de experiência',
  detail: 'na área de desenvolvimento infantil',
  color: palette.teal
}, {
  kind: 'text',
  text: 'Certificada',
  label: 'em desenvolvimento infantil',
  detail: 'formação focada em cuidado, rotina e autonomia',
  color: palette.yellow
}, {
  kind: 'number',
  value: 97,
  prefix: '+',
  label: 'crianças atendidas',
  detail: 'com escuta e planos individualizados',
  color: palette.coral
}] satisfies FounderKpi[];
const founderCarePoints = ['Planos terapêuticos individualizados', 'Devolutivas claras para os pais', 'Ambientes preparados para o brincar terapêutico'];
const founderKpiLayouts = [
  'xl:absolute xl:left-[3%] xl:top-8 xl:w-[300px] xl:-rotate-3',
  'xl:absolute xl:left-[37%] xl:top-0 xl:w-[310px] xl:rotate-2',
  'xl:absolute xl:right-[3%] xl:top-10 xl:w-[340px] xl:-rotate-2'
];
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
const faqs = [{
  question: 'Como funciona a primeira conversa?',
  answer: 'A primeira conversa acontece pelo WhatsApp. A família compartilha a demanda, recebe orientação inicial e entende qual caminho de avaliação ou atendimento faz sentido para a criança.',
  color: palette.teal
}, {
  question: 'A Akatu atende quais idades?',
  answer: 'A clínica atende crianças em diferentes fases do desenvolvimento. A indicação depende da demanda, da especialidade necessária e dos objetivos que precisam ser construídos com a família.',
  color: palette.yellow
}, {
  question: 'Os pais participam do processo terapêutico?',
  answer: 'Sim. As famílias recebem devolutivas e orientações práticas para levar as conquistas para a rotina, respeitando o tempo da criança e a realidade de cada casa.',
  color: palette.coral
}, {
  question: 'A equipe conversa com escola e rede de apoio?',
  answer: 'Quando necessário, a equipe pode alinhar objetivos com escola e outros profissionais, sempre com autorização da família e foco em continuidade do cuidado.',
  color: palette.teal
}, {
  question: 'Como saber qual especialidade procurar?',
  answer: 'Não precisa chegar com essa resposta pronta. A equipe escuta a demanda inicial e orienta se o melhor caminho é terapia ocupacional, fonoaudiologia, psicologia ou uma construção integrada.',
  color: palette.yellow
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
function ProfessionalVisual({
  person,
  index,
  imageFirst
}: {
  person: Professional;
  index: number;
  imageFirst: boolean;
}) {
  return <figure className={`relative w-full overflow-hidden rounded-[32px] border-4 border-[#25212B] bg-white p-3 shadow-[10px_10px_0_#25212B] sm:p-4 lg:max-w-[440px] xl:max-w-[460px] ${imageFirst ? 'lg:order-1 lg:justify-self-start' : 'lg:order-2 lg:justify-self-end'}`} style={{
    boxShadow: `10px 10px 0 ${person.color}`
  }}>
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-4 border-[#25212B]" style={{
      backgroundColor: person.color
    }} />
      <div className="absolute -bottom-14 -left-14 h-32 w-32 rounded-full border-4 border-[#25212B] bg-[#FFF7C8]" />
      <span className="absolute right-5 top-5 z-20 rounded-full border-2 border-[#25212B] bg-white px-4 py-2 text-xs font-black tracking-widest text-[#25212B]">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="relative grid h-[330px] place-items-center overflow-hidden rounded-[24px] border-4 border-[#25212B] bg-[#DDF2F4] sm:h-[380px] sm:rounded-[28px] lg:h-[clamp(350px,46vh,400px)] xl:h-[clamp(370px,46vh,420px)]">
        {person.image ? <img src={person.image} alt={person.imageAlt ?? person.name} className="h-full w-full object-cover object-[52%_38%]" /> : <div role="img" aria-label={`Ilustração de ${person.name}`} className="grid h-full w-full place-items-center bg-[#FFFDF8]">
            <div className="absolute left-8 top-8 h-20 w-20 rounded-full border-4 border-[#25212B] bg-[#FFD83D]" />
            <div className="absolute bottom-8 right-8 h-24 w-24 rounded-[28px] border-4 border-[#25212B]" style={{
          backgroundColor: person.color
        }} />
            <ChildCharacter color={person.color} shirt="#FFFFFF" className="scale-[1.55]" />
          </div>}
      </div>
      <figcaption className="relative mt-4 flex items-center justify-between gap-4 px-1">
        <span className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500">{person.role}</span>
        <span className="h-4 w-4 rounded-full border-2 border-[#25212B]" style={{
        backgroundColor: person.color
      }} />
      </figcaption>
    </figure>;
}
function ProfessionalSpotlight({
  person,
  index
}: {
  person: Professional;
  index: number;
}) {
  const imageFirst = index % 2 === 0;
  return <div key={person.name} className="akatu-professional-enter mt-8 grid grid-cols-1 items-center gap-8 sm:mt-9 lg:mt-7 lg:grid-cols-2 lg:gap-12">
      <ProfessionalVisual person={person} index={index} imageFirst={imageFirst} />
      <article className={`relative ${imageFirst ? 'lg:order-2' : 'lg:order-1'}`}>
        <p className="text-xs font-black uppercase tracking-[0.26em]" style={{
        color: person.color
      }}>
          Profissional em destaque
        </p>
        <h3 className="mt-4 max-w-xl text-4xl font-black leading-[1.02] tracking-tight text-[#25212B] sm:text-5xl">
          {person.name}
        </h3>
        <p className="mt-4 text-base font-black uppercase tracking-[0.18em] text-[#25212B]">
          {person.role}
        </p>
        <p className="mt-5 max-w-xl text-xl font-extrabold leading-9 text-pretty text-[#25212B] lg:text-lg lg:leading-8 xl:text-xl xl:leading-9">
          {person.focus}
        </p>
        <p className="mt-4 max-w-xl text-lg font-medium leading-8 text-pretty text-neutral-600 lg:text-base lg:leading-7 xl:text-lg xl:leading-8">
          {person.detail}
        </p>
        <a href={makeWhatsAppUrl(`Olá, quero conhecer o perfil de ${person.name}.`)} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-3 rounded-full border-2 border-[#25212B] bg-white px-5 py-3 text-sm font-black text-[#25212B] shadow-[5px_5px_0_#25212B] transition-transform hover:-translate-y-1 active:scale-[0.96]" style={{
        boxShadow: `5px 5px 0 ${person.color}`
      }}>
          Ver perfil <ArrowRight className="h-4 w-4" />
        </a>
      </article>
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
  return <div className="akatu-founder-card-enter relative min-h-[430px] self-center overflow-hidden rounded-[42px] border-4 border-[#25212B] bg-[#FFFDF8] p-8 shadow-[12px_12px_0_#10B8C5] sm:min-h-[500px]">
      <div className="akatu-float absolute right-8 top-8 h-16 w-16 rounded-[22px] border-4 border-[#25212B] bg-[#EF5B36]" aria-hidden="true" />
      <div className="absolute left-10 top-16 h-24 w-24 rounded-full border-4 border-[#25212B] bg-[#FFD83D]" aria-hidden="true" />
      <div className="absolute bottom-32 right-10 h-16 w-16 rounded-full border-4 border-[#25212B] bg-[#10B8C5]" aria-hidden="true" />
      <div className="absolute left-1/2 top-12 h-[260px] w-[260px] -translate-x-1/2 overflow-hidden rounded-full border-4 border-[#25212B] bg-[#10B8C5] shadow-[10px_10px_0_#25212B] sm:top-14 sm:h-[320px] sm:w-[320px]">
        <img
          src={nataliaPhoto}
          alt="Natália Lara, fundadora da Akatu"
          className="absolute inset-0 h-full w-full object-cover object-[52%_42%]"
        />
      </div>
      <div className="absolute inset-x-5 bottom-5 rounded-3xl border-4 border-[#25212B] bg-white p-4 shadow-[8px_8px_0_#EF5B36] sm:inset-x-8 sm:bottom-8 sm:p-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#10B8C5]">fundadora</p>
        <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#25212B] sm:text-3xl">Natália Lara</h3>
        <p className="mt-3 text-sm font-medium leading-6 text-pretty text-neutral-600 sm:text-base sm:leading-7">
          Fundadora da Akatu, terapeuta ocupacional e defensora de uma infância acompanhada com técnica, afeto e inclusão.
        </p>
      </div>
    </div>;
}
function AnimatedCounter({
  value,
  start,
  prefix = '',
  suffix = '',
  label
}: {
  value: number;
  start: boolean;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value);
      return;
    }

    let frameId: number;
    const startedAt = performance.now();
    const duration = 1300;

    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    setDisplayValue(0);
    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [start, value]);

  return <span className="inline-flex items-baseline tabular-nums">
      <span className="sr-only">{`${prefix}${value}${suffix} ${label}`}</span>
      <span aria-hidden="true">{prefix}</span>
      <span aria-hidden="true">{displayValue}</span>
      <span aria-hidden="true">{suffix}</span>
    </span>;
}
function AnimatedLetters({
  text,
  start,
  className = '',
  delay = 0
}: {
  text: string;
  start: boolean;
  className?: string;
  delay?: number;
}) {
  const words = text.split(' ');
  let letterIndex = 0;

  return <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, wordIndex) => <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap" style={wordIndex < words.length - 1 ? {
        marginRight: '0.32em'
      } : undefined}>
            {Array.from(word).map((char, charIndex) => {
          const currentIndex = letterIndex;
          letterIndex += 1;
          return <span key={`${char}-${charIndex}`} className={start ? 'akatu-letter-pop' : 'akatu-letter-hidden'} style={start ? {
            animationDelay: `${delay + currentIndex * 28}ms`
          } : undefined}>
                {char}
              </span>;
        })}
          </span>)}
      </span>
    </span>;
}
function FounderKpiCard({
  item,
  index,
  className = ''
}: {
  item: FounderKpi;
  index: number;
  className?: string;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.32
    });

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  const valueText = item.kind === 'number' ? `${item.prefix ?? ''}${item.value}${item.suffix ?? ''}` : item.text;

  return <article ref={cardRef} data-founder-kpi={item.label} aria-label={`${valueText} ${item.label}. ${item.detail}`} className={`rounded-[28px] border-4 border-[#25212B] bg-white p-5 transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.2,0,0,1)] will-change-transform hover:z-20 hover:-translate-y-2 ${isVisible ? 'translate-y-0 scale-100 opacity-100 blur-0' : 'translate-y-8 scale-[0.96] opacity-0 blur-[4px]'} ${className}`} style={{
    boxShadow: `7px 7px 0 ${item.color}`,
    transitionDelay: isVisible ? `${index * 130}ms` : '0ms'
  }}>
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border-2 border-[#25212B] bg-[#FFFDF8] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#25212B]">kpi 0{index + 1}</span>
        <span className="h-4 w-4 rounded-full border-2 border-[#25212B]" style={{
        backgroundColor: item.color
      }} aria-hidden="true" />
      </div>
      <div className="mt-4 flex min-h-[46px] items-end text-[30px] font-black leading-none tracking-tight text-[#25212B] sm:text-[32px] xl:text-[34px]">
        {item.kind === 'number' ? <AnimatedCounter value={item.value} start={isVisible} prefix={item.prefix} suffix={item.suffix} label={item.label} /> : <AnimatedLetters text={item.text} start={isVisible} className="text-[27px] xl:text-[31px]" />}
      </div>
      <h3 className="mt-3 text-[13px] font-black uppercase leading-5 tracking-[0.12em] text-[#25212B]">
        <AnimatedLetters text={item.label} start={isVisible} delay={160} />
      </h3>
      <p className="mt-2 text-[15px] font-semibold leading-6 text-pretty text-neutral-600 sm:text-base sm:leading-7">{item.detail}</p>
    </article>;
}
export const AkatuLandingPage = () => {
  const professionalsSectionRef = useRef<HTMLElement>(null);
  const [activeProfessionalIndex, setActiveProfessionalIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const activeProfessional = professionals[activeProfessionalIndex] ?? professionals[0];

  useEffect(() => {
    let frameId: number | null = null;

    const syncActiveProfessional = () => {
      const section = professionalsSectionRef.current;

      if (!section || window.matchMedia('(max-width: 1023px)').matches) {
        return;
      }

      const maxScroll = Math.max(section.offsetHeight - window.innerHeight, 1);
      const passed = Math.min(Math.max(-section.getBoundingClientRect().top, 0), maxScroll);
      const segment = maxScroll / professionals.length;
      const nextIndex = Math.min(professionals.length - 1, Math.floor(passed / segment));

      setActiveProfessionalIndex(currentIndex => currentIndex === nextIndex ? currentIndex : nextIndex);
    };

    const scheduleSync = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        syncActiveProfessional();
      });
    };

    syncActiveProfessional();
    window.addEventListener('scroll', scheduleSync, { passive: true });
    window.addEventListener('resize', scheduleSync);

    return () => {
      window.removeEventListener('scroll', scheduleSync);
      window.removeEventListener('resize', scheduleSync);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const scrollToProfessional = (index: number) => {
    const section = professionalsSectionRef.current;

    if (!section) {
      return;
    }

    setActiveProfessionalIndex(index);

    if (window.matchMedia('(max-width: 1023px)').matches) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      return;
    }

    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const maxScroll = Math.max(section.offsetHeight - window.innerHeight, 1);
    const segment = maxScroll / professionals.length;

    window.scrollTo({
      top: sectionTop + segment * index,
      behavior: 'smooth'
    });
  };

  return <div className="min-h-screen w-full bg-[#FFFDF8] font-['Poppins',sans-serif] text-[#25212B] antialiased">
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
        .akatu-professional-enter { animation: akatu-professional-enter 420ms cubic-bezier(0.2, 0, 0, 1) both; }
        .akatu-whatsapp-bounce { animation: akatu-whatsapp-bounce 2.4s ease-in-out infinite; }
        .akatu-founder-card-enter { animation: akatu-founder-card-enter 640ms cubic-bezier(0.2, 0, 0, 1) both; }
        .akatu-review-carousel:hover .akatu-review-track, .akatu-review-carousel:focus-within .akatu-review-track { animation-play-state: paused; }
        .akatu-review-track { animation: akatu-review-marquee 34s linear infinite; }
        .akatu-letter-hidden { display: inline-block; opacity: 0; transform: translateY(8px); }
        .akatu-letter-pop { display: inline-block; animation: akatu-letter-pop 520ms cubic-bezier(0.2, 0, 0, 1) both; }
        .akatu-faq-panel { display: grid; transition: grid-template-rows 320ms cubic-bezier(0.2, 0, 0, 1), opacity 220ms ease-out; }
        .akatu-faq-answer { transition: transform 320ms cubic-bezier(0.2, 0, 0, 1), filter 320ms cubic-bezier(0.2, 0, 0, 1); }
        @media (max-width: 1023px) {
          .akatu-professionals-section { min-height: auto !important; }
          .akatu-professionals-sticky { position: relative; top: auto; min-height: auto; overflow: visible; }
        }
        @keyframes akatu-bounce { 0%, 100% { translate: 0 0; rotate: -2deg; } 50% { translate: 0 -22px; rotate: 3deg; } }
        @keyframes akatu-float { 0%, 100% { translate: 0 0; rotate: 0deg; } 50% { translate: 0 -18px; rotate: 7deg; } }
        @keyframes akatu-wiggle { 0%, 100% { rotate: -4deg; scale: 1; } 50% { rotate: 7deg; scale: 1.04; } }
        @keyframes akatu-hop { 0%, 88%, 100% { translate: 0 0; } 92% { translate: 0 -10px; } 96% { translate: 0 2px; } }
        @keyframes akatu-spin { to { rotate: 360deg; } }
        @keyframes akatu-professional-enter { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes akatu-whatsapp-bounce { 0%, 100% { translate: 0 0; } 50% { translate: 0 -10px; } }
        @keyframes akatu-founder-card-enter { from { opacity: 0; transform: translateY(18px) rotate(-1deg); filter: blur(4px); } to { opacity: 1; transform: translateY(0) rotate(0); filter: blur(0); } }
        @keyframes akatu-review-marquee { from { transform: translate3d(-50%, 0, 0); } to { transform: translate3d(0, 0, 0); } }
        @keyframes akatu-letter-pop { from { opacity: 0; transform: translateY(8px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @media (prefers-reduced-motion: reduce) { .akatu-bounce, .akatu-float, .akatu-float-slow, .akatu-wiggle, .akatu-hop, .akatu-spin-slow, .akatu-professional-enter, .akatu-whatsapp-bounce, .akatu-founder-card-enter, .akatu-review-track, .akatu-letter-pop { animation: none; } .akatu-letter-hidden, .akatu-letter-pop { opacity: 1; transform: none; } .akatu-faq-panel, .akatu-faq-answer { transition: none; } }
      `}</style>

      <div className="relative min-h-screen w-full overflow-x-clip bg-[#FFFDF8]">
        <PatternRail />
        <a href={scheduleUrl} target="_blank" rel="noreferrer" aria-label="Conversar com a Akatu pelo WhatsApp" className="akatu-whatsapp-bounce fixed bottom-5 right-5 z-50 grid h-[76px] w-[76px] place-items-center rounded-full border-4 border-[#25212B] bg-[#10B8C5] text-white shadow-[7px_7px_0_#FFD83D] transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#10B8C5]/40 active:scale-[0.96] sm:bottom-8 sm:right-8 sm:h-[86px] sm:w-[86px]">
          <MessageCircle className="h-10 w-10 sm:h-11 sm:w-11" strokeWidth={2.6} />
        </a>

        <header className="relative z-20 mx-auto flex w-full max-w-[1180px] items-center justify-between gap-5 px-5 py-8 sm:px-10">
          <LogoMark />
          <nav className="hidden items-center gap-8 text-sm font-extrabold text-[#25212B] lg:flex">
            <a className="rounded-full px-3 py-2 transition hover:bg-[#FFD83D]" href="#sobre">Sobre</a>
            <a className="rounded-full px-3 py-2 transition hover:bg-[#10B8C5] hover:text-white" href="#profissionais">Profissionais</a>
            <a className="rounded-full px-3 py-2 transition hover:bg-[#EF5B36] hover:text-white" href="#fundadora">Fundadora</a>
            <a className="rounded-full px-3 py-2 transition hover:bg-[#10B8C5] hover:text-white" href="#clinica">Clínica</a>
            <a className="rounded-full px-3 py-2 transition hover:bg-[#FFD83D]" href="#localizacao">Localização</a>
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
                <span className="text-base font-extrabold leading-6 text-[#25212B]">Desenvolvendo sementes para um mundo inclusivo e feliz.</span>
              </div>
              <h1 className="max-w-3xl text-[52px] font-black leading-[0.92] tracking-tight text-[#25212B] sm:text-[64px] lg:text-[78px] lg:leading-[0.9]">
                Um espaço vivo para a infância florescer.
              </h1>
              <p className="mt-8 max-w-2xl text-xl font-medium leading-9 text-pretty text-neutral-600">
                Terapia ocupacional, fonoaudiologia e psicologia em uma clínica infantil acolhedora, técnica e cheia de imaginação.
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
                    <div className="mt-3 max-w-[210px] text-[13px] font-extrabold uppercase leading-5 tracking-[0.08em] text-neutral-500">{specialty.label}</div>
                  </div>
                </div>)}
            </div>
          </section>

          <section id="sobre" className="border-y-4 border-[#25212B] bg-[#10B8C5]">
            <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-10 py-24 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <SectionLabel>sobre e valores</SectionLabel>
                <h2 className="mt-7 text-5xl font-black leading-tight tracking-tight text-white">
                  Cuidado clínico com linguagem de brincar.
                </h2>
                <p className="mt-6 text-xl font-medium leading-9 text-pretty text-white">
                  A Akatu nasce para apoiar o desenvolvimento infantil com escuta, ciência e delicadeza. Cada criança é vista como uma semente única: precisa de solo seguro, rotina possível e vínculos fortes.
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
                        <p className="mt-2 text-[17px] font-medium leading-8 text-pretty text-neutral-600">{value.text}</p>
                      </div>
                    </div>;
              })}
              </div>
            </div>
          </section>

          <section ref={professionalsSectionRef} id="profissionais" className="akatu-professionals-section relative border-y-4 border-[#25212B] bg-[#E9F6FF]" style={{
          minHeight: `${(professionals.length + 1) * 100}vh`
        }}>
            <div className="akatu-professionals-sticky sticky top-0 flex min-h-screen items-center overflow-hidden px-5 py-8 sm:px-10 sm:py-10 lg:py-8 xl:py-10">
              <div className="mx-auto w-full max-w-[1180px]">
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                  <div>
                    <SectionLabel>profissionais</SectionLabel>
                    <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[#25212B] sm:text-5xl">
                  Um grupo alinhado para olhar a criança por inteiro.
                    </h2>
                  </div>
                  <div className="lg:justify-self-end">
                    <p className="max-w-md text-lg font-medium leading-8 text-pretty text-neutral-600">
                      Especialistas que constroem objetivos em conjunto, com devolutivas claras para pais, escola e rede de apoio.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2" aria-label="Navegar entre profissionais">
                      {professionals.map((person, index) => {
                      const isActive = index === activeProfessionalIndex;
                      return <button key={person.name} type="button" onClick={() => scrollToProfessional(index)} aria-label={`Ver ${person.name}`} aria-current={isActive ? 'step' : undefined} className={`min-h-11 min-w-11 rounded-full border-2 border-[#25212B] px-3 text-xs font-black tracking-widest text-[#25212B] shadow-[3px_3px_0_#25212B] transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#10B8C5]/40 active:scale-[0.96] ${isActive ? 'bg-[#25212B] text-white' : 'bg-white'}`}>
                          {String(index + 1).padStart(2, '0')}
                        </button>;
                    })}
                    </div>
                  </div>
                </div>

                <ProfessionalSpotlight key={activeProfessional.name} person={activeProfessional} index={activeProfessionalIndex} />
              </div>
            </div>
          </section>

          <section id="fundadora" className="relative overflow-hidden border-y-4 border-[#25212B] bg-[#FFD83D]">
            <div className="pointer-events-none absolute left-8 top-14 h-20 w-20 rounded-full border-4 border-[#25212B] bg-[#10B8C5]" aria-hidden="true" />
            <div className="akatu-wiggle pointer-events-none absolute bottom-16 right-12 hidden h-20 w-20 rounded-[26px] border-4 border-[#25212B] bg-white lg:block" aria-hidden="true" />
            <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-5 py-20 sm:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
              <FounderIllustration />
              <div className="self-center">
                <SectionLabel>página da fundadora</SectionLabel>
                <h2 className="mt-7 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[#25212B] sm:text-5xl">
                  Uma clínica criada para aproximar ciência, família e infância.
                </h2>
                <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-pretty text-neutral-700 sm:text-xl sm:leading-9">
                  A fundadora da Akatu acredita que o desenvolvimento infantil acontece melhor quando a criança se sente segura, a família entende o processo e a equipe trabalha de forma integrada.
                </p>
                <div className="mt-7 flex flex-wrap gap-3" aria-label="Bases do cuidado da fundadora">
                  {founderCarePoints.map((item, index) => <div key={item} className="inline-flex min-h-12 items-center gap-3 rounded-full border-2 border-[#25212B] bg-white px-4 py-2 shadow-[4px_4px_0_#25212B]">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border-2 border-[#25212B]" style={{
                    backgroundColor: [palette.teal, palette.coral, '#FFFFFF'][index]
                  }}>
                        <CheckCircle2 className="h-6 w-6 text-[#25212B]" />
                      </div>
                      <span className="text-sm font-extrabold leading-5 text-[#25212B] sm:text-base sm:leading-6">{item}</span>
                    </div>)}
                </div>
              </div>
              <div className="relative mt-2 grid gap-4 sm:grid-cols-3 lg:col-span-2 xl:block xl:min-h-[285px]" aria-label="Indicadores da fundadora">
                <div className="akatu-float pointer-events-none absolute left-[2%] top-0 hidden h-12 w-12 rounded-full border-4 border-[#25212B] bg-[#EF5B36] xl:block" aria-hidden="true" />
                <div className="akatu-float-slow pointer-events-none absolute bottom-9 right-[20%] hidden h-14 w-14 rounded-[20px] border-4 border-[#25212B] bg-[#10B8C5] xl:block" aria-hidden="true" />
                <div className="pointer-events-none absolute left-[47%] top-[52%] hidden h-20 w-20 rounded-full border-4 border-[#25212B] bg-[#FFFDF8] xl:block" aria-hidden="true" />
                {founderKpis.map((item, index) => <FounderKpiCard key={item.label} item={item} index={index} className={founderKpiLayouts[index] ?? ''} />)}
              </div>
            </div>
          </section>

          <section id="depoimentos" className="relative min-h-[740px] overflow-hidden bg-[#FFFDF8] px-10 py-24">
            <div className="akatu-float absolute left-8 top-20 h-28 w-28 rounded-full border-4 border-[#25212B] bg-[#EF5B36]" />
            <GeoBlock className="akatu-wiggle absolute right-20 top-24" />
            <div className="relative mx-auto max-w-[1180px]">
              <div className="mx-auto max-w-2xl text-center">
                <SectionLabel>avaliações</SectionLabel>
                <h2 className="mt-7 text-5xl font-black leading-tight tracking-tight text-[#25212B]">
                  O que as famílias percebem na Akatu.
                </h2>
                <p className="mt-5 text-xl font-medium leading-9 text-pretty text-neutral-600">
                  Depoimentos reais da ficha pública no Google, com autor, nota e data exibida no painel.
                </p>
                <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-[#25212B] bg-[#FFD83D] px-5 py-3 text-sm font-black text-[#25212B] shadow-[5px_5px_0_#25212B] transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#10B8C5]/40 active:scale-[0.96]">
                  Ver reviews no Google <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="akatu-review-carousel relative -mx-10 mt-10 overflow-hidden py-16" aria-label="Carrossel de avaliações do Google">
                <div className="akatu-bounce pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-52 w-52 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-[#25212B] bg-[#10B8C5] shadow-[8px_8px_0_#25212B] lg:grid">
                  <MessageCircle className="h-20 w-20 text-white" strokeWidth={2.2} />
                </div>
                <div className="akatu-review-track relative z-10 flex w-max items-start gap-7 px-10">
                  {[...testimonials, ...testimonials].map((item, index) => {
                  const isDuplicate = index >= testimonials.length;
                  const cardIndex = index % testimonials.length;

                  return <article key={`${item.author}-${index}`} aria-hidden={isDuplicate} className={`w-[300px] shrink-0 rounded-[30px] border-4 border-[#25212B] bg-white p-6 shadow-[8px_8px_0_#25212B] transition-transform hover:z-20 hover:-translate-y-2 focus-within:z-20 sm:w-[345px] ${item.offset} ${item.tilt}`} style={{
                    boxShadow: `8px 8px 0 ${item.color}`
                  }}>
                        <div className="flex items-center justify-between gap-4">
                          <div className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-[#25212B]" style={{
                        backgroundColor: item.color
                      }}>
                            <Quote className="h-6 w-6 text-[#25212B]" />
                          </div>
                          <span className="rounded-full border-2 border-[#25212B] bg-[#FFFDF8] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#25212B]">review 0{cardIndex + 1}</span>
                        </div>
                        <div className="mt-4 flex items-center gap-1" aria-label={`${item.rating} estrelas no Google`}>
                          {Array.from({
                        length: item.rating
                      }).map((_, starIndex) => <Star key={starIndex} className="h-4 w-4 fill-[#FFD83D] text-[#25212B]" strokeWidth={2.2} />)}
                        </div>
                        <p className="mt-3 min-h-[112px] text-lg font-semibold leading-8 text-pretty text-[#25212B]">“{item.quote}”</p>
                        <div className="mt-5 flex items-center justify-between gap-4">
                          <p className="text-sm font-black uppercase tracking-[0.12em] text-neutral-500">{item.author}</p>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#EF5B36]">{item.source}</p>
                        </div>
                      </article>;
                })}
                </div>
              </div>
            </div>
          </section>

          <section id="clinica" className="border-y-4 border-[#25212B] bg-[#10B8C5] px-5 py-24 sm:px-10">
            <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <SectionLabel>sobre a clínica</SectionLabel>
                <h2 className="mt-7 max-w-2xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                  Uma estrutura viva para avaliar, brincar e orientar.
                </h2>
                <p className="mt-6 max-w-xl text-xl font-medium leading-9 text-pretty text-white">
                  O espaço da Akatu foi pensado para receber crianças e famílias com salas preparadas, materiais terapêuticos e ambientes que ajudam cada atendimento a ter objetivo claro.
                </p>
                <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {clinicSpaces.map(item => {
                  const Icon = item.icon;
                  return <article key={item.title} className="group rounded-[28px] border-4 border-[#25212B] bg-white p-5 shadow-[6px_6px_0_#25212B] transition-transform hover:-translate-y-1">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-[#25212B] transition-transform group-hover:rotate-6" style={{
                      backgroundColor: item.color
                    }}>
                          <Icon className="h-6 w-6 text-[#25212B]" strokeWidth={2.4} />
                        </div>
                        <h3 className="mt-4 text-lg font-black leading-tight text-[#25212B]">{item.title}</h3>
                        <p className="mt-3 text-base font-medium leading-7 text-pretty text-neutral-600">{item.text}</p>
                      </article>;
                })}
                </div>
              </div>

              <div className="relative min-h-[560px] overflow-hidden rounded-[42px] border-4 border-[#25212B] bg-[#FFFDF8] p-5 shadow-[12px_12px_0_#FFD83D] sm:p-7">
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full border-4 border-[#25212B] bg-[#EF5B36]" />
                <div className="absolute -bottom-14 -left-14 h-36 w-36 rounded-full border-4 border-[#25212B] bg-[#FFD83D]" />
                <div className="relative flex h-full min-h-[500px] flex-col gap-5">
                  <div className="flex flex-col gap-4 rounded-[30px] border-4 border-[#25212B] bg-white p-5 shadow-[7px_7px_0_#25212B] sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#EF5B36]">estrutura atual</p>
                      <h3 className="mt-2 text-2xl font-black tracking-tight text-[#25212B]">Espaços conectados pelo cuidado</h3>
                    </div>
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[22px] border-4 border-[#25212B] bg-[#10B8C5]">
                      <Sprout className="h-8 w-8 text-white" strokeWidth={2.4} />
                    </div>
                  </div>

                  <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-[28px] border-4 border-[#25212B] bg-[#DDF2F4] p-4 shadow-[5px_5px_0_#25212B]">
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-neutral-500">sala 01</p>
                      <p className="mt-3 text-xl font-black leading-tight text-[#25212B]">Brincar terapêutico</p>
                      <div className="mt-6 flex gap-2">
                        <span className="h-12 w-12 rounded-full border-4 border-[#25212B] bg-[#FFD83D]" />
                        <span className="h-12 w-16 rounded-[20px] border-4 border-[#25212B] bg-white" />
                      </div>
                    </div>
                    <div className="rounded-[28px] border-4 border-[#25212B] bg-[#FFF7C8] p-4 shadow-[5px_5px_0_#25212B]">
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-neutral-500">sala 02</p>
                      <p className="mt-3 text-xl font-black leading-tight text-[#25212B]">Recursos sensoriais</p>
                      <div className="mt-6 grid grid-cols-3 gap-2">
                        {[palette.teal, palette.coral, '#FFFFFF'].map(color => <span key={color} className="h-12 rounded-2xl border-4 border-[#25212B]" style={{
                        backgroundColor: color
                      }} />)}
                      </div>
                    </div>
                    <div className="rounded-[28px] border-4 border-[#25212B] bg-white p-4 shadow-[5px_5px_0_#25212B]">
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-neutral-500">família</p>
                      <p className="mt-3 text-xl font-black leading-tight text-[#25212B]">Devolutivas claras</p>
                      <div className="mt-6 h-3 rounded-full border-2 border-[#25212B] bg-[#10B8C5]" />
                      <div className="mt-3 h-3 w-3/4 rounded-full border-2 border-[#25212B] bg-[#EF5B36]" />
                    </div>
                    <div className="rounded-[28px] border-4 border-[#25212B] bg-[#FFE6C7] p-4 shadow-[5px_5px_0_#25212B]">
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-neutral-500">chegada</p>
                      <p className="mt-3 text-xl font-black leading-tight text-[#25212B]">Acolhimento e rotina</p>
                      <div className="mt-6 flex items-end gap-2">
                        <span className="h-14 w-10 rounded-t-full border-4 border-[#25212B] bg-[#10B8C5]" />
                        <span className="h-10 w-10 rounded-full border-4 border-[#25212B] bg-[#FFD83D]" />
                        <span className="h-16 w-10 rounded-t-full border-4 border-[#25212B] bg-white" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[26px] border-4 border-[#25212B] bg-[#25212B] p-5 text-white shadow-[7px_7px_0_#EF5B36]">
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#FFD83D]">hoje na akatu</p>
                    <p className="mt-2 text-xl font-extrabold leading-8 text-pretty">
                      Salas preparadas, materiais lúdicos e equipe alinhada para receber a criança por inteiro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="localizacao" className="border-y-4 border-[#25212B] bg-[#EF5B36]">
            <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-10 py-24 lg:grid-cols-[1fr_1fr]">
              <div>
                <SectionLabel>localização</SectionLabel>
                <h2 className="mt-7 text-5xl font-black leading-tight tracking-tight text-white">
                  Um ponto tranquilo para receber crianças e famílias.
                </h2>
                <p className="mt-6 text-xl font-medium leading-9 text-pretty text-white">
                  A Akatu fica na {ADDRESS_DISPLAY}, com uma proposta de chegada simples, acolhedora e organizada para a rotina das famílias.
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
                        <span className="text-base font-extrabold leading-6 text-[#25212B]">{item.text}</span>
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
                  <p className="mt-1 text-base font-semibold leading-6 text-neutral-600">{ADDRESS_DISPLAY}</p>
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-[#25212B] bg-[#FFD83D] px-4 py-2 text-sm font-black text-[#25212B] transition hover:-translate-y-1 active:scale-[0.98]">
                    Abrir no Maps <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="perguntas" className="bg-[#FFFDF8] px-5 py-24 sm:px-10">
            <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div className="lg:sticky lg:top-12">
                <SectionLabel>perguntas frequentes</SectionLabel>
                <h2 className="mt-7 max-w-xl text-4xl font-black leading-tight tracking-tight text-[#25212B] sm:text-5xl">
                  Respostas simples para chegar com mais segurança.
                </h2>
                <p className="mt-6 max-w-md text-lg font-medium leading-8 text-pretty text-neutral-600">
                  Algumas dúvidas aparecem antes do primeiro contato. Aqui estão os pontos principais para entender como o cuidado acontece.
                </p>
            </div>

              <div className="grid gap-5">
                {faqs.map((item, index) => {
                const isOpen = openFaqIndex === index;
                const questionId = `faq-question-${index}`;
                const answerId = `faq-answer-${index}`;

                return <article key={item.question} className="overflow-hidden rounded-[30px] border-4 border-[#25212B] bg-white p-0 shadow-[7px_7px_0_#25212B]" style={{
                  boxShadow: `7px 7px 0 ${item.color}`
                }}>
                    <h3>
                      <button id={questionId} type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenFaqIndex(currentIndex => currentIndex === index ? null : index)} className="flex min-h-16 w-full cursor-pointer items-center gap-4 px-5 py-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#10B8C5]/40 active:scale-[0.99] sm:px-6">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border-2 border-[#25212B] text-xs font-black tracking-widest text-[#25212B]" style={{
                        backgroundColor: item.color
                      }}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="min-w-0 flex-1 text-lg font-black leading-snug text-[#25212B] sm:text-xl">
                          {item.question}
                        </span>
                        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl border-2 border-[#25212B] bg-[#FFFDF8] transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                          <ChevronDown className="h-5 w-5 text-[#25212B]" />
                        </span>
                      </button>
                    </h3>
                    <div id={answerId} role="region" aria-labelledby={questionId} aria-hidden={!isOpen} className="akatu-faq-panel" style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    opacity: isOpen ? 1 : 0
                  }}>
                      <div className="overflow-hidden">
                        <div className={`akatu-faq-answer border-t-4 border-[#25212B] px-5 pb-6 pt-5 sm:px-6 ${isOpen ? 'translate-y-0 blur-0' : '-translate-y-2 blur-[2px]'}`}>
                          <p className="max-w-3xl text-lg font-medium leading-8 text-pretty text-neutral-600">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>;
              })}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t-4 border-[#25212B] bg-[#DDF2F4]">
          <div className="mx-auto max-w-[1180px] px-10 py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
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
            </div>
            <div className="mt-8 flex items-center gap-3 border-t-2 border-[#25212B]/10 pt-5">
              <span className="text-sm font-extrabold uppercase tracking-[0.1em] text-neutral-500">Made By:</span>
              <a href="https://www.hcwebsolutions.com.br/" target="_blank" rel="noreferrer" aria-label="HC Web Solutions" className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-[#25212B] bg-[#050505] p-1.5 shadow-[4px_4px_0_#10B8C5] transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#10B8C5]/40 active:scale-[0.96]">
                <img src={hcWebSolutionsIcon} alt="" className="h-full w-full rounded-xl object-cover" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>;
};
