import { Github, Linkedin, MessageCircle, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socials = [
    { icon: Github, link: "https://github.com/krish561" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/krishsingh165/" },
    { icon: Twitter, link: "https://x.com/kishu561" }, // Using Twitter icon for X
    { icon: MessageCircle, link: "https://wa.me/916302281907" } // WhatsApp alternative icon
  ];

  return (
    <footer className="mt-20 py-12 border-t border-white/5 bg-[#080808]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="font-cute text-2xl font-bold mb-1">Krish Singh</h3>
          <p className="text-gray-500 text-sm">Building cute & complex systems.</p>
        </div>

        <div className="flex gap-4">
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-emerald-500 hover:text-black transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
      <div className="text-center mt-8 text-xs text-gray-700 font-mono">
        © {new Date().getFullYear()} Krish Singh. Made with 💚 in Hyderabad.
      </div>
    </footer>
  );
};

export default Footer;