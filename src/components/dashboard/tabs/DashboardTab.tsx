
import UpcomingEventsCard from "../UpcomingEventsCard";
import ResourceLibraryCard from "../ResourceLibraryCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SkillSelector from "@/components/SkillSelector";
import DiscussionPost from "@/components/DiscussionPost";
import { upcomingEvents, resourceLinks, mockCuratedNews, mockDiscussionPosts } from "@/data/mockData";
import { ExternalLink, Calendar, MessageSquare, Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface DashboardTabProps {
  userProfile: {
    name: string;
    usEducation: string;
    skills: string[];
    role: string;
  };
}

const DashboardTab = ({ userProfile }: DashboardTabProps) => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostTags, setNewPostTags] = useState<string[]>([]);
  const { toast } = useToast();

  const handlePostSubmit = () => {
    if (newPostTitle.trim() && newPostContent.trim()) {
      toast({
        title: "Post created successfully!",
        description: "Your post has been shared with the community.",
      });
      setNewPostTitle("");
      setNewPostContent("");
      setNewPostTags([]);
    }
  };

  return (
    <div className="grid gap-6">
      {/* My News Feed */}
      <Card>
        <CardHeader>
          <CardTitle>My News Feed</CardTitle>
          <CardDescription>
            Latest stories based on your interests
          </CardDescription>
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
            Your posts and discussions you've participated in
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Create New Post */}
          <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
            <h4 className="font-medium">Create New Post</h4>
            <Input
              placeholder="Post title..."
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
            />
            <Textarea
              placeholder="What's on your mind?"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              rows={3}
            />
            <div>
              <label className="text-sm font-medium mb-2 block">Tags</label>
              <SkillSelector
                skills={newPostTags}
                onSkillsChange={setNewPostTags}
                placeholder="Add tags (e.g., startup, networking)..."
              />
            </div>
            <Button onClick={handlePostSubmit} className="w-full">
              Share Post
            </Button>
          </div>

          {/* Recent Posts */}
          <div className="space-y-4">
            <h4 className="font-medium">Your Recent Activity</h4>
            {mockDiscussionPosts.slice(0, 2).map((post) => (
              <div key={post.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{post.title}</h4>
                  <Badge variant="outline" className="text-xs">{post.category}</Badge>
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
                    <span className="flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      {post.shares}
                    </span>
                  </div>
                  <span>{post.date}</span>
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
