import {
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  Code,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef, useState, FC } from "react";

interface ServiceItem {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  glow?: string; // optional now since we won't use it
  image: string;
  imageAlt?: string;
}

const Services: FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              (entry.target as HTMLElement).dataset.index || "0"
            );
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  const services: ServiceItem[] = [
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Custom, responsive websites built with modern technologies that drive results.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"],
      gradient: "from-blue-500 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Website development on multiple devices"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "App Store Ready"],
      gradient: "from-purple-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Mobile app development interface"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence.",
      features: ["SEO Optimization", "Social Media", "PPC Campaigns", "Analytics"],
      gradient: "from-green-500 to-emerald-500",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Digital marketing analytics dashboard"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that enhance user experience and conversion.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      gradient: "from-orange-500 to-red-500",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
      imageAlt: "UI/UX design workspace"
    },
    {
      icon: Code,
      title: "Custom Software",
      description:
        "Tailored solutions for your unique business challenges and workflows.",
      features: ["Enterprise Solutions", "API Development", "Cloud Integration", "Scalable Architecture"],
      gradient: "from-indigo-500 to-blue-500",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Custom software code development"
    },
    {
      icon: Headphones,
      title: "Maintenance & Support",
      description:
        "24/7 support and maintenance to keep your digital products running smoothly.",
      features: ["24/7 Support", "Bug Fixes", "Regular Updates", "Performance Monitoring"],
      gradient: "from-teal-500 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Customer support and technical assistance"
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-50 -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-green-50 to-emerald-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          {/* <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 text-sm font-semibold mb-4">
            Our Expertise
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            Our Digital Services
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 rounded-full" />
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            We provide end-to-end digital solutions to transform your business and accelerate growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            const isImageLoaded = loadedImages.has(index);

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                data-index={index}
                className={`group relative cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } transition-all duration-700 ease-out`}
              >
                <div
                  className={`bg-white rounded-2xl p-6 h-full border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden`}
                >
                  <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl bg-gray-100">
                    {!isImageLoaded && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
                    )}
                    <img
                      ref={(el) => (imgRefs.current[index] = el)}
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      loading="lazy"
                      onLoad={() => handleImageLoad(index)}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isImageLoaded
                          ? "opacity-100 scale-100 group-hover:scale-110"
                          : "opacity-0 scale-105"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Icon without blur/glow */}
                  <div className="mb-6 relative">
                    <div className="relative">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {service.title}
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2.5 group-hover:w-16 transition-all duration-400 origin-left" />
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-center text-sm font-medium text-gray-700 ${
                          isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                        } transition-all duration-500`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <div className={`flex-shrink-0 w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${service.gradient}`} />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-between w-full group/btn"
                    >
                      <span className="text-sm font-semibold text-gray-700 group-hover/btn:text-gray-900 transition-colors">
                        Get Started
                      </span>
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 text-white group-hover/btn:from-blue-600 group-hover/btn:to-cyan-600 transition-all duration-300 group-hover/btn:scale-110">
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Services;
