
import UpcomingEventsCard from "../UpcomingEventsCard";
import ResourceLibraryCard from "../ResourceLibraryCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DiscussionPost from "@/components/DiscussionPost";
import { upcomingEvents, resourceLinks, mockCuratedNews, mockDiscussionPosts } from "@/data/mockData";
import { ExternalLink, Calendar, MessageSquare, Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

interface DashboardTabProps {
  userProfile: {
    name: string;
    usEducation: string;
    skills: string[];
    role: string;
  };
}

const DashboardTab = ({ userProfile }: DashboardTabProps) => {
  const handlePostClick = (postId: number) => {
    console.log(`Clicked on post ${postId}`);
    // Navigate to post detail or expand post
  };

  return (
    <div className="grid gap-6">
      {/* My News Feed */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>My News Feed</CardTitle>
              <CardDescription>
                Latest stories based on your interests
              </CardDescription>
            </div>
            <Link to="/news">
              <Button variant="outline">View All News</Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockCuratedNews.slice(0, 3).map((article) => (
              <div key={article.id} className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-medium">{article.title}</h4>
                    {article.isNew && (
                      <Badge variant="secondary" className="text-xs">New</Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <Badge variant="outline" className="text-xs">{article.category}</Badge>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* My Discussion */}
      <Card>
        <CardHeader>
          <CardTitle>My Discussion</CardTitle>
          <CardDescription>
            Your recent activity and posts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Recent Posts */}
          <div className="space-y-4">
            <h4 className="font-medium">Your Recent Activity</h4>
            {mockDiscussionPosts.slice(0, 4).map((post) => (
              <div 
                key={post.id} 
                className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => handlePostClick(post.id)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{post.title}</h4>
                  <Badge variant="outline" className="text-xs">{post.tags[0]}</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">{post.content}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
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

      <UpcomingEventsCard events={upcomingEvents} />
      <ResourceLibraryCard resources={resourceLinks} />
    </div>
  );
};

export default DashboardTab;
