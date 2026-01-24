import { HiBriefcase } from "react-icons/hi";

interface ExperienceSectionProps {
  isDarkMode: boolean;
}

export default function ExperienceSection({ isDarkMode }: ExperienceSectionProps) {
  const experiences = [
    { role: "Head of Infrastructure and Governance", company: "ICPEP SE - PUP Manila", year: "2025", current: true },
    { role: "Vice Chief Administrative Officer", company: "Cisco NetConnect PUP", year: "2025", current: true },
    { role: "Cybersecurity Cadet", company: "Google Developer Groups PUP", year: "2025", current: true },
    { role: "Research and Development Team", company: "CyberPH", year: "2025", current: true },
    { role: "Technical Team Member", company: "PUP Hygears", year: "2025", current: true },
    { role: "First Line of Code", company: "Personal Milestone", year: "2024", current: false },
  ];

  return (
    <section className={`p-4 sm:p-5 rounded-xl ${isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm`}>
      <h2 className={`text-sm sm:text-base font-semibold mb-3 sm:mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        <HiBriefcase className="w-4 h-4 sm:w-5 sm:h-5" /> Experience
      </h2>
      <div className="space-y-3 sm:space-y-3.5">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex justify-between items-start gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                {exp.current && (
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                )}
                <h3 className={`font-medium text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
              </div>
              <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ${exp.current ? 'ml-3.5' : ''}`}>{exp.company}</p>
            </div>
            <span className={`text-xs flex-shrink-0 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{exp.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
