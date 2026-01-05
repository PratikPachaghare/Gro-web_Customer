import { ExternalLink } from "lucide-react";

/* =======================
   CLOUDINARY VIDEOS
======================= */
const video1 =
  "https://res.cloudinary.com/dncz7an76/video/upload/q_auto,f_auto/v1767597471/video1_jizeuv.mp4";
const video2 =
  "https://res.cloudinary.com/dncz7an76/video/upload/q_auto,f_auto/v1767597539/Vedio_qgdais.mp4";
const video3 =
  "https://res.cloudinary.com/dncz7an76/video/upload/q_auto,f_auto/v1767597523/video_frtp6l.mp4";
const video4 =
  "https://res.cloudinary.com/dncz7an76/video/upload/q_auto,f_auto/v1767598676/Cinematic_Photographer_Portfolio_-_Google_Chrome_2026-01-05_13-06-20_zx8aah.mp4";

/* DATA */
const projects = [
  {
    title: "E-Commerce Platform",
    videoUrl: video1,
    industry: "Retail",
    description:
      "A full-featured e-commerce platform with inventory, payment gateway, and modern UI.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://e-commerce-three-plum-98.vercel.app/",
  },
  {
    title: "Aura Unisex Salon",
    videoUrl: video2,
    industry: "Beauty",
    description:
      "Modern salon website with smooth animations and responsive design.",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://auraunisexsalon.netlify.app/",
  },
  {
    title: "decoration Events",
    videoUrl: video3,
    industry: "entertainment",
    description:
      "Event decoration service website with vibrant design and interactive elements.",
    technologies: ["Next.js", "D3.js"],
    liveUrl: "https://narendradecor.netlify.app/",
  },
  {
    title: "Photography Portfolio",
    videoUrl: video4,
    industry: "Photography",
    description:
      "Cinematic photography portfolio with smooth video presentation.",
    technologies: ["React", "Framer Motion"],
    liveUrl: "photografer-senimatic-website.vercel.app",
  },
];

/* =======================
   DUPLICATE FOR LOOP SCROLL
======================= */
const loopedProjects = [
  ...projects.slice(-2),
  ...projects,
  ...projects.slice(0, 2),
];

const Portfolio = () => {
  const openLive = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Some of our featured projects with real working demos.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll w-max">
            {loopedProjects.map((project, index) => (
              <div key={index} className="w-80 mx-4 flex-shrink-0">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">

                  {/* VIDEO */}
                  <div className="relative h-48 bg-black">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                    </video>

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* LIVE BUTTON */}
                    <button
                      onClick={(e) => openLive(project.liveUrl, e)}
                      className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </button>

                    {/* INDUSTRY */}
                    <div className="absolute bottom-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                      {project.industry}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INFO */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Videos play automatically in loop
        </p>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
