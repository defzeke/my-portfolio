import Image from "next/image";
import Link from "next/link";
import { HiLocationMarker, HiMail, HiAcademicCap, HiCheckCircle, HiStar, HiSun, HiMoon } from "react-icons/hi";

interface SiteHeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  showHackathons: boolean;
  setShowHackathons: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

export default function SiteHeader({ isDarkMode, toggleDarkMode, showHackathons, setShowHackathons, dropdownRef }: SiteHeaderProps) {
  const hackathons = [
    { name: "ICTO Hackathon", award: "Finalists" },
    { name: "PUP Hackathon: Uthack ang Puhunan", award: "1st Runner Up" },
  ];

  return (
    <header className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 w-full sm:w-auto">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-md mx-auto sm:mx-0">
            <Image
              src={isDarkMode ? "/zeke night.jpg" : "/zeke.jpg"}
              alt="Ezekiel"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2 sm:space-y-3 text-center sm:text-left w-full sm:w-auto">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <h1 className={`text-xl sm:text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Ezekiel Bustamante
              </h1>
              <HiCheckCircle className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <p className={`flex items-center gap-1.5 text-xs sm:text-sm justify-center sm:justify-start ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <HiLocationMarker className="w-3 h-3 sm:w-4 sm:h-4" /> Metro Manila, Philippines
            </p>
            <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Cybersecurity | Software Developer
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-3 sm:mt-4">
              <Link 
                href="https://mail.google.com/mail/?view=cm&to=onlyzekedotcom@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2 ${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
              >
                <HiMail className="w-3 h-3 sm:w-4 sm:h-4" /> Send Email
              </Link>
              <div className="relative w-full sm:w-auto" ref={dropdownRef}>
                <button
                  onClick={() => setShowHackathons(!showHackathons)}
                  className={`w-full sm:w-auto px-4 py-2 rounded-lg border text-xs sm:text-sm font-medium ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} transition-colors flex items-center justify-center gap-2`}
                >
                  <HiAcademicCap className="w-3 h-3 sm:w-4 sm:h-4" /> My Hackathons
                  <svg className={`w-3 h-3 transition-transform ${showHackathons ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showHackathons && (
                  <div className={`absolute top-full mt-2 left-0 sm:right-0 sm:left-auto w-full sm:w-72 rounded-lg border shadow-lg z-10 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <div className="p-2">
                      {hackathons.map((hackathon, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-lg cursor-pointer transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
                        >
                          <div className={`text-xs font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{hackathon.name}</div>
                          <div className={`text-xs mt-1 flex items-center gap-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            <HiStar className="w-3 h-3" /> {hackathon.award}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`self-center sm:self-start p-2.5 rounded-lg ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-600'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-105 transition-all shadow-sm`}
        >
          {isDarkMode ? <HiSun className="w-4 h-4 sm:w-5 sm:h-5" /> : <HiMoon className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>
      </div>
    </header>
  );
}
