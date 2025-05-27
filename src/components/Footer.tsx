
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative">
                <img 
                  src="/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png" 
                  alt="ABTC Bulgaria Logo" 
                  className="h-10 w-10 mr-4"
                />
                <div className="absolute inset-0 rounded-full bg-primary/5"></div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-primary mr-1 tracking-tight">ABTC</span>
                <span className="text-2xl font-bold text-secondary tracking-tight">Bulgaria</span>
              </div>
            </div>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Connecting U.S.-educated Bulgarians, young professionals, and innovation 
              partners through events, mentorship, and curated opportunities.
            </p>
            <div className="mt-6 flex space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Member Area
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/login" className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium">
                  Log in
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 font-medium">
              &copy; {currentYear} American Business & Tech Club Bulgaria. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200 font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200 font-medium">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
