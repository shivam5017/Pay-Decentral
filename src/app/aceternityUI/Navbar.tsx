"use client";
import React, { useState } from "react";
import { cn } from "@/app/lib/utils";

export function NavbarDemo() {
    return (
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />
      </div>
    );
  }


function Navbar({ className }:{className?:string}) {

    return (
      <div
        className={cn(
          "fixed top-4 left-0 right-0 max-w-2xl mx-auto z-50 ",
          className
        )}
      >
        <div className="relative rounded-full border text-white border-white/[0.2] shadow-input flex justify-between items-center px-4 py-2 mx-4 sm:mx-4  bg-[#0f0f0f]">
          <h1 className="text-lg cursor-pointer font-semibold">Pay Decentral</h1>
          <div className="flex space-x-4 cursor-pointer">
             <h3 >SDK&apos;s </h3>
             <h3 >Docs</h3>
          </div>
        </div>
      </div>
    );
  }
  
