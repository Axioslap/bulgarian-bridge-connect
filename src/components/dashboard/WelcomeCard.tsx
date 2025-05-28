
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SkillTag from "@/components/SkillTag";

interface WelcomeCardProps {
  userProfile: {
    name: string;
    usEducation: string;
    skills: string[];
    role: string;
  };
}

const WelcomeCard = ({ userProfile }: WelcomeCardProps) => {
  return (
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
  );
};

export default WelcomeCard;
