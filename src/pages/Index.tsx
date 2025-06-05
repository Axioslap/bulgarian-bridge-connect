
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import VideoSection from "@/components/sections/VideoSection";
import EventsSection from "@/components/sections/EventsSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <MissionSection />
      <VideoSection />
      <EventsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
