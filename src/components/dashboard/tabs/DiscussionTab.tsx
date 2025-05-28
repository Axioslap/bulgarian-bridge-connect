
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SkillSelector from "@/components/SkillSelector";
import DiscussionPost from "@/components/DiscussionPost";
import { mockDiscussionPosts } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const DiscussionTab = () => {
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
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Post</CardTitle>
          <CardDescription>
            Share updates, opportunities, or start discussions with the community
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Community Discussion</h3>
        {mockDiscussionPosts.map((post) => (
          <DiscussionPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default DiscussionTab;
