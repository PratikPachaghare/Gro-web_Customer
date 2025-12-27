// import { ArrowRight, Code, Smartphone, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
// import { useState, useEffect, useCallback } from 'react';

// const Hero = () => {
//   const slides = [
//     {
//       id: 1,
//       title: "Transform Your Digital Presence",
//       subtitle: "Innovative solutions that drive business growth",
//       background: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920",
//       gradient: "from-primary-900 via-primary-800 to-accent-900",
//       ctaText: "Start Your Project",
//       ctaIcon: <ArrowRight className="w-5 h-5" />
//     },
//     {
//       id: 2,
//       title: "Enterprise-Grade Development",
//       subtitle: "Scalable solutions for businesses of all sizes",
//       background: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920",
//       gradient: "from-blue-900 via-indigo-800 to-purple-900",
//       ctaText: "View Case Studies",
//       ctaIcon: <Code className="w-5 h-5" />
//     },
//     {
//       id: 3,
//       title: "Mobile-First Innovation",
//       subtitle: "Engaging experiences across all devices",
//       background: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1920",
//       gradient: "from-emerald-900 via-teal-800 to-cyan-900",
//       ctaText: "Explore Mobile Solutions",
//       ctaIcon: <Smartphone className="w-5 h-5" />
//     },
//     {
//       id: 4,
//       title: "Data-Driven Results",
//       subtitle: "Analytics and insights that fuel success",
//       background: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1920",
//       gradient: "from-slate-950 via-blue-900 to-sky-900",
//       ctaText: "Measure Your Growth",
//       ctaIcon: <TrendingUp className="w-5 h-5" />
//     }
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Wrapped in useCallback to prevent unnecessary re-renders
//   const nextSlide = useCallback(() => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   }, [slides.length]);

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 6000);
//     return () => clearInterval(interval);
//   }, [nextSlide]);

//   return (
//     <section id="home" className="relative h-screen min-h-[600px] overflow-hidden bg-gray-900">
//       {/* Slides */}
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//             index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//           }`}
//         >
//           {/* Background Image with Optimization */}
//           <div 
//             className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
//             style={{ 
//               backgroundImage: `url(${slide.background})`,
//               transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)' 
//             }}
//           />
          
//           {/* Gradient Overlay */}
//           <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-75 mix-blend-multiply`}></div>
          
//           {/* Content */}
        
// <div className="relative h-full flex items-center justify-center">
//   <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
//     {/* Enhanced "Welcome to Gro-web" Badge */}
//     <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full 
//                     bg-white/10 backdrop-blur-md border border-white/30 
//                     shadow-[0_0_20px_rgba(255,255,255,0.1)] 
//                     animate-fade-in-down group cursor-default">
//       <span className="relative flex h-2 w-2">
//         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
//         <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
//       </span>
//       <span className="text-white text-sm font-black uppercase tracking-[0.2em] drop-shadow-md">
//         Welcome to <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">Gro-web</span>
//           <span> grow with us </span>
//       </span>
    
//     </div>
 
//     {/* Title */}
//     <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
//       {slide.title}
//     </h1>
    
//     {/* Subtitle */}
//     <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
//       {slide.subtitle}
//     </p>

//     {/* CTA Button */}
//     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//       <a
//         href="#contact"
//         className="group inline-flex items-center gap-3 bg-white text-gray-900 font-extrabold px-10 py-4 rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all transform hover:scale-105 active:scale-95"
//       >
//         <span>{slide.ctaText}</span>
//         <span className="group-hover:translate-x-1 transition-transform">
//           {slide.ctaIcon}
//         </span>
//       </a>
//     </div>
//   </div>
// </div>

//         </div>
//       ))}

//       {/* Navigation UI - Higher Z-Index */}
//       <div className="absolute inset-0 z-20 pointer-events-none">
//         <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">
//           <button
//             onClick={prevSlide}
//             className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all pointer-events-auto border border-white/10"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-6 h-6 text-white" />
//           </button>
          
//           <button
//             onClick={nextSlide}
//             className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all pointer-events-auto border border-white/10"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-6 h-6 text-white" />
//           </button>
//         </div>
//       </div>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className="group relative py-2"
//             aria-label={`Go to slide ${index + 1}`}
//           >
//             <div className={`h-1 transition-all duration-300 rounded-full ${
//               index === currentSlide ? 'w-8 bg-white' : 'w-4 bg-white/40 hover:bg-white/60'
//             }`} />
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Code, Smartphone, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Transform Your Digital Presence",
      subtitle: "Innovative solutions that drive business growth",
      background: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920",
      gradient: "from-primary-900 via-primary-800 to-accent-900",
      ctaText: "Start Your Project",
      ctaIcon: <ArrowRight className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Enterprise-Grade Development",
      subtitle: "Scalable solutions for businesses of all sizes",
      background: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920",
      gradient: "from-blue-900 via-indigo-800 to-purple-900",
      ctaText: "View Case Studies",
      ctaIcon: <Code className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Mobile-First Innovation",
      subtitle: "Engaging experiences across all devices",
      background: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1920",
      gradient: "from-emerald-900 via-teal-800 to-cyan-900",
      ctaText: "Explore Mobile Solutions",
      ctaIcon: <Smartphone className="w-5 h-5" />
    },
    {
      id: 4,
      title: "Data-Driven Results",
      subtitle: "Analytics and insights that fuel success",
      background: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1920",
      gradient: "from-slate-950 via-blue-900 to-sky-900",
      ctaText: "Measure Your Growth",
      ctaIcon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // 1. Corrected nextSlide using functional update to ensure it never goes stale
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // 2. Optimized Effect: The interval now correctly calls nextSlide every 6 seconds
  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 6000);

    // Cleanup: This is vital to prevent multiple intervals running at once
    return () => clearInterval(autoPlay);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Ken Burns (Zoom) effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out"
            style={{ 
              backgroundImage: `url(${slide.background})`,
              // This creates the movement effect when the slide becomes active
              transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)' 
            }}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-70 mix-blend-multiply`}></div>
          
          {/* Content Container */}
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full 
                            bg-white/10 backdrop-blur-md border border-white/30 
                            shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="text-white text-sm font-black uppercase tracking-[0.2em]">
                  Welcome to <span className="text-blue-200">Gro-web</span>
                </span>
              </div>
           
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                {slide.title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-medium">
                {slide.subtitle}
              </p>

              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-white text-gray-900 font-extrabold px-10 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                >
                  <span>{slide.ctaText}</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    {slide.ctaIcon}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {/* <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all pointer-events-auto border border-white/10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all pointer-events-auto border border-white/10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div> */}

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group py-2"
          >
            <div className={`h-1.5 transition-all duration-300 rounded-full ${
              index === currentSlide ? 'w-8 bg-white' : 'w-4 bg-white/40 hover:bg-white/60'
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;