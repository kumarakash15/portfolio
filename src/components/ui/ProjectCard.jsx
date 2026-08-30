import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

// Custom GitHub Icon SVG to replace the deprecated lucide-react one
const GithubIcon = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, metrics, demoUrl, githubUrl } = project;

  return (
    <div className='group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col'>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className='px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full'>
            {project.category}
          </span>
        </div>

        {/* External Links */}
        <div className="absolute bottom-4 right-4 flex items-center gap-3">
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110" 
              title="View Demo"
            >
              <ExternalLink className='w-4 h-4 text-white' />
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110" 
              title="View Source Code"
            >
              {/* Using the custom GithubIcon component here */}
              <GithubIcon className='w-4 h-4 text-white' />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col flex-grow">
        <div>
          <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-[#A8FF8D] transition-colors duration-300'>
            {title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className='px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors duration-200'
            >
              {tech}
            </span>
          ))}
        </div>

        {metrics && (
          <div className='flex items-center gap-2 pt-3 mt-auto border-t border-white/10'>
            <TrendingUp className='w-4 h-4 text-green-400'/>
            <p className="text-sm font-medium text-green-400">{metrics}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;