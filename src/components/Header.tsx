
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
    <header className="bg-[#002147] shadow-lg sticky top-0 z-50 border-b border-[#B22234]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="flex items-center">
                <span className="text-lg font-bold text-white mr-1 tracking-tight">ABTC</span>
                <span className="text-lg font-bold text-[#B22234] tracking-tight">Bulgaria</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`nav-link px-3 py-2 text-sm font-medium transition-all duration-200 relative group ${
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
              className={`nav-link px-3 py-2 text-sm font-medium transition-all duration-200 relative group ${
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
              className={`nav-link px-3 py-2 text-sm font-medium transition-all duration-200 relative group ${
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
              className={`nav-link px-3 py-2 text-sm font-medium transition-all duration-200 relative group ${
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
              className={`nav-link px-3 py-2 text-sm font-medium transition-all duration-200 relative group ${
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
              <Button variant="ghost" size="sm" className="font-medium text-white hover:text-[#B22234] hover:bg-white/10">
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="btn-primary shadow-md hover:shadow-lg transition-all duration-200">
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
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
              className="block px-3 py-2 text-sm font-medium text-white hover:text-[#B22234] hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-sm font-medium text-white hover:text-[#B22234] hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/partners" 
              className="block px-3 py-2 text-sm font-medium text-white hover:text-[#B22234] hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Partners
            </Link>
            <Link 
              to="/events" 
              className="block px-3 py-2 text-sm font-medium text-white hover:text-[#B22234] hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/news" 
              className="block px-3 py-2 text-sm font-medium text-white hover:text-[#B22234] hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Business/Tech News
            </Link>
            <div className="pt-3 pb-2 border-t border-[#B22234]/20 mt-3">
              <Link 
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="ghost" size="sm" className="w-full justify-center mb-2 font-medium text-white hover:text-[#B22234] hover:bg-white/10">
                  Log in
                </Button>
              </Link>
              <Link 
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button size="sm" className="w-full justify-center btn-primary shadow-md">
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
