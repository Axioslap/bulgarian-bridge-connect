
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-[#002147] shadow-xl sticky top-0 z-50 border-b border-[#B22234]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative mr-4">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 border border-white/20">
                  <img 
                    src="/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png" 
                    alt="ABTC Bulgaria Logo" 
                    className="h-12 w-12 transition-transform group-hover:scale-110 duration-300"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 to-[#B22234]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white mr-1 tracking-tight">ABTC</span>
                <span className="text-2xl font-bold text-[#B22234] tracking-tight">Bulgaria</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`nav-link px-4 py-2 text-sm font-semibold transition-all duration-200 relative group ${
                isActiveRoute('/') ? 'text-[#B22234]' : 'text-white hover:text-[#B22234]'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#B22234] transition-transform origin-left duration-300 ${
                isActiveRoute('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/about" 
              className={`nav-link px-4 py-2 text-sm font-semibold transition-all duration-200 relative group ${
                isActiveRoute('/about') ? 'text-[#B22234]' : 'text-white hover:text-[#B22234]'
              }`}
            >
              About
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#B22234] transition-transform origin-left duration-300 ${
                isActiveRoute('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/partners" 
              className={`nav-link px-4 py-2 text-sm font-semibold transition-all duration-200 relative group ${
                isActiveRoute('/partners') ? 'text-[#B22234]' : 'text-white hover:text-[#B22234]'
              }`}
            >
              Our Partners
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#B22234] transition-transform origin-left duration-300 ${
                isActiveRoute('/partners') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/events" 
              className={`nav-link px-4 py-2 text-sm font-semibold transition-all duration-200 relative group ${
                isActiveRoute('/events') ? 'text-[#B22234]' : 'text-white hover:text-[#B22234]'
              }`}
            >
              Events
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#B22234] transition-transform origin-left duration-300 ${
                isActiveRoute('/events') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/news" 
              className={`nav-link px-4 py-2 text-sm font-semibold transition-all duration-200 relative group ${
                isActiveRoute('/news') ? 'text-[#B22234]' : 'text-white hover:text-[#B22234]'
              }`}
            >
              Business/Tech News
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#B22234] transition-transform origin-left duration-300 ${
                isActiveRoute('/news') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="font-semibold text-white hover:text-[#B22234] hover:bg-white/10">
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="btn-primary shadow-lg hover:shadow-xl transition-all duration-200">
                Join Us
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#B22234] hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#002147]/95 backdrop-blur-md shadow-lg border-t border-[#B22234]/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-4 py-3 text-base font-semibold text-white hover:text-[#B22234] hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-3 text-base font-semibold text-white hover:text-[#B22234] hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/partners" 
              className="block px-4 py-3 text-base font-semibold text-white hover:text-[#B22234] hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Partners
            </Link>
            <Link 
              to="/events" 
              className="block px-4 py-3 text-base font-semibold text-white hover:text-[#B22234] hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/news" 
              className="block px-4 py-3 text-base font-semibold text-white hover:text-[#B22234] hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Business/Tech News
            </Link>
            <div className="pt-4 pb-3 border-t border-[#B22234]/20 mt-4">
              <Link 
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="ghost" size="sm" className="w-full justify-center mb-3 font-semibold text-white hover:text-[#B22234] hover:bg-white/10">
                  Log in
                </Button>
              </Link>
              <Link 
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button size="sm" className="w-full justify-center btn-primary shadow-lg">
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
