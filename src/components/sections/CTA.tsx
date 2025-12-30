import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-container">
      <div className="mt-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">

        {/* Decorative Blur Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/20 rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">

          {/* Tagline */}
          <div className="inline-block px-6 py-3 bg-white/15 backdrop-blur-sm rounded-full font-medium mb-6">
            Ready to Get Started?
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
            Transform your vision into reality with our expert team. Get in touch today for a free consultation and project quote.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="#contact"
              className="group px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#portfolio"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              View Portfolio
            </a>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-transform">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Free Consultation</h3>
              <p className="text-white/90">Discuss your project with our experts</p>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-transform">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Flexible Engagement</h3>
              <p className="text-white/90">Choose the partnership model that fits</p>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-transform">
              <ArrowRight className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Quick Turnaround</h3>
              <p className="text-white/90">Fast response within 24 hours</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
