
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent)]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl shadow-2xl p-16 md:p-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(220,38,38,0.2),transparent_50%)]" />
          <div className="absolute top-10 right-16 w-32 h-32 rounded-full bg-white/10 animate-pulse" />
          <div className="absolute bottom-10 left-16 w-20 h-20 rounded-full bg-white/10 animate-pulse delay-300" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
              <Sparkles className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-white font-medium">Exclusive Membership</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8">
              Ready to Join Our
              <span className="block bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                Elite Community?
              </span>
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Become part of an exclusive network of visionaries, innovators, and leaders who are shaping the future of business and technology across continents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold px-12 py-6 text-lg rounded-full">
                  <Users className="h-6 w-6 mr-3" />
                  Join ABTC Bulgaria
                  <ArrowRight className="h-6 w-6 ml-3" />
                </Button>
              </Link>
              
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-medium px-10 py-6 text-lg rounded-full transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
