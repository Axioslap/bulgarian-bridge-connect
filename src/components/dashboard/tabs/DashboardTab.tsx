
import WelcomeCard from "../WelcomeCard";
import UpcomingEventsCard from "../UpcomingEventsCard";
import ResourceLibraryCard from "../ResourceLibraryCard";
import { upcomingEvents, resourceLinks } from "@/data/mockData";

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
      <UpcomingEventsCard events={upcomingEvents} />
      <ResourceLibraryCard resources={resourceLinks} />
    </div>
  );
};

export default DashboardTab;
