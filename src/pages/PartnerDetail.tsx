
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Building, Users, Calendar, ExternalLink, Globe } from "lucide-react";

const PartnerDetail = () => {
  const { id } = useParams();
  
  // Enhanced mock data for different partners
  const partnerData: Record<string, any> = {
    "1": {
      name: "Microsoft Bulgaria",
      logo: "/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png",
      description: "Microsoft Bulgaria is a leading technology partner helping organizations accelerate their digital transformation through cloud computing, AI, and innovative software solutions.",
      category: "Technology",
      location: "Sofia, Bulgaria",
      partnership: "Strategic Technology Partner",
      established: "1998",
      employees: "500+",
      website: "www.microsoft.com/bg-bg",
      collaboration: {
        overview: "Microsoft Bulgaria has been our key strategic partner since 2019, providing cutting-edge technology solutions, cloud infrastructure, and AI expertise to help our members and their businesses thrive in the digital economy.",
        initiatives: [
          "Azure cloud training and certification programs",
          "AI and machine learning workshops for entrepreneurs",
          "Startup acceleration through Microsoft for Startups program",
          "Digital transformation consulting for Bulgarian companies expanding to US markets",
          "Technical mentorship programs connecting Microsoft engineers with young professionals"
        ],
        achievements: [
          "Trained 500+ professionals in Azure cloud technologies",
          "Supported 25 startups through the Microsoft for Startups program",
          "Facilitated $2M+ in cloud credits for ABTC member companies",
          "Organized 15+ technical workshops and hackathons",
          "Created partnerships with 3 major US tech companies"
        ]
      },
      upcomingEvents: [
        {
          title: "Azure AI Workshop for Entrepreneurs",
          date: "July 20, 2024",
          type: "Workshop"
        },
        {
          title: "Digital Transformation Summit",
          date: "September 15, 2024",
          type: "Conference"
        }
      ]
    },
    "2": {
      name: "Telerik Academy",
      logo: "/lovable-uploads/f030017c-3b21-4931-a236-77cab2f47aef.png",
      description: "Telerik Academy is Bulgaria's premier software education institution, training the next generation of software engineers and tech leaders.",
      category: "Education",
      location: "Sofia, Bulgaria",
      partnership: "Education & Talent Development Partner",
      established: "2009",
      employees: "100+",
      website: "www.telerikacademy.com",
      collaboration: {
        overview: "Telerik Academy partners with us to bridge the skills gap between Bulgarian tech talent and US market demands, providing world-class education and career development opportunities.",
        initiatives: [
          "Alpha JavaScript program for career switchers",
          "Upskilling programs for experienced developers",
          "Career mentorship and placement services",
          "US job market preparation workshops",
          "Alumni network connecting graduates with US opportunities"
        ],
        achievements: [
          "Graduated 2000+ software engineers with 90%+ employment rate",
          "Placed 150+ graduates in US companies",
          "Created partnerships with 50+ international tech companies",
          "Achieved average salary increase of 300% for program graduates",
          "Maintained 95% satisfaction rate among employer partners"
        ]
      },
      upcomingEvents: [
        {
          title: "US Tech Job Market Workshop",
          date: "August 5, 2024",
          type: "Workshop"
        },
        {
          title: "Alumni Networking Event",
          date: "September 28, 2024",
          type: "Networking"
        }
      ]
    },
    "3": {
      name: "Sofia Tech Park",
      logo: "/lovable-uploads/8d65834e-7077-4171-8395-2d2dc55fc632.png",
      description: "Sofia Tech Park is Bulgaria's largest innovation hub, fostering technological entrepreneurship and connecting startups with global markets.",
      category: "Innovation Hub",
      location: "Sofia, Bulgaria",
      partnership: "Innovation & Entrepreneurship Partner",
      established: "2016",
      employees: "50+",
      website: "www.sofiatech.bg",
      collaboration: {
        overview: "Sofia Tech Park serves as our primary innovation hub partner, providing startups and tech companies with the infrastructure, mentorship, and connections needed to scale internationally.",
        initiatives: [
          "Startup incubation and acceleration programs",
          "US market entry guidance and support",
          "Investor networking and pitch events",
          "Co-working spaces for ABTC member companies",
          "International partnership facilitation"
        ],
        achievements: [
          "Incubated 100+ startups with 85% survival rate",
          "Facilitated $10M+ in funding for resident companies",
          "Connected 30+ Bulgarian startups with US investors",
          "Hosted 50+ international delegations and trade missions",
          "Created 1000+ high-tech jobs in the Bulgarian market"
        ]
      },
      upcomingEvents: [
        {
          title: "Startup Pitch Competition",
          date: "July 25, 2024",
          type: "Competition"
        },
        {
          title: "US Investor Networking Day",
          date: "October 12, 2024",
          type: "Networking"
        }
      ]
    }
  };

  const partner = id ? partnerData[id] : null;

  if (!partner) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Partner Not Found</h1>
            <p className="text-slate-600 mb-6">The partner you're looking for doesn't exist or has been removed.</p>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white hover:text-blue-100 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl">
              <img 
                src={partner.logo} 
                alt={`${partner.name} Logo`}
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="text-center md:text-left text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{partner.name}</h1>
              <p className="text-xl mb-4 text-blue-100">{partner.partnership}</p>
              <p className="text-lg leading-relaxed max-w-2xl mb-4">{partner.description}</p>
              <a 
                href={`https://${partner.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-200 hover:text-white transition-colors"
              >
                <Globe className="mr-2 h-4 w-4" />
                Visit Website
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Info */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Building className="h-5 w-5 text-blue-700" />
              <div>
                <p className="text-sm text-slate-500">Established</p>
                <p className="font-semibold text-slate-900">{partner.established}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-blue-700" />
              <div>
                <p className="text-sm text-slate-500">Employees</p>
                <p className="font-semibold text-slate-900">{partner.employees}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-700" />
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-semibold text-slate-900">{partner.location}</p>
              </div>
            </div>
            <div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {partner.category}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Details */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Overview */}
            <Card className="bg-white border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Our Partnership</CardTitle>
                <CardDescription>Working together to strengthen US-Bulgaria business ties</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed mb-6">{partner.collaboration.overview}</p>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Initiatives</h3>
                <ul className="space-y-3">
                  {partner.collaboration.initiatives.map((initiative, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-slate-600">{initiative}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-white border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Impact & Achievements</CardTitle>
                <CardDescription>Measurable results from our collaboration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {partner.collaboration.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-100">
                      <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-slate-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Upcoming Joint Events</h2>
            <p className="text-slate-600">Participate in exclusive events organized with our partner</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partner.upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <Badge variant="outline" className="text-blue-700 border-blue-700">
                      {event.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-slate-600 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Register for Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerDetail;
