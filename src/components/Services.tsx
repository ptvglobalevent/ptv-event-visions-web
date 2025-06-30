
import { Calendar, Settings, Tent, Sofa, Fan, Zap, Monitor, Music } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const mainServices = [
    {
      icon: Calendar,
      title: "Event Planning & Coordination",
      description: "From concept to execution — we manage all aspects of events, including logistics, vendor coordination, and onsite supervision.",
      features: ["Complete event management", "Vendor coordination", "Timeline planning", "Day-of coordination"]
    },
    {
      icon: Settings,
      title: "Equipment Rental",
      description: "Premium quality equipment for all your event needs, delivered and set up by our professional team.",
      features: ["Quality assurance", "Professional setup", "Flexible rental periods", "Technical support"]
    }
  ];

  const equipment = [
    { icon: Tent, name: "Canopies, Tents & Marquees", description: "Weather-resistant structures for any outdoor event" },
    { icon: Sofa, name: "Chairs & Tables", description: "Various styles from elegant to casual seating solutions" },
    { icon: Fan, name: "Standing & Industrial Fans", description: "Keep your guests comfortable in any weather" },
    { icon: Zap, name: "Air Conditioners (5HP)", description: "Mobile cooling units for climate control" },
    { icon: Settings, name: "Power Generators", description: "Reliable power supply for uninterrupted events" },
    { icon: Monitor, name: "LED Screens & Lighting", description: "High-quality displays and professional lighting" },
    { icon: Music, name: "Sound Systems", description: "Crystal clear audio for every occasion" },
    { icon: Tent, name: "Red & Synthetic Rugs", description: "Elegant flooring solutions for any venue" }
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
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
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
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-white">
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
    </section>
  );
}
