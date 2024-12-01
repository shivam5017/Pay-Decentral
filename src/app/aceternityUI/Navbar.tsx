"use client";
import React, { useContext } from "react";
import { cn } from "@/app/lib/utils";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { AuthContext } from "../AuthContext/AuthContext";

// Spinner component (if not already defined)
function Spinner() {
  return (
    <div className="animate-spin h-6 w-6 border-t-2 border-blue-600 rounded-full"></div>
  );
}

// Type for the Navbar props
interface NavbarProps {
  className?: string;
}

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: NavbarProps) {
  const router = useRouter();

  const context = useContext(AuthContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { authState, loading, logoutDeveloper } = context;

  return (
    <div
      className={cn(
        "fixed top-4 left-0 right-0 max-w-2xl mx-auto z-50 font-faculty",
        className
      )}
    >
      <div className="relative rounded-full border bg-white border-black/[0.2] shadow-input flex justify-between items-center px-4 py-2 mx-4 sm:mx-4">
        <h1 className="text-sm font-bold text-black">PayDecentral</h1>
        <div className="flex space-x-4">
          {loading ? (
            <div className="flex items-center h-12 justify-center">
              <Spinner />
            </div>
          ) : authState?.developerDetails?.apiKey ? (
            <>
              <div className="flex gap-5">
                <p
                  className="cursor-pointer text-black hover:text-blue-700"
                  onClick={() => router.push("/docs")}
                >
                  Docs
                </p>
                <p
                  className="cursor-pointer text-black hover:text-blue-700"
                  onClick={logoutDeveloper}
                >
                  Logout
                </p>
              </div>
            </>
          ) : (
            <>
              <p
                className="cursor-pointer text-black hover:text-blue-700"
                onClick={() => router.push("/signup")}
              >
                Sign UP
              </p>
              <p
                className="cursor-pointer text-black hover:text-blue-700"
                onClick={() => router.push("/login")}
              >
                Login
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
