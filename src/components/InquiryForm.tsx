
import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InquiryFormProps {
  variant?: 'button' | 'card' | 'floating';
  className?: string;
}

export function InquiryForm({ variant = 'button', className = '' }: InquiryFormProps) {
  const handleInquiryClick = () => {
    window.open('https://forms.gle/C5oBMZyfViCovvGs7', '_blank', 'noopener,noreferrer');
  };

  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-32 right-4 z-50 ${className}`}>
        <Button
          onClick={handleInquiryClick}
          className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105"
          title="Send Inquiry"
        >
          <FileText className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Send Inquiry</h3>
          <p className="text-gray-600 mb-4">Get a detailed quote for your event requirements</p>
          <Button 
            onClick={handleInquiryClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Fill Inquiry Form
          </Button>
        </div>
      </div>
    );
  }

  // Default button variant
  return (
    <Button
      onClick={handleInquiryClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 ${className}`}
    >
      <FileText className="w-4 w-4 mr-2" />
      Send Inquiry
    </Button>
  );
}
