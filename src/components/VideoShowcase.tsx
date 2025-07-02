
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import { InquiryForm } from "@/components/InquiryForm";

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See Our <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Work in Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the magic of our event setups through our showcase videos
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-sm mx-auto">
            {/* Video Container with 9:16 aspect ratio */}
            <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '9/16' }}>
              {/* Placeholder for video - replace src with actual video URL */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={isMuted}
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              >
                {/* Add your video source here */}
                <source src="#" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300"
              >
                {!isPlaying && (
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-pink-600 ml-1" />
                  </div>
                )}
              </button>

              {/* Sound Toggle */}
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              {/* Instagram-style gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Caption area */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">✨ Premium Event Setup</p>
                <p className="text-xs text-white/80 mt-1">#PTVGlobalServices #EventPlanning</p>
              </div>
            </div>

            {/* Call to action below video */}
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Ready to create your perfect event?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/2347025158265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Get Started Today
                </a>
                <InquiryForm className="px-6 py-3 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
