import { useEffect, useRef, useState } from "react";
import { GraduationCap, Users, CalendarDays, Code2, Quote } from "lucide-react";

function AnimatedCounter({ to = 100, durationMs = 1200 }) {
  const [value, setValue] = useState(0);
  const frameRef = useRef(0);
  const startRef = useRef(0);
  const toRef = useRef(to);

  useEffect(() => {
    toRef.current = to;
  }, [to]);

  useEffect(() => {
    const start = performance.now();
    startRef.current = start;
    const step = (now) => {
      const elapsed = now - startRef.current;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * toRef.current));
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [durationMs]);

  return <span>{value.toLocaleString()}</span>;
}

const features = [
  { title: "Hands-on Workshops", desc: "Build real projects guided by mentors.", Icon: Code2 },
  { title: "Mentorship", desc: "Grow faster with supportive guidance.", Icon: GraduationCap },
  { title: "Community", desc: "Find peers who lift you up.", Icon: Users },
  { title: "Events", desc: "Talks, hack nights, opportunities.", Icon: CalendarDays },
];

const testimonials = [
  {
    quote:
      "The sessions boosted my skills and confidence. I landed an internship thanks to JU-ICT Girls!",
    name: "Amina Ahmed",
    role: "Web Track",
    avatar:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=256&auto=format&fit=crop",
  },
  {
    quote: "I found mentors and friends who truly care about my growth in tech.",
    name: "Sara Ibrahim",
    role: "Data Track",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
  },
  {
    quote: "Great workshops and a welcoming community — highly recommended!",
    name: "Hawa Ali",
    role: "Mobile Track",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop",
  },
];

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {testimonials.map((t) => (
          <div key={t.name} className="w-full shrink-0 px-2">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <Quote className="mb-3 h-6 w-6 text-primary" />
              <p className="mb-4 text-base text-foreground">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? "bg-primary" : "bg-muted"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-secondary/10 to-transparent" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Empowering women in tech at Jijiga University
            </div>
            <h1 className="mb-4 mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Learn. Build. Lead with
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> JU-ICT Girls</span>
            </h1>
            <p className="mb-6 text-lg text-muted-foreground">
              Join workshops, find mentors, and access real opportunities to grow your career.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/join" className="rounded-md bg-primary px-5 py-2.5 text-primary-foreground shadow hover:opacity-90">Join us</a>
              <a href="/events" className="rounded-md border px-5 py-2.5 hover:bg-muted">Upcoming Events</a>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop" alt="Students collaborating with laptops" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/30" />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-xl border bg-card p-4 shadow md:block">
              <div className="text-2xl font-bold text-primary"><AnimatedCounter to={300} durationMs={1400} />+</div>
              <div className="text-xs text-muted-foreground">Members and growing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl">What we offer</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">Practical learning, supportive mentorship, and real-world opportunities designed for you.</p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {features.map(({ title, desc, Icon }) => (
              <div key={title} className="group rounded-xl border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-secondary/15">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 rounded-2xl border bg-card p-6 text-center sm:grid-cols-3">
            <div>
              <div className="text-3xl font-extrabold text-primary"><AnimatedCounter to={25} />+</div>
              <div className="text-sm text-muted-foreground">Workshops per year</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-primary"><AnimatedCounter to={15} />+</div>
              <div className="text-sm text-muted-foreground">Industry speakers</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-primary"><AnimatedCounter to={300} />+</div>
              <div className="text-sm text-muted-foreground">Active members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl">What members say</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">Real stories from our community.</p>
          <TestimonialsCarousel />
        </div>
      </section>
    </main>
  );
}


