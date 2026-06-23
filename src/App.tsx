import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index.tsx";
import TestPage from "./pages/TestPage.tsx";
import PracticePage from "./pages/PracticePage.tsx";
import LessonsPage from "./pages/LessonsPage.tsx";
import VocabPage from "./pages/VocabPage.tsx";
import AskPage from "./pages/AskPage.tsx";
import AuthPage from "./pages/AuthPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const Shell = () => (
  <div className="flex flex-col h-screen overflow-hidden">
    <TopBar />
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/vocab" element={<VocabPage />} />
          <Route path="/ask" element={<AskPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Shell />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
