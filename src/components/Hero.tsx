
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            PTV GLOBAL SERVICES
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-blue-100 animate-fade-in delay-300">
          Your Event, Our Priority
        </p>
        
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in delay-500">
          Transforming visions into unforgettable experiences. Premium event planning and equipment rental services across Lagos and beyond.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <div className="flex items-center space-x-4">
            <a 
              href="tel:07025158265" 
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">Call Now</span>
            </a>
            
            <a 
              href="https://wa.me/2347025158265" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500/80 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-green-500 transition-all duration-300"
            >
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 animate-fade-in delay-1000">
          <p className="text-sm text-gray-300 mb-2">Trusted by Lagos' leading events</p>
          <div className="flex justify-center space-x-8 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Events Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
