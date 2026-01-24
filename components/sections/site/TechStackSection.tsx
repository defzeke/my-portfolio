import Link from "next/link";
import { HiCode } from "react-icons/hi";

interface TechStackSectionProps {
  isDarkMode: boolean;
}

export default function TechStackSection({ isDarkMode }: TechStackSectionProps) {
  return (
    <section className={`p-4 sm:p-5 md:p-6 rounded-xl ${isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm`}>
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className={`text-sm sm:text-base font-semibold flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <HiCode className="w-4 h-4 sm:w-5 sm:h-5" /> Tech Stack
        </h2>
        <Link 
          href="/site-mode/tech-stack"
          className={`text-xs ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} hover:underline transition-colors`}
        >
          View All →
        </Link>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <div>
          <h3 className={`text-xs font-medium mb-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Frontend</h3>
          <div className="flex flex-wrap gap-1.5">
            {['JavaScript', 'TypeScript', 'Next.js', 'React', 'Tailwind CSS'].map((tech) => (
              <span key={tech} className={`px-2.5 py-1 rounded-md text-xs ${isDarkMode ? 'bg-gray-700/70 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-xs font-medium mb-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Backend</h3>
          <div className="flex flex-wrap gap-1.5">
            {['Node.js', 'Supabase', 'PostgreSQL', 'Firebase', 'MongoDB'].map((tech) => (
              <span key={tech} className={`px-2.5 py-1 rounded-md text-xs ${isDarkMode ? 'bg-gray-700/70 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-xs font-medium mb-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Developer Tools</h3>
          <div className="flex flex-wrap gap-1.5">
            {['Git', 'GitHub', 'VS Code', 'Discord'].map((tech) => (
              <span key={tech} className={`px-2.5 py-1 rounded-md text-xs ${isDarkMode ? 'bg-gray-700/70 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
