import { Clock, TrendingUp, DollarSign, Shield, Zap, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect deadlines and deliver projects on schedule without compromising quality.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Future-proof technology that grows with your business and adapts to your needs.',
      color: 'from-primary-500 to-accent-500',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates without hidden costs. Get maximum value for your investment.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security measures to protect your data and ensure reliability.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'We use the latest technologies and best practices to build superior products.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 customer support and maintenance to keep your systems running smoothly.',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <section id="why-choose-us" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose TechSolutions</h2>
          <p className="section-subtitle mx-auto">
            We deliver excellence through innovation, reliability, and exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-12`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have achieved their digital goals with us
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Get Started Today
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
