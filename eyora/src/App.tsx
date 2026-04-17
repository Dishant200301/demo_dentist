import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/modules/core/components/ui/sonner";
import { Toaster } from "@/modules/core/components/ui/toaster";
import { TooltipProvider } from "@/modules/core/components/ui/tooltip";

import { Layout, NotFoundPage } from "./modules/core";
import { HomePage } from "./modules/home";
import { AboutPage } from "./modules/about";
import { ServicesPage, ServiceDetailsPage } from "./modules/services";
import { BlogPage, BlogDetailsPage } from "./modules/blog";
import { ContactPage } from "./modules/contact";
import { AppointmentsPage, BookingSuccess } from "./modules/appointments";
import { TeamPage, TeamDetailsPage } from "./modules/team";
import { PricingPage } from "./modules/pricing";

import LoginPage from "./modules/auth/pages/LoginPage";
import RegisterPage from "./modules/auth/pages/RegisterPage";
import PatientDashboard from "./modules/profile/pages/UserProfile";
import { WebAuthProvider } from "./modules/auth/context/WebAuthContext";
import { ProfilePage } from "./modules/auth/pages/ProfilePage";
import ProtectedRoute from "./modules/auth/components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <WebAuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetailsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogDetailsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/appointment" element={<AppointmentsPage />} />
              <Route path="/appointments" element={<AppointmentsPage />} />
              <Route path="/appointment/success" element={<BookingSuccess />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/team/:id" element={<TeamDetailsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <PatientDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      </WebAuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
