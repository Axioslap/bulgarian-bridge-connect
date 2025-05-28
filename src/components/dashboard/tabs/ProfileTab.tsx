
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import SkillSelector from "@/components/SkillSelector";

interface ProfileTabProps {
  userProfile: {
    bio: string;
  };
  userSkills: string[];
  setUserSkills: (skills: string[]) => void;
}

const ProfileTab = ({ userProfile, userSkills, setUserSkills }: ProfileTabProps) => {
  return (
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
  );
};

export default ProfileTab;
