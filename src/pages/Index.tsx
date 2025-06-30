
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TrendingHighlights } from "@/components/TrendingHighlights";
import { ExploreExperiences } from "@/components/ExploreExperiences";
import { EventCategories } from "@/components/EventCategories";
import { ProcessSteps } from "@/components/ProcessSteps";
import { StatsShowcase } from "@/components/StatsShowcase";
import { BookingCTA } from "@/components/BookingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TrendingHighlights />
      <About />
      <Services />
      <ExploreExperiences />
      <EventCategories />
      <ProcessSteps />
      <Gallery />
      <StatsShowcase />
      <Testimonials />
      <BookingCTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
