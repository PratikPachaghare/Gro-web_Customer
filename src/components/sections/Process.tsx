import { ClipboardList, Pencil, Code, TestTube, Rocket, Headphones } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Requirement',
      description: 'We listen to your needs, analyze your goals, and create a comprehensive project plan.',
      step: '01',
    },
    {
      icon: Pencil,
      title: 'Design',
      description: 'Our designers create intuitive, beautiful interfaces that align with your brand.',
      step: '02',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Expert developers bring designs to life with clean, efficient, and scalable code.',
      step: '03',
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Rigorous quality assurance to ensure everything works perfectly across all platforms.',
      step: '04',
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Smooth deployment to production with monitoring and optimization for peak performance.',
      step: '05',
    },
    {
      icon: Headphones,
      title: 'Support',
      description: 'Ongoing maintenance, updates, and 24/7 support to keep your product running smoothly.',
      step: '06',
    },
  ];

  return (
    <section id="process" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle mx-auto">
            A proven methodology that delivers exceptional results every time
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100">
                    <div className="relative">
                      <div className="absolute -top-4 -right-4 text-8xl font-bold text-primary-50">
                        {step.step}
                      </div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center z-10 shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-bold text-primary-600">Average Project Timeline:</span> 4-12 weeks
            </p>
            <p className="text-gray-600">Depending on complexity and requirements</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
