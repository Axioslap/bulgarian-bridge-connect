
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, BookOpen, Calendar, Search, MessageCircle, Users, Video, FileText, Heart } from "lucide-react";

interface DashboardSidebarProps {
  userProfile: {
    name: string;
    joinDate: string;
    role: string;
  };
  activeTab: string;
  setActiveTab: (tab: string) => void;
  unreadMessageCount: number;
}

const DashboardSidebar = ({ userProfile, activeTab, setActiveTab, unreadMessageCount }: DashboardSidebarProps) => {
  return (
    <div className="w-full md:w-64 mb-6 md:mb-0">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">
            <div className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              <Button 
                variant="ghost" 
                className="p-0 h-auto font-semibold text-lg justify-start"
                onClick={() => setActiveTab("profile")}
              >
                {userProfile.name}
              </Button>
            </div>
          </CardTitle>
          <CardDescription className="text-xs">
            Member since {userProfile.joinDate}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-1 pt-4">
          <Button
            variant={activeTab === "dashboard" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("dashboard")}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === "discussion" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("discussion")}
          >
            <Users className="mr-2 h-4 w-4" />
            Discussion
          </Button>
          <Button
            variant={activeTab === "messages" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("messages")}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Messages
            {unreadMessageCount > 0 && (
              <Badge variant="destructive" className="ml-auto h-5 w-5 p-0 text-xs">
                {unreadMessageCount}
              </Badge>
            )}
          </Button>
          
          <Button
            variant={activeTab === "videos" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("videos")}
          >
            <Video className="mr-2 h-4 w-4" />
            Storytelling - Videos
          </Button>

          <Button
            variant={activeTab === "community-impact" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("community-impact")}
          >
            <Heart className="mr-2 h-4 w-4" />
            Community Impact
          </Button>

          <Button
            variant={activeTab === "search" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("search")}
          >
            <Search className="mr-2 h-4 w-4" />
            Find Members
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
            <BookOpen className="mr-2 h-4 w-4" />
            Resources
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardSidebar;
