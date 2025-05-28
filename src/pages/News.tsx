import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Calendar, TrendingUp, Briefcase, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const News = () => {
  // Mock user authentication state - in real app this would come from auth context
  const isLoggedIn = false; // This would be dynamic based on actual auth state
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  
  // Sample news articles
  const newsArticles = [
    {
      id: 1,
      title: "Bulgaria's Tech Sector Sees Record Investment in 2024",
      description: "Foreign direct investment in Bulgaria's technology sector reached an all-time high, with American companies leading the charge in establishing regional headquarters.",
      category: "Tech",
      date: "May 25, 2025",
      source: "Sofia Tech Report",
      url: "#",
      featured: true,
      memberOnly: false,
    },
    {
      id: 2,
      title: "US-Bulgaria Trade Partnership Expands to Include AI Research",
      description: "New bilateral agreement opens opportunities for joint artificial intelligence research projects between American and Bulgarian institutions.",
      category: "Business",
      date: "May 23, 2025",
      source: "Business Bulgaria",
      url: "#",
      featured: true,
      memberOnly: true,
    },
    {
      id: 3,
      title: "Bulgarian Startups Gain Access to Silicon Valley Accelerators",
      description: "Three Bulgarian tech startups have been accepted into prestigious US accelerator programs, marking a significant milestone for the local startup ecosystem.",
      category: "Startups",
      date: "May 20, 2025",
      source: "Startup Europe",
      url: "#",
      featured: false,
      memberOnly: true,
    },
    {
      id: 4,
      title: "Digital Transformation Drives Bulgarian Economic Growth",
      description: "Government initiatives in digitalization are attracting international businesses to establish operations in Bulgaria, creating new opportunities for tech professionals.",
      category: "Tech",
      date: "May 18, 2025",
      source: "Digital Bulgaria",
      url: "#",
      featured: false,
      memberOnly: false,
    },
    {
      id: 5,
      title: "American Chamber of Commerce Bulgaria Reports Strong Q1 Results",
      description: "Member companies show impressive growth in the first quarter, with technology and financial services leading the expansion.",
      category: "Business",
      date: "May 15, 2025",
      source: "AmCham Bulgaria",
      url: "#",
      featured: false,
      memberOnly: true,
    },
    {
      id: 6,
      title: "Bulgarian Universities Partner with US Tech Giants for Research",
      description: "Major American technology companies announce new research partnerships with Bulgarian universities, focusing on cybersecurity and blockchain technology.",
      category: "Education",
      date: "May 12, 2025",
      source: "Tech Education Today",
      url: "#",
      featured: false,
      memberOnly: true,
    },
  ];

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Tech":
        return <TrendingUp className="w-4 h-4" />;
      case "Business":
        return <Briefcase className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Tech":
        return "bg-primary/10 text-primary border-primary/20";
      case "Business":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "Startups":
        return "bg-green-50 text-green-700 border-green-200";
      case "Education":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const MembershipPrompt = () => (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-6 text-center">
      <Lock className="w-12 h-12 mx-auto mb-4 text-primary" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">Member-Exclusive Content</h3>
      <p className="text-gray-600 mb-6">
        Join ABTC Bulgaria to access our full collection of business and tech news, insights, and analysis.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/register">
          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
            Become a Member
          </Button>
        </Link>
        <Link to="/register">
          <Button variant="outline">
            Support Our Community
          </Button>
        </Link>
      </div>
    </div>
  );

  const handleReadMore = (article: any) => {
    if (article.memberOnly && !isLoggedIn) {
      setShowMembershipModal(true);
    } else {
      // Navigate to full article or open in new tab
      console.log("Reading article:", article.title);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent)] opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.03),transparent)] opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent">
              Business & Tech News
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest developments in business and technology affecting 
              the U.S.-Bulgaria corridor and our global community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Badge className={`${getCategoryColor(article.category)} flex items-center gap-1`}>
                        {getCategoryIcon(article.category)}
                        {article.category}
                      </Badge>
                      {article.memberOnly && (
                        <Badge variant="outline" className="text-xs">
                          <Lock className="w-3 h-3 mr-1" />
                          Members Only
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">{article.source}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group-hover:bg-primary group-hover:text-white transition-colors"
                      onClick={() => handleReadMore(article)}
                    >
                      {article.memberOnly && !isLoggedIn ? (
                        <>
                          <Lock className="w-4 h-4 mr-2" />
                          Members Only
                        </>
                      ) : (
                        <>
                          Read More
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Updates</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <div key={article.id}>
                {index === 2 && !isLoggedIn && (
                  <div className="mb-6">
                    <MembershipPrompt />
                  </div>
                )}
                <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={`${getCategoryColor(article.category)} flex items-center gap-1`}>
                          {getCategoryIcon(article.category)}
                          {article.category}
                        </Badge>
                        {article.memberOnly && (
                          <Badge variant="outline" className="text-xs">
                            <Lock className="w-3 h-3 mr-1" />
                            Member
                          </Badge>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">{article.source}</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group-hover:text-primary transition-colors p-2"
                        onClick={() => handleReadMore(article)}
                      >
                        {article.memberOnly && !isLoggedIn ? (
                          <Lock className="w-4 h-4" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Get the latest business and tech news delivered to your inbox weekly.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>

      {/* Membership Modal */}
      <Dialog open={showMembershipModal} onOpenChange={setShowMembershipModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              Member-Exclusive Content
            </DialogTitle>
            <DialogDescription>
              Join ABTC Bulgaria to access our full collection of business and tech news, insights, and analysis.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Link to="/register" onClick={() => setShowMembershipModal(false)}>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                Become a Member
              </Button>
            </Link>
            <Link to="/register" onClick={() => setShowMembershipModal(false)}>
              <Button variant="outline" className="w-full">
                Support Our Community
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default News;
