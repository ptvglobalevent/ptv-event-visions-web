
import { Calendar, MapPin, Users, Star, Camera, Utensils, ShoppingBag, Zap, Monitor, Music, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function MallEventsPage() {
  const services = [
    {
      icon: Camera,
      title: "Fashion Show Setup",
      description: "Professional runway construction with stage lighting and sound systems",
      features: ["30ft professional runway", "LED stage lighting", "Sound system integration", "VIP seating areas"],
      image: "/lovable-uploads/c7514ba7-95f2-4e4f-a424-64267ae101c1.png"
    },
    {
      icon: Utensils,
      title: "Food & Drink Exhibitions",
      description: "Vendor booth layouts and professional kitchen setups",
      features: ["Custom booth partitioning", "Food prep areas", "Display refrigeration", "Dining space setup"],
      image: "/lovable-uploads/708d6a16-163a-4b91-bcc4-a454e6cfebbb.png"
    },
    {
      icon: ShoppingBag,
      title: "Product Exhibitions",
      description: "Branded display areas and interactive product showcases",
      features: ["Interactive displays", "Product demonstration areas", "Branded environments", "Customer engagement zones"],
      image: "/lovable-uploads/16337fc2-3de9-42c8-81df-43ec37345763.png"
    }
  ];

  const equipment = [
    { name: "LED Video Walls", specs: "P3.91 Indoor LED panels, 500x1000mm", image: "/lovable-uploads/3cdd6355-9cbe-4cb0-8aef-251e3fac4472.png" },
    { name: "Professional Audio", specs: "Line array speakers, wireless mics", image: "/lovable-uploads/48bb4ff8-4207-442a-b235-a568d6602a0d.png" },
    { name: "Stage Lighting", specs: "LED wash lights, spotlights, DMX control", image: "/lovable-uploads/08b7e79a-8b35-4a18-ad7b-d1670c2f7d3a.png" },
    { name: "Power Solutions", specs: "15KVA generators, distribution boards", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
  ];

  const projects = [
    {
      title: "Lagos Fashion Week - Ikeja City Mall",
      location: "Ikeja, Lagos",
      attendees: "2,000+",
      description: "Complete mall transformation featuring a 30ft runway, designer showcases, and food court integration.",
      image: "/lovable-uploads/c7514ba7-95f2-4e4f-a424-64267ae101c1.png",
      features: ["Fashion runway", "Food exhibitions", "VIP lounges", "Media coverage area"]
    },
    {
      title: "Food & Beverage Expo - Palms Mall",
      location: "Lekki, Lagos", 
      attendees: "1,500+",
      description: "Large-scale food expo with 40+ vendors, cooking demonstrations, and tasting areas.",
      image: "/lovable-uploads/708d6a16-163a-4b91-bcc4-a454e6cfebbb.png",
      features: ["Vendor booths", "Demo kitchens", "Tasting areas", "Live cooking shows"]
    },
    {
      title: "Tech Product Launch - Shoprite Mall",
      location: "Surulere, Lagos",
      attendees: "800+", 
      description: "Interactive product showcase with demonstration areas and customer experience zones.",
      image: "/lovable-uploads/16337fc2-3de9-42c8-81df-43ec37345763.png",
      features: ["Interactive displays", "Demo stations", "Customer lounges", "Product theaters"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/48bb4ff8-4207-442a-b235-a568d6602a0d.png')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Mall & Exhibition <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Event Setup</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform shopping malls and commercial spaces into world-class event venues for fashion shows, product exhibitions, and food & drink expos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.gle/C5oBMZyfViCovvGs7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 text-lg"
              >
                Get Free Quote
              </a>
              <button className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300 text-lg">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mall Event Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for transforming retail spaces into engaging event experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
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

      {/* Equipment Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Equipment</h2>
            <p className="text-xl text-gray-600">State-of-the-art technology for world-class events</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.specs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">Success stories from our mall event transformations</p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{project.attendees} attendees</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{project.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Mall Event?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            From concept to execution, we handle every detail of your mall event setup. Contact us for a custom quote tailored to your vision and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://forms.gle/C5oBMZyfViCovvGs7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300 text-lg"
            >
              Schedule Consultation
            </a>
            <a
              href="https://wa.me/2347025158265"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 text-lg"
            >
              WhatsApp: 07025158265
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
