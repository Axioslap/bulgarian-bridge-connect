
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnersSlider from "@/components/PartnersSlider";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Users, BookOpen, Award, ArrowRight, Sparkles } from "lucide-react";

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

  const testimonials = [
    {
      quote: "ABTC has been instrumental in expanding my professional network and opening doors to opportunities I never thought possible.",
      author: "Maria Petrova",
      role: "CEO, TechStart Bulgaria",
      company: "Harvard Business School '18"
    },
    {
      quote: "The mentorship program connected me with industry leaders who helped shape my career trajectory in ways I couldn't have imagined.",
      author: "Dimitar Georgiev",
      role: "Senior Product Manager",
      company: "Stanford University '16"
    }
  ];

  return <div className="flex flex-col min-h-screen font-sans bg-white">
      <Header />
      
      {/* Hero Section - Enhanced with better imagery and typography */}
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
      
      {/* Testimonials Section - New Premium Addition */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden animate-slide-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent)]" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-10">
                  <blockquote className="text-xl text-slate-700 italic mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.author}</div>
                      <div className="text-slate-600 text-sm">{testimonial.role}</div>
                      <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission Section - Enhanced with Better Spacing */}
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
      
      {/* Partners Slider */}
      <div className="animate-scale-in">
        <PartnersSlider />
      </div>
      
      {/* Featured Events - Enhanced Design */}
      <section className="py-32 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(220,38,38,0.04),transparent)]" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl font-playfair font-bold text-slate-900 mb-6">Upcoming Experiences</h2>
              <p className="text-slate-600 text-xl max-w-2xl">Join us for carefully curated events designed to foster meaningful connections and drive professional growth.</p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="shadow-lg hover:shadow-xl transition-all duration-300 font-medium border-slate-300 text-slate-700 hover:bg-slate-50 rounded-full px-8 py-4 text-lg">
                <ArrowRight className="h-5 w-5 mr-2" />
                View All Events
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredEvents.map(event => 
              <EventCard 
                key={event.id} 
                title={event.title} 
                date={event.date} 
                location={event.location} 
                description={event.description} 
                type={event.type} 
                isUpcoming={event.isUpcoming} 
              />
            )}
          </div>
        </div>
      </section>
      
      {/* Storytelling Videos Section - Enhanced */}
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
      
      {/* Enhanced CTA Section */}
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
      
      <Footer />
    </div>;
};

export default Index;
