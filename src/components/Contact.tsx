
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start planning your dream event? Contact us today for a free consultation and quote
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-300 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:07025158265" className="text-blue-100 hover:text-white transition-colors">
                      07025158265
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-300 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/2347025158265" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      07025158265
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-purple-300 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:ptvglobalservices@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                      ptvglobalservices@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-pink-300 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-blue-100">Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-yellow-300 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-blue-100">Mon - Sun: 8:00 AM - 8:00 PM</p>
                    <p className="text-blue-100 text-sm">24/7 Emergency Support</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold mb-2">Quick Response Guarantee</h4>
                <p className="text-blue-100 text-sm">
                  We respond to all inquiries within 2 hours during business hours and within 24 hours on weekends.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your event. Include date, location, expected guests, and services needed..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12 text-lg font-semibold rounded-xl"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• We'll review your requirements within 2 hours</li>
                  <li>• Our team will call you to discuss details</li>
                  <li>• You'll receive a detailed quote within 24 hours</li>
                  <li>• We'll schedule a consultation if needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="font-bold text-lg text-gray-900 mb-3">How early should I book?</h4>
              <p className="text-gray-700">
                We recommend booking at least 2-4 weeks in advance for optimal availability. However, we also accommodate last-minute requests when possible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Do you handle logistics and setup?</h4>
              <p className="text-gray-700">
                Yes! Our team handles complete logistics including delivery, setup, operation during the event, and breakdown afterward.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Is power supply included with rentals?</h4>
              <p className="text-gray-700">
                We provide reliable generators with all our equipment rentals to ensure uninterrupted power supply throughout your event.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Do you provide services outside Lagos?</h4>
              <p className="text-gray-700">
                While we're based in Lagos, we do travel to neighboring states for special events. Contact us to discuss your location and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
