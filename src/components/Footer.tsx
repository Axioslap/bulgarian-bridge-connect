
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const partners = [
    {
      id: 1,
      name: "TechCorp",
      logo: "/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png",
      description: "Leading technology solutions provider"
    },
    {
      id: 2,
      name: "Innovation Labs",
      logo: "/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png",
      description: "Cutting-edge research and development"
    },
    {
      id: 3,
      name: "Global Ventures",
      logo: "/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png",
      description: "International business expansion"
    },
    {
      id: 4,
      name: "StartupHub",
      logo: "/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png",
      description: "Entrepreneurship and innovation support"
    }
  ];
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent)] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(239,68,68,0.08),transparent)] opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-8">
              <div className="relative mr-3">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl border border-white/20 p-1">
                  <img 
                    src="/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png" 
                    alt="ABTC Bulgaria Logo" 
                    className="h-16 w-16 object-contain filter drop-shadow-lg"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mr-2 tracking-tight">ABTC</span>
                <span className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent tracking-tight">Bulgaria</span>
              </div>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed mb-8">
              Connecting U.S.-educated Bulgarians, young professionals, and innovation 
              partners through events, mentorship, and curated opportunities.
            </p>
            
            {/* AAC Partnership */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="text-gray-400 text-sm mb-4">Proud member of</p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                  <span className="text-white font-bold text-lg">AAC</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Association of American Clubs</h4>
                  <p className="text-gray-400 text-sm">Global network of American business communities</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6 relative">
              Navigation
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Business/Tech News
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6 relative">
              Member Area
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-secondary to-primary"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center group">
                  <span className="w-1 h-1 bg-secondary rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Log in
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center group">
                  <span className="w-1 h-1 bg-secondary rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div 
                key={partner.id}
                className="group cursor-pointer"
                onClick={() => {
                  // This would normally navigate to a partner detail page
                  console.log(`Learn more about ${partner.name}`);
                }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:bg-white/10 text-center">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`}
                    className="w-16 h-16 mx-auto mb-4 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <h4 className="text-white font-semibold mb-2">{partner.name}</h4>
                  <p className="text-gray-400 text-sm">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-medium">
              &copy; {currentYear} American Business & Tech Club Bulgaria. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">
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
