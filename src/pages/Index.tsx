
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnersSlider from "@/components/PartnersSlider";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Award, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  const stats = [
    { number: "500+", label: "Active Members", icon: Users },
    { number: "50+", label: "Partner Companies", icon: Globe },
    { number: "100+", label: "Events Hosted", icon: Award },
  ];

  const benefits = [
    "Access to exclusive networking events",
    "Mentorship opportunities with industry leaders",
    "Professional development workshops",
    "Job placement assistance",
    "Business partnership connections",
    "Cultural exchange programs"
  ];

  return <div className="flex flex-col min-h-screen scroll-smooth">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Background Image - Optimized */}
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-15 transition-opacity duration-1000" 
          style={{
            backgroundImage: `url('/lovable-uploads/1184c5a6-8163-4552-9dba-3d1f2157fb51.png')`,
            transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
            transition: 'transform 2s ease-out'
          }}
        ></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-red-500/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-blue-600/10 rounded-full animate-bounce delay-500"></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60"></div>
        
        {/* Content */}
        <div className={`relative z-10 text-center max-w-5xl mx-auto px-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* ABTC Bulgaria Logo */}
          <div className="mb-10 transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/e202c3e1-d60e-466f-875a-f0ebd6c42c43.png" 
              alt="American Business & Technology Club Bulgaria - Connecting professionals across US-Bulgaria business corridor" 
              className="mx-auto w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl filter hover:brightness-110 transition-all duration-300"
              loading="eager"
            />
          </div>
          
          {/* Welcome Text */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 drop-shadow-lg leading-tight">
            Welcome to <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">ABTC Bulgaria</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-700 mb-6 leading-relaxed drop-shadow-md max-w-4xl mx-auto">
            Connecting business and tech professionals with strong <span className="font-semibold text-blue-700">US-Bulgaria</span> ties
          </p>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Join a thriving community of innovators, entrepreneurs, and leaders shaping the future of business and technology
          </p>
          
          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="text-2xl md:text-4xl font-bold text-blue-700 mb-2 group-hover:text-blue-800 transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold px-12 py-6 text-lg group">
                Join Our Community
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold px-8 py-6 text-lg border-2 border-slate-300 hover:border-blue-600 hover:text-blue-700">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Preview Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-red-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Join ABTC Bulgaria?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unlock exclusive opportunities and build meaningful connections in the US-Bulgaria business ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Lincoln Memorial background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('/lovable-uploads/66a0a30f-3a78-4303-b40a-40d8e5809465.png')`
        }}></div>
        
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Patriotic gradient overlay with enhanced text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/70 to-red-900/60"></div>
        
        {/* Additional USA-themed overlay patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent)] opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(239,68,68,0.12),transparent)] opacity-70"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.02)_50%,transparent_60%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-2xl">Our Mission</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-white to-red-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">Connecting business and tech professionals with strong US-Bulgaria ties to opportunities for business expansion, new ventures, and strategic partnerships.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/40 text-blue-200 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg backdrop-blur-sm border border-white/20">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">Networking</h3>
              <p className="text-white/90 leading-relaxed drop-shadow-md">
                Connect with like-minded professionals who share educational and professional experiences between the U.S. and Bulgaria.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-red-500/30 to-red-600/40 text-red-200 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg backdrop-blur-sm border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">Knowledge Sharing</h3>
              <p className="text-white/90 leading-relaxed drop-shadow-md">
                Access exclusive resources, workshops, and educational content designed to enhance your professional growth.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/40 text-blue-200 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg backdrop-blur-sm border border-white/20">
                <Award className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">Mentorship</h3>
              <p className="text-white/90 leading-relaxed drop-shadow-md">
                Participate in our mentorship programs, either as a mentor or mentee, to foster professional development and leadership.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <PartnersSlider />
      
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
            {featuredVideos.map(video => <Card key={video.id} className="hover:shadow-xl transition-all duration-300 cursor-pointer group bg-white/95 backdrop-blur-sm transform hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg">
                    <Play className="h-12 w-12 text-white drop-shadow-lg" />
                  </div>
                  <Badge className="absolute bottom-2 right-2 bg-black/80 text-white font-medium">
                    {video.duration}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">{video.title}</h3>
                  <p className="text-gray-600 text-xs line-clamp-2">{video.description}</p>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/member">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold px-8 py-4 text-lg group">
                View All Videos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Upcoming Events</h2>
              <p className="text-slate-600 text-xl max-w-2xl">Join us for exciting networking and learning opportunities that drive innovation and collaboration</p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-600 px-6 py-3 group">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map(event => <div key={event.id} className="transform hover:scale-105 transition-transform duration-300">
                <EventCard 
                  title={event.title} 
                  date={event.date} 
                  location={event.location} 
                  description={event.description} 
                  type={event.type} 
                  isUpcoming={event.isUpcoming} 
                />
              </div>)}
          </div>
        </div>
      </section>
      
      {/* CTA Section with USA Flag Background */}
      <section className="py-24 relative overflow-hidden">
        {/* USA Flag Background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('/lovable-uploads/2cc62f2e-d04c-4da0-8baf-406cc6eccd43.png')`
        }}></div>
        
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Additional patriotic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-red-900/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-black/30 rounded-3xl shadow-2xl p-12 md:p-20 text-center overflow-hidden backdrop-blur-sm border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-white/10 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-white/5 animate-pulse delay-200"></div>
            
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
                Ready to Join Our <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Community</span>?
              </h2>
              <p className="text-xl md:text-2xl text-white/95 mb-6 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                Become a member today and gain access to exclusive events, resources, and a network of professionals bridging the U.S. and Bulgaria.
              </p>
              <p className="text-lg text-white/90 mb-12 max-w-3xl mx-auto">
                Join over 500 professionals who are already building the future of US-Bulgaria business relations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-blue-800 hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold px-12 py-6 text-lg group">
                    Join ABTC Bulgaria
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold px-8 py-6 text-lg">
                    Learn More About Us
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
