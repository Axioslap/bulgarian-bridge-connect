import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveRoute = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/partners", label: "Our Partners" },
    { path: "/events", label: "Events" },
    { path: "/news", label: "Business/Tech News" }
  ];

  const NavLink = ({ path, label }: { path: string; label: string }) => (
    <Link 
      to={path} 
      className={`nav-link px-3 py-2 text-sm font-medium transition-all duration-200 relative group ${
        isActiveRoute(path) ? 'text-gray-900 font-bold' : 'text-gray-700 hover:text-gray-900'
      }`}
    >
      {label}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transition-transform origin-left duration-300 ${
        isActiveRoute(path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`}></span>
    </Link>
  );

  const MobileNavLink = ({ path, label, onClick }: { path: string; label: string; onClick: () => void }) => (
    <Link 
      to={path} 
      className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
      onClick={onClick}
    >
      {label}
    </Link>
  );

  const Logo = () => (
    <div className="flex items-center space-x-4">
      <img 
        src="/lovable-uploads/609c968f-d22b-421b-85af-4a464f96c2e3.png" 
        alt="Club Logo" 
        className="w-16 h-16"
      />
      <div className="hidden md:block">
        <p className="text-sm text-gray-700 max-w-md leading-tight">
          Connecting business and tech professionals with strong US-Bulgaria ties to opportunities for business expansion, new ventures, and strategic partnerships.
        </p>
      </div>
    </div>
  );

  const AuthButtons = () => (
    <div className="hidden md:flex items-center space-x-3">
      <Link to="/login">
        <Button variant="ghost" size="sm" className="font-medium text-gray-700 hover:text-gray-900">
          Log in
        </Button>
      </Link>
      <Link to="/register">
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
          Join Us
        </Button>
      </Link>
    </div>
  );

  const MobileMenuButton = () => (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="text-gray-700 hover:text-gray-900"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
    </div>
  );

  const MobileMenu = () => (
    mobileMenuOpen && (
      <div className="md:hidden bg-white shadow-lg border-t">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="px-3 py-2 mb-4">
            <p className="text-xs text-gray-600 leading-tight">
              Connecting business and tech professionals with strong US-Bulgaria ties to opportunities for business expansion, new ventures, and strategic partnerships.
            </p>
          </div>
          {navLinks.map((link) => (
            <MobileNavLink 
              key={link.path}
              path={link.path}
              label={link.label}
              onClick={() => setMobileMenuOpen(false)}
            />
          ))}
          <div className="pt-3 pb-2 border-t border-gray-200 mt-3">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full justify-center mb-2 font-medium text-gray-700">
                Log in
              </Button>
            </Link>
            <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium">
                Join Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  );

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} path={link.path} label={link.label} />
            ))}
          </nav>
          
          <AuthButtons />
          <MobileMenuButton />
        </div>
      </div>
      
      <MobileMenu />
    </header>
  );
};

export default Header;
