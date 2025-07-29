import { Link } from 'react-router';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from 'lucide-react';

const Footer = () => {
  // Footer navigation links organized by categories
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' }
    ],
    products: [
      { name: 'All Products', path: '/products' },
      { name: 'Featured', path: '/products/featured' },
      { name: 'New Arrivals', path: '/products/new' },
      { name: 'Best Sellers', path: '/products/bestsellers' }
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'FAQ', path: '/faq' }
    ]
  };

  // Social media links with icons
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'GitHub', icon: Github, url: 'https://github.com' }
  ];

  // Contact information
  const contactInfo = [
    { icon: Mail, text: 'contact@portfolio.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: 'New York, NY 10001' }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0d1b2a] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Ariful <span className='bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent'>Shop</span></h3>
            <p className="text-purple-200 leading-relaxed">
              Building modern, responsive web applications with cutting-edge technologies. 
              Your vision, our expertise.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-2 text-purple-200">
                    <IconComponent size={16} />
                    <span className="text-sm">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 pt-8 border-t border-purple-600/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-purple-200 text-sm">Stay updated:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white/10 border border-purple-600/30 rounded-l-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-purple-900/50 border-t border-purple-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-purple-200 text-sm flex items-center">
              © 2024 Ariful shop Website. Made with 
              <Heart size={16} className="mx-1 text-red-400" /> 
              using React & Tailwind CSS
            </p>
            <p className="text-purple-300 text-sm">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

