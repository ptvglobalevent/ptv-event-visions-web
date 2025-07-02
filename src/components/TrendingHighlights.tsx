
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function TrendingHighlights() {
  const [api, setApi] = useState<any>();

  const highlights = [
    {
      title: "Premium Marquee Solutions",
      category: "Outdoor Events",
      image: "/lovable-uploads/16337fc2-3de9-42c8-81df-43ec37345763.png",
      description: "Professional outdoor event marquees with elegant white tenting and climate control"
    },
    {
      title: "Luxury Corporate Events", 
      category: "Corporate",
      image: "/lovable-uploads/708d6a16-163a-4b91-bcc4-a454e6cfebbb.png",
      description: "Large-scale corporate event setups with premium seating and professional staging"
    },
    {
      title: "Elegant Wedding Receptions",
      category: "Wedding",
      image: "/lovable-uploads/08b7e79a-8b35-4a18-ad7b-d1670c2f7d3a.png",
      description: "Breathtaking wedding receptions with ambient lighting and luxury table settings"
    },
    {
      title: "Spectacular Exhibition Setup",
      category: "Exhibition",
      image: "/lovable-uploads/3cdd6355-9cbe-4cb0-8aef-251e3fac4472.png",
      description: "Innovative exhibition designs with dramatic displays and professional rigging"
    }
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trending <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular event solutions and latest innovations
          </p>
        </div>

        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="-ml-4">
            {highlights.map((highlight, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                        {highlight.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ArrowRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-pink-100/30 border-pink-200/50 text-pink-700 hover:bg-pink-200/50" />
          <CarouselNext className="right-4 bg-pink-100/30 border-pink-200/50 text-pink-700 hover:bg-pink-200/50" />
        </Carousel>
      </div>
    </section>
  );
}
