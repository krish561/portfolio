import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-8 flex justify-between items-center bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent z-50">
      <Link to="/" className="text-2xl font-black tracking-tighter font-cute group">
        Krish<span className="text-emerald-400 group-hover:animate-ping inline-block">.</span>
      </Link>
      
      <div className="flex gap-6 items-center">
        <motion.a 
          href="mailto:krishsingh1652@gmail.com"
          className="hidden md:block text-gray-400 hover:text-white font-medium transition"
          whileHover={{ scale: 1.1 }}
        >
          Say Hello
        </motion.a>
        <motion.a 
          href="#contact" // Anchors to the contact section
          className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-400 transition-all backdrop-blur-md font-bold text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;