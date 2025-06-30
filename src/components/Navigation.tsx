
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              PTV GLOBAL SERVICES
            </h1>
            <p className="text-sm text-rose-500 -mt-1">Your Event, Our Priority</p>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </button>
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
            <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 w-full text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 w-full text-left">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 w-full text-left">
              Contact
            </button>
            <div className="flex items-center space-x-2 px-3 py-2">
              <Phone className="h-4 w-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-600">07025158265</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
