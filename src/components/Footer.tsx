
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";

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

            <div className="mt-6 space-y-3">
              <a 
                href="https://wa.me/2347025158265" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
              >
                <span>WhatsApp Us</span>
              </a>
              <div className="mt-3">
                <InquiryForm className="w-full bg-blue-600 hover:bg-blue-700 border-0" />
              </div>
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
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-blue-100 text-sm">
              © {currentYear} PTV Global Services. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs text-blue-200">
              <span>Designed & Created by Uniford Foundation</span>
              <div className="flex items-center space-x-2">
                <a 
                  href="https://uncif.uniford.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline"
                >
                  UNCIF
                </a>
                <a 
                  href="https://web.whatsapp.com/send/?phone=7347099610&text=Hello%21+I+have+a+question.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-4 h-4 text-green-400 hover:text-green-300 transition-colors"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/legal" className="text-blue-100 hover:text-white text-sm transition-colors">
              Legal & Privacy
            </a>
            <a href="/legal" className="text-blue-100 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/legal" className="text-blue-100 hover:text-white text-sm transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
