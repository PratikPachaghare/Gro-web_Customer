import { Mail, Phone, Linkedin,  Instagram } from 'lucide-react';
import logoIcon from '../../assets/logo_icon/main_logo.png'; 
import logoText from '../../assets/logo_icon/logo_text.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className='flex items-center gap-2'>
              
                <img 
                  src={logoIcon} 
                  alt="Logo Icon" 
                  className="h-[50px] w-auto transition-transform duration-300 hover:scale-110" 
                />
                <img 
                  src={logoText} 
                  alt="Gro-web" 
                  className="h-9 mt-2 w-auto transition-all duration-300 "
                  
                  
                />
              </div>
            <p className="text-gray-400 mb-4">
              Building digital products that grow your business. Your trusted IT solutions partner.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/gro-web/" className="hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a> */}
              {/* <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a> */}
              <a href="https://www.instagram.com/gro_web/" className="hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Mobile App Development</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Custom Software</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-primary-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              {/* <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>123 Business Street, Tech City, TC 12345</span>
              </li> */}
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span> +91 9657426242 </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span>growebtechsolution@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Grow-web.All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
