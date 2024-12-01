"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../AuthContext/AuthContext";
import { useContext } from "react";

const Login: React.FC = () => {
  const { loginDeveloper } = useContext(AuthContext)!; // Access `loginDeveloper` from context
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState<string>("");
  const [apiKey, setApiKey] = useState<string | null>(null);
  const router = useRouter();

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const { email, password } = formData;

      // Call `loginDeveloper` from context
      await loginDeveloper(email, password); 

      setMessage("Login successful!");

      // Redirect to the dashboard
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (error: any) {
      setMessage(error.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Developer Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Login
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center ${
              message.toLowerCase().includes("failed") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
        {apiKey && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h3 className="text-center text-gray-600 font-bold">Your API Key:</h3>
            <p className="text-center text-indigo-600 font-mono break-all">{apiKey}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
