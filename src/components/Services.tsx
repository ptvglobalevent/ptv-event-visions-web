
import { Calendar, Settings, Tent, Sofa, Fan, Zap, Monitor, Music, ShoppingBag, Utensils, Camera } from "lucide-react";
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
    },
    {
      icon: ShoppingBag,
      title: "Mall & Exhibition Event Setup",
      description: "Transform shopping malls and commercial spaces into fully functional event venues for fashion shows, exhibitions, and food expos.",
      features: ["Runway & stage setup with lighting", "Vendor booth partitioning", "Food & drinks exhibition layouts", "VIP lounges & branded areas"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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

  const mallServices = [
    {
      icon: Camera,
      title: "Fashion Show Setup",
      description: "Professional runway construction with stage lighting and sound systems",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Utensils,
      title: "Food & Drink Exhibitions",
      description: "Vendor booth layouts and professional kitchen setups",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: ShoppingBag,
      title: "Product Exhibitions",
      description: "Branded display areas and interactive product showcases",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive event solutions tailored to make your occasion unforgettable
          </p>
        </div>

        {/* Highlight Mall Events */}
        <div className="mb-16 relative bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 md:p-12 text-white text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">🎤 Mall Event Setups Now Available!</h3>
            <p className="text-xl text-pink-100 mb-8">
              Planning a fashion show or food expo in a mall? Let PTV GLOBAL SERVICES handle your runway, booths, and full logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300"
              >
                Book Now
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('mall-services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                See Details
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mall Event Services Detail Section */}
        <div id="mall-services" className="mb-16 bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mall & Exhibition Event Setup</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We specialize in transforming shopping malls and open commercial spaces into fully functional event venues for fashion shows, product exhibitions, and food & drink expos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {mallServices.map((service, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 right-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <service.icon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Mall Event Setup Services Include:</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Runway/fashion show stage setup with lighting and sound</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Vendor booth partitioning and table setups</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Food and drinks exhibition layouts</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">VIP lounges and branded areas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Full logistics: canopies, chairs, ACs, LED walls, power</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Complete event coordination and management</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
              >
                📞 Contact us for a tailored quote
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-pink-50 rounded-3xl p-8 md:p-12">
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
          <div className="relative bg-gradient-to-r from-pink-900 to-rose-900 rounded-2xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-xl text-pink-100 mb-6">
                We specialize in creating tailored event packages that meet your specific requirements and budget.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-pink-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
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
