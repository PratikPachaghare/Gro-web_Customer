import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  Send,
  MessageSquare,
  Code,
  Smartphone,
  BarChart,
  Palette,
  Users,
  Globe,
  Server,
  Shield,
  Cloud,
  Cpu,
  Database,
  Layout,
  TrendingUp,
  Zap,
  Target,
} from "lucide-react";

/* ================= TYPES ================= */
type ContactInfoItem = {
  icon: React.ElementType;
  title: string;
  details: React.ReactNode[];
  iconColor: string;
  bgColor: string;
};

type ServiceCard = {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  bgColor: string;
  stats: string;
};

/* ================= COMPONENT ================= */
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "service") {
      setSelectedService(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_t9qemxl";
    const TEMPLATE_ID = "template_o5k3r9r";
    const PUBLIC_KEY = "Qs5xTqLnG0kcSKMYz";

    try {
      if (formRef.current) {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          { ...formData },
          PUBLIC_KEY
        );

        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setSelectedService("");
      }
    } catch (error) {
      console.error("Email failed:", error);
      alert("Failed to send message. Try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  /* ================= DATA ================= */
  const contactInfo: ContactInfoItem[] = [
    {
      icon: Phone,
      title: "Call Us",
      details: [
        <a
          key="phone1"
          href="tel:+919657426243"
          className="text-blue-600 hover:underline font-medium"
        >
          +91 9657426243
        </a>,
      ],
      iconColor: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-white",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Us",
      details: [
        <a
          key="wa"
          href="https://wa.me/919657426243"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline font-medium"
        >
          Chat on WhatsApp
        </a>,
      ],
      iconColor: "from-green-500 to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-white",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        <a
          key="mail1"
          href="mailto:growebtechsolution@gmail.com"
          className="text-purple-600 hover:underline font-medium"
        >
          growebtechsolution@gmail.com
        </a>,
      ],
      iconColor: "from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-white",
    },
  ];

  const services = [
    { value: "website", label: "Website Development", icon: Code },
    { value: "mobile", label: "Mobile App Development", icon: Smartphone },
    { value: "marketing", label: "Digital Marketing", icon: BarChart },
    { value: "uiux", label: "UI/UX Design", icon: Palette },
    { value: "consulting", label: "Tech Consulting", icon: Users },
    { value: "other", label: "Other Services", icon: Globe },
  ];

  const serviceDetails: Record<string, ServiceCard> = {
    website: {
      icon: Code,
      title: "Website Development",
      description: "Custom websites, e-commerce platforms, and web applications with modern frameworks and responsive design.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      stats: "↑ 200% faster load times",
    },
    mobile: {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      stats: "📱 99% crash-free rate",
    },
    marketing: {
      icon: BarChart,
      title: "Digital Marketing",
      description: "SEO, social media marketing, PPC campaigns, and analytics to maximize your ROI.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      stats: "📈 3x ROI guarantee",
    },
    uiux: {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance engagement, conversion, and brand loyalty.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      stats: "🎨 40% higher engagement",
    },
    consulting: {
      icon: Users,
      title: "Tech Consulting",
      description: "Strategic IT consulting to optimize your business processes and technology stack.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      stats: "⚡ 50% cost reduction",
    },
    other: {
      icon: Globe,
      title: "Other Services",
      description: "Cloud solutions, DevOps, cybersecurity, AI/ML, and custom software development.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      stats: "🛡️ 100% secure solutions",
    },
  };

  /* ================= JSX ================= */
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-2 rounded-full mb-6">
            <Zap className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-medium">Get Started Today</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Your Digital Vision Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Reality</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of experts is ready to bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 border border-gray-200 ${info.bgColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${info.iconColor} shadow-lg`}
                  >
                    <Icon className="text-white w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {info.title}
                  </h3>
                </div>
                <div className="space-y-2 pl-18">{info.details}</div>
              </div>
            );
          })}
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT COLUMN - VISUAL SECTION */}
          <div className="space-y-8">
            {/* MAIN SERVICE VISUALIZATION */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Background Gradient */}
              <div className={`absolute inset-0 ${
                selectedService && serviceDetails[selectedService] 
                  ? serviceDetails[selectedService].bgColor 
                  : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
              }`}></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-gradient-to-r from-green-400/20 to-cyan-400/20"></div>
              
              {/* Content */}
              <div className="relative p-8">
                {selectedService && serviceDetails[selectedService] ? (
                  <div className="text-center">
                    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br ${serviceDetails[selectedService].gradient} shadow-2xl mx-auto mb-6 transform rotate-3`}>
                      {(() => {
                        const Icon = serviceDetails[selectedService].icon;
                        return <Icon className="text-white w-12 h-12" />;
                      })()}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {serviceDetails[selectedService].title}
                    </h3>
                    <p className="text-gray-700 mb-4 text-lg">
                      {serviceDetails[selectedService].description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Target className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-gray-800">
                        {serviceDetails[selectedService].stats}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl mx-auto mb-6 transform -rotate-3">
                      <Cpu className="text-white w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      Select Your Service
                    </h3>
                    <p className="text-gray-700 mb-4 text-lg">
                      Choose a service to see detailed information and how we can help your business grow exponentially.
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-75"></div>
                      <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-150"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* SERVICE GRID WITH IMAGES */}
            
<div className="bg-black rounded-3xl p-6 text-white 
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
  {services.map((service) => {
    const Icon = service.icon;
    const isSelected = selectedService === service.value;
    const serviceDetail = serviceDetails[service.value];

    return (
      <button
        key={service.value}
        type="button"
        onClick={() => {
          setFormData({ ...formData, service: service.value });
          setSelectedService(service.value);
        }}
        className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-500 
        w-full flex flex-col items-center justify-center
        ${
          isSelected
            ? "bg-neutral-900 ring-2 ring-neutral-700 shadow-2xl"
            : "bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:shadow-lg"
        }`}
      >
        {/* ICON BOX */}
        <div
          className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 relative z-10
            ${
              isSelected
                ? `bg-gradient-to-br ${serviceDetail.gradient}`
                : "bg-neutral-800 group-hover:scale-110 transition-transform duration-300"
            }
          `}
        >
          <Icon
            className={`${isSelected ? "text-white" : "text-neutral-400 group-hover:text-white"} w-8 h-8`}
          />
        </div>

        {/* TITLE */}
        <span
          className={`text-base font-semibold block text-center relative z-10
            ${isSelected ? "text-white" : "text-neutral-300 group-hover:text-white"}
          `}
        >
          {service.label.split(" ")[0]}
        </span>

        {/* Bottom bar */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300
            ${
              isSelected
                ? `bg-gradient-to-r ${serviceDetail.gradient}`
                : "bg-transparent group-hover:bg-neutral-600"
            }
          `}
        ></div>
      </button>
    );
  })}
</div>




            {/* TECH STACK VISUALIZATION */}
            {/* <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Cpu className="w-6 h-6" />
                Our Tech Stack
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-2">
                    <Layout className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-sm font-medium">React</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-2">
                    <Database className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-sm font-medium">Node.js</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-2">
                    <Cloud className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-sm font-medium">AWS</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-2">
                    <Smartphone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="text-sm font-medium">Flutter</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="text-sm font-medium">Security</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="text-sm font-medium">Analytics</div>
                </div>
              </div>
            </div> */}
          </div>

          {/* RIGHT COLUMN - FORM */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-green-500/10 to-cyan-500/10 rounded-full -translate-x-20 translate-y-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Start Your Digital Journey
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will craft a custom solution for your needs.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-sm"
                        placeholder="John Doe"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        👤
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-sm"
                        placeholder="john@example.com"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        ✉️
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-sm"
                        placeholder="+1 234 567 8900"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        📱
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-sm"
                        placeholder="Your Company"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        🏢
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white/50 backdrop-blur-sm"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      ⚙️
                    </div>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      ▼
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-sm resize-none"
                      placeholder="Tell us about your project requirements, timeline, budget, and goals..."
                    />
                    <div className="absolute left-3 top-3 text-gray-400">
                      💭
                    </div>
                  </div>
                </div>
<button
  type="submit"
  disabled={isSubmitting}
  className="w-full flex items-center justify-center gap-3
             bg-gradient-to-r from-[#1E79FF] via-[#0FD1C8] to-[#7ED957]
             text-white font-semibold py-3 rounded-lg
             transition-all duration-300
             hover:opacity-90 active:opacity-80
             disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isSubmitting ? (
    <>
      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      Processing Your Request...
    </>
  ) : (
    <>
      <Send className="w-5 h-5" />
      Launch Your Project
    </>
  )}
</button>




                {isSubmitted && (
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl animate-fadeIn">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center animate-bounce">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <div className="w-3 h-3 border-2 border-white border-t-transparent border-l-transparent transform rotate-45"></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-green-800">
                          🎉 Success! Message Sent
                        </p>
                        <p className="text-sm text-green-600">
                          Our expert will contact you within 2 hours with a personalized proposal.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center pt-6 border-t border-gray-100">
                  🔒 Your information is secure. We never share your data with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;