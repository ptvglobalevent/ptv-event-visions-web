
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import MallEventsPage from "./pages/MallEventsPage";
import ServicesPage from "./pages/ServicesPage";
import EquipmentRentalPage from "./pages/EquipmentRentalPage";
import MarqueeSetupPage from "./pages/MarqueeSetupPage";
import LegalPage from "./pages/LegalPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/mall-fashion-food-exhibition-setup" element={<BlogPost1 />} />
          <Route path="/blog/5-things-mall-event-planning" element={<BlogPost2 />} />
          <Route path="/services/mall-events" element={<MallEventsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/equipment-rental" element={<EquipmentRentalPage />} />
          <Route path="/marquee-setup" element={<MarqueeSetupPage />} />
          <Route path="/legal" element={<LegalPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
