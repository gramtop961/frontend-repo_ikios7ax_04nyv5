import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow gradients overlay for energy vibes (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-20 h-80 w-80 rounded-full bg-yellow-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 text-white">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Powering Your World with Expertise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
            className="mt-4 text-lg text-white/80"
          >
            Reliable residential and commercial electricians delivering safe installations, smart upgrades, and rapid emergency repairs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black shadow-[0_0_30px_rgba(234,179,8,0.25)] ring-1 ring-yellow-300 transition hover:brightness-105"
            >
              Book a Service
              <span className="relative block h-[2px] w-6 overflow-hidden rounded-full bg-black/40">
                <span className="absolute inset-0 translate-x-[-100%] bg-black/80 transition group-hover:translate-x-0" />
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Get a Free Quote
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center text-white/70"
        >
          <span className="text-xs">Scroll</span>
          <span className="mt-1 h-8 w-[2px] animate-bounce rounded-full bg-yellow-400" />
        </motion.div>
      </div>
    </section>
  );
}
