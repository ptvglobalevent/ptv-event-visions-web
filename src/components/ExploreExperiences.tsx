
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ExploreExperiences() {
  const experiences = [
    {
      title: "Every Detail Counts",
      description: "From intimate gatherings to grand celebrations, we ensure every element is perfectly orchestrated",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      cta: "Explore Now"
    },
    {
      title: "Wellness Meets Business",
      description: "Corporate wellness events that combine professional networking with health and mindfulness",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      cta: "Discover More"
    },
    {
      title: "Gather Together",
      description: "Creating memorable spaces where people connect, celebrate, and build lasting relationships",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      cta: "Learn More"
    },
    {
      title: "Mindful Meetings & Events",
      description: "Thoughtfully designed events that prioritize meaningful connections and purposeful gatherings",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      cta: "Get Started"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Curated <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most captivating and expertly curated event experiences that leave lasting impressions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative h-80 lg:h-96">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    {experience.title}
                  </h3>
                  <p className="text-pink-100 mb-6 leading-relaxed opacity-90">
                    {experience.description}
                  </p>
                  <Button 
                    className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-pink-600 transition-all duration-300"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {experience.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
