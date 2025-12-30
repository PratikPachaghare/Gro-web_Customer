import { Users, Code2, Rocket, Lightbulb } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface StatItem {
  number: string;
  label: string;
}

interface ValueItem {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const About = () => {
  /* ---------------- COUNT ANIMATION ---------------- */
  const [counts, setCounts] = useState<number[]>([]);
  const statRefs = useRef<HTMLDivElement[]>([]);
  const started = useRef(false);

  const stats: StatItem[] = [
    { number: "10+", label: "Projects Delivered" },
    { number: "99%", label: "System Uptime" },
    { number: "05+", label: "Expert Developers" },
    { number: "07+", label: "Happy client" },
  ];

  const parseNumber = (str: string) => {
    const num = parseInt(str.replace(/\D/g, "")) || 0;
    const hasPlus = str.includes("+");
    const hasPercent = str.includes("%");
    const hasLeadingZero = /^0/.test(str.replace(/\D/g, ""));
    return { num, hasPlus, hasPercent, hasLeadingZero };
  };

  useEffect(() => {
    setCounts(stats.map(() => 0));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;

            stats.forEach((stat, index) => {
              const { num } = parseNumber(stat.number);
              let start = 0;
              const duration = 1500;
              const step = Math.ceil(duration / (num || 1));

              const interval = setInterval(() => {
                start++;
                setCounts((prev) => {
                  const copy = [...prev];
                  copy[index] = start;
                  return copy;
                });
                if (start >= num) clearInterval(interval);
              }, step);
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    statRefs.current.forEach((el) => el && observer.observe(el));
  }, []);

  /* ---------------- SCROLL ANIMATIONS ---------------- */
  useEffect(() => {
    const createObserver = (className: string, animationClass: string) => {
      const elements = document.querySelectorAll(`.${className}`);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add(animationClass);
                entry.target.classList.remove("opacity-0");
              }, 150);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    const observers = [
      createObserver("animate-on-scroll", "animate-slide-up"),
      createObserver("animate-on-scroll-img", "animate-slide-left-to-right"),
      createObserver("animate-on-scroll-img-right", "animate-slide-right-to-left"),
      createObserver("animate-on-scroll-text", "animate-slide-right-to-left"),
      createObserver("animate-on-scroll-text-left", "animate-slide-left-to-right"),
    ];

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const values: ValueItem[] = [
    {
      icon: Rocket,
      title: "Our Mission",
      description:
        "Accelerating digital transformation by building scalable, secure, and user-centric software solutions.",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description:
        "To empower businesses worldwide with cutting-edge AI and cloud technologies that redefine industries.",
    },
    {
      icon: Code2,
      title: "Our Expertise",
      description:
        "Specializing in full-stack development, machine learning, and high-performance architecture design.",
    },
    {
      icon: Users,
      title: "Our Culture",
      description:
        "A collaborative ecosystem of creative thinkers, engineers, and problem-solvers driven by innovation.",
    },
  ];

  return (
    <section id="about" className="overflow-hidden py-24 bg-gradient-to-b from-slate-50 to-white">
      {/* ---------------- STYLES (Keep existing CSS) ---------------- */}
      <style jsx>{`
        @keyframes slideUp { from { transform: translateY(80px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes slideInLeftSlow { from { transform: translateX(-120px) scale(1.06); opacity: 0; filter: blur(6px); } to { transform: translateX(0) scale(1); opacity: 1; filter: blur(0); } }
        @keyframes slideInRightSlow { from { transform: translateX(120px) scale(1.06); opacity: 0; filter: blur(6px); } to { transform: translateX(0) scale(1); opacity: 1; filter: blur(0); } }
        .animate-slide-up { animation: slideUp 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-left-to-right { animation: slideInLeftSlow 3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-right-to-left { animation: slideInRightSlow 3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .img-container img { transition: transform 4s cubic-bezier(0.16, 1, 0.3, 1); }
        .img-container img:hover { transform: scale(1.08); }
        .stat-card { background: white; border-radius: 24px; padding: 32px 24px; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05); border: 1px solid rgba(203, 213, 225, 0.4); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); position: relative; overflow: hidden; }
        .stat-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #3b82f6, #06b6d4); }
        .stat-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); }
        .value-circle { width: 120px; height: 120px; border-radius: 9999px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #3b82f6, #06b6d4); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2); transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .value-circle:hover  { transform: scale(1.15) ; }
        .nav-bar { position: absolute; top: 0; left: 0; right: 0; background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(226, 232, 240, 0.8); padding: 20px 0; z-index: 50; }
        .nav-link { color: #1e293b; font-weight: 500; transition: color 0.3s ease; position: relative; padding-bottom: 4px; }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: #3b82f6; transition: width 0.3s ease; }
        .nav-link:hover { color: #3b82f6; }
        .nav-link:hover::after { width: 100%; }
      `}</style>

      {/* ---------------- NAVIGATION BAR ---------------- */}
      {/* <div className="nav-bar">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex justify-center space-x-12">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Solutions</a>
            <a href="#" className="nav-link">Portfolio</a>
            <a href="#" className="nav-link">About Us</a>
            <a href="#" className="nav-link">Careers</a>
          </nav>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 pt-32">
        {/* ---------------- HEADING ---------------- */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold mb-6 opacity-0 animate-on-scroll text-slate-900">
            Crafting Digital Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto opacity-0 animate-on-scroll">
            We bridge the gap between complex business challenges and elegant technological solutions through innovation and code.
          </p>
        </div>

        {/* ---------------- STATS ---------------- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => {
            const { hasPlus, hasPercent, hasLeadingZero } = parseNumber(stat.number);
            const value =
              (hasLeadingZero && counts[i] < 10 ? "0" : "") +
              counts[i] +
              (hasPercent ? "%" : "") +
              (hasPlus ? "+" : "");

            return (
              <div
                key={i}
                ref={(el) => (statRefs.current[i] = el!)}
                className="stat-card opacity-0 animate-on-scroll"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {value}
                </div>
                <p className="text-slate-600 mt-2 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* ---------------- SECTION 1: INNOVATION ---------------- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-40">
          <div className="img-container rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl shadow-slate-200">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
              className="h-[600px] w-full object-cover opacity-0 animate-on-scroll-img"
              alt="Team collaborating"
            />
          </div>

          <div className="opacity-0 animate-on-scroll-text">
            <h3 className="text-4xl text-blue-600 font-bold mb-8">
              Future-Ready Engineering
            </h3>
            <p className="text-lg text-slate-700 mb-6">
              Our engineering philosophy focuses on building "Lego-like" architectures—modular, scalable, and easy to maintain. We don't just write code; we solve problems.
            </p>
            <p className="text-lg text-slate-700">
              From Cloud Infrastructure to Enterprise SaaS, we ensure your tech stack is an asset, not a liability.
            </p>
          </div>
        </div>

        {/* ---------------- SECTION 2: AI & DATA ---------------- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-40">
          <div className="opacity-0 animate-on-scroll-text-left">
            <h3 className="text-4xl text-cyan-600 font-bold mb-8">
              Data-Driven Growth
            </h3>
            <p className="text-lg text-slate-700 mb-6">
              Harness the power of Artificial Intelligence and Big Data. We transform raw information into actionable insights that drive business decisions.
            </p>
            <p className="text-lg text-slate-700">
              Our AI solutions integrate seamlessly into your existing workflows, enhancing productivity and user experience.
            </p>
          </div>

          <div className="img-container rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl shadow-slate-200">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
              className="h-[600px] w-full object-cover opacity-0 animate-on-scroll-img-right"
              alt="Modern workspace"
            />
          </div>
        </div>

        {/* ---------------- VALUES (CIRCULAR) ---------------- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center opacity-0 animate-on-scroll"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="value-circle mb-6 ">
                  <Icon size={36} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-800">{v.title}</h4>
                <p className="text-slate-600 text-sm max-w-xs">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;