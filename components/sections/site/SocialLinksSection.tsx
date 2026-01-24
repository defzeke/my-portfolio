import { HiLink } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

interface SocialLinksSectionProps {
  isDarkMode: boolean;
}

export default function SocialLinksSection({ isDarkMode }: SocialLinksSectionProps) {
  return (
    <section className={`p-4 sm:p-5 rounded-xl ${isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm`}>
      <h2 className={`text-sm sm:text-base font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        <HiLink className="w-4 h-4 sm:w-5 sm:h-5" /> Social Links
      </h2>
      <div className="space-y-1">
        <a href="https://www.linkedin.com/in/ezekiel-bustamante-166493353/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2.5 p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-900/50' : 'hover:bg-gray-50'} transition-colors`}>
          <FaLinkedin className="text-blue-600 w-4 h-4" />
          <span className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>LinkedIn</span>
        </a>
        <a href="https://github.com/defzeke/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2.5 p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-900/50' : 'hover:bg-gray-50'} transition-colors`}>
          <FaGithub className={`w-4 h-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} />
          <span className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>GitHub</span>
        </a>
        <a href="https://www.instagram.com/kielsough/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2.5 p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-900/50' : 'hover:bg-gray-50'} transition-colors`}>
          <FaInstagram className="text-pink-500 w-4 h-4" />
          <span className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Instagram</span>
        </a>
      </div>
    </section>
  );
}
