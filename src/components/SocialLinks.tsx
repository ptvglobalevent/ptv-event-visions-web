
import { Phone, Mail, MapPin, MessageCircle, Instagram, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialLinks() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start planning your dream event? Connect with us through any of these channels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* WhatsApp */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Quick response guaranteed</p>
            <a
              href="https://wa.me/2347025158265"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-green-500 hover:bg-green-600">
                Chat Now
              </Button>
            </a>
          </div>

          {/* Google Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Google Form</h3>
            <p className="text-gray-600 mb-4">Detailed event planning form</p>
            <a
              href="https://forms.google.com/ptvglobal-events"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                Fill Form
              </Button>
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instagram</h3>
            <p className="text-gray-600 mb-4">See our latest work</p>
            <a
              href="https://instagram.com/ptvglobalservices"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                Follow Us
              </Button>
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Contact Information</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 text-blue-300 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Phone</h4>
              <a href="tel:07025158265" className="text-blue-100 hover:text-white transition-colors">
                07025158265
              </a>
            </div>
            
            <div className="text-center">
              <Mail className="h-8 w-8 text-purple-300 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email</h4>
              <a href="mailto:ptvglobalservices@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                ptvglobalservices@gmail.com
              </a>
            </div>
            
            <div className="text-center">
              <MapPin className="h-8 w-8 text-pink-300 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-blue-100">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
