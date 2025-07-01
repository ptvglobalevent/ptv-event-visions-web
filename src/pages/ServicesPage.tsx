
import { Calendar, Settings, Tent, Sofa, Fan, Zap, Monitor, Music, ShoppingBag, Utensils, Camera, Star, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Calendar,
      title: "Complete Event Planning",
      description: "End-to-end event management from initial concept to final execution, ensuring every detail is perfectly coordinated.",
      features: ["Concept development", "Vendor management", "Timeline planning", "Budget optimization", "Day-of coordination"],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      pricing: "Starting from ₦150,000"
    },
    {
      icon: Settings,
      title: "Equipment Rental & Setup",
      description: "Premium quality equipment with professional installation and technical support throughout your event.",
      features: ["Professional-grade equipment", "Installation & setup", "Technical support", "Backup equipment", "Maintenance included"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      pricing: "Equipment packages from ₦50,000"
    },
    {
      icon: ShoppingBag,
      title: "Mall & Exhibition Setup",
      description: "Transform retail spaces into stunning event venues with our specialized mall event coordination services.",
      features: ["Space transformation", "Vendor coordination", "Mall compliance", "Traffic management", "Security coordination"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      pricing: "Custom quotes from ₦300,000"
    }
  ];

  const eventTypes = [
    {
      title: "Corporate Events",
      description: "Professional corporate gatherings, conferences, and business meetings",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      services: ["Conference setup", "Audio/Visual systems", "Registration management", "Catering coordination"]
    },
    {
      title: "Weddings & Celebrations",
      description: "Memorable personal celebrations with attention to every romantic detail",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      services: ["Venue decoration", "Lighting design", "Photography coordination", "Guest management"]
    },
    {
      title: "Fashion Shows",
      description: "Runway shows and fashion exhibitions with professional staging",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      services: ["Runway construction", "Stage lighting", "Model coordination", "Media management"]
    },
    {
      title: "Food & Beverage Events",
      description: "Culinary experiences and food exhibitions with full kitchen support",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      services: ["Kitchen setup", "Vendor booths", "Tasting areas", "Food safety compliance"]
    },
    {
      title: "Product Launches",
      description: "Impactful product unveilings with interactive demonstration areas",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      services: ["Interactive displays", "Demo stations", "Media coverage", "Guest experiences"]
    },
    {
      title: "Community Events",
      description: "Large-scale public events and community gatherings",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      services: ["Public safety coordination", "Crowd management", "Permits & licenses", "Entertainment booking"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "We start with understanding your vision, requirements, and budget to create a comprehensive event plan."
    },
    {
      step: "02", 
      title: "Design & Proposal",
      description: "Our team creates detailed layouts, timelines, and proposals with transparent pricing and deliverables."
    },
    {
      step: "03",
      title: "Preparation & Setup",
      description: "Coordinated preparation phase including vendor booking, equipment delivery, and venue setup."
    },
    {
      step: "04",
      title: "Event Execution",
      description: "Professional on-site management ensuring flawless execution and immediate problem resolution."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Lagos Fashion Week",
      rating: 5,
      text: "PTV Global Services transformed our fashion show vision into reality. The mall setup was absolutely phenomenal!",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Michael Adebayo",
      company: "Tech Innovation Hub",
      rating: 5,
      text: "Their attention to detail and professional equipment made our product launch a huge success. Highly recommended!",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Kemi Okafor",
      company: "Food & Beverage Expo",
      rating: 5,
      text: "The team handled our complex food expo requirements perfectly. Every vendor booth was set up to perfection.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive event solutions designed to transform your vision into unforgettable experiences with professional excellence and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600">Professional event solutions tailored to your needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {mainServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-white font-semibold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {service.pricing}
                      </span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-lg text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
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
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Types We Handle</h2>
            <p className="text-xl text-gray-600">Specialized expertise across diverse event categories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{event.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    {event.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2 flex-shrink-0"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we bring your event vision to life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-pink-300 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our clients say about our services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Plan Your Perfect Event?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Let our experienced team handle every detail while you focus on enjoying your special occasion. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300 text-lg">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 text-lg">
              Call: 07025158265
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
