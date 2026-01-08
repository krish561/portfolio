import { FileDown, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center">
      <Link to="/" className="absolute top-8 left-8 text-gray-500 hover:text-white flex items-center gap-2">
        <ArrowLeft size={20} /> Back
      </Link>
      <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 text-emerald-400">
        <FileDown size={40} />
      </div>
      <h1 className="text-4xl font-cute font-bold mb-4">Krish's Resume</h1>
      <p className="text-gray-400 mb-8 max-w-md">
        Detailed breakdown of my education, skills, and professional experience.
      </p>
      <a 
        href="/resume.pdf" 
        download="Krish_Singh_Resume.pdf"
        className="px-8 py-4 bg-emerald-400 text-black font-bold rounded-full hover:scale-105 transition hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]"
      >
        Download PDF
      </a>
    </div>
  );
};

export default Resume;