
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Mrs. Adebayo",
      role: "Wedding Client",
      content: "PTV Global Services made our wedding absolutely perfect! From the planning to execution, every detail was handled with professionalism and care. The equipment was top-notch and the team was incredible.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Chief Johnson",
      role: "Corporate Event Organizer",
      content: "Outstanding service! They transformed our corporate event into a memorable experience. The sound system was crystal clear, and the lighting created the perfect ambiance. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Pastor Williams",
      role: "Church Event Coordinator",
      content: "We've used PTV Global Services for multiple church events, and they never disappoint. Their generators are reliable, and their team is always punctual and professional. God bless them!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients across Lagos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <Quote className="h-8 w-8 text-blue-500 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Join Our Happy Clients</h3>
          <p className="text-xl text-blue-100 mb-8">
            Experience the difference of working with Lagos' most trusted event planning company
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">4.9/5</div>
              <div className="text-sm text-blue-100">Average Rating</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-blue-400"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">500+</div>
              <div className="text-sm text-blue-100">Happy Clients</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-blue-400"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">100%</div>
              <div className="text-sm text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
