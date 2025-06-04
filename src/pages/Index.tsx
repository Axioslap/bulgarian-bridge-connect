import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
const Index = () => {
  // Sample featured events
  const featuredEvents = [{
    id: 1,
    title: "Tech Networking Mixer",
    date: "June 15, 2025 • 6:30 PM",
    location: "Sofia Tech Park",
    description: "Connect with fellow tech professionals and U.S. alumni in a casual networking event designed to foster new connections and potential collaborations.",
    type: "networking" as const,
    isUpcoming: true
  }, {
    id: 2,
    title: "Entrepreneurship Workshop: From Idea to Business Plan",
    date: "June 28, 2025 • 10:00 AM",
    location: "American Corner Sofia",
    description: "Learn how to transform your innovative ideas into viable business plans with guidance from experienced entrepreneurs and mentors from the U.S.",
    type: "workshop" as const,
    isUpcoming: true
  }, {
    id: 3,
    title: "Panel Discussion: U.S.-Bulgaria Tech Partnerships",
    date: "July 10, 2025 • 5:00 PM",
    location: "U.S. Embassy Sofia",
    description: "Join industry leaders and diplomats for an insightful discussion on strengthening technological partnerships between the United States and Bulgaria.",
    type: "panel" as const,
    isUpcoming: true
  }];

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
  return <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
        backgroundImage: `url('/lovable-uploads/1184c5a6-8163-4552-9dba-3d1f2157fb51.png')`
      }}></div>
        <div className="absolute inset-0 bg-white/70"></div>
        
        {/* Content */}
        <div className="relative max-w-6xl px-4 sm:px-6 py-20 text-slate-900 md:py-[240px] lg:px-[240px] my-[240px] mx-[240px] rounded-md">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-slate-700 max-w-3xl mx-auto"></p>
              <div className="flex justify-center">
                <Link to="/register">
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(30,64,175,0.03),transparent)] opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(220,38,38,0.02),transparent)] opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Our Mission</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-800 to-red-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">Connecting business and tech professionals with strong US-Bulgaria ties to opportunities for business expansion, new ventures, and strategic partnerships.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-800/10 to-blue-800/20 text-blue-800 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20h2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Networking</h3>
              <p className="text-slate-600 leading-relaxed">
                Connect with like-minded professionals who share educational and professional experiences between the U.S. and Bulgaria.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600/10 to-red-600/20 text-red-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Knowledge Sharing</h3>
              <p className="text-slate-600 leading-relaxed">
                Access exclusive resources, workshops, and educational content designed to enhance your professional growth.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-800/10 to-blue-800/20 text-blue-800 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Mentorship</h3>
              <p className="text-slate-600 leading-relaxed">
                Participate in our mentorship programs, either as a mentor or mentee, to foster professional development and leadership.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Storytelling Videos Section */}
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
            {featuredVideos.map(video => <Card key={video.id} className="hover:shadow-lg transition-shadow cursor-pointer group bg-white/95 backdrop-blur-sm">
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
              </Card>)}
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
      
      {/* Featured Events */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.04),transparent)] opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.03),transparent)] opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Upcoming Events</h2>
              <p className="text-slate-600 text-lg">Join us for exciting networking and learning opportunities</p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="shadow-md hover:shadow-lg transition-shadow duration-200 font-medium border-slate-300 text-slate-700 hover:bg-slate-50">
                View All Events
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map(event => <EventCard key={event.id} title={event.title} date={event.date} location={event.location} description={event.description} type={event.type} isUpcoming={event.isUpcoming} />)}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,64,175,0.05),transparent)] opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-red-600 rounded-3xl shadow-2xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div>
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-white/10 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-white/5 animate-pulse delay-200"></div>
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Become a member today and gain access to exclusive events, resources, and a network of professionals bridging the U.S. and Bulgaria.
              </p>
              <Link to="/register">
                <Button size="lg" className="bg-white text-blue-800 hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold px-10 py-4 text-lg">
                  Join ABTC Bulgaria
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;