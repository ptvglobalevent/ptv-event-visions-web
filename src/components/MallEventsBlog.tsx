
import { Calendar, MapPin, Users, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function MallEventsBlog() {
  const caseStudies = [
    {
      title: "How We Set Up a Full Mall for Fashion & Food Exhibitions",
      excerpt: "A comprehensive case study of transforming Ikeja City Mall into a world-class fashion runway and food expo venue.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "December 2024",
      location: "Ikeja City Mall, Lagos",
      attendees: "2,000+",
      rating: 5
    },
    {
      title: "5 Things to Know Before Hosting an Event in a Shopping Mall",
      excerpt: "Essential tips and considerations for successful mall event planning and execution.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "November 2024",
      location: "Various Locations",
      attendees: "Guide",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mall Events <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real projects and insights from our mall event planning expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{study.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{study.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(study.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gray-900 group-hover:text-pink-600 transition-colors">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {study.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-pink-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-medium">{study.attendees} attendees</span>
                  </div>
                  <button className="text-pink-600 hover:text-pink-700 font-medium text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Planning Your Own Mall Event?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get expert insights and a custom quote for your mall event setup. Our team has the experience and equipment to make your vision a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
            >
              Get Free Consultation
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('gallery');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-pink-500 text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300"
            >
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
