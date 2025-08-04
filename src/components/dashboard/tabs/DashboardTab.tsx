
import UpcomingEventsCard from "../UpcomingEventsCard";
import ResourceLibraryCard from "../ResourceLibraryCard";
import QuickActions from "../QuickActions";
import WelcomeCard from "../WelcomeCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DiscussionPost from "@/components/DiscussionPost";
import { upcomingEvents, resourceLinks, mockCuratedNews, mockDiscussionPosts } from "@/data/mockData";
import { ExternalLink, Calendar, MessageSquare, Heart, Share2, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface DashboardTabProps {
  userProfile: {
    name: string;
    usEducation: string;
    skills: string[];
    role: string;
  };
  onTabChange?: (tab: string) => void;
}

const DashboardTab = ({ userProfile, onTabChange }: DashboardTabProps) => {
  const handlePostClick = (postId: number) => {
    console.log(`Clicked on post ${postId}`);
    // Navigate to post detail or expand post
  };

  const handleQuickAction = (action: string) => {
    if (onTabChange) {
      onTabChange(action);
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WelcomeCard userProfile={userProfile} />
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
                Your Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Discussion Posts</span>
                <Badge variant="outline">4</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Events Attended</span>
                <Badge variant="outline">2</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Connections Made</span>
                <Badge variant="outline">12</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActions onActionClick={handleQuickAction} />

      {/* Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent News */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-blue-600" />
                  Latest News
                </CardTitle>
                <CardDescription>
                  Curated for your interests
                </CardDescription>
              </div>
              <Link to="/news">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockCuratedNews.slice(0, 3).map((article) => (
                <div key={article.id} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">{article.title}</h4>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Badge variant="outline" className="text-xs">{article.category}</Badge>
                        <span>{article.date}</span>
                        {article.isNew && (
                          <Badge variant="secondary" className="text-xs">New</Badge>
                        )}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Discussions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-green-600" />
                  Recent Discussions
                </CardTitle>
                <CardDescription>
                  Latest community activity
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleQuickAction("discussion")}>
                Join
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockDiscussionPosts.slice(0, 3).map((post) => (
                <div 
                  key={post.id} 
                  className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => handlePostClick(post.id)}
                >
                  <h4 className="font-medium text-sm mb-1">{post.title}</h4>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">{post.content}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        {post.comments}
                      </span>
                    </div>
                    <span>{post.timeAgo}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingEventsCard events={upcomingEvents} />
        <ResourceLibraryCard resources={resourceLinks} />
      </div>
    </div>
  );
};

export default DashboardTab;
