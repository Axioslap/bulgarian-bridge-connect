
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import SkillSelector from "@/components/SkillSelector";
import { Camera, MapPin, X } from "lucide-react";
import { useState } from "react";

interface ProfileTabProps {
  userProfile: {
    bio: string;
    name: string;
  };
  userSkills: string[];
  setUserSkills: (skills: string[]) => void;
}

const ProfileTab = ({ userProfile, userSkills, setUserSkills }: ProfileTabProps) => {
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [location, setLocation] = useState("Boston, MA");
  const [interests, setInterests] = useState<string[]>(["Technology", "Entrepreneurship", "Bulgarian Culture", "Networking"]);
  const [newInterest, setNewInterest] = useState("");

  const handleProfilePictureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest("");
    }
  };

  const removeInterest = (interestToRemove: string) => {
    setInterests(interests.filter(interest => interest !== interestToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addInterest();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
        <CardDescription>
          Manage your profile information, skills, and interests
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Profile Picture Section */}
        <div>
          <label className="text-sm font-medium mb-2 block">Profile Picture</label>
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={profilePicture} alt={userProfile.name} />
              <AvatarFallback className="text-lg">
                {userProfile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureUpload}
                className="hidden"
                id="profile-picture-upload"
              />
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => document.getElementById('profile-picture-upload')?.click()}
              >
                <Camera className="w-4 h-4 mr-2" />
                Upload Picture
              </Button>
              <p className="text-xs text-gray-500 mt-1">JPG, PNG or GIF (max 5MB)</p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div>
          <label className="text-sm font-medium mb-2 block">
            <MapPin className="w-4 h-4 inline mr-1" />
            Location
          </label>
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, State"
          />
        </div>

        {/* Bio Section */}
        <div>
          <label className="text-sm font-medium mb-2 block">Bio</label>
          <Textarea
            value={userProfile.bio}
            readOnly
            rows={3}
            className="bg-gray-50"
          />
        </div>

        {/* Skills Section */}
        <div>
          <label className="text-sm font-medium mb-2 block">Your Skills & Expertise</label>
          <SkillSelector
            skills={userSkills}
            onSkillsChange={setUserSkills}
            placeholder="Add a skill or area of expertise..."
          />
        </div>

        {/* Interests Section */}
        <div>
          <label className="text-sm font-medium mb-2 block">Interests</label>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge key={interest} variant="secondary" className="flex items-center gap-1">
                  {interest}
                  <button
                    onClick={() => removeInterest(interest)}
                    className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add an interest..."
                className="flex-1"
              />
              <Button onClick={addInterest} size="sm">Add</Button>
            </div>
          </div>
        </div>

        <div>
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileTab;
