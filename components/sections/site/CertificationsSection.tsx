import Link from "next/link";
import { HiAcademicCap } from "react-icons/hi";


interface Certification {
  cert_name: string;
  org: string;
  credentials: string;
  title?: string;
  Title?: string;
  name?: string;
  Name?: string;
  Organization?: string;
  organization?: string;
}

interface CertificationsSectionProps {
  isDarkMode: boolean;
  certifications: Certification[];
}

export default function CertificationsSection({ isDarkMode, certifications }: CertificationsSectionProps) {
  return (
    <section className={`p-4 sm:p-5 rounded-xl ${isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm`}>
      <div className="flex items-center justify-between mb-3">
        <h2 className={`text-sm sm:text-base font-semibold flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <HiAcademicCap className="w-4 h-4 sm:w-5 sm:h-5" /> Recent Certifications and Badges
        </h2>
        <Link 
          href="/site-mode/certifications"
          className={`text-xs ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}
        >
          View All →
        </Link>
      </div>
      <div className="space-y-2">
        {certifications.slice(0, 4).map((cert, idx) => (
          <div key={idx} className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-900/50 hover:bg-gray-900' : 'bg-gray-50 hover:bg-gray-100'} transition-colors`}>
            <h3 className={`font-medium text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {cert.cert_name || cert.title || cert.Title || cert.name || cert.Name}
            </h3>
            <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {cert.org || cert.Organization || cert.organization}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
