
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import ChatGptVsClaude from "./pages/blog/ChatGptVsClaude";
import AiImageGeneration from "./pages/blog/AiImageGeneration";
import AdvancedPromptingTechniques from "./pages/blog/AdvancedPromptingTechniques";
import PromptEngineeringGuide from "./pages/blog/PromptEngineeringGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/chatgpt-vs-claude" element={<ChatGptVsClaude />} />
          <Route path="/blog/ai-image-generation" element={<AiImageGeneration />} />
          <Route path="/blog/advanced-prompting-techniques" element={<AdvancedPromptingTechniques />} />
          <Route path="/blog/prompt-engineering-guide" element={<PromptEngineeringGuide />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
