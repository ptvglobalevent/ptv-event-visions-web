
import { Users, Award, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional event planners with years of experience",
      image: "/lovable-uploads/708d6a16-163a-4b91-bcc4-a454e6cfebbb.png"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Top-notch equipment and exceptional service standards",
      image: "/lovable-uploads/3cdd6355-9cbe-4cb0-8aef-251e3fac4472.png"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Always on schedule with meticulous planning",
      image: "/lovable-uploads/48bb4ff8-4207-442a-b235-a568d6602a0d.png"
    },
    {
      icon: CheckCircle,
      title: "Complete Solutions",
      description: "End-to-end event management services",
      image: "/lovable-uploads/16337fc2-3de9-42c8-81df-43ec37345763.png"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">PTV Global Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for extraordinary events across Nigeria, delivering excellence in every detail
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Transforming Visions into Reality
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At PTV Global Services, we specialize in creating unforgettable experiences through 
                professional event planning, premium equipment rental, and comprehensive venue management. 
                From intimate gatherings to large-scale productions, we bring your vision to life with 
                precision and creativity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">5+ Years of Excellence in Event Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">500+ Successful Events Delivered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">10,000+ Happy Clients Nationwide</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/c7514ba7-95f2-4e4f-a424-64267ae101c1.png" 
                alt="PTV Global Services Event Setup"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a passion for creating memorable experiences, PTV Global Services has grown 
                from a small event planning team to one of Nigeria's most trusted event management companies. 
                Our journey began with a simple belief: every event, no matter the size, deserves to be extraordinary.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to serve clients across Lagos, Abuja, Port Harcourt, and beyond, 
                bringing world-class event solutions to every corner of Nigeria. Our commitment to 
                excellence, attention to detail, and innovative approach sets us apart in the industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/08b7e79a-8b35-4a18-ad7b-d1670c2f7d3a.png" 
                alt="Event Setup"
                className="w-full h-32 object-cover rounded-xl"
              />
              <img 
                src="/lovable-uploads/16337fc2-3de9-42c8-81df-43ec37345763.png" 
                alt="Marquee Setup"
                className="w-full h-32 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
