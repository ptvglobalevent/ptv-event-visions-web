
import { MessageCircle, ExternalLink, Users, Instagram } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";

export function SocialLinks() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Connect with us through your preferred platform
        </p>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* WhatsApp */}
          <a
            href="https://wa.me/2347025158265"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-green-500 transition-colors">
              <MessageCircle className="w-8 h-8 text-green-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Chat</h3>
            <p className="text-gray-600 mb-4">Get instant responses to your event planning questions</p>
            <span className="text-green-600 font-semibold">Start Chat →</span>
          </a>

          {/* WhatsApp Community */}
          <a
            href="https://chat.whatsapp.com/CVpyRKXFwE88j5FaFfVk7Q"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
              <Users className="w-8 h-8 text-indigo-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Join Community</h3>
            <p className="text-gray-600 mb-4">Connect with other event planners and get updates</p>
            <span className="text-indigo-600 font-semibold">Join Now →</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ptv_global_services_?igsh=NDBwZjYxbjhmbXh6&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-pink-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 transition-all">
              <Instagram className="w-8 h-8 text-pink-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
            <p className="text-gray-600 mb-4">See our latest events and behind-the-scenes content</p>
            <span className="text-pink-600 font-semibold">Follow →</span>
          </a>

          {/* Inquiry Form */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <InquiryForm variant="card" />
          </div>
        </div>

        <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with Us</h3>
          <p className="text-gray-600 mb-6">Ready to plan your event? Choose your preferred way to get in touch:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2347025158265"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Chat
            </a>
            <InquiryForm className="px-8 py-3 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
