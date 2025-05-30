
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-xl shadow-xl sticky top-0 z-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative mr-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-800/15 to-red-600/15 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png" 
                    alt="ABTC Bulgaria Logo" 
                    className="h-10 w-10 transition-transform group-hover:scale-110 duration-300"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-800/25 to-red-600/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mr-1 tracking-tight">ABTC</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent tracking-tight">Bulgaria</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-700 hover:text-blue-800 px-4 py-2 text-sm font-medium transition-all duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-800 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
            <Link to="/about" className="text-slate-700 hover:text-blue-800 px-4 py-2 text-sm font-medium transition-all duration-200 relative group">
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-800 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
            <Link to="/partners" className="text-slate-700 hover:text-blue-800 px-4 py-2 text-sm font-medium transition-all duration-200 relative group">
              Our Partners
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-800 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
            <Link to="/events" className="text-slate-700 hover:text-blue-800 px-4 py-2 text-sm font-medium transition-all duration-200 relative group">
              Events
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-800 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
            <Link to="/news" className="text-slate-700 hover:text-blue-800 px-4 py-2 text-sm font-medium transition-all duration-200 relative group">
              Business/Tech News
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-800 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="font-medium text-slate-700 hover:text-blue-800">Log in</Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-200 font-medium">
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
              className="transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/partners" 
              className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Partners
            </Link>
            <Link 
              to="/events" 
              className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/news" 
              className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Business/Tech News
            </Link>
            <div className="pt-4 pb-3 border-t border-slate-200 mt-4">
              <Link 
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="ghost" size="sm" className="w-full justify-center mb-3 font-medium">
                  Log in
                </Button>
              </Link>
              <Link 
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button size="sm" className="w-full justify-center bg-gradient-to-r from-blue-800 to-blue-700 shadow-lg font-medium">
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
