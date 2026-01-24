import { HiAcademicCap } from "react-icons/hi";

interface BeyondCodingSectionProps {
  isDarkMode: boolean;
}

export default function BeyondCodingSection({ isDarkMode }: BeyondCodingSectionProps) {
  return (
    <section className={`p-4 sm:p-5 md:p-6 pb-10 sm:pb-14 rounded-xl ${isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm`}>
      <h2 className={`text-sm sm:text-base font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        <HiAcademicCap className="w-4 h-4 sm:w-5 sm:h-5" /> Beyond Coding
      </h2>
      <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
        When I&apos;m not writing code, I&apos;m actively pursuing professional certifications
        and taking technical examinations to continuously expand my expertise and validate my skills. I believe in lifelong learning and staying current with industry standards and best practices
        through continuous education and hands-on experience.
      </p>
    </section>
  );
}
