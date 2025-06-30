
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Corporate Event Setup with LED Screens"
    },
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Elegant Wedding Venue Setup"
    },
    {
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Outdoor Event with Tents and Lighting"
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Professional Event Equipment Setup"
    }
  ];

  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-8 z-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  PTV GLOBAL
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                  SERVICES
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold text-blue-200 animate-fade-in delay-300">
                Your Event, Our Priority
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed animate-fade-in delay-500">
                Transforming visions into unforgettable experiences. Premium event planning and equipment rental services across Lagos and beyond.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-700">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="tel:07025158265" 
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-4 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">Call Now</span>
                </a>
                
                <a 
                  href="https://wa.me/2347025158265" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-500/80 backdrop-blur-sm px-6 py-4 rounded-full hover:bg-green-500 transition-all duration-300"
                >
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in delay-1000">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-blue-200">Events Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-blue-200">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="relative animate-fade-in delay-500">
            <Carousel setApi={setApi} className="w-full max-w-lg mx-auto lg:max-w-none">
              <CarouselContent>
                {heroImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
              <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
            </Carousel>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
