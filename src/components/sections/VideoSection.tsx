
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

const VideoSection = () => {
  // Sample storytelling videos
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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/65c1a96b-0098-4b43-9e35-3e825d4e89b8.png')`
      }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-slate-900/85"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Storytelling - Videos</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Discover inspiring stories and insights from our community members who are making an impact across the globe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVideos.map(video => (
            <Card key={video.id} className="hover:shadow-lg transition-shadow cursor-pointer group bg-white/95 backdrop-blur-sm">
              <div className="relative">
                <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover rounded-t-lg" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg">
                  <Play className="h-10 w-10 text-white" />
                </div>
                <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">
                  {video.duration}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 text-xs line-clamp-2">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/member">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold px-8 py-4 text-lg">
              View All Videos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
