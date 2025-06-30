
import { Phone, Mail, MapPin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">PTV GLOBAL SERVICES</h3>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Your premier partner for exceptional event experiences in Lagos and beyond. 
              We transform visions into unforgettable realities with professional event planning 
              and premium equipment rental services.
            </p>
            <div className="flex items-center space-x-2 text-blue-100">
              <Heart className="h-4 w-4 text-red-400" />
              <span className="text-sm">Your Event, Our Priority</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('gallery');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-300" />
                <a href="tel:07025158265" className="text-blue-100 hover:text-white transition-colors">
                  07025158265
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-purple-300" />
                <a href="mailto:ptvglobalservices@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                  ptvglobalservices@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-pink-300" />
                <span className="text-blue-100">Lagos, Nigeria</span>
              </div>
            </div>

            <div className="mt-6">
              <a 
                href="https://wa.me/2347025158265" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="mt-12 pt-8 border-t border-blue-700">
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h5 className="font-medium text-blue-200 mb-2">Event Planning</h5>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>• Complete event coordination</li>
                <li>• Vendor management</li>
                <li>• Timeline planning</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-blue-200 mb-2">Equipment Rental</h5>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>• Tents & Marquees</li>
                <li>• Sound & Lighting</li>
                <li>• Generators & AC units</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-blue-200 mb-2">Event Types</h5>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>• Weddings</li>
                <li>• Corporate events</li>
                <li>• Government functions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            © {currentYear} PTV Global Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors">
              Rental Agreement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
