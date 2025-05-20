
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, BookOpen, Calendar, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MemberDashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const location = useLocation();
  const { toast } = useToast();

  // This would normally come from an auth context/provider
  const userProfile = {
    name: "John Smith",
    usEducation: "MBA, Harvard Business School",
    joinDate: "May 2023",
    role: "Member"
  };

  // Mock upcoming events data
  const upcomingEvents = [
    {
      title: "Networking Mixer in Sofia",
      date: "June 15, 2023",
      location: "Sofia Tech Park"
    },
    {
      title: "U.S. Business Culture Workshop",
      date: "July 3, 2023",
      location: "American Corner Sofia"
    }
  ];

  // Mock resource links
  const resourceLinks = [
    { title: "Guide to U.S. Business Etiquette", type: "PDF" },
    { title: "Pitch Deck Templates", type: "Templates" },
    { title: "Entrepreneurship Resources", type: "Links" }
  ];

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    // Here you would clear auth state and redirect
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary mr-1">ABTC</span>
              <span className="text-xl font-bold text-secondary">Bulgaria</span>
            </Link>
            
            <div className="flex items-center">
              <Badge variant="outline" className="mr-2 hidden md:inline-flex">
                {userProfile.role}
              </Badge>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout}
              >
                Log out
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 mb-6 md:mb-0">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  <div className="flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    {userProfile.name}
                  </div>
                </CardTitle>
                <CardDescription className="text-xs">
                  Member since {userProfile.joinDate}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-1">
                <Button
                  variant={activeTab === "dashboard" ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("dashboard")}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button
                  variant={activeTab === "profile" ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button
                  variant={activeTab === "events" ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("events")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Events
                </Button>
                <Button
                  variant={activeTab === "resources" ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("resources")}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Resources
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content area */}
          <div className="flex-1">
            {activeTab === "dashboard" && (
              <div className="grid gap-6">
                {/* Welcome card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Welcome back, {userProfile.name}!</CardTitle>
                    <CardDescription>
                      Here's what's happening in the ABTC Bulgaria community
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-medium text-sm mb-2">U.S. Education:</h3>
                      <p className="text-sm text-gray-500">{userProfile.usEducation}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm mb-2">Community Status:</h3>
                      <Badge>{userProfile.role}</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Upcoming events */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Calendar size={16} className="text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{event.title}</h4>
                            <p className="text-xs text-gray-500">{event.date} at {event.location}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="w-full">View all events</Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Resource links */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Resource Library</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {resourceLinks.map((resource, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                          <div className="flex items-center">
                            <BookOpen size={16} className="text-primary mr-2" />
                            <span className="text-sm">{resource.title}</span>
                          </div>
                          <Badge variant="outline">{resource.type}</Badge>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="w-full">Browse all resources</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeTab === "profile" && (
              <Card>
                <CardHeader>
                  <CardTitle>Your Profile</CardTitle>
                  <CardDescription>
                    View and manage your profile information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Profile editing functionality will be implemented in the next phase.
                  </p>
                </CardContent>
              </Card>
            )}
            
            {activeTab === "events" && (
              <Card>
                <CardHeader>
                  <CardTitle>Member Events</CardTitle>
                  <CardDescription>
                    Exclusive events for ABTC Bulgaria members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Member event registration will be implemented in the next phase.
                  </p>
                </CardContent>
              </Card>
            )}
            
            {activeTab === "resources" && (
              <Card>
                <CardHeader>
                  <CardTitle>Resource Library</CardTitle>
                  <CardDescription>
                    Access exclusive resources and materials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Resource library will be expanded in the next phase.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
