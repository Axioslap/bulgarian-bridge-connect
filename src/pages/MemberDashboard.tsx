import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, BookOpen, Calendar, Search, MessageCircle, ArrowLeft, Users, Settings, Award, Briefcase, Newspaper } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SkillSelector from "@/components/SkillSelector";
import SkillTag from "@/components/SkillTag";
import DiscussionPost from "@/components/DiscussionPost";

const MemberDashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    interest: "",
    education: ""
  });
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [userSkills, setUserSkills] = useState<string[]>(["Business Strategy", "Marketing", "Leadership"]);
  const [newsInterests, setNewsInterests] = useState<string[]>(["Technology", "Startups", "AI"]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostTags, setNewPostTags] = useState<string[]>([]);
  const location = useLocation();
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

  // Enhanced messages data with full content
  const messages = [
    {
      id: 1,
      sender: "Maria Dimitrova",
      subject: "Networking Event Follow-up",
      preview: "Hi John, it was great meeting you at the Sofia networking event...",
      fullContent: "Hi John,\n\nIt was great meeting you at the Sofia networking event last week! I really enjoyed our conversation about digital marketing strategies for Bulgarian startups.\n\nI wanted to follow up on the collaboration opportunity we discussed. My team at TechSofia is currently working on a project that could benefit from your MBA expertise, particularly in the areas of business development and market analysis.\n\nWould you be available for a coffee meeting next week to discuss this further? I'm free Tuesday or Wednesday afternoon.\n\nBest regards,\nMaria Dimitrova\nCEO, TechSofia",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      sender: "Alex Petrov",
      subject: "Business Partnership Opportunity",
      preview: "I saw your profile and think we could collaborate on...",
      fullContent: "Hi John,\n\nI saw your profile on the ABTC Bulgaria platform and was impressed by your background at Harvard Business School. I think we could collaborate on something exciting!\n\nI'm currently developing an AI-powered fintech solution for the Bulgarian market, and I'm looking for a business partner with strong strategic and financial expertise. Your experience could be exactly what we need to take this to the next level.\n\nThe opportunity involves:\n- Market strategy development\n- Investor relations\n- Business model optimization\n- Potential equity partnership\n\nWould you be interested in learning more? I'd love to set up a call to discuss the details.\n\nBest,\nAlex Petrov\nFounder, FinTech Innovations",
      time: "1 day ago",
      unread: true
    },
    {
      id: 3,
      sender: "ABTC Bulgaria",
      subject: "Upcoming Workshop Reminder",
      preview: "Don't forget about the U.S. Business Culture Workshop...",
      fullContent: "Dear John,\n\nThis is a friendly reminder about the upcoming U.S. Business Culture Workshop scheduled for July 3, 2023, at the American Corner Sofia.\n\nWorkshop Details:\n- Date: July 3, 2023\n- Time: 2:00 PM - 5:00 PM\n- Location: American Corner Sofia\n- Topic: Advanced Business Communication and Networking Strategies\n\nWhat to expect:\n- Interactive sessions on cross-cultural business communication\n- Networking best practices in the U.S. market\n- Case studies from successful Bulgarian-American business partnerships\n- Q&A session with industry experts\n\nPlease confirm your attendance by replying to this message. Light refreshments will be provided.\n\nWe look forward to seeing you there!\n\nBest regards,\nABTC Bulgaria Team",
      time: "3 days ago",
      unread: false
    }
  ];

  // Enhanced mock members with skills
  const mockMembers = [
    {
      id: 1,
      name: "Maria Dimitrova",
      location: "Sofia, Bulgaria",
      education: "MBA, Stanford University",
      interests: ["Technology", "Startups", "Marketing"],
      skills: ["Digital Marketing", "Product Management", "Data Analytics"],
      role: "Entrepreneur",
      bio: "Tech entrepreneur building the next generation of fintech solutions for Eastern Europe."
    },
    {
      id: 2,
      name: "Alex Petrov",
      location: "Plovdiv, Bulgaria",
      education: "MS Computer Science, MIT",
      interests: ["AI", "Software Development", "Innovation"],
      skills: ["Machine Learning", "Python", "Cloud Architecture"],
      role: "Tech Professional",
      bio: "AI researcher and software architect with expertise in scalable systems."
    },
    {
      id: 3,
      name: "Elena Georgiev",
      location: "Varna, Bulgaria",
      education: "PhD Economics, Harvard University",
      interests: ["Finance", "Economics", "Policy"],
      skills: ["Economic Analysis", "Financial Modeling", "Policy Research"],
      role: "Academic",
      bio: "Economic policy researcher focused on EU-US trade relationships."
    }
  ];

  // Mock discussion posts
  const discussionPosts = [
    {
      id: 1,
      author: "Maria Dimitrova",
      title: "Seeking Beta Testers for New Fintech App",
      content: "Hi everyone! I'm launching a new fintech app focused on cross-border payments between Bulgaria and the US. Looking for fellow entrepreneurs who'd be interested in beta testing. Would love to get feedback from this amazing community!",
      tags: ["Fintech", "Beta Testing", "Entrepreneurship"],
      likes: 12,
      comments: 5,
      timeAgo: "2 hours ago",
      isLiked: false
    },
    {
      id: 2,
      author: "Alex Petrov",
      title: "AI Ethics Discussion - Thoughts?",
      content: "Just attended an amazing conference on AI ethics at MIT. The discussions around bias in machine learning were particularly eye-opening. What are your thoughts on how we can ensure more ethical AI development in Bulgaria?",
      tags: ["AI", "Ethics", "Technology"],
      likes: 8,
      comments: 12,
      timeAgo: "1 day ago",
      isLiked: true
    },
    {
      id: 3,
      author: "Elena Georgiev",
      title: "Research Collaboration Opportunity",
      content: "Working on a research paper about economic impacts of US-Bulgaria tech partnerships. Looking for data points and case studies. Anyone interested in contributing or collaborating?",
      tags: ["Research", "Economics", "Collaboration"],
      likes: 6,
      comments: 3,
      timeAgo: "3 days ago",
      isLiked: false
    }
  ];

  // Mock curated news based on user interests
  const curatedNews = [
    {
      id: 1,
      title: "AI Startup from Sofia Raises $2M Series A",
      category: "AI",
      date: "2 hours ago",
      isNew: true
    },
    {
      id: 2,
      title: "Bulgarian Tech Companies Expand to US Markets",
      category: "Technology",
      date: "1 day ago",
      isNew: true
    },
    {
      id: 3,
      title: "Startup Accelerator Opens in Plovdiv",
      category: "Startups",
      date: "3 days ago",
      isNew: false
    }
  ];

  const filteredMembers = mockMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.interests.some(interest => interest.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         member.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLocation = !searchFilters.location || member.location.toLowerCase().includes(searchFilters.location.toLowerCase());
    const matchesInterest = !searchFilters.interest || member.interests.some(interest => interest.toLowerCase().includes(searchFilters.interest.toLowerCase()));
    const matchesEducation = !searchFilters.education || member.education.toLowerCase().includes(searchFilters.education.toLowerCase());
    
    return matchesSearch && matchesLocation && matchesInterest && matchesEducation;
  });

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    // Here you would clear auth state and redirect
  };

  const handleMessageClick = (messageId: number) => {
    setSelectedMessage(messageId);
    const message = messages.find(m => m.id === messageId);
    if (message && message.unread) {
      message.unread = false;
    }
  };

  const handleBackToMessages = () => {
    setSelectedMessage(null);
  };

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

  const selectedMessageData = messages.find(m => m.id === selectedMessage);

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
                  variant={activeTab === "news" ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("news")}
                >
                  <Newspaper className="mr-2 h-4 w-4" />
                  My News Feed
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
                  {messages.filter(m => m.unread).length > 0 && (
                    <Badge variant="destructive" className="ml-auto h-5 w-5 p-0 text-xs">
                      {messages.filter(m => m.unread).length}
                    </Badge>
                  )}
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
                  <BookOpen className="mr-2 h-4 w-4" />
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
                    <div className="mb-4">
                      <h3 className="font-medium text-sm mb-2">Your Skills:</h3>
                      <div className="flex flex-wrap gap-1">
                        {userProfile.skills.map((skill, index) => (
                          <SkillTag key={index} skill={skill} variant="outline" />
                        ))}
                      </div>
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
            
            {activeTab === "news" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your News Interests</CardTitle>
                    <CardDescription>
                      Customize what topics you want to see in your personalized news feed
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Topics of Interest</label>
                      <SkillSelector
                        skills={newsInterests}
                        onSkillsChange={setNewsInterests}
                        placeholder="Add topics (e.g., AI, fintech, blockchain)..."
                      />
                    </div>
                    <Button>Update Preferences</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Personalized News Feed</CardTitle>
                    <CardDescription>
                      Latest stories based on your interests
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {curatedNews.map((article) => (
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
                              <span>{article.date}</span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">Read</Button>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Link to="/news">
                        <Button variant="outline" className="w-full">
                          View All News
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeTab === "discussion" && (
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
                  {discussionPosts.map((post) => (
                    <DiscussionPost key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === "messages" && (
              <div className="space-y-6">
                {!selectedMessage ? (
                  <Card>
                    <CardHeader>
                      <CardTitle>Messages</CardTitle>
                      <CardDescription>
                        Connect with other ABTC Bulgaria members
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div 
                            key={message.id} 
                            className={`p-4 border rounded-lg cursor-pointer hover:bg-gray-50 ${message.unread ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
                            onClick={() => handleMessageClick(message.id)}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <h4 className={`font-medium text-sm ${message.unread ? 'font-semibold' : ''}`}>
                                    {message.sender}
                                  </h4>
                                  {message.unread && (
                                    <Badge variant="secondary" className="text-xs">New</Badge>
                                  )}
                                </div>
                                <p className={`text-sm ${message.unread ? 'font-medium' : 'text-gray-600'}`}>
                                  {message.subject}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {message.preview}
                                </p>
                              </div>
                              <span className="text-xs text-gray-400">{message.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4">
                        <Button variant="outline" size="sm" className="w-full">Compose New Message</Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={handleBackToMessages}
                          className="p-1"
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <div>
                          <CardTitle className="text-lg">{selectedMessageData?.subject}</CardTitle>
                          <CardDescription>
                            From: {selectedMessageData?.sender} • {selectedMessageData?.time}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="whitespace-pre-line text-sm">
                        {selectedMessageData?.fullContent}
                      </div>
                      <div className="mt-6 flex space-x-2">
                        <Button size="sm">Reply</Button>
                        <Button variant="outline" size="sm">Forward</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
            
            {activeTab === "search" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Find Members</CardTitle>
                    <CardDescription>
                      Search and connect with other ABTC Bulgaria members
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <Input
                          placeholder="Search by name, interests, or skills..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input
                          placeholder="Filter by location..."
                          value={searchFilters.location}
                          onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                        />
                        <Input
                          placeholder="Filter by interest..."
                          value={searchFilters.interest}
                          onChange={(e) => setSearchFilters({...searchFilters, interest: e.target.value})}
                        />
                        <Input
                          placeholder="Filter by education..."
                          value={searchFilters.education}
                          onChange={(e) => setSearchFilters({...searchFilters, education: e.target.value})}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Members ({filteredMembers.length})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {filteredMembers.map((member) => (
                        <div key={member.id} className="p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h4 className="font-medium">{member.name}</h4>
                                <Badge variant="outline">{member.role}</Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-1">📍 {member.location}</p>
                              <p className="text-sm text-gray-600 mb-2">🎓 {member.education}</p>
                              <p className="text-sm text-gray-700 mb-3">{member.bio}</p>
                              <div className="space-y-2">
                                <div>
                                  <span className="text-xs font-medium text-gray-500">Interests:</span>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {member.interests.map((interest, index) => (
                                      <Badge key={index} variant="secondary" className="text-xs">
                                        {interest}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <span className="text-xs font-medium text-gray-500">Skills:</span>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {member.skills.map((skill, index) => (
                                      <SkillTag key={index} skill={skill} variant="outline" />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">View Profile</Button>
                              <Button size="sm">Message</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                      {filteredMembers.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                          No members found matching your search criteria.
                        </div>
                      )}
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
                    Manage your profile information and skills
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Bio</label>
                    <Textarea
                      value={userProfile.bio}
                      readOnly
                      rows={3}
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Skills & Expertise</label>
                    <SkillSelector
                      skills={userSkills}
                      onSkillsChange={setUserSkills}
                      placeholder="Add a skill or area of expertise..."
                    />
                  </div>
                  <div>
                    <Button>Save Changes</Button>
                  </div>
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
