
import { Tent, Sofa, Fan, Zap, Monitor, Music, Settings, Camera, Users, Star, Check } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function EquipmentRentalPage() {
  const categories = [
    {
      icon: Tent,
      title: "Tents & Canopies",
      description: "Weather-resistant structures for any event size",
      items: [
        { name: "Marquee Tents", capacity: "50-500 guests", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "Pop-up Canopies", capacity: "10-50 guests", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "Wedding Tents", capacity: "100-300 guests", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
      ]
    },
    {
      icon: Sofa,
      title: "Seating & Tables",
      description: "Comfortable seating solutions for every occasion",
      items: [
        { name: "Chiavari Chairs", capacity: "Gold/Silver finish", image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "Round Tables", capacity: "8-10 seater", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "VIP Lounge Sets", capacity: "4-6 person sets", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
      ]
    },
    {
      icon: Monitor,
      title: "Audio Visual",
      description: "High-quality displays and sound systems",
      items: [
        { name: "LED Video Walls", capacity: "P3.91 indoor panels", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "Projection Systems", capacity: "5000+ lumens", image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "Sound Systems", capacity: "Line array speakers", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
      ]
    },
    {
      icon: Zap,
      title: "Power & Climate",
      description: "Reliable power and climate control solutions",
      items: [
        { name: "Generators", capacity: "15KVA - 100KVA", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "Air Conditioners", capacity: "5HP mobile units", image: "https://images.unsplash.com/photo-1635948321059-de2ad7db523a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "Industrial Fans", capacity: "Standing fans", image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
      ]
    }
  ];

  const packages = [
    {
      name: "Basic Package",
      duration: "1 day event",
      features: [
        "Tent for 50 guests",
        "Chairs and tables",
        "Basic sound system",
        "Power generator",
        "Setup and breakdown"
      ],
      popular: false
    },
    {
      name: "Premium Package", 
      duration: "1 day event",
      features: [
        "Marquee for 150 guests",
        "Elegant furniture",
        "Professional AV system",
        "Stage lighting",
        "Climate control",
        "Full service team"
      ],
      popular: true
    },
    {
      name: "Luxury Package",
      duration: "1 day event",
      features: [
        "Premium tent for 300 guests",
        "VIP furniture and decor",
        "LED video walls",
        "Concert-grade sound",
        "Full lighting design",
        "Complete event management"
      ],
      popular: false
    }
  ];

  const services = [
    "Free site inspection and consultation",
    "Professional installation and setup",
    "24/7 technical support during events", 
    "Backup equipment available",
    "Complete breakdown and cleanup",
    "Flexible rental periods",
    "Volume discounts for multiple days",
    "Custom packages available"
  ];

  const handleWhatsAppClick = (itemName: string) => {
    const message = `Hi! I'm interested in ${itemName} for my event. Can you provide more details and pricing?`;
    const whatsappUrl = `https://wa.me/2347025158265?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Equipment <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Rental</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional-grade event equipment with complete setup and support services. From intimate gatherings to large-scale productions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 text-lg">
                Browse Equipment
              </button>
              <button 
                onClick={() => handleWhatsAppClick("Equipment Rental Services")}
                className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300 text-lg"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Equipment Categories</h2>
            <p className="text-xl text-gray-600">Professional equipment for every event need</p>
          </div>

          <div className="space-y-20">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mr-6">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-xl text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden group">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <button 
                            onClick={() => handleWhatsAppClick(item.name)}
                            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg"
                          >
                            <MessageCircle className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl text-gray-900">{item.name}</CardTitle>
                        <CardDescription className="text-gray-600">{item.capacity}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <button 
                          onClick={() => handleWhatsAppClick(item.name)}
                          className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Get Quote
                        </button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Package Deals</h2>
            <p className="text-xl text-gray-600">Complete event packages with significant savings</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative h-full transition-all duration-300 border-0 shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-pink-500 shadow-xl scale-105' : 'hover:shadow-xl'}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <button 
                    onClick={() => handleWhatsAppClick(pkg.name)}
                    className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </button>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-gray-900 mb-2">{pkg.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-lg text-gray-600">Contact for pricing</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => handleWhatsAppClick(pkg.name)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${pkg.popular ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600' : 'border-2 border-pink-500 text-pink-600 hover:bg-pink-50'}`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Select Package
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-xl text-gray-600">Complete service package with every rental</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase Video Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See Our Equipment in Action</h2>
            <p className="text-xl text-gray-600">Professional setups from recent events</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Equipment setup showcase"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-bold text-lg mb-2">Professional LED Setup</h3>
                <p className="text-sm opacity-90">Corporate event with full AV integration</p>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Fashion show equipment"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-bold text-lg mb-2">Fashion Show Stage</h3>
                <p className="text-sm opacity-90">Complete runway with professional lighting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Rent Equipment?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Get professional-grade equipment with complete setup and support. Contact us for a custom quote based on your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleWhatsAppClick("Equipment Rental Services")}
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300 text-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Get Equipment Quote
            </button>
            <button 
              onClick={() => handleWhatsAppClick("Equipment Rental Services")}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 text-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Call: 07025158265
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
