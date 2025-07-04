
import { Hero } from "@/components/Hero";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { SocialLinks } from "@/components/SocialLinks";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TrendingHighlights } from "@/components/TrendingHighlights";
import { ExploreExperiences } from "@/components/ExploreExperiences";
import { EventCategories } from "@/components/EventCategories";
import { ProcessSteps } from "@/components/ProcessSteps";
import { StatsShowcase } from "@/components/StatsShowcase";
import { BookingCTA } from "@/components/BookingCTA";
import { MallEventsBlog } from "@/components/MallEventsBlog";
import { CommunityPopup } from "@/components/CommunityPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <VideoShowcase />
      <TrendingHighlights />
      <About />
      <Services />
      <ExploreExperiences />
      <EventCategories />
      <ProcessSteps />
      <Gallery />
      <MallEventsBlog />
      <StatsShowcase />
      <Testimonials />
      <BookingCTA />
      <SocialLinks />
      <Footer />
      <CommunityPopup />
    </div>
  );
};

export default Index;
