import { motion } from 'framer-motion';
import { Home, Building2, Zap, Lightbulb, ShieldCheck, Cpu } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Wiring',
    desc: 'Safe installations, panel upgrades, outlets, and code-compliant rewiring.'
  },
  {
    icon: Building2,
    title: 'Commercial Projects',
    desc: 'Power distribution, equipment circuits, and ongoing maintenance.'
  },
  {
    icon: Zap,
    title: 'Emergency Repairs',
    desc: 'Rapid response for outages, shorts, and safety hazards—24/7 availability.'
  },
  {
    icon: Lightbulb,
    title: 'Lighting Installation',
    desc: 'Indoor, outdoor, and landscape lighting with energy-efficient solutions.'
  },
  {
    icon: Cpu,
    title: 'Smart Home Setup',
    desc: 'Switches, thermostats, and integrated automation for modern living.'
  },
];

export default function AboutAndServices() {
  return (
    <section id="about" className="relative bg-neutral-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_-10%,rgba(234,179,8,0.15),transparent_45%),radial-gradient(circle_at_80%_110%,rgba(255,255,255,0.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* About */}
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_0_40px_rgba(234,179,8,0.08)]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300">
              <ShieldCheck className="h-4 w-4" />
              Licensed & Insured
            </div>
            <h2 className="mt-4 text-3xl font-bold">Trusted Electricians for Homes & Businesses</h2>
            <p className="mt-3 text-white/80">
              With decades of combined experience, our certified team delivers safe, efficient, and code-compliant electrical solutions. From smart upgrades to critical repairs, we power every project with precision and care.
            </p>
            <ul className="mt-4 grid gap-2 text-white/80 sm:grid-cols-2">
              <li className="rounded-md bg-white/5 px-3 py-2">• 10+ years of experience</li>
              <li className="rounded-md bg-white/5 px-3 py-2">• Same-day emergency service</li>
              <li className="rounded-md bg-white/5 px-3 py-2">• OSHA & NEC compliant</li>
              <li className="rounded-md bg-white/5 px-3 py-2">• Satisfaction guaranteed</li>
            </ul>
          </motion.div>

          <motion.div
            id="services"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-black/40 p-8"
          >
            <h3 className="text-2xl font-bold">Our Services</h3>
            <p className="mt-1 text-white/70">Expert solutions with clear pricing and clean workmanship.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-inner shadow-black/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-yellow-400/15 ring-1 ring-yellow-400/30">
                      <Icon className="h-5 w-5 text-yellow-300" />
                    </div>
                    <h4 className="font-semibold">{title}</h4>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
