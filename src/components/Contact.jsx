import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-40 text-center relative z-10">
      {/* Giant Header */}
      <h2 className="text-8xl md:text-[10rem] font-cute font-black mb-8 bg-clip-text text-transparent bg-gradient-to-b from-emerald-400 to-cyan-600 filter drop-shadow-[0_0_20px_rgba(52,211,153,0.4)] leading-none">
        Let's Talk
      </h2>
      
      <p className="text-2xl md:text-3xl text-gray-300 font-medium mb-20 max-w-3xl mx-auto leading-relaxed font-cute">
        Got an idea? Want to collaborate? <br/>
        <span className="text-emerald-400 font-bold">Let's make something awesome over a virtual coffee! ☕️</span>
      </p>

      {/* Bouncy Contact Buttons */}
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24">
        <motion.a 
          href="mailto:krishsingh1652@gmail.com"
          className="relative group flex items-center gap-4 px-10 py-6 rounded-[2rem] bg-[#0a0a0a] border-2 border-[#222] overflow-hidden"
          whileHover={{ scale: 1.05, borderColor: '#34d399' }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="p-4 bg-[#111] rounded-full text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-400 group-hover:text-black transition-all duration-300 z-10 shadow-lg">
             <Mail size={28} />
          </div>
          <span className="font-black text-2xl z-10">Email Me</span>
        </motion.a>

        <motion.a 
          href="https://wa.me/916302281907"
          className="relative group flex items-center gap-4 px-10 py-6 rounded-[2rem] bg-[#0a0a0a] border-2 border-[#222] overflow-hidden"
          whileHover={{ scale: 1.05, borderColor: '#22c55e' }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
           <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="p-4 bg-[#111] rounded-full text-green-400 group-hover:scale-110 group-hover:bg-green-400 group-hover:text-black transition-all duration-300 z-10 shadow-lg">
             <Phone size={28} />
          </div>
          <span className="font-black text-2xl z-10">WhatsApp</span>
        </motion.a>
      </div>

      {/* Fixed Peek Button */}
      <Link to="/personal">
        <motion.button
          className="relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-black text-2xl rounded-full group bg-[#0a0a0a] border-[3px] border-emerald-400 text-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.3)]"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-emerald-400"
            initial={{ x: '-100%' }}
            animate={{ x: isHovered ? '0%' : '-100%' }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
          />
          <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-300">
            <Sparkles size={24} className={isHovered ? 'animate-spin' : ''} />
            <AnimatePresence mode='wait'>
              {isHovered ? (
                 <motion.span key="hover" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}>
                   Unlock the Chaos!
                 </motion.span>
              ) : (
                 <motion.span key="idle" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}>
                   Peek at my personal life 👀
                 </motion.span>
              )}
            </AnimatePresence>
          </span>
        </motion.button>
      </Link>
    </section>
  );
};

export default Contact;