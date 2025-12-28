
import { Users, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    // { number: '10+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '07+', label: 'Happy Clients' },
    { number: '10+', label: 'Team Members' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative technology solutions that drive growth and digital transformation.',
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'To be the leading IT solutions provider, recognized for excellence, innovation, and lasting client partnerships.',
    },
    {
      icon: Award,
      title: 'Our Expertise',
      description: 'Decades of combined experience in cutting-edge technologies, delivering world-class solutions.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse team of passionate professionals dedicated to bringing your digital vision to life.',
    },
  ];

  return (
    <section id="about" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Abouts Gro-web</h2>
          <p className="section-subtitle mx-auto">
            Your trusted partner in digital transformation, delivering innovative solutions since 2014
          </p>
        </div>

        {/* Updated alignment for 3 items while keeping your animation and styles */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-24 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up min-w-[150px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="animate-slide-in-left">
            <img
              src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center animate-slide-in-right">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Building Tomorrow's Technology Today
            </h3>
            <p className="text-gray-600 mb-4">
              At TechSolutions, we're more than just an IT solution company. We're your strategic partner in
              navigating the digital landscape. Our team of expert developers, designers, and digital
              strategists work collaboratively to transform your vision into reality.
            </p>
            <p className="text-gray-600 mb-6">
              With over a decade of experience and hundreds of successful projects, we've helped
              businesses of all sizes achieve their digital goals. From startups to enterprises,
              we deliver solutions that are scalable, secure, and tailored to your unique needs.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded"></div>
              <span className="text-primary-600 font-semibold">Trusted by Industry Leaders</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;