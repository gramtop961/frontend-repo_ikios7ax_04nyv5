import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { from: 'bot', text: 'Hi! Need help with a service? Ask me anything.' },
  ]);
  const [chatInput, setChatInput] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return alert('Please fill out all fields.');
    setSending(true);
    // Simulate sending
    setTimeout(() => {
      setSending(false);
      alert('Thanks! We\'ll get back to you shortly.');
      setForm({ name: '', email: '', message: '' });
    }, 900);
  };

  const sendChat = () => {
    if (!chatInput.trim()) return;
    const msg = chatInput.trim();
    setChatMessages((prev) => [...prev, { from: 'user', text: msg }]);
    setChatInput('');
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          from: 'bot',
          text: 'Thanks for reaching out! For quotes, share your address and preferred time.',
        },
      ]);
    }, 600);
  };

  return (
    <section id="contact" className="relative bg-neutral-950 py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(234,179,8,0.06)_30%,rgba(255,255,255,0)_100%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
        {/* Contact info + map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold">Get in Touch</h3>
          <p className="text-white/80">Fast responses. Clear communication. Reliable scheduling.</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <a href="tel:+1234567890" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
              <Phone className="h-5 w-5 text-yellow-300" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:hello@voltpro.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
              <Mail className="h-5 w-5 text-yellow-300" />
              <span>hello@voltpro.com</span>
            </a>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-2">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=New%20York&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Form + chat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="space-y-6"
        >
          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <h4 className="text-xl font-semibold">Request a Quote</h4>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none ring-2 ring-transparent transition focus:ring-yellow-400/60"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none ring-2 ring-transparent transition focus:ring-yellow-400/60"
                  placeholder="jane@email.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none ring-2 ring-transparent transition focus:ring-yellow-400/60"
                placeholder="Tell us about your project"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black ring-1 ring-yellow-300 transition hover:brightness-105 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {sending ? 'Sending...' : 'Send Request'}
            </button>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 text-sm font-semibold text-yellow-300">Live Chat</div>
            <div className="h-40 overflow-y-auto rounded-lg bg-black/40 p-3">
              {chatMessages.map((m, i) => (
                <div key={i} className={`mb-2 max-w-[85%] rounded-lg px-3 py-2 text-sm ${m.from === 'bot' ? 'bg-white/5 text-white/80' : 'ml-auto bg-yellow-400/90 text-black'}`}>
                  {m.text}
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendChat()}
                placeholder="Type a message..."
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none ring-2 ring-transparent transition focus:ring-yellow-400/60"
              />
              <button onClick={sendChat} className="rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-black ring-1 ring-yellow-300 hover:brightness-105">
                Send
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
