import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, FileText, Smartphone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative">
      {/* BACKGROUND GRID PATTERN */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-32 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
        
        {/* LEFT SIDE: Text & Socials */}
        <motion.div 
          className="text-center md:text-left flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-bold text-emerald-400 tracking-widest text-sm uppercase mb-6 block">Software Engineer</span>
          
          <h1 className="text-6xl md:text-9xl font-cute font-black leading-[0.9] mb-6 cursor-default text-shadow-neon">
            Hello I'm <br/>
            <motion.span 
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
              whileHover={{ 
                scale: 1.05, 
                textShadow: "0 0 30px rgba(52,211,153,0.5)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Krish Singh
            </motion.span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-medium mt-8 mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            IT Specialist & Full-Stack Developer | Pragmatic, delivery-oriented professional | From Hyderabad
          </p>

          {/* Socials & CV */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-5">
            <motion.a 
              href="/resume.pdf" 
              download
              className="px-8 py-4 bg-emerald-500 text-black font-black rounded-full text-lg hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20} /> View CV
            </motion.a>
            
            {[
              { icon: Github, link: "https://github.com/krish561", color: "hover:bg-[#333]" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/krishsingh165/", color: "hover:bg-[#0077b5]" },
              { icon: Mail, link: "mailto:Krishsingh1652@gmail.com", color: "hover:bg-red-500" },
              { icon: Smartphone, link: "https://wa.me/916302281907", color: "hover:bg-green-500" },
              { icon: Twitter, link: "https://x.com/kishu561", color: "hover:bg-blue-400" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                className={`w-14 h-14 bg-[#111] border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-transparent ${social.color} transition-all backdrop-blur-md`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: Profile Pic (On top for mobile via flex-col-reverse) */}
        <motion.div 
          className="relative w-72 h-72 md:w-[500px] md:h-[500px] flex-shrink-0 cursor-pointer"
          initial="idle"
          whileHover="hover"
        >
          {/* 1. The Image Container */}
          <div className="relative w-full h-full rounded-full overflow-hidden z-10 border-[6px] border-[#0a0a0a] shadow-2xl">
             <img 
               alt="Krish Singh" 
               className="object-cover w-full h-full scale-105"
               src="https://github.com/krish561.png" 
             />
          </div>

          {/* 2. The Animated Border SVG */}
          <motion.svg
            className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] z-20 pointer-events-none"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            <defs>
              <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              stroke="url(#neon-gradient)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              variants={{
                idle: { strokeDasharray: "4 15" }, 
                hover: { strokeDasharray: "300 0", strokeWidth: "2" } 
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </motion.svg>
        </motion.div>

      </section>

      {/* --- STATS --- */}
      <section className="max-w-4xl mx-auto px-6 mb-32 flex justify-center gap-16 md:gap-32 relative z-10">
        {[
          { label: "Age", value: "23" },
          { label: "Projects worked on", value: "10+" }
        ].map((stat, idx) => (
          <motion.div 
            key={idx} 
            className="text-center group cursor-pointer"
            whileHover={{ scale: 1.1, y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="text-7xl md:text-9xl font-cute font-black text-white group-hover:text-emerald-400 transition-colors text-shadow-neon leading-none mb-2">
              {stat.value}
            </div>
            <div className="text-xl text-gray-400 font-bold uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </section>

      {/* --- EDUCATION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-40 relative z-10">
        <h2 className="text-7xl md:text-8xl font-cute font-black text-center mb-20 text-shadow-neon">Education</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { deg: "Master of Science in CS", time: "Nov 2022 - Dec 2024", gpa: "GPA: 7.03", school: "Osmania University", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop" },
            { deg: "Bachelor of Science", time: "Aug 2019 - Sep 2022", gpa: "GPA: 8.41", school: "G. Pulla Reddy Degree College", img: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1000&auto=format&fit=crop" },
            { deg: "Intermediate", time: "June 2017 - July 2019", gpa: "GPA: 8.32", school: "Srigayatri Jr college", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop" },
          ].map((edu, idx) => (
            <motion.div
              key={idx}
              className="aspect-square rounded-[2.5rem] relative overflow-hidden flex flex-col justify-end p-10 group border border-white/10"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Background Image & Heavy Overlay for readability */}
              <img src={edu.img} alt={edu.school} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 z-10" />
              
              <div className="relative z-20 text-center">
                <h3 className="text-3xl md:text-4xl font-cute font-bold text-white mb-4 leading-tight">{edu.deg}</h3>
                <div className="inline-block bg-emerald-500/20 text-emerald-300 font-mono text-sm px-3 py-1 rounded-full mb-4 border border-emerald-500/30">{edu.time}</div>
                <div className="text-3xl font-black text-white mb-2">{edu.gpa}</div>
                <div className="text-gray-300 font-bold text-lg">{edu.school}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SHORT PROFILE --- */}
      <section className="max-w-6xl mx-auto px-6 mb-40 relative z-10">
        <h2 className="text-6xl md:text-7xl font-cute font-black text-center mb-16 text-shadow-neon">Short Profile</h2>
        
        <div className="grid md:grid-cols-3 gap-8 h-auto md:h-[500px]">
          
          {/* Card 1: Developer statement */}
          <div className="md:col-span-2 bg-[#0a0a0a] rounded-[2.5rem] p-10 relative overflow-hidden flex items-end border border-white/10 group">
            <div className="absolute inset-0 opacity-20 mix-blend-overlay group-hover:opacity-40 transition-opacity">
               <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            <h3 className="relative z-20 text-4xl font-black leading-tight text-white">
              Developer building clean, reliable <span className="text-emerald-400">e-commerce</span>, <span className="text-blue-400">auction</span>, and <span className="text-purple-400">trading systems</span>.
            </h3>
          </div>

          {/* Card 2: Languages */}
          <div className="bg-[#0a0a0a] rounded-[2.5rem] p-10 flex flex-col justify-center border border-white/10 relative overflow-hidden group">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0" />
            <span className="text-gray-400 text-sm font-mono mb-4 relative z-10 uppercase tracking-wider">I speak</span>
            <div className="text-4xl font-black space-y-2 relative z-10">
              <div>English</div>
              <div>Hindi</div>
              <div className="text-emerald-400 text-5xl">Telugu</div>
            </div>
          </div>

          {/* Card 3: Tech Stack */}
          <div className="bg-[#0a0a0a] rounded-[2.5rem] p-10 border border-white/10 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-0" />
             <span className="text-gray-400 text-sm font-mono block mb-6 relative z-10 uppercase tracking-wider">Tech Arsenal</span>
             <div className="flex flex-wrap gap-3 relative z-10">
               {['Java', 'Spring Boot', 'Node.js', 'React', 'SQL', 'Docker', 'AWS', 'Redis', 'Git'].map(tech => (
                 <span key={tech} className="px-4 py-2 bg-white/5 rounded-xl text-sm font-bold border border-white/10 hover:border-emerald-400/50 hover:text-emerald-300 transition-colors cursor-default">
                   {tech}
                 </span>
               ))}
             </div>
          </div>

           {/* Card 4: Mail Link (Standout) */}
           <motion.a 
             href="mailto:krishsingh1652@gmail.com"
             className="md:col-span-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-[2.5rem] p-10 flex items-center justify-between relative overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.3)] group"
             whileHover={{ scale: 1.02, rotate: [0, -1, 1, -1, 0] }}
             transition={{ type: "spring", stiffness: 300 }}
           >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20 mix-blend-overlay" />
             <div className="relative z-10">
               <div className="text-lg text-emerald-100 font-mono mb-2 font-bold">Ready to collaborate?</div>
               <div className="text-3xl md:text-4xl font-black text-white break-all">krishsingh1652@gmail.com</div>
             </div>
             <motion.div 
               className="w-20 h-20 bg-white text-emerald-600 rounded-full flex items-center justify-center shadow-2xl relative z-10"
               whileHover={{ rotate: 360, scale: 1.1 }}
               transition={{ duration: 0.5 }}
             >
               <Mail size={36} />
             </motion.div>
           </motion.a>

        </div>
      </section>

      {/* --- SECTIONS --- */}
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
};

export default Home;