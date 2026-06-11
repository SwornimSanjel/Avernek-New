import Image from "next/image";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ScrollReveal from "../ScrollReveal";
import LogoMarquee from "../LogoMarquee";
import CountUp from "../CountUp";
import AmbientBackground from "../AmbientBackground";

type SignalMetric = {
  value?: number;
  lead?: string;
  suffix: string;
  label: string;
  note: string;
};

const signalMetrics: SignalMetric[] = [
  {
    lead: "Under ",
    value: 60,
    suffix: "s",
    label: "First response target",
    note: "Designed so new inquiries get a professional answer while intent is still hot.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Inquiry capture",
    note: "Messages, forms, and WhatsApp leads are pushed into one organized system.",
  },
  {
    value: 24,
    suffix: " / 7",
    label: "Coverage window",
    note: "After-hours questions are handled instead of waiting for the next business day.",
  },
  {
    value: 1,
    suffix: " pipeline",
    label: "Follow-up visibility",
    note: "Owners see who is new, qualified, followed up, booked, or lost.",
  },
];

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

// TODO: placeholder testimonials + avatars — swap in real client quotes and
// photos (with permission) as soon as they exist. Keep quotes ≤ 2 lines.
const testimonials: Testimonial[] = [
  {
    quote: "We were losing buyers to slow replies. Now every inquiry gets an instant, professional answer.",
    name: "Suman Shrestha",
    role: "Founder, Himalayan Fit Studio",
    avatar: "https://i.pravatar.cc/96?img=16",
  },
  {
    quote: "They understood how our team works and built around it. Inquiries are finally easy to manage.",
    name: "Nisha Karki",
    role: "Operations Manager, Urban Nest Interiors",
    avatar: "https://i.pravatar.cc/96?img=17",
  },
  {
    quote: "Messages are never ignored after hours. Our team steps in only when the lead is serious.",
    name: "Rajan Maharjan",
    role: "Owner, Valley Auto Care",
    avatar: "https://i.pravatar.cc/96?img=18",
  },
  {
    quote: "Leads used to arrive with no status. Now we see exactly who needs follow-up and who is ready.",
    name: "Priya Adhikari",
    role: "Co-Founder, Luma Beauty Academy",
    avatar: "https://i.pravatar.cc/96?img=19",
  },
  {
    quote: "It filters low-intent inquiries and points our team at the people who are actually interested.",
    name: "Bikash Gurung",
    role: "Director, Summit Property Advisors",
    avatar: "https://i.pravatar.cc/96?img=20",
  },
];

function SignalMetricCard({ metric, index }: { metric: SignalMetric; index: number }) {
  return (
    <div className="signal-card h-full rounded-2xl p-7 md:p-8">
      <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate">
        Signal 0{index + 1}
      </span>
      {/* Stat numbers stay sans — the one place bold is allowed. */}
      <p className="mt-8 text-4xl font-bold text-ivory">
        {metric.lead}
        {typeof metric.value === "number" ? (
          <CountUp to={metric.value} suffix={metric.suffix} duration={1200} />
        ) : (
          metric.suffix
        )}
      </p>
      <h3 className="mt-4 text-lg font-medium text-silver">{metric.label}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{metric.note}</p>
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors duration-200 hover:border-[rgba(45,91,255,0.5)] md:p-7">
      {/* faint blueprint grid, masked so it fades toward the card bottom */}
      <span aria-hidden className="card-grid pointer-events-none absolute inset-0" />
      {/* Mach33-style oversized quote mark */}
      <span aria-hidden className="relative font-display text-6xl leading-[0.55] text-ivory">
        &rdquo;
      </span>
      <blockquote className="relative mt-4 line-clamp-2 text-sm leading-relaxed text-silver md:text-[15px]">
        {t.quote}
      </blockquote>
      <figcaption className="relative mt-auto flex items-center gap-3 pt-6">
        <Image
          src={t.avatar}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-full border border-line object-cover"
        />
        <span>
          <span className="block text-sm font-medium text-ivory">{t.name}</span>
          <span className="block text-xs text-slate">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Proof() {
  return (
    <section id="proof" className="relative scroll-mt-24 overflow-hidden bg-navy-deep py-24 md:py-32">
      <AmbientBackground variant="section" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Proof"
          title={
            <>
              A system built for <em className="italic">cleaner</em> inquiry
              handling.
            </>
          }
          description="The operating standards built into every system we ship."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signalMetrics.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={(i % 4) * 0.06} className="h-full">
              <SignalMetricCard metric={metric} index={i} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="relative mt-8 overflow-hidden rounded-2xl border border-line bg-panel/75 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-9">
          <div className="relative flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-accent/10 font-medium text-accent-glow">
              A
            </span>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate">
              Our promise
            </p>
          </div>
          <p className="relative mt-4 max-w-3xl text-sm leading-relaxed text-ivory/90">
            We guarantee the parts we control: the system live, faster first replies, lead tracking,
            and clear reporting. Sales still depend on your offer, market, and follow-up.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-20 text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate">
            Testimonials
          </span>
          <h3 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-normal leading-[1.05] text-ivory md:text-[2.5rem]">
            What teams are <em className="italic">saying</em> once Avernik
            handles the flow.
          </h3>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={(i % 3) * 0.08} className="h-full">
              <TestimonialCard t={t} />
            </ScrollReveal>
          ))}
        </div>

      </Container>

      <div className="relative mt-20 overflow-hidden border-y border-line bg-[#050814]/60 py-10 md:mt-28 md:py-12">
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2d5bff]/45 to-transparent"
        />
        <p className="relative mb-7 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-slate">
          Built on technology you already trust
        </p>
        <LogoMarquee />
      </div>
    </section>
  );
}
