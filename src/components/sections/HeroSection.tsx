
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/1184c5a6-8163-4552-9dba-3d1f2157fb51.png')`
      }}></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-32 text-white md:py-40 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              American Business & Tech Club Bulgaria
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-white/90 max-w-4xl mx-auto">
              Connecting business and tech professionals with strong US-Bulgaria ties to opportunities for business expansion, new ventures, and strategic partnerships.
            </p>
            <div className="flex justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-blue-800 text-white hover:bg-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold px-10 py-4 text-lg">
                  Join ABTC Bulgaria
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
