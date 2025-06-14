
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Premium Background with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url('/lovable-uploads/1184c5a6-8163-4552-9dba-3d1f2157fb51.png')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-800/85" />
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-20" />
      </div>
      
      {/* Enhanced Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto animate-fade-in">
        <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <Sparkles className="h-5 w-5 text-yellow-400 mr-2" />
          <span className="text-white/90 text-sm font-medium">Premium Professional Network</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-playfair text-white mb-8 leading-tight">
          Bridging Exceptional
          <span className="block bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent">
            Minds & Markets
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-white/95 mb-12 max-w-4xl leading-relaxed">
          Where U.S. alumni, innovative entrepreneurs, and visionary leaders unite to shape the future of business and technology between America and Bulgaria.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <Link to="/register">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-2xl font-semibold px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25">
              <Users className="h-5 w-5 mr-2" />
              Join Our Elite Network
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
          
          <Link to="/events">
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm font-medium px-8 py-6 text-lg rounded-full transition-all duration-300">
              Explore Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
