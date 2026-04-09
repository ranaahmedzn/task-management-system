"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useSidebar } from "../../context/SidebarContext";
import UserDropdown from "./UserDropdown";

const AppHeader = () => {
  const { toggleSidebar, toggleMobileSidebar, isMobileOpen } = useSidebar();
  const pathname = usePathname();

  const getPageTitle = (path) => {
    const titles = {
      "/admin/dashboard": "Dashboard",
      "/admin/audit-logs": "Audit Logs",
      "/admin/users": "Users",
      "/user/my-tasks": "My Tasks",
      "/profile": "Profile",
    };
    return titles[path] || "Task Management System";
  };

  const handleToggle = () => {
    if (window.innerWidth >= 991) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  return (
    <header className="sticky top-0 z-40 flex w-full bg-white border-b border-gray-200">
      <div className="flex items-center justify-between w-full h-20 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={handleToggle}
            className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 transition-colors lg:border lg:border-gray-200"
            aria-label="Toggle Sidebar"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl font-semibold text-gray-900">
            {getPageTitle(pathname)}
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
