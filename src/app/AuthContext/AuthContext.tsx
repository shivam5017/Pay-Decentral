"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


interface AuthState {
  developerDetails: {
    email: string;
    companyName: string;
    apiKey: string;
  } | null;
}


interface AuthContextProps {
  authState: AuthState;
  loginDeveloper: (email: string, password: string) => Promise<void>;
  registerDeveloper: (email: string, companyName: string, password: string) => Promise<void>;
  logoutDeveloper: () => void;
  loading: boolean;
}


export const AuthContext = createContext<AuthContextProps | null>(null);


interface AuthProviderProps {
  children: ReactNode;
}


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();

  const [authState, setAuthState] = useState<AuthState>({
    developerDetails: null,
  });
  const [loading, setLoading] = useState<boolean>(false); 

  // Register developer
  const registerDeveloper = async (email: string, companyName: string, password: string) => {
    setLoading(true);
    try {
      const response = await axios.post("https://pay-decentral-backend-1.onrender.com/register-developer", {
        email,
        companyName,
        password,
      });

      const { apiKey } = response.data;

      setAuthState({
        developerDetails: { email, companyName, apiKey },
      });

      router.push("/dashboard"); 
    } catch (error) {
      console.error("Error during registration:", error);
      throw new Error("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // Login developer
  const loginDeveloper = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await axios.post("https://pay-decentral-backend-1.onrender.com/login-developer", { email, password });

      const { token, developer } = response.data;
      

      if (token && developer) {
        // Set the authState with developer details and API token
        setAuthState({
          developerDetails: {
            email: developer.email,
            companyName: developer.companyName,
            apiKey: developer?.apiKey, 

          },
        });
        
        // Optionally save token to localStorage
        localStorage.setItem('authToken', token);

        router.push("/dashboard"); // Redirect to dashboard
      } else {
        throw new Error("Developer details or token are missing.");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw new Error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Logout developer
  const logoutDeveloper = () => {
    setLoading(true); // Set loading to true
    try {
      setAuthState({
        developerDetails: null, // Reset developer details to null
      });
      localStorage.removeItem('authToken'); // Optionally clear the token from localStorage
      router.push("/login"); // Redirect to login page
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  // Persist auth state using localStorage
  useEffect(() => {
    const storedAuth = localStorage.getItem("authState");
    if (storedAuth) {
      setAuthState(JSON.parse(storedAuth));
    }
  }, []);

  useEffect(() => {
    if (authState?.developerDetails?.apiKey) {
      localStorage.setItem("authState", JSON.stringify(authState));
    } else {
      localStorage.removeItem("authState");
    }
  }, [authState]);

  return (
    <AuthContext.Provider
      value={{
        authState,
        loginDeveloper,
        registerDeveloper,
        logoutDeveloper,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
