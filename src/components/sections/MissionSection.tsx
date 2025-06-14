
import { Users, BookOpen, Award } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.06),transparent)]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-8 text-slate-900">
            Our Mission
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-12 rounded-full" />
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Empowering exceptional professionals to build bridges between innovation ecosystems, create meaningful partnerships, and drive transformative change.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Enhanced Mission Cards */}
          <div className="text-center group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl p-10 transition-all duration-500 hover:-translate-y-2 border border-slate-200/50">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600/20 to-blue-700/30 text-blue-700 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-slate-900">Elite Networking</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Connect with carefully curated professionals who share exceptional educational and career achievements across both nations.
            </p>
          </div>
          
          <div className="text-center group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl p-10 transition-all duration-500 hover:-translate-y-2 border border-slate-200/50">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-red-600/20 to-red-700/30 text-red-700 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <BookOpen className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-slate-900">Knowledge Exchange</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Access exclusive insights, best practices, and cutting-edge knowledge from industry leaders and academic institutions.
            </p>
          </div>
          
          <div className="text-center group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl p-10 transition-all duration-500 hover:-translate-y-2 border border-slate-200/50">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600/20 to-blue-700/30 text-blue-700 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Award className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-slate-900">Strategic Partnerships</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Facilitate high-impact collaborations that drive innovation and create lasting value across industries and borders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
