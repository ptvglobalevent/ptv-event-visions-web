import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "@/components/InquiryForm";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                PTV GLOBAL SERVICES
              </h1>
              <p className="text-sm text-rose-500 -mt-1">Your Event, Our Priority</p>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </button>
              
              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                <button className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-pink-100 py-2 z-50">
                    <a 
                      href="/services" 
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                    >
                      All Services
                    </a>
                    <a 
                      href="/equipment-rental" 
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                    >
                      Equipment Rental
                    </a>
                    <a 
                      href="/services/mall-events" 
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors font-medium"
                    >
                      Mall Events (Fashion + Food Expos)
                    </a>
                    <a 
                      href="/marquee-setup" 
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors font-medium"
                    >
                      Marquee Event Setup
                    </a>
                  </div>
                )}
              </div>

              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </button>
              
              <InquiryForm className="px-4 py-2 text-sm" />
              
              <div className="flex items-center space-x-2 ml-4">
                <Phone className="h-4 w-4 text-pink-600" />
                <span className="text-sm font-medium text-pink-600">07025158265</span>
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-pink-100">
            <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 w-full text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 w-full text-left">
              About
            </button>
            <div className="px-3 py-2">
              <div className="text-base font-medium text-gray-700 mb-2">Services</div>
              <div className="pl-4 space-y-1">
                <a href="/services" className="block px-3 py-1 text-sm text-gray-600 hover:text-pink-600 w-full text-left">
                  All Services
                </a>
                <a href="/equipment-rental" className="block px-3 py-1 text-sm text-gray-600 hover:text-pink-600 w-full text-left">
                  Equipment Rental
                </a>
                <a href="/services/mall-events" className="block px-3 py-1 text-sm text-gray-600 hover:text-pink-600 w-full text-left font-medium">
                  Mall Events (Fashion + Food Expos)
                </a>
                <a href="/marquee-setup" className="block px-3 py-1 text-sm text-gray-600 hover:text-pink-600 w-full text-left font-medium">
                  Marquee Event Setup
                </a>
              </div>
            </div>
            <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 w-full text-left">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 w-full text-left">
              Contact
            </button>
            <div className="px-3 py-2">
              <InquiryForm className="w-full" />
            </div>
            <div className="flex items-center space-x-2 px-3 py-2">
              <Phone className="h-4 w-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-600">07025158265</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Support Buttons */}
      <div className="floating-support bottom-20 left-4">
        <a 
          href="https://wa.me/2347025158265" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
          </svg>
        </a>
      </div>

      <div className="floating-support bottom-20 right-4">
        <a 
          href="tel:07025158265"
          className="flex items-center justify-center w-14 h-14 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300"
        >
          <Phone className="w-8 h-8" />
        </a>
      </div>
      
      <InquiryForm variant="floating" />
    </nav>
  );
}
