
import { Target, Eye, Heart, Award, Users, Clock } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PTV Global Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your premier partner for exceptional event experiences in Lagos and beyond
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              PTV Global Services is a Lagos-based event solutions company delivering excellence in event planning, 
              event coordination, and premium equipment rental. We transform your vision into unforgettable realities 
              with our comprehensive range of services and unwavering commitment to quality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From intimate gatherings to grand celebrations, corporate events to weddings, we bring professionalism, 
              creativity, and attention to detail to every project we undertake.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Event planning team at work"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Successful Events</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h4>
            <p className="text-gray-700">
              To provide reliable, stylish, and seamless event solutions that turn visions into memorable realities 
              through exceptional service and attention to detail.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h4>
            <p className="text-gray-700">
              To be the go-to event service provider across Nigeria and beyond, known for innovation, 
              reliability, and creating extraordinary experiences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h4>
            <p className="text-gray-700">
              Professionalism, Reliability, Creativity, Excellence, and Customer-Centricity guide every 
              decision we make and every service we deliver.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PTV Global Services?</h3>
            <p className="text-xl text-blue-100">Experience the difference of working with Lagos' premier event specialists</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Award-Winning Service</h4>
              <p className="text-blue-100">Recognized for excellence in event management and customer satisfaction</p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Expert Team</h4>
              <p className="text-blue-100">Skilled professionals with years of experience in event planning and coordination</p>
            </div>
            
            <div className="text-center">
              <Clock className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
              <p className="text-blue-100">Round-the-clock assistance to ensure your event runs smoothly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
