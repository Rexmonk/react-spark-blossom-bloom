import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  login,
  getActiveAccount,
  setupTokenRefresh,
} from "@/services/authService";
import { User } from "lucide-react";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setError(null);

      await login();

      // Check if login was successful
      const account = getActiveAccount();
      if (account) {
        // Set up silent token refresh
        setupTokenRefresh();
        navigate("/order-overview");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1f2c]">
      <div className="w-full max-w-md p-8 bg-[#232838] rounded-lg shadow-lg">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-[#E20074] p-3 rounded">
            <img
              src="public/lovable-uploads/c984b240-49e0-40ca-91a1-d9394eaba530.png"
              alt="T Logo"
              className="w-8 h-8"
            />
          </div>

          <h1 className="text-3xl font-bold text-white mt-4">
            Welcome to Heimdall
          </h1>
          <p className="mt-2 text-center text-sm  text-white">
            Use your Microsoft account to sign in
          </p>

          <Button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full flex justify-center py-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Signing in...
              </span>
            ) : (
              <span className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Sign in with Microsoft
              </span>
            )}
          </Button>

          <p className="text-xs text-gray-400 mt-4 text-center">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
