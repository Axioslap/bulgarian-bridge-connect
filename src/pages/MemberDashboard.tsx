
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardTab from "@/components/dashboard/tabs/DashboardTab";
import DiscussionTab from "@/components/dashboard/tabs/DiscussionTab";
import MessagesTab from "@/components/dashboard/tabs/MessagesTab";
import SearchTab from "@/components/dashboard/tabs/SearchTab";
import ProfileTab from "@/components/dashboard/tabs/ProfileTab";
import EventsTab from "@/components/dashboard/tabs/EventsTab";
import ResourcesTab from "@/components/dashboard/tabs/ResourcesTab";
import VideosTab from "@/components/dashboard/tabs/VideosTab";
import ArticlesTab from "@/components/dashboard/tabs/ArticlesTab";
import JobsTab from "@/components/dashboard/tabs/JobsTab";
import NewsTab from "@/components/dashboard/tabs/NewsTab";
import CommunityImpactTab from "@/components/dashboard/tabs/CommunityImpactTab";
import { mockMessages } from "@/data/mockData";
import { validateToken, sanitizeInput } from "@/utils/security";

const MemberDashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [userSkills, setUserSkills] = useState<string[]>(["Business Strategy", "Marketing", "Leadership"]);
  const [newsInterests, setNewsInterests] = useState<string[]>(["AI", "Fintech", "Blockchain", "Startup"]);
  const [userProfile, setUserProfile] = useState<any>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Validate authentication and load user profile
    const authToken = localStorage.getItem('auth_token');
    const userEmail = localStorage.getItem('user_email');
    
    if (!authToken || !userEmail) {
      navigate('/login');
      return;
    }
    
    // Validate token
    const tokenData = validateToken(authToken);
    if (!tokenData) {
      navigate('/login');
      return;
    }
    
    // Set user profile from token
    setUserProfile({
      name: sanitizeInput(userEmail.split('@')[0].replace(/\./g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())),
      email: sanitizeInput(userEmail),
      usEducation: "MBA, Harvard Business School",
      joinDate: "May 2023",
      role: tokenData.role || "Member",
      skills: userSkills,
      bio: "Experienced business strategist with 8+ years in tech startups. Passionate about connecting Bulgarian talent with global opportunities."
    });
  }, [navigate]);

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    
    // Auto-scroll to content on mobile after tab change
    setTimeout(() => {
      if (contentRef.current && window.innerWidth < 1024) {
        contentRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_email');
    
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    
    navigate('/login');
  };

  // Show loading if user profile not loaded yet
  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const unreadMessageCount = mockMessages.filter(m => m.unread).length;

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardTab userProfile={userProfile} />;
      case "discussion":
        return <DiscussionTab />;
      case "messages":
        return <MessagesTab />;
      case "search":
        return <SearchTab />;
      case "profile":
        return <ProfileTab userProfile={userProfile} userSkills={userSkills} setUserSkills={setUserSkills} />;
      case "events":
        return <EventsTab />;
      case "resources":
        return <ResourcesTab />;
      case "videos":
        return <VideosTab />;
      case "community-impact":
        return <CommunityImpactTab />;
      case "articles":
        return <ArticlesTab />;
      case "jobs":
        return <JobsTab />;
      case "news":
        return <NewsTab newsInterests={newsInterests} setNewsInterests={setNewsInterests} />;
      default:
        return <DashboardTab userProfile={userProfile} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col">
      {/* Top navigation */}
      <header className="bg-white shadow-lg border-b border-blue-100 sticky top-0 z-40 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 md:h-16 items-center">
            <Link to="/" className="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/a622b81f-1bc6-4b70-90bc-fdf0fd79ae53.png" 
                alt="ABTC Bulgaria Logo" 
                className="h-8 w-8 md:h-10 md:w-10 object-contain"
              />
              <div>
                <span className="text-base md:text-lg font-bold text-blue-700 mr-1">ABTC</span>
                <span className="text-base md:text-lg font-bold text-red-600 tracking-tight">Bulgaria</span>
                <p className="text-xs text-gray-600 leading-tight hidden md:block">Member Portal</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-2 md:space-x-4">
              <span className="text-xs md:text-sm text-gray-600 hidden sm:inline truncate max-w-32 md:max-w-none">
                Welcome, {userProfile.name}
              </span>
              <Badge variant="outline" className="mr-1 md:mr-2 hidden sm:inline-flex border-blue-200 text-blue-700 bg-blue-50 text-xs">
                {userProfile.role}
              </Badge>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 text-xs md:text-sm px-2 md:px-3"
              >
                Log out
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content area - optimized for mobile */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 flex-1 flex flex-col">
          <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 flex-1 min-h-0">
            <div className="lg:hidden">
              <DashboardSidebar
                userProfile={userProfile}
                activeTab={activeTab}
                setActiveTab={handleTabChange}
                unreadMessageCount={unreadMessageCount}
              />
            </div>
            
            <div className="hidden lg:block lg:w-64 flex-shrink-0">
              <DashboardSidebar
                userProfile={userProfile}
                activeTab={activeTab}
                setActiveTab={handleTabChange}
                unreadMessageCount={unreadMessageCount}
              />
            </div>
            
            {/* Main content area */}
            <div ref={contentRef} className="flex-1 min-h-0 overflow-auto">
              <div className="bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-100 p-3 md:p-4 lg:p-6 h-full">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
