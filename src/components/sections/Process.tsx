import {
  ClipboardList,
  Pencil,
  Code,
  TestTube,
  Rocket,
  Headphones,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ProcessStep {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  step: string;
}

const Process = () => {
  const steps: ProcessStep[] = [
    {
      icon: ClipboardList,
      title: "Requirement",
      description:
        "We listen to your needs, analyze your goals, and create a comprehensive project plan.",
      step: "01",
    },
    {
      icon: Pencil,
      title: "Design",
      description:
        "Our designers create intuitive, beautiful interfaces that align with your brand.",
      step: "02",
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Expert developers bring designs to life with clean, efficient, and scalable code.",
      step: "03",
    },
    {
      icon: TestTube,
      title: "Testing",
      description:
        "Rigorous quality assurance to ensure everything works perfectly across platforms.",
      step: "04",
    },
    {
      icon: Rocket,
      title: "Launch",
      description:
        "Smooth deployment with monitoring and optimization for peak performance.",
      step: "05",
    },
    {
      icon: Headphones,
      title: "Support",
      description:
        "Ongoing maintenance, updates, and 24/7 support to keep products running smoothly.",
      step: "06",
    },
  ];

  const [animatedSteps, setAnimatedSteps] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          steps.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSteps((prev) => prev + 1);
            }, index * 300); // faster stagger
          });
        }
      },
      { threshold: 0.15 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="bg-white" ref={sectionRef}>
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="section-title bg-black bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="section-subtitle mx-auto">
            A proven methodology that delivers exceptional results every time
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-gradient-to-r from-sky-200 via-blue-300 to-green-200 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-green-400 transition-all duration-[1200ms] ease-out"
              style={{
                width: animatedSteps >= steps.length ? "100%" : "0%",
                transitionDelay: "300ms",
              }}
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = index < animatedSteps;

              return (
                <div key={index} className="relative">
                  {/* Card */}
                  <div
                    className={`
                      bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100
                      hover:shadow-xl hover:-translate-y-1
                      transition-all duration-450 ease-out
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                    `}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Big Number */}
                    <div
                      className={`
                        absolute -top-4 -right-4 text-8xl font-bold text-sky-50
                        transition-opacity duration-700
                        ${isVisible ? "opacity-100" : "opacity-0"}
                      `}
                      style={{ transitionDelay: `${index * 150 + 200}ms` }}
                    >
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div
                      className={`
                        w-16 h-16 mb-6 rounded-2xl flex items-center justify-center
                        bg-gradient-to-br from-sky-400 via-blue-500 to-green-400
                        shadow-lg shadow-blue-300/30
                        transition-all duration-450 ease-out
                        ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"}
                      `}
                      style={{ transitionDelay: `${index * 150 + 100}ms` }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Text */}
                    <h3
                      className={`
                        text-2xl font-bold mb-3 transition-all duration-450
                        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}
                      `}
                      style={{ transitionDelay: `${index * 150 + 300}ms` }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`
                        text-gray-600 transition-all duration-450
                        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}
                      `}
                      style={{ transitionDelay: `${index * 150 + 400}ms` }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2">
                      <div
                        className={`
                          w-12 h-12 rounded-full flex items-center justify-center
                          bg-gradient-to-br from-sky-400 via-blue-500 to-green-400
                          shadow-lg shadow-blue-300/30
                          transition-all duration-450 ease-out
                          ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                        `}
                        style={{ transitionDelay: `${index * 150 + 500}ms` }}
                      >
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div
            className={`
              inline-block rounded-2xl p-8
              bg-gradient-to-r from-sky-50 via-blue-50 to-green-50
              transition-all duration-600
              ${
                animatedSteps >= steps.length
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
            style={{ transitionDelay: "800ms" }}
          >
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-bold text-blue-600">
                Average Project Timeline:
              </span>{" "}
              4–12 weeks
            </p>
            <p className="text-gray-600">
              Depending on complexity and requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
