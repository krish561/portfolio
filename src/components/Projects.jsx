import { motion } from 'framer-motion';
import { ExternalLink, Code2, Database, Layout, Box, Cpu } from 'lucide-react';

const projectData = [
  {
    title: "E-Commerce Microservices",
    desc: "Independent Product, Order, and User services enabling independent deployment. 40% faster APIs.",
    techIcons: [Code2, Database, Box], 
    link: "https://github.com/krish561/E-comm",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Delivery Tracking System",
    desc: "Real-time logistics engine with transactional integrity, Redis caching and driver route tracking.",
    techIcons: [Code2, Database, Layout],
    link: "https://github.com/krish561/DT",
    img: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000&auto=format&fit=crop",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Code Companion IDE",
    desc: "Web IDE with AST optimization. 50% faster syntax checking via multi-threading implementation.",
    techIcons: [Layout, Code2, Database],
    link: "https://github.com/krish561/CodeCompanion",
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop",
    color: "from-purple-500 to-violet-600"
  },
  {
    title: "Personal Learning Platform",
    desc: "AI Factory Pattern reducing load by 25%. Parallel processing accelerated suggestions by 50ms.",
    techIcons: [Layout, Cpu, Box],
    link: "https://github.com/krish561/PersonalScheduler",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
    color: "from-pink-500 to-rose-600"
  }
];

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 relative z-10">
      <h2 className="text-6xl md:text-8xl font-cute font-black mb-24 text-center text-shadow-neon">
        Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Works</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projectData.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-[3rem] border-2 border-[#1a1a1a] overflow-hidden h-[500px] flex flex-col justify-end p-10 transition-all duration-500 hover:border-emerald-400/50 hover:shadow-[0_0_40px_rgba(52,211,153,0.2)]"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Background Image & Overlays */}
            <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-700" />
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply opacity-60 group-hover:opacity-80 transition-opacity`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20">
              <h3 className="text-4xl font-cute font-black mb-4 text-white group-hover:text-emerald-300 transition-colors">{project.title}</h3>
              <p className="text-gray-200 text-xl mb-8 leading-relaxed font-medium">
                {project.desc}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.techIcons.map((Icon, i) => (
                    <div key={i} className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <Icon size={24} className="text-emerald-300" />
                    </div>
                  ))}
                </div>
                 
                 <motion.div 
                   className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center text-black font-bold shadow-lg shadow-emerald-400/20"
                   whileHover={{ scale: 1.1, rotate: 45 }}
                 >
                   <ExternalLink size={28} />
                 </motion.div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;