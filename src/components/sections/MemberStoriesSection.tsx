
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

const MemberStoriesSection = () => {
  const featuredVideos = [{
    id: 1,
    title: "Building Tech Bridges: Bulgaria-US Partnerships",
    description: "A discussion on fostering international tech collaboration",
    duration: "15:30",
    thumbnail: "/placeholder.svg"
  }, {
    id: 2,
    title: "Educational Excellence: My Harvard Experience",
    description: "Personal story about studying at Harvard Business School",
    duration: "22:45",
    thumbnail: "/placeholder.svg"
  }, {
    id: 3,
    title: "Starting a Business in Sofia",
    description: "Entrepreneurship journey in Bulgaria's capital",
    duration: "18:20",
    thumbnail: "/placeholder.svg"
  }, {
    id: 4,
    title: "Community Impact: Giving Back",
    description: "How ABTC members are making a difference",
    duration: "12:15",
    thumbnail: "/placeholder.svg"
  }];

  return (
    <section className="py-32 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url('/lovable-uploads/65c1a96b-0098-4b43-9e35-3e825d4e89b8.png')`
      }} />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-blue-900/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(59,130,246,0.2),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-playfair font-bold mb-8 text-white">Member Stories</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-red-400 mx-auto mb-12 rounded-full" />
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Discover inspiring journeys and transformative experiences from our global community of leaders and innovators.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredVideos.map(video => (
            <Card key={video.id} className="hover:shadow-2xl transition-all duration-500 cursor-pointer group bg-white/95 backdrop-blur-sm rounded-2xl border-white/20 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-2xl">
                <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <Badge className="absolute bottom-3 right-3 bg-black/80 text-white rounded-full px-3 py-1 text-sm backdrop-blur-sm">
                  {video.duration}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 font-playfair text-slate-900">{video.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/member">
            <Button size="lg" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-slate-900 shadow-xl transition-all duration-300 hover:scale-105 font-semibold px-10 py-4 text-lg rounded-full">
              <Play className="h-5 w-5 mr-2" />
              View All Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MemberStoriesSection;
