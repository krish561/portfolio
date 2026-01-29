import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- DATA ---
const adjectives = ["disciplined", "shy", "anxious", "curious", "lazy", "creative"];

const hobbies = [
  {
    title: "Trying Morning Run",
    text: "There's something special about running in the morning which i am not able to do everday. I'm not an athlete, but it makes me feel truly peaceful (⊗`◟´⊗). I also enjoy fitness but well laziness takes over sometimes (〜￣▽￣)〜",
    img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1000&auto=format&fit=crop", // Morning Run
    colSpan: "md:col-span-1",
    bgPos: "object-center"
  },
  {
    title: "Enjoyer of good books",
    text: "I enjoy many pastimes, from video games to movies and music, but reading light novels is how I spend most of my time lately. Also cultured person in regards of animes, games.",
    img: "https://images.unsplash.com/photo-1526243741027-cdbe71e72acd?q=80&w=1000&auto=format&fit=crop", // Books/Anime mix vibe
    colSpan: "md:col-span-2",
    bgPos: "object-top"
  },
  {
    title: "Linux Distro Hopping",
    text: "Used to distro hop daily! 🐧 Now I've struck a love with Fedora GNOME. It just works™ (mostly). The terminal is my second home. (Happy Tux Noises)",
    img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop", // Linux/Tech
    colSpan: "md:col-span-2",
    bgPos: "object-center"
  },
  {
    title: "Local LLM Tinkerer",
    text: "Love running LLMs locally for fun! 🤖 Though lacking hardware now due to broken old GPU and being forced to use an old laptop... (T_T) send compute.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop", // AI/Chip
    colSpan: "md:col-span-1",
    bgPos: "object-center"
  }
];

const components = [
  {
    id: 1,
    small: "Computer, IT",
    big: "Interest, Work",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    content: "Hi — I’m Krish Singh, an MSc in Computer Science (Osmania University, 2024) and a passionate beginner in backend development. I’ve focused on Java-based systems, building production-style Spring Boot microservices and REST APIs (E-Commerce Microservices, Delivery Tracking, Inventory Management) and containerizing them with Docker for consistent deployment. I work comfortably with PostgreSQL/MySQL, Hibernate/JPA, and Linux development environments (Fedora / IntelliJ). I’m still a fresher actively looking for my first role or internship — I love designing clean architectures, optimizing database queries, and learning performance tuning. I’m currently sharpening my Spring Framework skills and practising DSA on LeetCode to level up for backend positions. (See my projects and links on my resume/GitHub.)"
  },
  {
    id: 2,
    small: "Books",
    big: "Fiction Novels, Manga",
    img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop",
    content: "An avid reader of fiction, I lean toward imaginative and character-driven stories — everything from contemporary novels to speculative sci-fi. I’m also into manga and manhwa; their visual storytelling and worldbuilding feed my creativity and help me think about UX and narrative flow in apps. Outside books I’m a big fan of sci-fi movies and films that explore technology and human relationships — they inspire the kinds of projects I want to build. Reading is both a hobby and a way I learn new concepts I later try to model in small projects."
  },
  {
    id: 3,
    small: "Diet",
    big: "Hyderabadi Foodie",
    img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1000&auto=format&fit=crop",
    content: "Born in Mumbai but raised in Hyderabad since age 10, I’m unapologetically in love with Hyderabadi cuisine — biryani is a comfort food for me. I enjoy discovering local eateries and home-cooked dishes that celebrate slow-cooked flavours and bold spices. Food for me is community and culture: it’s how I relax after long coding sessions and how I connect with friends. Expect occasional food photos and quick write-ups on my favourite local spots on this portfolio."
  }
];

const Personal = () => {
  const [index, setIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Word Cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % adjectives.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden">
      {/* BACKGROUND GRID (Same as Home) */}
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
        
{/* --- HERO SECTION --- */}
        <section className="mb-32 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 px-4">
          
          {/* TEXT CONTENT */}
          <div className="text-center md:text-left">
            <h1 className="text-6xl md:text-8xl font-cute font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Hello again?</span>
            </h1>
            
            <div className="text-3xl md:text-5xl font-bold mb-4 text-gray-400">
              My nickname is{' '}
              <motion.span 
                className="inline-block text-white cursor-pointer"
                whileHover={{ 
                  x: [0, -5, 5, -5, 5, 0],
                  y: [0, -5, 5, -5, 5, 0],
                  transition: { duration: 0.2, repeat: Infinity }
                }}
              >
                Kishu
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
              <span>Kishu</span>
            </div>

            <p className="text-gray-600 text-sm md:text-base font-mono">
              Built this website with love ❤️🍕🚀
            </p>
          </div>

          {/* PROFILE IMAGE */}
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
             {/* Neon Glow behind image */}
             <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
             
             {/* The Image */}
             {/* Make sure profile_pic.jpg (or png) is in your public folder */}
             <img 
               src="/profile_pic.jpg" 
               alt="Kishu" 
               className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl z-10"
             />
          </motion.div>

        </section>

        {/* --- HOBBIES MASONRY --- */}
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
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                    {hobby.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- COMPONENTS OF LIFE (EXPANDABLE) --- */}
        <section className="mb-40">
          <h2 className="text-4xl font-cute font-bold mb-12 text-center md:text-left">Components of Kishu's Life</h2>
          <div className="grid md:grid-cols-3 gap-6 h-[600px]">
            {components.map((item) => (
              <motion.div
                key={item.id}
                layoutId={`card-${item.id}`}
                onClick={() => setSelectedId(item.id)}
                className="relative rounded-[2.5rem] overflow-hidden cursor-pointer group border border-white/10"
                whileHover={{ y: -10 }}
              >
                <motion.img 
                  src={item.img} 
                  alt={item.big}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                
                <div className="absolute top-8 left-8 right-8">
                   <motion.div className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-1">{item.small}</motion.div>
                   <motion.div className="text-4xl font-cute font-black text-white leading-none">{item.big}</motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- ROUTINE & STATS --- */}
        <section className="mb-40">
           <div className="grid md:grid-cols-3 gap-8">
             
             {/* ROUTINE */}
             <div className="bg-[#0a0a0a] rounded-[2.5rem] p-8 border border-white/10">
               <h3 className="text-3xl font-cute font-bold mb-8 text-emerald-400">Daily Routine</h3>
               <div className="space-y-6 font-mono text-sm md:text-base">
                 {[
                   { t: "7:00 AM", a: "Wake up ☀️" },
                   { t: "9:00 AM", a: "Programming 💻" },
                   { t: "5:00 PM", a: "Snack time 🍪" },
                   { t: "6:00 PM", a: "Read / Movie / Relax 🍿" },
                   { t: "10:00 PM", a: "Sleep 😴" },
                 ].map((r, i) => (
                   <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-gray-500">{r.t}</span>
                     <span className="text-gray-200">{r.a}</span>
                   </div>
                 ))}
               </div>
             </div>

             {/* FUTURE PLANS */}
             <div className="bg-[#0a0a0a] rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
               <h3 className="text-3xl font-cute font-bold mb-8 text-purple-400">Future Plans</h3>
               <ul className="space-y-3 font-medium text-gray-300">
                 {["Find a Job in tech", "Make family happy", "Make friends happy", "Learn a new Language", "Maybe Learn an instrument", "Definitely Go Gym", "Read More Books", "Learn Trading", "Travel abroad"].map((plan, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                     {plan}
                   </li>
                 ))}
               </ul>
             </div>

             {/* EXPERIENCES STATS */}
             <div className="bg-[#0a0a0a] rounded-[2.5rem] p-8 border border-white/10 flex flex-col justify-center text-center">
               <h3 className="text-3xl font-cute font-bold mb-8 text-blue-400">Experiences</h3>
               <div className="space-y-6">
                 {[
                   { l: "Books read", v: "+300" },
                   { l: "Animes watched", v: "+200" },
                   { l: "Movies watched", v: "+200" },
                   { l: "PC broken", v: "+1 💀" },
                   { l: "Laptop Broken", v: "+1 🥲" },
                 ].map((s, i) => (
                   <div key={i} className="flex justify-between items-center bg-white/5 px-4 py-3 rounded-xl">
                      <span className="text-gray-400 text-sm font-bold uppercase">{s.l}</span>
                      <span className="text-xl font-black text-white">{s.v}</span>
                   </div>
                 ))}
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

      {/* --- EXPANDED CARD MODAL --- */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            {components.map(item => item.id === selectedId && (
              <motion.div 
                layoutId={`card-${item.id}`}
                className="w-full max-w-2xl bg-[#111] rounded-[3rem] overflow-hidden relative border border-white/20 shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent close on card click
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition"
                >
                  <X size={24} />
                </button>
                
                <div className="h-64 relative">
                  <img src={item.img} alt={item.big} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                  <div className="absolute bottom-6 left-8">
                     <div className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-1">{item.small}</div>
                     <div className="text-4xl font-cute font-black text-white">{item.big}</div>
                  </div>
                </div>
                
                <div className="p-8 md:p-12">
                  <p className="text-gray-300 text-lg leading-relaxed font-medium">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Personal;