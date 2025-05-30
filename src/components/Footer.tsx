
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(30,64,175,0.1),transparent)] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(220,38,38,0.08),transparent)] opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-8">
              <div className="relative mr-4">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl border border-white/20 p-2">
                  <img 
                    src="/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png" 
                    alt="ABTC Bulgaria Logo" 
                    className="h-16 w-16 object-contain filter drop-shadow-lg"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mr-2 tracking-tight">ABTC</span>
                <span className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent tracking-tight">Bulgaria</span>
              </div>
            </div>
            <p className="text-slate-300 max-w-md leading-relaxed mb-8">
              Connecting U.S.-educated Bulgarians, young professionals, and innovation 
              partners through events, mentorship, and curated opportunities.
            </p>
            
            {/* AAC Partnership */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="text-slate-400 text-sm mb-4">Proud member of</p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                  <span className="text-white font-bold text-lg">AAC</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Association of American Clubs</h4>
                  <p className="text-slate-400 text-sm">Global network of American business communities</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6 relative">
              Navigation
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-red-500"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium flex items-center group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium flex items-center group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium flex items-center group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Our Partners
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium flex items-center group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium flex items-center group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Business/Tech News
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6 relative">
              Member Area
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-red-500 to-blue-500"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/login" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium flex items-center group">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Log in
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium flex items-center group">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 font-medium">
              &copy; {currentYear} American Business & Tech Club Bulgaria. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-8">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 font-medium">
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
