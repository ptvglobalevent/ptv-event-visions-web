
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Text Content */}
          <div className="text-gray-800 space-y-8 z-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent">
                  PTV GLOBAL
                </span>
                <br />
                <span className="bg-gradient-to-r from-rose-400 to-pink-600 bg-clip-text text-transparent">
                  SERVICES
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold text-rose-600 animate-fade-in delay-300">
                Your Event, Our Priority
              </p>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed animate-fade-in delay-500">
                Transforming visions into unforgettable experiences. Premium event planning and equipment rental services across Lagos and beyond.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-700">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="tel:07025158265" 
                  className="flex items-center space-x-2 bg-pink-100/80 backdrop-blur-sm px-6 py-4 rounded-full hover:bg-pink-200/80 transition-all duration-300 text-pink-700"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">Call Now</span>
                </a>
                
                <a 
                  href="https://wa.me/2347025158265" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-500/80 backdrop-blur-sm px-6 py-4 rounded-full hover:bg-green-500 transition-all duration-300 text-white"
                >
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in delay-1000">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">500+</div>
                <div className="text-sm text-rose-500">Events Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">5+</div>
                <div className="text-sm text-rose-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">100%</div>
                <div className="text-sm text-rose-500">Client Satisfaction</div>
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
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent rounded-2xl"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-pink-100/30 border-pink-200/50 text-pink-700 hover:bg-pink-200/50" />
              <CarouselNext className="right-4 bg-pink-100/30 border-pink-200/50 text-pink-700 hover:bg-pink-200/50" />
            </Carousel>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-rose-300/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Floating Support Buttons */}
      <div className="floating-support left-6 top-1/2 transform -translate-y-1/2">
        <a 
          href="https://wa.me/2347025158265" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
          </svg>
        </a>
      </div>

      <div className="floating-support right-6 top-1/2 transform -translate-y-1/2">
        <a 
          href="tel:07025158265"
          className="flex items-center justify-center w-16 h-16 bg-pink-500 text-white rounded-full shadow-2xl hover:bg-pink-600 transition-all duration-300"
          title="Call Us Now"
        >
          <Phone className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
