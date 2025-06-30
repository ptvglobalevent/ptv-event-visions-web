
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Calendar, ArrowRight } from "lucide-react";

export function BookingCTA() {
  const bookingOptions = [
    {
      icon: Phone,
      title: "Call for Immediate Support",
      description: "Speak directly with our event specialists",
      action: "Call Now: 07025158265",
      link: "tel:07025158265",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Quick Chat",
      description: "Get instant responses to your questions",
      action: "Chat on WhatsApp",
      link: "https://wa.me/2347025158265",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Book Your <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Event?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Take the first step towards creating an unforgettable event experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {bookingOptions.map((option, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 bg-gradient-to-br from-pink-100 to-rose-100">
                  <img 
                    src={index === 0 
                      ? "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      : "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    } 
                    alt={option.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center`}>
                      <option.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <Button 
                    className={`w-full bg-gradient-to-r ${option.color} text-white hover:opacity-90 transition-all duration-300 group-hover:scale-105`}
                    onClick={() => window.open(option.link, '_blank')}
                  >
                    {option.action} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-pink-500 to-rose-500 border-0 text-white overflow-hidden">
            <CardContent className="p-12 relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20"></div>
              <div className="relative z-10">
                <Calendar className="h-16 w-16 mx-auto mb-6 text-pink-100" />
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Free Consultation</h3>
                <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss your event vision and create a customized plan that brings your dreams to life
                </p>
                <Button 
                  className="bg-white text-pink-600 px-8 py-4 text-lg font-semibold rounded-full hover:bg-pink-50 transition-all duration-300 shadow-xl"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
