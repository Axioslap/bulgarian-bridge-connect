
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect
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
        isActiveRoute(path) ? 'text-white font-bold' : 'text-white/90 hover:text-white'
      }`}
    >
      {label}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-transform origin-left duration-300 ${
        isActiveRoute(path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`}></span>
    </Link>
  );

  const MobileNavLink = ({ path, label, onClick }: { path: string; label: string; onClick: () => void }) => (
    <Link 
      to={path} 
      className="block px-3 py-2 text-sm font-medium text-white hover:text-white hover:bg-white/20 rounded-lg transition-colors"
      onClick={onClick}
    >
      {label}
    </Link>
  );

  const Logo = () => (
    <div className="flex-shrink-0">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
          <div className="text-center">
            <div className="text-lg font-bold text-white">ABTC</div>
            <div className="text-xs text-red-300">BG</div>
          </div>
        </div>
      </div>
    </div>
  );

  const AuthButtons = () => (
    <div className="hidden md:flex items-center space-x-3">
      <Link to="/login">
        <Button variant="ghost" size="sm" className="font-medium text-white hover:text-white hover:bg-white/20">
          Log in
        </Button>
      </Link>
      <Link to="/register">
        <Button size="sm" className="bg-[#B22234] hover:bg-[#B22234]/90 text-white font-medium shadow-lg">
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
        className="text-white hover:text-white hover:bg-white/20 transition-colors"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
    </div>
  );

  const MobileMenu = () => (
    mobileMenuOpen && (
      <div className="md:hidden bg-black/80 backdrop-blur-md shadow-lg border-t border-white/20">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <MobileNavLink 
              key={link.path}
              path={link.path}
              label={link.label}
              onClick={() => setMobileMenuOpen(false)}
            />
          ))}
          <div className="pt-3 pb-2 border-t border-white/20 mt-3">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full justify-center mb-2 font-medium text-white hover:text-white hover:bg-white/20">
                Log in
              </Button>
            </Link>
            <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" className="w-full justify-center bg-[#B22234] hover:bg-[#B22234]/90 text-white font-medium shadow-lg">
                Join Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  );

  return (
    <header className={`relative shadow-lg sticky top-0 z-50 border-b border-[#B22234]/20 overflow-hidden transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black/90'
    }`}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          
          {/* Desktop navigation */}
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
