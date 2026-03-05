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
  gold: boolean;
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
    const MAX_DIST = 120;
    const PARTICLE_COUNT = 75;

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
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.4 + 0.4,
          opacity: Math.random() * 0.45 + 0.15,
          gold: Math.random() < 0.12,
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

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.2;
            const isGoldLine = particles[i].gold || particles[j].gold;
            ctx.beginPath();
            ctx.strokeStyle = isGoldLine
              ? `rgba(200, 163, 68, ${alpha * 0.7})`
              : `rgba(82, 130, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(200, 163, 68, ${p.opacity})`
          : `rgba(82, 130, 255, ${p.opacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}

const stats = [
  { value: "99.99%", label: "Uptime Guarantee" },
  { value: "0", label: "Central Servers" },
  { value: "256-bit", label: "Encryption" },
  { value: "∞", label: "Redundancy" },
];

export default function HeroSection() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToHowItWorks = () =>
    document
      .querySelector("#how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.07_0.030_252)] via-[oklch(0.09_0.025_250)] to-[oklch(0.11_0.030_254)]" />
      <div className="absolute inset-0 grid-pattern opacity-35" />
      {/* Radial glow — blue center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 50% at 50% 30%, oklch(0.52 0.20 262 / 0.09) 0%, transparent 68%)",
        }}
      />
      {/* Gold horizon line */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "28%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "55%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, oklch(0.74 0.135 83 / 0.30), transparent)",
          filter: "blur(1.5px)",
        }}
      />
      <ParticleCanvas />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center pt-28 pb-20">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/22 bg-primary/[0.07] text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue badge-pulse inline-block" />
          100% On-Chain · Internet Computer Protocol
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-7"
        >
          <h1 className="hero-headline font-display">
            <span className="text-foreground block">
              Enterprise Document Security.
            </span>
            <span className="gradient-text-blue block mt-1">
              100% On-Chain.
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A sovereign-grade document vault powered by the Internet Computer.
          Tamperproof by architecture. Sovereign by design. No cloud. No
          compromise.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            type="button"
            data-ocid="hero.request_access.primary_button"
            onClick={scrollToContact}
            className="btn-primary-glow flex items-center gap-2.5 px-9 py-4 rounded text-base font-bold text-white min-w-[200px]"
          >
            Request Access
            <ArrowRight size={16} />
          </button>
          <button
            type="button"
            data-ocid="hero.how_it_works.secondary_button"
            onClick={scrollToHowItWorks}
            className="btn-outline-glow flex items-center gap-2.5 px-9 py-4 rounded text-base font-semibold text-foreground/85 min-w-[200px]"
          >
            See How It Works
          </button>
        </motion.div>

        {/* Stat ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.7 }}
          className="stat-ticker inline-flex items-center divide-x divide-border/40 px-6 py-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-5 first:pl-0 last:pr-0"
            >
              <span className="text-base font-black gradient-text-blue leading-none">
                {stat.value}
              </span>
              <span className="text-[9.5px] uppercase tracking-[0.14em] text-muted-foreground mt-1 font-medium whitespace-nowrap">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/50"
      >
        <span className="text-[9px] uppercase tracking-[0.18em]">Scroll</span>
        <ChevronDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
