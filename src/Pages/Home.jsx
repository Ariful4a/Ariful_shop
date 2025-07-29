import { Link } from "react-router";
import { ArrowRight, Star, Users, Award, Zap } from "lucide-react";

// Home page component following the specified function format
const Home = () => {
  // Features data for the home page
  const features = [
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Lightning-fast loading times and smooth user experience",
    },
    {
      icon: Users,
      title: "User Friendly",
      description: "Intuitive design that makes navigation effortless",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "High-quality products and exceptional customer service",
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "Consistently rated 5 stars by our satisfied customers",
    },
  ];

  return (
    <div className="min-h-screen bg-[#32327d]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 pt-40">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to Our
            <span className="block bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
              Ariful shop Website
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover amazing products, explore our modern design, and experience
            the power of React with Tailwind CSS in this beautiful responsive
            website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Products
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              We provide exceptional value through innovative solutions and
              outstanding customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="relative bg-[#32327d] text-white p-8 rounded-2xl shadow-2xl shadow-black transition-all duration-300 hover:shadow-2xl hover:scale-105 text-center"
                >
                  {/* Top-left round dot */}
                  <span className="absolute top-4 left-4 w-3 h-3 bg-white/90 rounded-full"></span>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-purple-200 mb-6">{feature.description}</p>

                  {/* Bottom pink line */}
                  <span className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-pink-300 rounded-full"></span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  10K+
                </div>
                <div className="text-purple-200 text-lg">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  500+
                </div>
                <div className="text-purple-200 text-lg">
                  Products Available
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  99%
                </div>
                <div className="text-purple-200 text-lg">
                  Customer Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Join thousands of satisfied customers and discover what makes us
            special.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Join Now
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
