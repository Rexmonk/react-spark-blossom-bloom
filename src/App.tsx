import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import MyPrivileges from "./pages/MyPrivileges";
import PrivilegeForm from "./pages/PrivilegeForm";
import AccessRequests from "./pages/AccessRequests";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Index from "./pages/Index";
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { useLocalStorage } from "./hooks/use-localstorage";
import msalInstance from "./services/authService";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useLocalStorage("token", "");
  return (
    <>
      {/* /Bypass MSAL login for local copy JWT token from dev or uat  also remove this and token check in apiclient.ts file after development is complate*/}

      {token ? (
        children
      ) : (
        <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
      )}

      {!token ? (
        <UnauthenticatedTemplate>
          <Navigate to="/login" replace />
        </UnauthenticatedTemplate>
      ) : (
        ""
      )}
    </>
  );
};

const App = () => (
  <MsalProvider instance={msalInstance}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/landing" element={<Index />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="privileges" element={<MyPrivileges />} />
              <Route path="privileges/new" element={<PrivilegeForm />} />
              <Route path="privileges/edit/:id" element={<PrivilegeForm />} />
              <Route path="requests" element={<AccessRequests />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </MsalProvider>
);

export default App;
