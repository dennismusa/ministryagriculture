"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50">
      
      {/* SIDEBAR */}
      <Sidebar
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onMenuClick={() => setMobileMenuOpen(true)}
        collapsed={sidebarCollapsed}
        onCollapsedChange={setSidebarCollapsed}
      />

      {/* NAVBAR */}
      <Navbar
        onMenuClick={() => setMobileMenuOpen(true)}
      />

      {/* MAIN CONTENT */}
      <main
        className={`
          min-h-screen
          pt-16
          transition-all
          duration-300

          ${
            sidebarCollapsed
              ? "md:ml-24"
              : "md:ml-72"
          }
        `}
      >
        {children}
      </main>

    </div>
  );
}