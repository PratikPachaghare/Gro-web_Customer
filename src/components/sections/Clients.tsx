import { Star, Quote } from 'lucide-react';

const Clients = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStartup Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'TechSolutions transformed our digital presence completely. Their team delivered a stunning website and mobile app that exceeded our expectations. Highly recommended!',
    },
    {
      name: 'Michael Chen',
      position: 'Marketing Director, GrowthCo',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with TechSolutions was a game-changer for our business. Their digital marketing strategies doubled our online engagement in just three months.',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, HealthPlus',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The custom software solution they built for us streamlined our operations significantly. Professional, responsive, and truly expert developers.',
    },
    {
      name: 'David Kim',
      position: 'CTO, FinanceHub',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Exceptional quality and support. They not only delivered on time but also provided ongoing maintenance that keeps our systems running smoothly.',
    },
    {
      name: 'Lisa Anderson',
      position: 'Owner, RetailPro',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Our e-commerce platform built by TechSolutions has been a huge success. Sales have increased by 150% since the launch. Couldn\'t be happier!',
    },
    {
      name: 'James Wilson',
      position: 'Director, EduLearn',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The team\'s creativity and technical expertise brought our learning platform to life. They truly understood our vision and made it a reality.',
    },
  ];

  const clientLogos = [
    { name: 'TechCorp', width: 'w-32' },
    { name: 'InnovateLab', width: 'w-36' },
    { name: 'GlobalTech', width: 'w-32' },
    { name: 'StartupHub', width: 'w-36' },
    { name: 'DigitalWave', width: 'w-32' },
    { name: 'CloudSync', width: 'w-36' },
  ];

  return (
    <section id="clients" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle mx-auto">
            See what our clients have to say about working with us
          </p>
        </div>

        <div className="mb-20">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className={`${logo.width} h-16 bg-gray-200 rounded-lg flex items-center justify-center animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-gray-500 font-semibold text-sm">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card p-8 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-primary-200 mb-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
