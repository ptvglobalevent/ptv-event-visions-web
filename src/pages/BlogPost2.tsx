
import { Calendar, MapPin, Users, Star, ArrowLeft, Share2, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const BlogPost2 = () => {
  const tips = [
    {
      title: "Understanding Mall Regulations",
      description: "Every shopping mall has specific guidelines for events. Research fire safety codes, capacity limits, and operational hours.",
      icon: "📋"
    },
    {
      title: "Power & Technical Requirements",
      description: "Malls may have limited power access. Plan for generators and ensure your technical setup doesn't interfere with mall operations.",
      icon: "⚡"
    },
    {
      title: "Crowd Flow Management", 
      description: "Design your layout to maintain natural shopper movement while creating defined event spaces.",
      icon: "👥"
    },
    {
      title: "Vendor Coordination",
      description: "Establish clear setup and breakdown schedules. Coordinate with mall security for after-hours access if needed.",
      icon: "🤝"
    },
    {
      title: "Insurance & Liability",
      description: "Secure comprehensive event insurance and understand liability coverage for both your equipment and attendee safety.",
      icon: "🛡️"
    }
  ];

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
              <span>November 2024</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Expert Guide</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>Essential Tips</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            5 Things to Know Before Hosting an Event in a Shopping Mall
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Essential tips and considerations for successful mall event planning and execution, based on our extensive experience in transforming retail spaces.
          </p>
          
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-pink-200">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600">Expert insights</span>
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
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Mall event planning overview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm opacity-90">Professional mall event setup requires careful planning and expertise</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Planning an event in a shopping mall presents unique opportunities and challenges. With the right preparation and expertise, mall events can attract massive audiences and create unforgettable experiences. Here are the five most critical things you need to know.
            </p>

            {/* Tips Section */}
            <div className="space-y-12">
              {tips.map((tip, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">{tip.icon}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {index + 1}. {tip.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        {tip.description}
                      </p>
                      
                      {index === 0 && (
                        <div className="bg-pink-50 rounded-xl p-6 mb-6">
                          <h4 className="font-bold text-gray-900 mb-3">Key Documents to Prepare:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {[
                              "Event insurance certificate",
                              "Fire safety compliance",
                              "Equipment safety certifications", 
                              "Crowd management plan"
                            ].map((doc, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-pink-500" />
                                <span className="text-gray-700">{doc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <Card className="border-0 shadow-md bg-gradient-to-r from-pink-50 to-rose-50">
                          <CardContent className="p-6">
                            <h4 className="font-bold text-gray-900 mb-3">Pro Tip:</h4>
                            <p className="text-gray-700">
                              Always bring backup power solutions. We recommend having 20% more power capacity than your calculated needs to handle unexpected requirements.
                            </p>
                          </CardContent>
                        </Card>
                      )}
                      
                      {index === 2 && (
                        <div className="grid md:grid-cols-2 gap-6">
                          <img 
                            src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                            alt="Crowd flow management"
                            className="rounded-xl h-48 w-full object-cover"
                          />
                          <img 
                            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                            alt="Event space design"
                            className="rounded-xl h-48 w-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {index < tips.length - 1 && (
                    <div className="absolute left-8 mt-6 w-0.5 h-12 bg-gradient-to-b from-pink-300 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Insights */}
            <div className="bg-gray-900 rounded-2xl p-8 mt-16 text-white">
              <h2 className="text-3xl font-bold mb-6">Bonus Insight: Working with Mall Management</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Building a strong relationship with mall management is crucial for long-term success. Start conversations early, be transparent about your plans, and always deliver on your promises. This relationship will be invaluable for future events.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">🤝</div>
                  <h4 className="font-bold mb-2">Build Trust</h4>
                  <p className="text-gray-400 text-sm">Establish credibility through professional communication and reliable execution</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">📊</div>
                  <h4 className="font-bold mb-2">Share Results</h4>
                  <p className="text-gray-400 text-sm">Provide post-event reports showing increased foot traffic and positive impact</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="font-bold mb-2">Plan Ahead</h4>
                  <p className="text-gray-400 text-sm">Book future dates early and maintain regular communication</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-center text-white mt-12">
            <h3 className="text-2xl font-bold mb-4">Need Expert Mall Event Planning?</h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              Let our experienced team handle all the complexities of mall event planning. We've successfully managed over 50 mall events across Nigeria.
            </p>
            <Link
              to="/"
              className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost2;
