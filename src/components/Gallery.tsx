
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Elegant Wedding Reception",
      category: "Wedding"
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Corporate Event Setup",
      category: "Corporate"
    },
    {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Fashion Show Runway Setup",
      category: "Mall Event"
    },
    {
      src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Mall Exhibition Layout",
      category: "Mall Event"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Food & Drink Expo Setup",
      category: "Mall Event"
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Outdoor Event Tents",
      category: "Outdoor"
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Professional Equipment Setup",
      category: "Equipment"
    },
    {
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Festival Lighting & Stage",
      category: "Festival"
    },
    {
      src: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Government Function",
      category: "Government"
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Sound & Audio Setup",
      category: "Audio"
    },
    {
      src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Climate Control Setup",
      category: "Equipment"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Event Flooring",
      category: "Decoration"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the magic we create for weddings, corporate events, festivals, mall exhibitions, and special occasions
          </p>
        </div>

        {/* Featured Mall Events Section */}
        <div className="mb-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured <span className="text-pink-600">Mall Event Setups</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {galleryImages.filter(img => img.category === "Mall Event").map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(galleryImages.findIndex(img => img.src === image.src))}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{image.title}</h3>
                    <p className="text-sm text-pink-100">{image.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {image.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-pink-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-pink-600 font-medium">Sample layouts for mall events - contact us for your custom setup!</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.filter(img => img.category !== "Mall Event").map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setSelectedImage(galleryImages.findIndex(img => img.src === image.src))}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{image.title}</h3>
                  <p className="text-sm text-pink-100">{image.category}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-pink-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-pink-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            <div className="max-w-4xl max-h-full">
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-bold">{galleryImages[selectedImage].title}</h3>
                <p className="text-pink-200">{galleryImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 relative bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 md:p-12 text-white text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Magic?</h3>
            <p className="text-xl text-pink-100 mb-8">
              Let us bring your vision to life with our professional event planning and premium equipment rental services.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300"
            >
              Start Planning Your Event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
