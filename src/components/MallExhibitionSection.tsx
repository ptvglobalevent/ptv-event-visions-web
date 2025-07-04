
import { Camera, ShoppingBag, Utensils } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function MallExhibitionSection() {
  const services = [
    {
      icon: Camera,
      title: "Fashion Show Setup",
      description: "Professional runway construction with stage lighting and premium seating arrangements",
      features: ["30ft professional runway", "LED stage lighting", "Sound system integration", "VIP seating areas"],
      image: "/lovable-uploads/16337fc2-3de9-42c8-81df-43ec37345763.png"
    },
    {
      icon: Utensils,
      title: "Food & Drink Exhibitions",
      description: "Vendor booth layouts and professional kitchen setups for food and beverage events",
      features: ["Professional kitchen setups", "Vendor booth layouts", "Food safety compliance", "Tasting areas"],
      image: "/lovable-uploads/708d6a16-163a-4b91-bcc4-a454e6cfebbb.png"
    },
    {
      icon: ShoppingBag,
      title: "Product Exhibition",
      description: "Branded display areas and interactive product showcases with modern installations",
      features: ["Interactive displays", "Product demonstration areas", "Branded environments", "Customer engagement zones"],
      image: "/lovable-uploads/08b7e79a-8b35-4a18-ad7b-d1670c2f7d3a.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mall & Exhibition <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Event Setup</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform shopping malls and commercial spaces into world-class event venues for fashion shows and product exhibitions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
            onClick={() => window.open('/mall-events', '_blank')}
          >
            View Mall Event Services
          </Button>
        </div>
      </div>
    </section>
  );
}
