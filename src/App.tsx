
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Brands from "./pages/Brands";
import Creators from "./pages/Creators";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CreatorCampaign from "./pages/CreatorCampaign";
import CreatorDashboard from "./pages/CreatorDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/about" element={<About />} />
          <Route path="/creator-campaign" element={<CreatorCampaign />} />
          <Route path="/creator-dashboard" element={<CreatorDashboard />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/terms" element={<NotFound />} />
          <Route path="/privacy" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
