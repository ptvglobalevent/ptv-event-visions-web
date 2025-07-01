
import { Calendar, MapPin, Users, Star, ArrowLeft, Share2, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const BlogPost1 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>December 2024</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Ikeja City Mall, Lagos</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>2,000+ attendees</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We Set Up a Full Mall for Fashion & Food Exhibitions
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive case study of transforming Ikeja City Mall into a world-class fashion runway and food expo venue, showcasing our expertise in large-scale mall event coordination.
          </p>
          
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-pink-200">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600">Rated 5/5 by attendees</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-pink-600 transition-colors">
                <Heart className="h-5 w-5" />
                <span>Save</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-pink-600 transition-colors">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Fashion show setup at Ikeja City Mall"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm opacity-90">Main runway setup with professional lighting and sound systems</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              When Lagos Fashion Week approached us to transform Ikeja City Mall into a premier fashion and food exhibition space, we knew this would be our most ambitious project yet. The challenge was to create a world-class runway experience while maintaining the mall's daily operations and ensuring seamless vendor coordination.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Food exhibition setup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Food & Beverage Zone</h3>
                  <p className="text-gray-600">Over 40 vendor booths with custom layouts and professional kitchen setups</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Fashion exhibition area"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Fashion Exhibition Area</h3>
                  <p className="text-gray-600">Designer showcases with premium lighting and display systems</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We developed a comprehensive 3-phase approach that would allow us to set up the entire mall while minimizing disruption to regular shoppers and ensuring maximum impact for the event.
            </p>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Phase 1: Planning & Design</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Site Survey</h4>
                  <p className="text-gray-600 text-sm">Detailed mall layout analysis and capacity planning</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Design Creation</h4>
                  <p className="text-gray-600 text-sm">3D runway design and vendor booth layouts</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Approval Process</h4>
                  <p className="text-gray-600 text-sm">Mall management and safety authority clearances</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Equipment & Setup</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              The scale of this project required our entire equipment inventory and coordination of over 20 team members working in shifts to complete the setup within our 48-hour window.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { item: "LED Screens", quantity: "12 units", size: "65-inch displays" },
                { item: "Sound Systems", quantity: "8 zones", size: "Professional grade" },
                { item: "Lighting Rigs", quantity: "24 units", size: "Runway standard" },
                { item: "Power Generators", quantity: "4 units", size: "15KVA each" }
              ].map((equipment, index) => (
                <div key={index} className="bg-white border border-pink-200 rounded-xl p-6 text-center">
                  <h4 className="font-bold text-gray-900 mb-2">{equipment.item}</h4>
                  <p className="text-pink-600 font-semibold">{equipment.quantity}</p>
                  <p className="text-gray-600 text-sm">{equipment.size}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              The event exceeded all expectations, with over 2,000 attendees, 40+ vendors, and coverage from major media outlets. The mall reported a 300% increase in foot traffic during the event weekend.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-center text-white mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              Whether it's a mall, exhibition center, or open space, we have the expertise and equipment to create unforgettable experiences.
            </p>
            <Link
              to="/"
              className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost1;
