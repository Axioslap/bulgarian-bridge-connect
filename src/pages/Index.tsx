
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnersSlider from "@/components/PartnersSlider";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import MissionSection from "@/components/sections/MissionSection";
import FeaturedEventsSection from "@/components/sections/FeaturedEventsSection";
import MemberStoriesSection from "@/components/sections/MemberStoriesSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Header />
      
      <HeroSection />
      
      <TestimonialsSection />
      
      <MissionSection />
      
      {/* Partners Slider */}
      <div className="animate-scale-in">
        <PartnersSlider />
      </div>
      
      <FeaturedEventsSection />
      
      <MemberStoriesSection />
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
