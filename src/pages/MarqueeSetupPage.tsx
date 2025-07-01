
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Phone, MessageCircle, Calculator, Check, Wind, Building2, Lightbulb, Users, Volume2, Shield } from "lucide-react";

export default function MarqueeSetupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 text-green-600 mb-4">
                <Check className="w-6 h-6" />
                <span className="font-semibold">Marquee Event Setup with Full Air Conditioning</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                🎪 Premium Marquee Experience, 
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Powered by Comfort
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                At PTV Global Services, we offer fully air-conditioned marquee setups designed to provide elegance, 
                comfort, and functionality for any event—whether it's a corporate gala, wedding, conference, concert, 
                or private celebration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/2347025158265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Request a Quote
                </a>
                <a
                  href="tel:07025158265"
                  className="inline-flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Premium Marquee Setup"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              📦 What's Included in Our Air-Conditioned Marquee Package
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Marquee Structure */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-pink-100">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-pink-100 rounded-lg">
                    <Building2 className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">🏗 Marquee Tent Structure</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Custom sizes: 20m x 30m, 25m x 40m, 30m x 60m+</li>
                  <li>• High-grade aluminum frame</li>
                  <li>• Waterproof, UV-resistant PVC covers</li>
                  <li>• White or transparent roof options</li>
                  <li>• Draped ceiling for elegant finish</li>
                  <li>• Hard or carpeted flooring with stage options</li>
                </ul>
                <div className="mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Marquee Structure"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Air Conditioning */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Wind className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">🌬 Full Air Conditioning Setup</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Industrial-grade 5HP mobile AC units</li>
                  <li>• Strategic airflow layout for even cooling</li>
                  <li>• Professional ducting & partitioning</li>
                  <li>• Noise control systems</li>
                  <li>• Generator support if needed</li>
                </ul>
                <div className="mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Air Conditioning Setup"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Lighting & Electrical */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-yellow-100">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">💡 Lighting & Electrical</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ambient & functional lighting</li>
                  <li>• Chandeliers, LED uplights, floodlights</li>
                  <li>• Dedicated power system</li>
                  <li>• Backup generator support</li>
                  <li>• Professional cable management</li>
                </ul>
                <div className="mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Event Lighting"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Furniture & Interior */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">🪑 Furniture & Interior</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Banquet chairs and tables</li>
                  <li>• Lounge seating options</li>
                  <li>• Stage, backdrop, podium setup</li>
                  <li>• Red carpet installation</li>
                  <li>• Synthetic rugs & floral decor</li>
                  <li>• Branded drapes</li>
                </ul>
                <div className="mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Event Furniture"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Sound & Visuals */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Volume2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">🔊 Sound & Visuals</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Full sound system</li>
                  <li>• Wireless microphones</li>
                  <li>• LED screen or projector setup</li>
                  <li>• DJ booth or live band space</li>
                  <li>• Professional audio mixing</li>
                </ul>
                <div className="mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Sound System"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Safety & Amenities */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-red-100">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-100 rounded-lg">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">🛡 Safety & Amenities</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Emergency exits clearly marked</li>
                  <li>• Fire extinguishers & signage</li>
                  <li>• Trained staff onsite</li>
                  <li>• Event manager coordination</li>
                  <li>• Mobile toilets (VIP & standard)</li>
                </ul>
                <div className="mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Safety Equipment"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              📍 Ideal For
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Corporate Events & AGMs",
              "Weddings & Receptions", 
              "Fashion Shows",
              "Religious Conferences",
              "Product Launches & Brand Activations",
              "Government Ceremonies & Summits"
            ].map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">{event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              📷 Gallery Preview
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1519167758481-83f29c18da19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`Marquee Setup ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              🎯 Why Choose PTV Global Services?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Years of Experience",
                description: "Delivering stress-free event solutions with proven expertise"
              },
              {
                title: "Modern Equipment",
                description: "State-of-the-art equipment and skilled setup team"
              },
              {
                title: "Customizable Packages",
                description: "Tailored to fit your event size, style, and budget"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            📞 Ready to Book?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Let us transform your event into a premium experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2347025158265"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Request a Quote
            </a>
            <a
              href="tel:07025158265"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-pink-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call Now
            </a>
            <a
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <Calculator className="w-6 h-6 mr-2" />
              See Pricing Options
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
