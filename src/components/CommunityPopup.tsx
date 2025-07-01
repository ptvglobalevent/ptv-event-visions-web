
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Instagram, X } from "lucide-react";

export function CommunityPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Join Our Community!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <p className="text-center text-gray-600">
            Connect with us and stay updated on our latest events and services
          </p>
          
          <div className="space-y-3">
            <a
              href="https://wa.me/2347025158265"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
            
            <a
              href="https://discord.gg/ptvglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-4 rounded-lg transition-colors"
            >
              <Users className="w-5 h-5" />
              <span>Join Discord Community</span>
            </a>
            
            <a
              href="https://instagram.com/ptvglobalservices"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 px-4 rounded-lg transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow on Instagram</span>
            </a>
          </div>
          
          <Button
            onClick={() => setIsOpen(false)}
            variant="outline"
            className="w-full mt-4"
          >
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
