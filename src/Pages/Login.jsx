import { Link } from 'react-router';
import { Eye, Lock, Mail, User, ArrowRight } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#32327d] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <User size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-purple-200">Sign in to your account to continue</p>
        </div>

        {/* Form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl shadow-black p-8 border border-white/10">
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-purple-300" />
                </div>
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-3 bg-purple-900/50 border border-purple-600/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-purple-300" />
                </div>
                <input
                  type="password"
                  className="w-full pl-10 pr-12 py-3 bg-purple-900/50 border border-purple-600/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-purple-300 hover:text-white transition-colors duration-300"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded bg-purple-900/50"
                />
                <label className="ml-2 block text-sm text-purple-200">
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-purple-300 hover:text-white transition-colors duration-300"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-purple-900 bg-white hover:bg-purple-50 transition-all duration-300"
            >
              Sign in
              <ArrowRight size={16} className="ml-2" />
            </button>
          </form>

          {/* Sign Up */}
          <div className="mt-6 text-center">
            <p className="text-purple-200">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-medium text-white underline hover:text-purple-200 transition-colors duration-300"
              >
                Sign up here
              </Link>
            </p>
          </div>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-purple-600/30" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-purple-300">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-purple-600/30 rounded-lg shadow-sm bg-white/5 text-sm font-medium text-purple-200 hover:bg-white/10 transition-all duration-300">
                Google
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-purple-600/30 rounded-lg shadow-sm bg-white/5 text-sm font-medium text-purple-200 hover:bg-white/10 transition-all duration-300">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
