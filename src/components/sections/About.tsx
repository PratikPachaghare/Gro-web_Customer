import { Users, Code2, Rocket, Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const video1 = "https://res.cloudinary.com/dncz7an76/video/upload/v1767597471/video1_jizeuv.mp4";
const video2 = "https://res.cloudinary.com/dncz7an76/video/upload/v1767597539/Vedio_qgdais.mp4";

interface StatItem {
  number: string;
  label: string;
}

interface ValueItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([]);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const started = useRef<boolean>(false);

  const stats: StatItem[] = [
    { number: "10+", label: "Projects Delivered" },
    { number: "99%", label: "System Uptime" },
    { number: "05+", label: "Expert Developers" },
    { number: "07+", label: "Happy Clients" },
  ];

  const parseNumber = (str: string) => {
    const num = parseInt(str.replace(/\D/g, ""), 10) || 0;
    return {
      num,
      hasPlus: str.includes("+"),
      hasPercent: str.includes("%"),
      hasLeadingZero: /^0/.test(str),
    };
  };

  /* ---------- COUNT UP ANIMATION ---------- */
  useEffect(() => {
    setCounts(stats.map(() => 0));

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;

          stats.forEach((stat, i) => {
            const { num } = parseNumber(stat.number);
            let current = 0;

            const interval = setInterval(() => {
              current++;
              setCounts((prev) => {
                const updated = [...prev];
                updated[i] = current;
                return updated;
              });

              if (current >= num) clearInterval(interval);
            }, 40);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    statRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const values: ValueItem[] = [
    {
      icon: Rocket,
      title: "Our Mission",
      description:
        "Accelerating digital transformation with scalable and secure solutions.",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description:
        "Empowering businesses using modern web, AI, and cloud technologies.",
    },
    {
      icon: Code2,
      title: "Our Expertise",
      description:
        "Full-stack development, performance optimization, and UI excellence.",
    },
    {
      icon: Users,
      title: "Our Culture",
      description:
        "A collaborative team driven by innovation and real-world impact.",
    },
  ];

  return (
    <section
      id="about"
      className="overflow-hidden py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold mb-6 text-slate-900">
            Crafting Digital Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We build scalable digital products with modern design and clean code.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => {
            const { hasPlus, hasPercent, hasLeadingZero } = parseNumber(
              stat.number
            );

            const value =
              (hasLeadingZero && counts[i] < 10 ? "0" : "") +
              (counts[i] ?? 0) +
              (hasPercent ? "%" : "") +
              (hasPlus ? "+" : "");

            return (
              <div
                key={i}
                ref={(el) => (statRefs.current[i] = el)}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="text-5xl font-bold text-blue-600">
                  {value}
                </div>
                <p className="text-slate-600 mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <video
            src={video1}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-3xl shadow-2xl w-full h-[300px] object-cover"
          />
          <div>
            <h3 className="text-4xl font-bold text-blue-600 mb-6">
              Innovative IT Solutions
            </h3>
            <p className="text-slate-700 mb-4">
              We deliver modern, scalable web applications for real businesses.
            </p>
            <p className="text-slate-700">
              Our e-commerce demo showcases performance-focused UI and UX.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h3 className="text-4xl font-bold text-cyan-600 mb-6">
              Beauty & Wellness Platforms
            </h3>
            <p className="text-slate-700 mb-4">
              Clean, elegant beauty parlour websites with booking systems.
            </p>
            <p className="text-slate-700">
              Built for real-world businesses and smooth customer experience.
            </p>
          </div>
          <video
            src={video2}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-3xl shadow-2xl w-full h-[300px] object-cover"
          />
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="text-center">
                <div className="mx-auto mb-6 w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500">
                  <Icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{v.title}</h4>
                <p className="text-slate-600 text-sm">{v.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
