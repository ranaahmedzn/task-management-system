"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  ListTodo,
  User,
  BarChart3
} from "lucide-react";
import { useSidebar } from "../../context/SidebarContext";

const navItems = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={24} />,
    path: "/admin/dashboard",
  },
  {
    name: "Audit Logs",
    icon: <ClipboardList size={24} />,
    path: "/admin/audit-logs",
  },
  {
    name: "Users",
    icon: <Users size={24} />,
    path: "/admin/users",
  },
  {
    name: "My Tasks",
    icon: <ListTodo size={24} />,
    path: "/user/my-tasks",
  },
  {
    name: "Profile",
    icon: <User size={24} />,
    path: "/profile",
  },
];

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
        isExpanded || isHovered ? "w-72.5" : "w-22.5"
      } ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center h-20 px-6 ${!isExpanded && !isHovered ? "justify-center" : ""}`}>
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-500 text-white shrink-0">
            <BarChart3 size={24} />
          </div>
          {(isExpanded || isHovered) && (
            <span className="text-xl font-bold text-gray-900 truncate">
              Admin Dashboard
            </span>
          )}
        </Link>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto no-scrollbar">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`menu-item ${
              isActive(item.path) ? "menu-item-active" : "menu-item-inactive"
            } ${!isExpanded && !isHovered ? "justify-center" : ""}`}
          >
            <span
              className={`${
                isActive(item.path) ? "menu-item-icon-active" : "menu-item-icon-inactive"
              }`}
            >
              {item.icon}
            </span>
            {(isExpanded || isHovered) && (
              <span className="menu-item-text">{item.name}</span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AppSidebar;
