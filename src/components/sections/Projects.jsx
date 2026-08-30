import React, { useState, useRef } from 'react';
import { projects, categories } from '../../data/project.js';
import { Briefcase, Target, Globe, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard.jsx';
import FadeIn from '../animation/Fadein.jsx';

function Projects() {
  // Changed 'ALL' to 'All' to match the categories array
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Changed check to 'All'
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  // Helper to determine how many cards are visible based on screen width
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemsPerView = getItemsPerView();
      const containerWidth = container.offsetWidth;
      const gap = 24; // 6 * 4px = 24px (gap-6)
      const cardWidth = (containerWidth - gap * (itemsPerView - 1)) / itemsPerView;
      
      container.scrollTo({
        left: (cardWidth + gap) * index,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    const itemsPerView = getItemsPerView();
    const maxIndex = Math.max(0, filteredProjects.length - itemsPerView);
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(newIndex);
  };

  // Updated icons to match your actual category names
  const categoryIcons = {
    'All': Target,
    'Web Application': Globe,
    'Android App': Zap,
  };

  const itemsPerView = getItemsPerView();
  const maxIndex = Math.max(0, filteredProjects.length - itemsPerView);

  return (
    <div>
      <section id='Projects' className='relative py-20 bg-black overflow-hidden scroll-mt-20'>
        {/* Fixed Background Blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className='text-sm text-primary font-medium'>My Work</span>
              </div>
              <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>Featured Projects</h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">Showcasing my best work and achievements</p>
            </div>
          </FadeIn>

          {/* Category Filter */}
          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-primary/10 border border-primary/30 opacity-100' 
                      : 'bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 group-hover:bg-white/10'
                  }`}></div>
                  <div className="relative flex items-center gap-2">
                    {React.createElement(categoryIcons[category] || Target, { className: 'w-4 h-4' })}
                    <span className='text-sm'>{category}</span>
                  </div>
                  {activeCategory === category && (
                    <div className='absolute inset-0 rounded-full bg-primary blur-xl opacity-50 -z-10' />
                  )}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Project Carousel */}
          <FadeIn delay={200}>
            <div className="relative">
              <div ref={scrollContainerRef} className='overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar'>
                <div className="flex gap-6 pb-4">
                  {filteredProjects.map((project) => (
                    <div 
                      key={project.id} 
                      className='w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start'
                    >
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              {filteredProjects.length > itemsPerView && (
                <>
                  <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className='flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10'
                    aria-label='Previous projects'
                  >
                    <ChevronLeft className='w-6 h-6 text-white' />
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                    className='flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10'
                    aria-label='Next projects'
                  >
                    <ChevronRight className='w-6 h-6 text-white' />
                  </button>
                </>
              )}

              {/* Navigation Dots */}
              {filteredProjects.length > itemsPerView && (
                <div className='flex items-center justify-center gap-2 mt-8'>
                  {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToIndex(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentIndex ? 'bg-primary w-6 h-6' : 'bg-white/30 w-2 h-2 hover:bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

export default Projects;