
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function EventCategories() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      name: "Weddings",
      description: "Dream weddings with perfect planning",
      image: "/lovable-uploads/08b7e79a-8b35-4a18-ad7b-d1670c2f7d3a.png",
      events: [
        {
          title: "Garden Destination Weddings",
          image: "/lovable-uploads/c7514ba7-95f2-4e4f-a424-64267ae101c1.png"
        },
        {
          title: "Luxury Beach Ceremonies", 
          image: "/lovable-uploads/16337fc2-3de9-42c8-81df-43ec37345763.png"
        },
        {
          title: "Traditional & Cultural Weddings",
          image: "/lovable-uploads/08b7e79a-8b35-4a18-ad7b-d1670c2f7d3a.png"
        }
      ]
    },
    {
      name: "Corporate",
      description: "Professional events that inspire",
      image: "/lovable-uploads/708d6a16-163a-4b91-bcc4-a454e6cfebbb.png",
      events: [
        {
          title: "Conference & Conventions",
          image: "/lovable-uploads/48bb4ff8-4207-442a-b235-a568d6602a0d.png"
        },
        {
          title: "Product Launch Events",
          image: "/lovable-uploads/3cdd6355-9cbe-4cb0-8aef-251e3fac4472.png"
        },
        {
          title: "Awards & Gala Dinners",
          image: "/lovable-uploads/708d6a16-163a-4b91-bcc4-a454e6cfebbb.png"
        }
      ]
    },
    {
      name: "Social Events",
      description: "Celebrate life's special moments",
      image: "/lovable-uploads/3cdd6355-9cbe-4cb0-8aef-251e3fac4472.png",
      events: [
        {
          title: "Birthday Celebrations",
          image: "/lovable-uploads/c7514ba7-95f2-4e4f-a424-64267ae101c1.png"
        },
        {
          title: "Anniversary Parties",
          image: "/lovable-uploads/08b7e79a-8b35-4a18-ad7b-d1670c2f7d3a.png"
        },
        {
          title: "Family Reunions",
          image: "/lovable-uploads/16337fc2-3de9-42c8-81df-43ec37345763.png"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Event <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate celebrations to grand productions, we specialize in every type of event
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              onClick={() => setActiveCategory(index)}
              variant={activeCategory === index ? "default" : "outline"}
              className={`px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 ${
                activeCategory === index 
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg" 
                  : "border-pink-200 text-pink-600 hover:bg-pink-50"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {categories[activeCategory].name}
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                {categories[activeCategory].description}
              </p>
            </div>

            <div className="space-y-4">
              {categories[activeCategory].events.map((event, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-xl p-4 hover:bg-white/80 transition-all duration-300">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{event.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Plan Your {categories[activeCategory].name} Event
            </Button>
          </div>

          <div className="relative">
            <img 
              src={categories[activeCategory].image} 
              alt={categories[activeCategory].name}
              className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
