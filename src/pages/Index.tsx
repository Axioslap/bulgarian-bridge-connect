import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";

const Index = () => {
  // Sample featured events
  const featuredEvents = [
    {
      id: 1,
      title: "Tech Networking Mixer",
      date: "June 15, 2025 • 6:30 PM",
      location: "Sofia Tech Park",
      description: "Connect with fellow tech professionals and U.S. alumni in a casual networking event designed to foster new connections and potential collaborations.",
      type: "networking" as const,
      isUpcoming: true,
    },
    {
      id: 2,
      title: "Entrepreneurship Workshop: From Idea to Business Plan",
      date: "June 28, 2025 • 10:00 AM",
      location: "American Corner Sofia",
      description: "Learn how to transform your innovative ideas into viable business plans with guidance from experienced entrepreneurs and mentors from the U.S.",
      type: "workshop" as const,
      isUpcoming: true,
    },
    {
      id: 3,
      title: "Panel Discussion: U.S.-Bulgaria Tech Partnerships",
      date: "July 10, 2025 • 5:00 PM",
      location: "U.S. Embassy Sofia",
      description: "Join industry leaders and diplomats for an insightful discussion on strengthening technological partnerships between the United States and Bulgaria.",
      type: "panel" as const,
      isUpcoming: true,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-white">
          <div className="max-w-4xl">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                American Business & 
                <span className="block text-white/90 drop-shadow-lg">Tech Club Bulgaria</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 leading-relaxed text-white/95 max-w-3xl drop-shadow-md">
                Connecting U.S.-educated Bulgarians, young professionals, and innovation partners through meaningful experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-semibold px-8 py-4 text-lg border-0">
                    Join Our Community
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="text-white border-2 border-white/80 hover:bg-white/15 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold px-8 py-4 text-lg hover:border-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-white/10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-white/5 animate-pulse delay-200"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-secondary/20 animate-pulse delay-500"></div>
      </section>
      
      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To foster a dynamic community that strengthens ties between the United States and 
              Bulgaria through business innovation, knowledge sharing, and professional development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Networking</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with like-minded professionals who share educational and professional experiences between the U.S. and Bulgaria.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/20 text-secondary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Knowledge Sharing</h3>
              <p className="text-gray-600 leading-relaxed">
                Access exclusive resources, workshops, and educational content designed to enhance your professional growth.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mentorship</h3>
              <p className="text-gray-600 leading-relaxed">
                Participate in our mentorship programs, either as a mentor or mentee, to foster professional development and leadership.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Events */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-gray-600 text-lg">Join us for exciting networking and learning opportunities</p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="shadow-md hover:shadow-lg transition-shadow duration-200 font-medium">
                View All Events
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                description={event.description}
                type={event.type}
                isUpcoming={event.isUpcoming}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-primary to-secondary rounded-3xl shadow-2xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/5"></div>
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
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold px-10 py-4 text-lg">
                  Join ABTC Bulgaria
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
