import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    const MAX_DIST = 130;
    const PARTICLE_COUNT = 80;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(30, 111, 255, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 111, 255, ${p.opacity})`;
        ctx.fill();

        if (p.radius > 1.7) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity * 0.6})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      init();
    });
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.65 }}
    />
  );
}

const stats = [
  { value: "99.99%", label: "Uptime" },
  { value: "0", label: "Central Servers" },
  { value: "256-bit", label: "Encryption" },
  { value: "∞", label: "Redundancy" },
];

export default function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHowItWorks = () => {
    document
      .querySelector("#how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.04_258)] via-[oklch(0.10_0.035_255)] to-[oklch(0.13_0.04_260)]" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 35%, oklch(0.55 0.22 264 / 0.10) 0%, transparent 65%)",
        }}
      />
      {/* Gold horizon glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, oklch(0.73 0.12 82 / 0.35), transparent)",
          filter: "blur(2px)",
        }}
      />
      <ParticleCanvas />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center pt-28 pb-20">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-xs font-semibold uppercase tracking-widest text-brand-blue mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue badge-pulse inline-block" />
          100% On-Chain · Internet Computer Powered
        </motion.div>

        {/* Monumental headline — two deliberate lines */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="hero-headline-primary text-foreground mb-3">
            The World's Most{" "}
            <span className="gradient-text-blue">Secure Document</span>
            <br className="hidden sm:block" />
            <span className="gradient-text-blue"> Vault.</span>
          </h1>
          <p className="hero-headline-secondary">
            Powered by the{" "}
            <span className="gradient-text-gold">Internet Computer.</span>
          </p>
        </motion.div>

        {/* Single clean subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Enterprise document backup, 100% on-chain. Tamperproof by
          architecture. Sovereign by design.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            type="button"
            data-ocid="hero.request_access.button"
            onClick={scrollToContact}
            className="btn-primary-glow flex items-center gap-2.5 px-9 py-4 rounded-md text-base font-bold text-white min-w-52"
          >
            Request Access
            <ArrowRight size={17} />
          </button>
          <button
            type="button"
            data-ocid="hero.learn_how.button"
            onClick={scrollToHowItWorks}
            className="btn-outline-glow flex items-center gap-2.5 px-9 py-4 rounded-md text-base font-semibold text-foreground/90 bg-transparent min-w-52"
          >
            Learn How It Works
          </button>
        </motion.div>

        {/* Stat ticker strip — replaces plain bullet list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="stat-ticker inline-flex items-center divide-x divide-border/50 px-6 py-3 mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-5 first:pl-0 last:pr-0"
            >
              <span className="text-lg font-black gradient-text-blue leading-none">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/60"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={15} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
