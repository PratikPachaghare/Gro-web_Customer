import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-accent-900 to-primary-800"></div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce-slow animation-delay-2000"></div>
      </div>

      <div className="relative z-10 section-container">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium mb-6 animate-fade-in">
            Ready to Get Started?
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>

          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto animate-slide-up">
            Transform your vision into reality with our expert team. Get in touch today for a free consultation and project quote.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-slide-up">
            <a
              href="#contact"
              className="group px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center space-x-2"
            >
              <span>View Portfolio</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-transform">
              <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">Free Consultation</h3>
              <p className="text-gray-200">Discuss your project with our experts</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-transform">
              <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">Flexible Engagement</h3>
              <p className="text-gray-200">Choose the partnership model that fits</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-transform">
              <ArrowRight className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">Quick Turnaround</h3>
              <p className="text-gray-200">Fast response within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
