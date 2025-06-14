import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Calendar, TrendingUp, Briefcase, Lock, ArrowLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";

const News = () => {
  // Mock user authentication state - in real app this would come from auth context
  const isLoggedIn = false; // This would be dynamic based on actual auth state
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [searchParams] = useSearchParams();
  const articleId = searchParams.get('article');
  
  // Sample news articles with full content
  const newsArticles = [
    {
      id: 1,
      title: "Bulgaria's Tech Sector Sees Record Investment in 2024",
      description: "Foreign direct investment in Bulgaria's technology sector reached an all-time high, with American companies leading the charge in establishing regional headquarters.",
      fullContent: "Foreign direct investment in Bulgaria's technology sector reached an all-time high this year, with American companies leading the charge in establishing regional headquarters. The Bulgarian Investment Promotion Agency reported a 45% increase in tech-related FDI compared to 2023, with total investments exceeding €2.8 billion. Major American tech companies including Microsoft, Amazon Web Services, and several Fortune 500 firms have announced significant expansions of their Bulgarian operations. This surge is attributed to Bulgaria's competitive talent pool, favorable business environment, and strategic location within the EU. The country's tech workforce has grown by 30% over the past two years, with universities adapting curricula to meet industry demands. Government initiatives including tax incentives for R&D activities and streamlined regulatory processes have made Bulgaria an attractive destination for international tech investments.",
      category: "Tech",
      date: "May 25, 2025",
      source: "Sofia Tech Report",
      url: "#",
      featured: true,
      memberOnly: false,
    },
    {
      id: 4,
      title: "Digital Transformation Drives Bulgarian Economic Growth",
      description: "Government initiatives in digitalization are attracting international businesses to establish operations in Bulgaria, creating new opportunities for tech professionals.",
      fullContent: "Government initiatives in digitalization are attracting international businesses to establish operations in Bulgaria, creating unprecedented opportunities for tech professionals across the country. The Bulgarian Digital Transformation Strategy 2025 has successfully attracted over 150 international companies to set up operations in major cities including Sofia, Plovdiv, and Varna. These initiatives have resulted in the creation of more than 25,000 new tech jobs, with average salaries increasing by 35% year-over-year. The government's investment in digital infrastructure, including 5G network deployment and fiber optic expansion, has positioned Bulgaria as a leading destination for tech companies seeking European market access.",
      category: "Tech",
      date: "May 18, 2025",
      source: "Digital Bulgaria",
      url: "#",
      featured: true,
      memberOnly: false,
    },
    {
      id: 2,
      title: "US-Bulgaria Trade Partnership Expands to Include AI Research",
      description: "New bilateral agreement opens opportunities for joint artificial intelligence research projects between American and Bulgarian institutions.",
      fullContent: "A groundbreaking bilateral agreement between the United States and Bulgaria has opened unprecedented opportunities for joint artificial intelligence research projects. The partnership, signed during the recent trade summit in Sofia, establishes a framework for collaboration between American tech giants and Bulgarian research institutions. Under this agreement, leading US universities including MIT, Stanford, and Carnegie Mellon will partner with Bulgarian institutions such as Sofia University and the Technical University of Sofia. The initiative includes a $50 million joint funding pool for AI research projects focusing on healthcare, cybersecurity, and sustainable technology solutions. Bulgarian startups working on AI technologies will gain access to Silicon Valley mentorship programs and potential investment opportunities.",
      category: "Business",
      date: "May 23, 2025",
      source: "Business Bulgaria",
      url: "#",
      featured: false,
      memberOnly: true,
    },
    {
      id: 3,
      title: "Bulgarian Startups Gain Access to Silicon Valley Accelerators",
      description: "Three Bulgarian tech startups have been accepted into prestigious US accelerator programs, marking a significant milestone for the local startup ecosystem.",
      fullContent: "Three Bulgarian tech startups have achieved a remarkable milestone by securing spots in prestigious Silicon Valley accelerator programs, marking a significant breakthrough for the country's startup ecosystem. The companies - AI-powered healthcare platform MedTech Sofia, fintech startup PayBalk, and sustainable energy solution provider GreenTech BG - were selected from over 2,000 international applicants. This achievement demonstrates the growing recognition of Bulgarian innovation capabilities on the global stage. The startups will receive mentorship from industry veterans, access to potential investors, and the opportunity to scale their operations internationally.",
      category: "Startups",
      date: "May 20, 2025",
      source: "Startup Europe",
      url: "#",
      featured: false,
      memberOnly: true,
    },
    {
      id: 5,
      title: "American Chamber of Commerce Bulgaria Reports Strong Q1 Results",
      description: "Member companies show impressive growth in the first quarter, with technology and financial services leading the expansion.",
      fullContent: "The American Chamber of Commerce in Bulgaria has reported exceptionally strong first-quarter results, with member companies demonstrating impressive growth across multiple sectors. Technology and financial services companies led the expansion, showing revenue increases of 28% and 22% respectively compared to Q1 2024. The chamber's quarterly report highlights significant investments in Bulgarian operations by major American corporations, including the establishment of new development centers and the expansion of existing facilities. Employment within AmCham member companies has grown by 15%, adding over 8,000 new positions across various skill levels.",
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
      fullContent: "Major American technology companies have announced significant new research partnerships with Bulgarian universities, focusing on cutting-edge cybersecurity and blockchain technology initiatives. The collaborations involve leading institutions such as Sofia University, Technical University of Sofia, and the University of Plovdiv, working alongside tech giants including IBM, Google, and Cisco. These partnerships will establish dedicated research labs equipped with state-of-the-art technology and will provide opportunities for Bulgarian students and researchers to work on real-world projects. The initiative is expected to produce breakthrough innovations in areas such as quantum-resistant cryptography, decentralized finance solutions, and advanced threat detection systems.",
      category: "Education",
      date: "May 12, 2025",
      source: "Tech Education Today",
      url: "#",
      featured: false,
      memberOnly: true,
    },
  ];

  const selectedArticle = articleId ? newsArticles.find(article => article.id === parseInt(articleId)) : null;
  const publicArticles = newsArticles.filter(article => !article.memberOnly);
  const memberOnlyArticles = newsArticles.filter(article => article.memberOnly);

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
      window.location.href = '/register';
    } else {
      window.location.href = `/news?article=${article.id}`;
    }
  };

  // If viewing a specific article
  if (selectedArticle) {
    const truncatedContent = selectedArticle.fullContent.split(' ').slice(0, 50).join(' ') + '...';
    const shouldShowMembership = selectedArticle.memberOnly && !isLoggedIn;

    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/news" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Link>
              
              <div className="flex items-center gap-2 mb-4">
                <Badge className={`${getCategoryColor(selectedArticle.category)} flex items-center gap-1`}>
                  {getCategoryIcon(selectedArticle.category)}
                  {selectedArticle.category}
                </Badge>
                {selectedArticle.memberOnly && (
                  <Badge variant="outline" className="text-xs">
                    <Lock className="w-3 h-3 mr-1" />
                    Members Only
                  </Badge>
                )}
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedArticle.date}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedArticle.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{selectedArticle.description}</p>
              <span className="text-sm font-medium text-gray-500">By {selectedArticle.source}</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {shouldShowMembership ? truncatedContent : selectedArticle.fullContent}
              </p>
              
              {shouldShowMembership && (
                <div className="mt-8">
                  <MembershipPrompt />
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section with USA flag colors */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-red-900/70 to-blue-800/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.05),transparent)] opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business & Tech News
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Stay informed with the latest developments in business and technology affecting 
              the U.S.-Bulgaria corridor and our global community.
            </p>
          </div>
        </div>
      </section>

      {/* Public Articles Section */}
      <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Public News</h2>
            <p className="text-gray-600 mb-6">Stay updated with the latest developments - no registration required</p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publicArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${getCategoryColor(article.category)} flex items-center gap-1`}>
                      {getCategoryIcon(article.category)}
                      {article.category}
                    </Badge>
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
                      Read More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member-Only Articles Section with USA flag colors */}
      <section className="py-16 bg-gradient-to-br from-blue-50/50 to-red-50/50 border-t-4 border-gradient-to-r from-blue-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Premium Member Content</h2>
              <Star className="w-8 h-8 text-red-600" />
            </div>
            <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
              Unlock exclusive insights, in-depth analysis, and premium content from industry leaders
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full mx-auto"></div>
          </div>

          {!isLoggedIn && (
            <div className="mb-12">
              <div className="bg-gradient-to-br from-blue-100 to-red-100 border-2 border-blue-200 rounded-2xl p-8 text-center shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Lock className="w-16 h-16 text-blue-600" />
                    <div className="absolute -top-2 -right-2">
                      <Star className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Articles Await</h3>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Get access to exclusive business insights, detailed market analysis, and insider perspectives 
                  on the U.S.-Bulgaria business corridor. Our premium content is crafted by industry experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/register">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200">
                      <Star className="w-5 h-5 mr-2" />
                      Become a Member
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="outline" size="lg" className="border-blue-400 text-blue-700 hover:bg-blue-50">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberOnlyArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Badge className={`${getCategoryColor(article.category)} flex items-center gap-1`}>
                        {getCategoryIcon(article.category)}
                        {article.category}
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-300 text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-700 transition-colors leading-tight">
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
                      variant="outline" 
                      size="sm" 
                      className="group-hover:bg-blue-600 group-hover:text-white transition-colors"
                      onClick={() => handleReadMore(article)}
                    >
                      Read More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA for Premium Content with USA flag colors */}
          {!isLoggedIn && (
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 via-white to-red-600 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Unlock Premium Content?</h3>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Join our community of business leaders and get unlimited access to all premium articles
                </p>
                <Link to="/register">
                  <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg transform hover:scale-105 transition-all duration-200">
                    <Star className="w-5 h-5 mr-2" />
                    Become a Member to See Full Articles
                  </Button>
                </Link>
              </div>
            </div>
          )}
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
