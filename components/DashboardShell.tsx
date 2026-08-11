"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen w-full bg-slate-100">

      {/* SIDEBAR */}
      <Sidebar
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        collapsed={sidebarCollapsed}
        onCollapsedChange={setSidebarCollapsed}
      />

      {/* NAVBAR */}
      <Navbar
        onMenuClick={() => setMobileMenuOpen(true)}
        sidebarCollapsed={sidebarCollapsed}
      />

      {/* MAIN CONTENT */}
      <main
        className={`
          min-h-screen
          w-full
          pt-16

          transition-all
          duration-300
          ease-in-out

          ${
            sidebarCollapsed
              ? "md:ml-24 md:w-[calc(100%-6rem)]"
              : "md:ml-72 md:w-[calc(100%-18rem)]"
          }
        `}
      >
        {children}
      </main>

    </div>
  );
}