
import { useState } from "react";
import { Link } from "react-router-dom";
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
import { mockMessages } from "@/data/mockData";

const MemberDashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [userSkills, setUserSkills] = useState<string[]>(["Business Strategy", "Marketing", "Leadership"]);
  const [newsInterests, setNewsInterests] = useState<string[]>(["AI", "Fintech", "Blockchain", "Startup"]);
  const { toast } = useToast();

  // This would normally come from an auth context/provider
  const userProfile = {
    name: "John Smith",
    usEducation: "MBA, Harvard Business School",
    joinDate: "May 2023",
    role: "Member",
    skills: userSkills,
    bio: "Experienced business strategist with 8+ years in tech startups. Passionate about connecting Bulgarian talent with global opportunities."
  };

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    // Here you would clear auth state and redirect
  };

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
    <div className="min-h-screen bg-gray-50">
      {/* Top navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-700 mr-1">ABTC</span>
              <span className="text-xl font-bold text-red-600 tracking-tight">Bulgaria</span>
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
          <DashboardSidebar
            userProfile={userProfile}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            unreadMessageCount={unreadMessageCount}
          />
          
          {/* Main content area */}
          <div className="flex-1">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
