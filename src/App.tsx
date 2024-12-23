import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ReNews from "./pages/ReNews";
import LeadEvaluator from "./pages/LeadEvaluator";
import CodeReviewer from "./pages/CodeReviewer";
import RapidOnboarding from "./pages/RapidOnboarding";
import AiForms from "./pages/AiForms";
import PostPal from "./pages/PostPal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/renews" element={<ReNews />} />
          <Route path="/lead-evaluator" element={<LeadEvaluator />} />
          <Route path="/code-reviewer" element={<CodeReviewer />} />
          <Route path="/rapid-onboarding" element={<RapidOnboarding />} />
          <Route path="/ai-forms" element={<AiForms />} />
          <Route path="/postpal" element={<PostPal />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;