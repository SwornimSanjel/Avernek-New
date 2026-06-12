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
  /** Bold review-style headline, like a Trustpilot title. */
  title: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  /** Solid muted avatar circle — varied hues so the wall reads genuine. */
  tone: string;
};

// TODO: placeholder testimonials — swap in real client quotes (with
// permission) as soon as they exist.
const testimonials: Testimonial[] = [
  {
    title: "Sceptical at first — worth it within three weeks",
    quote:
      "Honestly I was sceptical. We had tried two other tools before and both times it created more work than it saved. What was different here is they actually mapped out how our clinic handles new patient inquiries before touching anything. Three weeks in and our receptionist stopped having to manually chase every Facebook message. That alone was worth it.",
    name: "Aashish",
    role: "Owner, Patan Dental Clinic · Lalitpur",
    initials: "AP",
    tone: "bg-[#C9B47C] text-[#3A3214]",
  },
  {
    title: "We are usually the first conversation now",
    quote:
      "We sell kitchen equipment to hotels and restaurants and most serious buyers inquiry on WhatsApp or our site late in the evening. By morning they have already called two other suppliers. Since we started using Avernik our response goes out immediately and we are usually the first conversation they have. It has changed how procurement managers think of us.",
    name: "Suraj",
    role: "Managing Director, Makalu Kitchen Solutions · Kathmandu",
    initials: "SM",
    tone: "bg-[#8FA98F] text-[#22301F]",
  },
  {
    title: "Festival season without the burnout",
    quote:
      "Dashain and Tihar our inquiry volume doubles but our team size does not. Last year we missed a lot of leads just because nobody could keep up. This year with Avernik handling the first response and organising everything by urgency, my team actually managed the season without burning out. We closed more that fortnight than the same period last year.",
    name: "Roshani",
    role: "Founder, Kreasi Event Studio · Kathmandu",
    initials: "RK",
    tone: "bg-[#B58FA8] text-[#3A2433]",
  },
  {
    title: "Finally a proper admissions pipeline",
    quote:
      "I run the admissions side of things and before this every cycle was just chaos. Students would fill the form and then we had no clear picture of who had been called, who was still deciding, who had already joined somewhere else. Now there is a proper pipeline. I know exactly where each applicant stands and my counsellors spend time on the ones who are actually close to enrolling.",
    name: "Bibek",
    role: "Admissions Head, Evergreen College · Pokhara",
    initials: "BT",
    tone: "bg-[#7B86C8] text-[#1D2247]",
  },
  {
    title: "Every inquiry source in one place",
    quote:
      "Land and apartment inquiries come from everywhere — Facebook, Hamrobazar, direct calls — and for a long time we had no single place to see all of it. We were duplicating follow-ups, missing some entirely. The system Avernik built pulls everything together and flags who is serious. My agents stopped wasting afternoons on people who were just checking prices.",
    name: "Nirajan",
    role: "Director, Narayani Properties · Chitwan",
    initials: "NK",
    tone: "bg-[#6E97B8] text-[#16293A]",
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
    <figure className="relative flex h-full flex-col pt-8">
      {/* Mach33-style speech-bubble chip: a rounded tile that juts up half
          above the card's top-left corner, holding chunky filled quote marks. */}
      <span
        aria-hidden
        className="absolute left-0 top-0 z-10 flex h-[60px] w-[68px] items-center justify-center rounded-2xl rounded-bl-none bg-[#0c1535]"
      >
        <svg viewBox="0 0 38 28" className="h-6 w-8 text-ivory" fill="currentColor">
          <path d="M0 28V15.5C0 6.8 5.2 1.3 14 0l1.2 4.4C9.6 6 6.6 9 6.6 13.4H13V28H0zm22 0V15.5C22 6.8 27.2 1.3 36 0l1.2 4.4C31.6 6 28.6 9 28.6 13.4H35V28H22z" />
        </svg>
      </span>
      <div className="relative flex flex-1 flex-col overflow-hidden rounded-2xl rounded-tl-none border border-[rgba(125,148,230,0.08)] bg-[#0c1535] p-6 pt-9 shadow-[0_26px_64px_-38px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(45,91,255,0.3)]">
        {/* faint blueprint grid, masked so it fades toward the card bottom */}
        <span aria-hidden className="card-grid pointer-events-none absolute inset-0" />
        <h4 className="relative text-[15px] font-semibold leading-snug text-ivory">
          {t.title}
        </h4>
        <blockquote className="relative mt-2 text-[13.5px] leading-relaxed text-silver">
          {t.quote}
        </blockquote>
        <figcaption className="relative mt-auto flex items-center gap-3 pt-6">
          <span
            aria-hidden
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold ${t.tone}`}
          >
            {t.initials}
          </span>
          <span>
            <span className="block text-[13.5px] font-semibold text-ivory">{t.name}</span>
            <span className="block text-xs text-slate">{t.role}</span>
          </span>
        </figcaption>
      </div>
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
          <h3 className="mx-auto mt-5 max-w-3xl font-sans text-3xl font-medium leading-[1.05] text-ivory md:text-[2.5rem]">
            What our clients are <em className="italic">saying.</em>
          </h3>
        </ScrollReveal>

        <div className="mt-10 grid gap-x-5 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
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
