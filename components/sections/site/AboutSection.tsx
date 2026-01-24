import { HiDocumentText } from "react-icons/hi";

interface AboutSectionProps {
  isDarkMode: boolean;
}

export default function AboutSection({ isDarkMode }: AboutSectionProps) {
  return (
    <section className={`p-4 sm:p-5 md:p-6 rounded-xl ${isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm`}>
      <h2 className={`text-sm sm:text-base font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        <HiDocumentText className="w-4 h-4 sm:w-5 sm:h-5" /> About
      </h2>
      <div className={`space-y-3 text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
        <p>
          I&apos;m a 2nd year Computer Engineering student at PUP Manila, passionate about 
          cybersecurity and full-stack development. I specialize in building secure web 
          applications and leveraging AI tools to create smarter, more efficient solutions.
        </p>
        <p>
          My work focuses on developing innovative projects that solve real-world problems. 
          From secure systems to intelligent applications, I&apos;m always exploring new ways to 
          combine technology and creativity to make a meaningful impact.
        </p>
        <p>
          When I&apos;m not coding, I&apos;m constantly learning about emerging technologies and 
          contributing to the developer community through sharing knowledge and building 
          tools that help others grow.
        </p>
      </div>
    </section>
  );
}
