
import { Globe } from "lucide-react";

export function Logo() {
  return (
    <a href="/" className="flex items-center space-x-3 group">
      {/* Globe Icon with Modern Styling */}
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          <Globe className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>
      
      {/* Company Name */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-blue-500 transition-all duration-300">
          PTV GLOBAL
        </h1>
        <p className="text-xs text-gray-500 -mt-1 font-medium tracking-wide">
          SERVICES
        </p>
      </div>
    </a>
  );
}
