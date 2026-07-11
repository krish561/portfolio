import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- DATA ---
const adjectives = ["disciplined", "little shy", "bit anxious", "curious", "maybe lazy", "creative"];

const hobbies = [
  {
    title: "Trying Morning Run",
    text: "There's something special about running in the morning which i am not able to do everyday. I'm not an athlete, but it makes me feel truly peaceful (⊗`◟´⊗). I also enjoy fitness but well laziness takes over sometimes (〜￣▽￣)〜",
    img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    bgPos: "object-center"
  },
  {
    title: "Otaku & Button Masher",
    text: "Manga, manhwa, manhua, light novels — I consume them all 📚. Outside reading, used to main Apex Legends until my laptop had other plans 💀. Side catalogue says more though: Sekiro, both Hollow Knights, Nine Sols, Lies of P — apparently I enjoy being punished. Also a GTA/Hitman veteran and proud SNES-era appreciator. Waiting on a new setup. 🎮",
    img: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    bgPos: "object-top"
  },
  {
    title: "Linux Ricing Addict",
    text: "Used to distro hop daily! 🐧 Settled on Arch Linux with Hyprland/Wayland now — fully terminal-first, custom Waybar, Ghostty, Neovim. Built my own NieR: Automata theme for it. The terminal is my second home. (Happy Tux Noises)",
    img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    bgPos: "object-center"
  },
  {
    title: "Local LLM Tinkerer",
    text: "Love running LLMs locally for fun! 🤖 Though lacking hardware now due to broken old GPU and being forced to use an old laptop... (T_T) send compute.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    bgPos: "object-center"
  }
];

const Personal = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % adjectives.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      <Navbar />

      <motion.main
        className="relative z-10 px-6 max-w-7xl mx-auto pt-12 pb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        {/* --- HERO --- */}
        <section className="mb-32 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 px-4">
          <div className="text-center md:text-left">
            <h1 className="text-6xl md:text-8xl font-cute font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Hello again?</span>
            </h1>
            <div className="text-3xl md:text-5xl font-bold mb-4 text-gray-400">
              My name is{' '}
              <motion.span
                className="inline-block text-white cursor-pointer"
                whileHover={{ x: [0, -5, 5, -5, 5, 0], y: [0, -5, 5, -5, 5, 0], transition: { duration: 0.2, repeat: Infinity } }}
              >
                Krish
              </motion.span>
            </div>
            <div className="text-2xl md:text-4xl text-gray-500 font-medium mb-8 flex flex-col md:flex-row gap-2 items-center md:items-baseline justify-center md:justify-start">
              <span>I am</span>
              <span className="h-[1.2em] overflow-hidden flex flex-col justify-end">
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-emerald-400 font-cute font-bold text-4xl md:text-5xl"
                >
                  {adjectives[index]}
                </motion.span>
              </span>
              <span>Krish</span>
            </div>
            <p className="text-gray-600 text-sm md:text-base font-mono">Built this website with love ❤️🍕🚀</p>
          </div>

          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <img
              src="/profile_pic.jpg"
              alt="Krish"
              className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl z-10"
            />
          </motion.div>
        </section>

        {/* --- HOBBIES --- */}
        <section className="mb-40">
          <h2 className="text-4xl font-cute font-bold mb-12 text-center md:text-left">Current Vibes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {hobbies.map((hobby, i) => (
              <motion.div
                key={i}
                className={`${hobby.colSpan} h-[400px] rounded-[2.5rem] relative overflow-hidden group border border-white/10`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img src={hobby.img} alt={hobby.title} className={`absolute inset-0 w-full h-full object-cover ${hobby.bgPos} transition-transform duration-700 group-hover:scale-110 opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-cute font-bold text-white mb-3 leading-tight">{hobby.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">{hobby.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- MY SETUP --- */}
        <section className="mb-40">
          <h2 className="text-4xl font-cute font-bold mb-4 text-center md:text-left">My Setup</h2>
          <p className="text-gray-500 font-mono text-sm mb-12 text-center md:text-left">Arch Linux · Hyprland · Wayland · Terminal-first</p>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="https://github.com/krish561/Omarchy-nier-theme"
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-emerald-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(52,211,153,0.15)]"
              whileHover={{ y: -6 }}
            >
              <img
                src="https://github.com/krish561/Omarchy-nier-theme/raw/public/preview.png"
                alt="NieR Automata Omarchy Theme"
                className="w-full h-72 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-xs font-mono text-emerald-400 tracking-widest uppercase mb-2">Omarchy Theme · CSS / Lua / Shell</div>
                <h3 className="text-3xl font-cute font-black text-white mb-2 group-hover:text-emerald-300 transition-colors">NieR-Light</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  NieR: Automata inspired light theme for Omarchy — parchment tones, ink typography, YoRHa palette across Waybar, Hyprlock, Ghostty, btop, Neovim, and GTK.
                </p>
              </div>
            </motion.a>

            <div className="bg-[#0a0a0a] rounded-[2.5rem] border border-white/10 p-10 flex flex-col justify-between">
              <div>
                <span className="text-gray-500 text-xs font-mono uppercase tracking-widest block mb-6">Daily Driver</span>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { label: "Arch Linux", color: "border-blue-400/40 text-blue-300" },
                    { label: "Hyprland", color: "border-cyan-400/40 text-cyan-300" },
                    { label: "Wayland", color: "border-teal-400/40 text-teal-300" },
                    { label: "Ghostty", color: "border-emerald-400/40 text-emerald-300" },
                    { label: "Neovim", color: "border-green-400/40 text-green-300" },
                    { label: "Fish shell", color: "border-yellow-400/40 text-yellow-300" },
                    { label: "Waybar", color: "border-orange-400/40 text-orange-300" },
                    { label: "swaync", color: "border-pink-400/40 text-pink-300" },
                    { label: "btop", color: "border-red-400/40 text-red-300" },
                  ].map((item) => (
                    <span key={item.label} className={`px-4 py-2 rounded-xl text-sm font-bold border bg-white/5 ${item.color} cursor-default`}>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-gray-500 text-xs font-mono uppercase tracking-widest block mb-4">Machine</span>
                <div className="text-2xl font-cute font-black text-white">Mini PC</div>
                <div className="text-gray-500 text-sm font-mono mt-1">Personal · Omarchy/Hyprland</div>
                <div className="text-2xl font-cute font-black text-white mt-4">Laptop</div>
                <div className="text-gray-500 text-sm font-mono mt-1">Work · Fedora</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- MORE ABOUT ME --- */}
        <section className="mb-40">
          <h2 className="text-4xl font-cute font-bold mb-12 text-center md:text-left">More About Me</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* COL 1 ROW 1 — Music */}
            <div className="h-[420px] bg-[#0a0a0a] rounded-[2rem] border border-white/10 p-7 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="text-pink-400 font-bold uppercase tracking-widest text-xs mb-1">Music</div>
                <div className="text-2xl font-cute font-black text-white mb-3">Atmosphere Over Beats</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Daft Punk, Kavinsky, Justice — the French electronic holy trinity. Tame Impala and Empire of the Sun for when the mood needs to go cosmic. Fleet Foxes when it's raining. Snail's House because yes. AR Rahman and Mohit Chauhan because some feelings only exist in that frequency. Occasional Kanye. Music that sounds like a place, not just a sound. 🎵
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Daft Punk", "Kavinsky", "Justice", "Tame Impala", "Fleet Foxes", "Snail's House", "AR Rahman"].map(a => (
                  <span key={a} className="px-3 py-1 bg-white/5 border border-pink-400/20 text-pink-300 rounded-full text-xs font-bold">{a}</span>
                ))}
              </div>
            </div>

            {/* COL 2 ROW 1 — Computer/IT */}
            <div className="h-[420px] rounded-[2rem] overflow-hidden border border-white/10 relative group">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
                alt="Computer IT"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
              <div className="relative z-10 p-7 h-full flex flex-col justify-between">
                <div>
                  <div className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-1">Computer, IT</div>
                  <div className="text-2xl font-cute font-black text-white mb-3">Interest, Work</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    MSc CS (Osmania University, 2024) building a career in backend engineering. Projects include a rootless container runtime in C & Java that beats Docker on startup time, a GraphRAG Q&A system with pgvector and local LLMs, and a Rust TUI brightness controller for Wayland. Currently supporting IT infra at Invesco while actively seeking a software engineering role.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Java", "Rust", "Spring Boot", "PostgreSQL", "Linux"].map(t => (
                    <span key={t} className="px-3 py-1 bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 rounded-full text-xs font-bold">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* COL 3 ROW 1 — Volunteer */}
            <div className="h-[420px] bg-[#0a0a0a] rounded-[2rem] border border-white/10 p-7 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-1">Volunteer</div>
                <div className="text-2xl font-cute font-black text-white mb-3">Soham Academy</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Visited government schools across Hyderabad under Soham Academy of Human Excellence — an NGO working to prepare underprivileged kids for a better future. Ran hands-on electronics and basic robotics practicals to spark early curiosity in tech. Small thing, but watching kids light up around circuits is something else entirely. 🤖
                </p>
              </div>
              <a
                href="https://sohamacademy.org"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-xs font-mono text-yellow-400 hover:text-yellow-300 transition-colors relative z-10"
              >
                sohamacademy.org →
              </a>
            </div>

            {/* COL 1 ROW 2 — Otaku */}
            <div className="h-[420px] rounded-[2rem] overflow-hidden border border-white/10 relative group">
              <img
                src="https://images.unsplash.com/photo-1614294149010-950b698f72c0?q=80&w=1000&auto=format&fit=crop"
                alt="Manga Games"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
              <div className="relative z-10 p-7 h-full flex flex-col justify-end">
                <div className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-1">Manga, Games</div>
                <div className="text-2xl font-cute font-black text-white mb-3">Otaku Mode: ON</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Manga, manhwa, manhua, light novels — I consume them all. On the gaming side, used to main Apex Legends until my laptop retired itself. Side catalogue: Sekiro, both Hollow Knights, Nine Sols, Lies of P — apparently I enjoy games that punish you for breathing wrong. GTA/Hitman veteran and proud SNES-era appreciator. 🎮
                </p>
              </div>
            </div>

            {/* COL 2 ROW 2 — LeetCode */}
            <LeetCodeCard />

            {/* COL 3 ROW 2 — Foodie */}
            <div className="h-[420px] rounded-[2rem] overflow-hidden border border-white/10 relative group">
              <img
                src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1000&auto=format&fit=crop"
                alt="Hyderabadi Food"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
              <div className="relative z-10 p-7 h-full flex flex-col justify-end">
                <div className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-1">Diet</div>
                <div className="text-2xl font-cute font-black text-white mb-3">Hyderabadi Foodie</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Born in Mumbai but raised in Hyderabad since age 10 — unapologetically in love with Hyderabadi cuisine. Biryani is a comfort food. I enjoy discovering local eateries and home-cooked dishes that celebrate slow-cooked flavours and bold spices. Food is community and culture: how I relax after long coding sessions and connect with friends. 🍛
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* --- OUTRO --- */}
        <section className="text-center py-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <h2 className="text-5xl md:text-8xl font-cute font-black mb-4">To the Person Visiting</h2>
            <div className="text-6xl md:text-9xl font-cute font-black text-emerald-400 animate-pulse">Thank You</div>
          </motion.div>
        </section>

      </motion.main>

      <Footer />
    </div>
  );
};

// --- LEETCODE CARD ---
const LeetCodeCard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://alfa-leetcode-api.onrender.com/krish165/profile')
      .then(r => r.json())
      .then(d => setData(d))
      .catch(() => setError(true));
  }, []);

  return (
    <div className="h-[420px] bg-[#0a0a0a] rounded-[2rem] border border-white/10 p-7 flex flex-col justify-between">
      <div>
        <div className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-1">Problem Solving</div>
        <div className="text-2xl font-cute font-black text-white mb-4">LeetCode</div>

        {error && (
          <p className="text-gray-500 text-sm">Couldn't load stats right now.</p>
        )}
        {!data && !error && (
          <p className="text-gray-500 text-sm font-mono animate-pulse">Loading stats...</p>
        )}
        {data && (
          <>
            <div className="text-6xl font-cute font-black text-white mb-1">
              {data.totalSolved}
            </div>
            <p className="text-gray-500 text-xs font-mono mb-6">problems solved</p>
            <div className="space-y-4">
              {[
                { label: "Easy",   val: data.easySolved,   total: data.totalEasy,   color: "bg-emerald-400" },
                { label: "Medium", val: data.mediumSolved, total: data.totalMedium, color: "bg-yellow-400" },
                { label: "Hard",   val: data.hardSolved,   total: data.totalHard,   color: "bg-red-400" },
              ].map(({ label, val, total, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-gray-400">{label}</span>
                    <span className="text-gray-300">{val} / {total}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full ${color} rounded-full`} style={{ width: `${Math.round((val / total) * 100)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <a
        href="https://leetcode.com/u/krish165"
        target="_blank"
        rel="noreferrer"
        className="text-xs font-mono text-yellow-400 hover:text-yellow-300 transition-colors"
      >
        leetcode.com/u/krish165 →
      </a>
    </div>
  );
};

export default Personal;