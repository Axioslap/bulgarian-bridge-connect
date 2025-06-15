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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIPhone, setIsIPhone] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = window.innerWidth < 768;
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent);
    
    setIsMobile(isMobileDevice);
    setIsIPhone(isAppleDevice);
    
    // Handle resize for mobile detection with iPhone-specific optimizations
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Force viewport update for iPhone dynamic island and notch handling
      if (isAppleDevice) {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    // Preload the background image with priority for iPhone models
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.warn('Background image failed to load, continuing without it');
      setImageLoaded(true); // Continue even if image fails
    };
    // Use smaller image for mobile devices to improve loading
    img.src = isMobileDevice 
      ? '/lovable-uploads/1184c5a6-8163-4552-9dba-3d1f2157fb51.png'
      : '/lovable-uploads/1184c5a6-8163-4552-9dba-3d1f2157fb51.png';
    
    return () => window.removeEventListener('resize', handleResize);
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
  const stats = [{
    number: "500+",
    label: "Active Members",
    icon: Users
  }, {
    number: "50+",
    label: "Partner Companies",
    icon: Globe
  }, {
    number: "15+",
    label: "Events Hosted",
    icon: Award
  }];
  const benefits = ["Access to exclusive networking events", "Mentorship opportunities with industry leaders", "Professional development workshops", "Job placement assistance", "Business partnership connections", "Cultural exchange programs"];

  return (
    <div className="flex flex-col min-h-screen scroll-smooth" style={{ minHeight: isIPhone ? 'calc(var(--vh, 1vh) * 100)' : '100vh' }}>
      <Header />
      
      {/* Hero Section - Optimized for iPhone 15/16 series */}
      <section className={`relative flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden ${
        isIPhone ? 'h-[calc(var(--vh,1vh)*80)] min-h-[600px]' : 'h-[600px] sm:h-[700px]'
      }`}>
        {/* Background Image - Optimized for iPhone loading */}
        <div 
          className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-700 ${
            imageLoaded ? 'opacity-15' : 'opacity-0'
          }`}
          style={{
            backgroundImage: imageLoaded ? `url('/lovable-uploads/1184c5a6-8163-4552-9dba-3d1f2157fb51.png')` : 'none',
            transform: isLoaded ? 'scale(1)' : 'scale(1.02)',
            transition: 'transform 0.8s ease-out, opacity 700ms ease-in',
            willChange: 'transform, opacity',
            // Optimize for iPhone retina displays
            backgroundSize: isMobile ? 'cover' : 'contain'
          }}
        ></div>
        
        {/* Gradient Overlay - Enhanced for iPhone displays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/70"></div>
        
        {/* Content - iPhone-optimized spacing and typography */}
        <div className={`relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${isIPhone ? 'px-6' : ''}`}>
          
          {/* Welcome Text - iPhone-optimized font sizes */}
          <h1 className={`font-bold text-slate-900 mb-6 sm:mb-8 drop-shadow-lg leading-tight ${
            isIPhone 
              ? 'text-3xl sm:text-4xl md:text-6xl' 
              : 'text-3xl sm:text-5xl md:text-7xl'
          }`}>
            Welcome to <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">American Business & Technology Club</span>
          </h1>
          <p className={`text-slate-700 mb-4 sm:mb-6 leading-relaxed drop-shadow-md max-w-4xl mx-auto ${
            isIPhone 
              ? 'text-lg sm:text-xl md:text-2xl' 
              : 'text-lg sm:text-xl md:text-3xl'
          }`}>
            Connecting business and tech professionals with strong <span className="font-semibold text-blue-700 whitespace-nowrap">US-Bulgaria</span> ties
          </p>
          <p className={`text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto ${
            isIPhone 
              ? 'text-base sm:text-lg md:text-xl' 
              : 'text-base sm:text-lg md:text-xl'
          }`}>
            Join a thriving community of innovators, entrepreneurs, and leaders shaping the future of business and technology
          </p>
          
          {/* Target Goals for 2027 - iPhone-optimized grid */}
          <div className="mb-3 sm:mb-4 text-center">
            <p className={`font-semibold text-slate-700 mb-4 sm:mb-6 ${
              isIPhone ? 'text-base sm:text-lg' : 'text-base sm:text-lg'
            }`}>Our Target by 2027:</p>
          </div>
          <div className={`grid grid-cols-3 mb-8 sm:mb-12 max-w-2xl mx-auto ${
            isIPhone ? 'gap-4 sm:gap-6' : 'gap-3 sm:gap-4 md:gap-8'
          }`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-200 touch-manipulation">
                <div className={`font-bold text-blue-700 mb-1 sm:mb-2 group-hover:text-blue-800 transition-colors ${
                  isIPhone 
                    ? 'text-2xl sm:text-3xl md:text-4xl' 
                    : 'text-xl sm:text-2xl md:text-4xl'
                }`}>
                  {stat.number}
                </div>
                <div className={`text-slate-600 ${
                  isIPhone 
                    ? 'text-sm sm:text-base' 
                    : 'text-xs sm:text-sm md:text-base'
                }`}>{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Call to Action - iPhone-optimized buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register" className="w-full sm:w-auto">
              <Button 
                size={isMobile ? "default" : "lg"} 
                className={`bg-blue-800 hover:bg-blue-900 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold group w-full sm:w-auto touch-manipulation ${
                  isIPhone 
                    ? 'px-8 py-4 text-base min-h-[48px]' 
                    : 'px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg'
                }`}
              >
                Join Our Community
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size={isMobile ? "default" : "lg"} 
                className={`shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold border-2 border-slate-300 hover:border-blue-600 hover:text-blue-700 w-full sm:w-auto touch-manipulation ${
                  isIPhone 
                    ? 'px-6 py-4 text-base min-h-[48px]' 
                    : 'px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg'
                }`}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Preview Section - iPhone optimized */}
      <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-red-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`font-bold text-slate-900 mb-4 sm:mb-6 ${
              isIPhone ? 'text-2xl sm:text-3xl' : 'text-2xl sm:text-3xl md:text-4xl'
            }`}>Why Join American Business & Technology Club?</h2>
            <p className={`text-slate-600 max-w-3xl mx-auto ${
              isIPhone ? 'text-lg sm:text-xl' : 'text-lg sm:text-xl'
            }`}>
              Unlock exclusive opportunities and build meaningful connections in the US-Bulgaria business ecosystem
            </p>
          </div>
          
          <div className={`grid gap-4 sm:gap-6 ${
            isIPhone ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {benefits.map((benefit, index) => (
              <div key={index} className={`flex items-center space-x-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group touch-manipulation ${
                isIPhone ? 'p-4' : 'p-3 sm:p-4'
              }`}>
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className={`text-slate-700 font-medium ${
                  isIPhone ? 'text-base' : 'text-sm sm:text-base'
                }`}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <PartnersSlider />
      
      {/* Storytelling Videos Section - iPhone optimized */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/65c1a96b-0098-4b43-9e35-3e825d4e89b8.png')`
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-slate-900/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`font-bold mb-4 sm:mb-6 text-white ${
              isIPhone ? 'text-3xl sm:text-4xl' : 'text-3xl sm:text-4xl md:text-5xl'
            }`}>Storytelling - Videos</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className={`text-white/90 max-w-4xl mx-auto leading-relaxed ${
              isIPhone ? 'text-lg sm:text-xl' : 'text-lg sm:text-xl'
            }`}>
              Discover inspiring stories and insights from our community members who are making an impact across the globe.
            </p>
          </div>
          
          <div className={`grid gap-4 sm:gap-6 ${
            isIPhone ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}>
            {featuredVideos.map(video => (
              <Card key={video.id} className="hover:shadow-xl transition-all duration-300 cursor-pointer group bg-white/95 backdrop-blur-sm transform hover:scale-105 touch-manipulation">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                      isIPhone ? 'h-40 sm:h-48' : 'h-32 sm:h-40'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg">
                    <Play className={`text-white drop-shadow-lg ${
                      isIPhone ? 'h-12 w-12' : 'h-8 w-8 sm:h-12 sm:w-12'
                    }`} />
                  </div>
                  <Badge className="absolute bottom-2 right-2 bg-black/80 text-white font-medium text-xs">
                    {video.duration}
                  </Badge>
                </div>
                <CardContent className={isIPhone ? 'p-4' : 'p-3 sm:p-4'}>
                  <h3 className={`font-semibold mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors ${
                    isIPhone ? 'text-sm' : 'text-xs sm:text-sm'
                  }`}>{video.title}</h3>
                  <p className="text-gray-600 text-xs line-clamp-2">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/member">
              <Button 
                size={isMobile ? "default" : "lg"} 
                className={`bg-white text-slate-900 hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold group touch-manipulation ${
                  isIPhone 
                    ? 'px-8 py-4 text-base min-h-[48px]' 
                    : 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg'
                }`}
              >
                View All Videos
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section - iPhone optimized */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.04),transparent)] opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.03),transparent)] opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 sm:mb-16">
            <div className="mb-6 sm:mb-8 lg:mb-0">
              <h2 className={`font-bold text-slate-900 mb-3 sm:mb-4 ${
                isIPhone ? 'text-3xl sm:text-4xl' : 'text-3xl sm:text-4xl md:text-5xl'
              }`}>Upcoming Events</h2>
              <p className={`text-slate-600 text-lg sm:text-xl max-w-2xl`}>Join us for exciting networking and learning opportunities that drive innovation and collaboration</p>
            </div>
            <Link to="/events">
              <Button 
                variant="outline" 
                className={`shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-600 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base group touch-manipulation ${
                  isIPhone 
                    ? 'px-6 py-3 text-base min-h-[44px]' 
                    : 'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base'
                }`}
              >
                View All Events
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className={`grid gap-6 sm:gap-8 ${
            isIPhone ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {featuredEvents.map(event => (
              <div key={event.id} className="transform hover:scale-105 transition-transform duration-300 touch-manipulation">
                <EventCard title={event.title} date={event.date} location={event.location} description={event.description} type={event.type} isUpcoming={event.isUpcoming} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section - iPhone optimized */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/2cc62f2e-d04c-4da0-8baf-406cc6eccd43.png')`
      }}></div>
        
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-red-900/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`relative bg-black/30 rounded-3xl shadow-2xl text-center overflow-hidden backdrop-blur-sm border border-white/20 ${
            isIPhone ? 'p-8 sm:p-12' : 'p-8 sm:p-12 md:p-20'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            <div className="absolute top-10 right-10 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-white/10 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-white/5 animate-pulse delay-200"></div>
            
            <div className="relative">
              <h2 className={`font-bold text-white mb-6 sm:mb-8 drop-shadow-2xl leading-tight ${
                isIPhone ? 'text-3xl sm:text-4xl md:text-5xl' : 'text-3xl sm:text-4xl md:text-6xl'
              }`}>
                Ready to Join Our <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Community</span>?
              </h2>
              <p className={`text-white/95 mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed drop-shadow-lg ${
                isIPhone ? 'text-lg sm:text-xl md:text-2xl' : 'text-lg sm:text-xl md:text-2xl'
              }`}>
                Become a member today and gain access to exclusive events, resources, and a network of professionals bridging the U.S. and Bulgaria.
              </p>
              <p className={`text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto ${
                isIPhone ? 'text-base sm:text-lg' : 'text-base sm:text-lg'
              }`}>
                Join over 500 professionals who are already building the future of US-Bulgaria business relations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Link to="/register" className="w-full sm:w-auto">
                  <Button 
                    size={isMobile ? "default" : "lg"} 
                    className={`bg-white text-blue-800 hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold group w-full sm:w-auto touch-manipulation ${
                      isIPhone 
                        ? 'px-8 py-4 text-base min-h-[48px]' 
                        : 'px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg'
                    }`}
                  >
                    Join American Business & Technology Club
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about" className="w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    size={isMobile ? "default" : "lg"} 
                    className={`border-2 border-white text-white hover:bg-white hover:text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold w-full sm:w-auto touch-manipulation ${
                      isIPhone 
                        ? 'px-6 py-4 text-base min-h-[48px]' 
                        : 'px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg'
                    }`}
                  >
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
