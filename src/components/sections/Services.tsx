import { Globe, Smartphone, TrendingUp, Palette, Code, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies. From corporate sites to e-commerce platforms, we create web solutions that drive results.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. User-friendly apps that engage your audience and boost your business.',
      features: ['iOS & Android', 'Cross-Platform', 'UI/UX Focused', 'App Store Ready'],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence. From SEO to social media, we help you reach your target audience.',
      features: ['SEO Services', 'Social Media', 'PPC Campaigns', 'Analytics'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience. We create interfaces that users love and that drive conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
    },
    {
      icon: Code,
      title: 'Custom Software Solutions',
      description: 'Tailored software solutions built to solve your specific business challenges. Scalable, secure, and efficient applications.',
      features: ['Enterprise Apps', 'API Development', 'Cloud Solutions', 'Integration'],
    },
    {
      icon: Headphones,
      title: 'Maintenance & Support',
      description: '24/7 technical support and ongoing maintenance to keep your digital products running smoothly. We\'re here when you need us.',
      features: ['24/7 Support', 'Bug Fixes', 'Updates', 'Monitoring'],
    },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive IT solutions to meet all your digital needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card p-8 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-block mt-6 text-primary-600 font-semibold hover:text-accent-600 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
