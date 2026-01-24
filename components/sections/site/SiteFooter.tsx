import Link from "next/link";

interface SiteFooterProps {
  isDarkMode: boolean;
}

export default function SiteFooter({ isDarkMode }: SiteFooterProps) {
  return (
    <footer className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} mt-8 sm:mt-12`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col items-center gap-1 text-center">
          <div className={`text-[10px] sm:text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2026 Ezekiel Bustamante. All rights reserved.
          </div>
          <div className={`text-[10px] ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Portfolio layout inspired by{" "}
            <Link 
              href="https://bryllim.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}
            >
              Bryl Lim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
