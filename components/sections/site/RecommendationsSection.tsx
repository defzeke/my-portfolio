import { HiStar } from "react-icons/hi";

interface RecommendationsSectionProps {
  isDarkMode: boolean;
}

export default function RecommendationsSection({ isDarkMode }: RecommendationsSectionProps) {
  return (
    <section className={`p-4 sm:p-5 rounded-xl ${isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm`}>
      <h2 className={`text-sm sm:text-base font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        <HiStar className="w-4 h-4 sm:w-5 sm:h-5" /> Recommendations
      </h2>
      <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'} text-center py-6 sm:py-8`}>
        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          Professional recommendations available upon request
        </p>
      </div>
    </section>
  );
}
