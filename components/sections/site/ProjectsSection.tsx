import Link from "next/link";
import { HiBriefcase } from "react-icons/hi";


interface Project {
  project_name: string;
  short_description: string;
  link: string;
  name?: string;
  description?: string;
  url?: string;
}

interface ProjectsSectionProps {
  isDarkMode: boolean;
  projects: Project[];
}

export default function ProjectsSection({ isDarkMode, projects }: ProjectsSectionProps) {
  // Display specific featured projects
  const featuredProjectNames = ['verdepm', 'algohub', 'frameit', 'blockbayan'];
  const displayProjects = projects.filter(project => {
    const projectName = (project.project_name || project.name || '').toLowerCase();
    return featuredProjectNames.includes(projectName);
  }).slice(0, 4);

  return (
    <section className={`p-4 sm:p-5 md:p-6 rounded-xl ${isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm`}>
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className={`text-sm sm:text-base font-semibold flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <HiBriefcase className="w-4 h-4 sm:w-5 sm:h-5" /> Recent Projects
        </h2>
        <Link 
          href="/site-mode/projects"
          className={`text-xs ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
        {displayProjects.map((project, index) => {
          const projectName = project.project_name || project.name || 'Untitled Project';
          const description = project.short_description || project.description || 'No description available';
          const link = project.link || project.url || '#';
          
          // Extract domain from link
          let displayLink = link;
          try {
            const url = new URL(link);
            displayLink = url.hostname.replace('www.', '');
          } catch {
            displayLink = link;
          }

          return (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 sm:p-4 rounded-lg border ${isDarkMode ? 'border-gray-700 hover:border-gray-600 hover:bg-gray-800' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'} transition-all cursor-pointer`}
            >
              <h3 className={`font-medium text-xs sm:text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{projectName}</h3>
              <p className={`text-xs mb-2 line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
              <span className={`text-xs ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{displayLink}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
