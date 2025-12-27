import { ExternalLink } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

import video1 from '../../assets/portfolio/1st/video.mp4';
import thumbnail1 from '../../assets/portfolio/1st/photo.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      videoUrl: video1,
      thumbnail: thumbnail1,
      industry: 'Retail',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment gateway integration, and AI-powered recommendation engine.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://narendradecor.netlify.app/'
    },
    {
      title: 'Healthcare Mobile App',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-healthcare-app-interface-41758-large.mp4',
      thumbnail: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
      industry: 'Healthcare',
      description: 'Telemedicine app connecting patients with doctors through video consultations, prescription management, and health tracking.',
      technologies: ['React Native', 'WebRTC', 'Firebase'],
      liveUrl: 'https://demo-healthcare.example.com'
    },
    {
      title: 'Financial Dashboard',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-financial-dashboard-interface-41781-large.mp4',
      thumbnail: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=800',
      industry: 'Finance',
      description: 'Real-time financial analytics dashboard with interactive charts, predictive analytics, and automated reporting.',
      technologies: ['Next.js', 'D3.js', 'Python', 'AWS'],
      liveUrl: 'https://demo-finance.example.com'
    },
    {
      title: 'Restaurant Booking System',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-restaurant-table-booking-interface-41776-large.mp4',
      thumbnail: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      industry: 'Hospitality',
      description: 'Complete restaurant management system with table reservations, menu management, and order tracking.',
      technologies: ['Vue.js', 'Express.js', 'MySQL'],
      liveUrl: 'https://demo-restaurant.example.com'
    },
    {
      title: 'Learning Management System',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-online-education-platform-interface-41759-large.mp4',
      thumbnail: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
      industry: 'Education',
      description: 'Comprehensive LMS with course creation tools, video streaming, quizzes, and progress tracking.',
      technologies: ['React', 'Django', 'PostgreSQL'],
      liveUrl: 'https://demo-lms.example.com'
    },
    {
      title: 'Real Estate Platform',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-real-estate-platform-interface-41760-large.mp4',
      thumbnail: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
      industry: 'Real Estate',
      description: 'Property listing platform with 3D virtual tours, mortgage calculator, and automated document processing.',
      technologies: ['Next.js', 'Three.js', 'MongoDB'],
      liveUrl: 'https://demo-realestate.example.com'
    },
  ];

  // Create duplicated array for seamless looping
  const loopedProjects = [
    ...projects.slice(-3),
    ...projects,
    ...projects.slice(0, 3)
  ];

  const handleLiveClick = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  // Project Card Component
  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Handle video error
    const handleVideoError = (e: any) => {
      console.error('Video failed to load:', e);
      setHasError(true);
      if (videoRef.current) {
        videoRef.current.style.display = 'none';
      }
    };

    // Handle video load
    const handleVideoLoad = () => {
      setIsLoaded(true);
    };

    // Toggle play on touch devices
    const handleTouchToggle = () => {
      if (!videoRef.current) return;
      
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {
          if (videoRef.current) {
            videoRef.current.controls = true;
          }
        });
        setIsPlaying(true);
      }
    };

    // Handle hover for desktop
    const handleMouseEnter = () => {
      if (window.innerWidth > 768 && videoRef.current && !hasError) {
        videoRef.current.play().catch(() => {
          if (videoRef.current) {
            videoRef.current.preload = 'auto';
          }
        });
        setIsPlaying(true);
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth > 768 && videoRef.current && !hasError) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    };

    // Cleanup on unmount
    useEffect(() => {
      return () => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      };
    }, []);

    return (
      <div key={index} className="w-80 mx-4 flex-shrink-0">
        <div className="bg-white rounded-xl overflow-hidden h-full border border-gray-100">
          {/* Video Section */}
          <div 
            className="relative h-48 bg-gray-900 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchToggle}
          >
            {/* Video or Fallback Image */}
            {!hasError ? (
              <video
                ref={videoRef}
                className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                poster={project.thumbnail}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`Demo video of ${project.title}`}
                onError={handleVideoError}
                onLoadedData={handleVideoLoad}
                controls={isPlaying && window.innerWidth <= 768}
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            {/* Mobile Play/Pause Indicator */}
            {window.innerWidth <= 768 && !hasError && (
              <div className="absolute top-3 left-3 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
                <div className={`w-0 h-0 border-transparent border-l-white border-l-[12px] ${isPlaying ? 'hidden' : 'block'}`} />
                <div className={`w-4 h-4 bg-white ${isPlaying ? 'block' : 'hidden'}`} />
              </div>
            )}
            
            {/* Live Demo Button */}
            <button
              onClick={(e) => handleLiveClick(project.liveUrl, e)}
              className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              title="View Live Demo"
              aria-label={`Open ${project.title} live demo`}
            >
              <ExternalLink className="w-5 h-5 text-primary-600" />
            </button>
            
            {/* Industry Badge */}
            <div className="absolute bottom-3 left-3 px-3 py-1 bg-primary-500 text-white text-sm rounded-full">
              {project.industry}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-5">
            {/* Title */}
            <h3 className="font-bold text-lg text-gray-900 mb-3">
              {project.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech: string, techIdx: number) => (
                <span 
                  key={techIdx}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Featured projects that showcase our expertise across different industries.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex animate-scroll w-max">
              {loopedProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Instructions */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            <span className="md:hidden">Tap on videos to play/pause • </span>
            <span>Hover over videos to play (desktop)</span>
          </p>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-3 * (20rem + 2rem))); }
        }
        
        .animate-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
          padding-left: 1rem;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .w-80 { width: 18rem; }
        }
        
        @media (max-width: 768px) {
          .w-80 { width: 16rem; }
          
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-3 * (16rem + 2rem))); }
          }
        }
        
        @media (max-width: 640px) {
          .w-80 { width: 18rem; }
          
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-3 * (18rem + 1rem))); }
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;