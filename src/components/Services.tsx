
import { Calendar, Settings, Tent, Sofa, Fan, Zap, Monitor, Music } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const mainServices = [
    {
      icon: Calendar,
      title: "Event Planning & Coordination",
      description: "From concept to execution — we manage all aspects of events, including logistics, vendor coordination, and onsite supervision.",
      features: ["Complete event management", "Vendor coordination", "Timeline planning", "Day-of coordination"],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Settings,
      title: "Equipment Rental",
      description: "Premium quality equipment for all your event needs, delivered and set up by our professional team.",
      features: ["Quality assurance", "Professional setup", "Flexible rental periods", "Technical support"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const equipment = [
    { 
      icon: Tent, 
      name: "Canopies, Tents & Marquees", 
      description: "Weather-resistant structures for any outdoor event",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      icon: Sofa, 
      name: "Chairs & Tables", 
      description: "Various styles from elegant to casual seating solutions",
      image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      icon: Fan, 
      name: "Standing & Industrial Fans", 
      description: "Keep your guests comfortable in any weather",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      icon: Zap, 
      name: "Air Conditioners (5HP)", 
      description: "Mobile cooling units for climate control",
      image: "https://images.unsplash.com/photo-1635948321059-de2ad7db523a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      icon: Settings, 
      name: "Power Generators", 
      description: "Reliable power supply for uninterrupted events",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      icon: Monitor, 
      name: "LED Screens & Lighting", 
      description: "High-quality displays and professional lighting",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      icon: Music, 
      name: "Sound Systems", 
      description: "Crystal clear audio for every occasion",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      icon: Tent, 
      name: "Red & Synthetic Rugs", 
      description: "Elegant flooring solutions for any venue",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive event solutions tailored to make your occasion unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Equipment Rental</h3>
            <p className="text-xl text-gray-600">Professional-grade equipment for every event need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 right-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-xl text-blue-100 mb-6">
                We specialize in creating tailored event packages that meet your specific requirements and budget.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
