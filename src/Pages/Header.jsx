import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Home, User, ShoppingBag, LogIn } from "lucide-react";

// Header component following the specified function format
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items with icons
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Products", path: "/products", icon: ShoppingBag },
    { name: "About", path: "/about", icon: User },
    { name: "Login", path: "/login", icon: LogIn },
  ];

  // Check if current path is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative">
      {/* Header with purple gradient background matching the design */}
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#32327d] via-[#3f3f91] to-[#4c4ca6] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent hover:brightness-110 transition-all duration-300"
              >
                Ariful Shop
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-orange-500 font-black text-white shadow-lg"
                        : "text-purple-100 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <IconComponent size={18} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-200 transition-colors duration-300 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-purple-800/95 backdrop-blur-sm border-t border-purple-600/30">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-orange-500 text-white shadow-lg"
                        : "text-purple-100 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <IconComponent size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
