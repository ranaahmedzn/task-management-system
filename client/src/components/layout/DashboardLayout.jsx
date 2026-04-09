"use client";

import React from "react";
import { SidebarProvider, useSidebar } from "../../context/SidebarContext";
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";

const DashboardLayoutContent = ({ children }) => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex bg-gray-50">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-72.5" : "lg:ml-22.5"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />
        <main className="flex-1 p-4 mx-auto w-full max-w-screen-2xl md:p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
};

const DashboardLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SidebarProvider>
  );
};

export default DashboardLayout;
