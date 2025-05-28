
import WelcomeCard from "../WelcomeCard";
import UpcomingEventsCard from "../UpcomingEventsCard";
import ResourceLibraryCard from "../ResourceLibraryCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { upcomingEvents, resourceLinks, mockCuratedNews } from "@/data/mockData";
import { ExternalLink, Calendar } from "lucide-react";

interface DashboardTabProps {
  userProfile: {
    name: string;
    usEducation: string;
    skills: string[];
    role: string;
  };
}

const DashboardTab = ({ userProfile }: DashboardTabProps) => {
  return (
    <div className="grid gap-6">
      <WelcomeCard userProfile={userProfile} />
      
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

      <UpcomingEventsCard events={upcomingEvents} />
      <ResourceLibraryCard resources={resourceLinks} />
    </div>
  );
};

export default DashboardTab;
