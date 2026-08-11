"use client";

import Sidebar from "@/components/Sidebar";
import {
  Bell,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function NotificationsPage() {
  const notifications = [
    {
      title: "New Farmer Registered",
      description: "John Kamau registered a new farm in Kiambu.",
      type: "success",
      time: "2 minutes ago",
    },
    {
      title: "Farm Address Updated",
      description: "Green Valley Farm GPS coordinates updated.",
      type: "info",
      time: "20 minutes ago",
    },
    {
      title: "Missing Farm Data",
      description: "12 farms require location verification.",
      type: "warning",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="flex min-h-screen bg-blue-50">

      {/* SIDEBAR (ONLY ONCE) */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 ml-72 p-6 space-y-6">

        {/* HEADER */}
        <div className="bg-white border border-blue-100 rounded-2xl p-6">
          <h1 className="text-2xl font-bold text-blue-900">
            Notifications
          </h1>
          <p className="text-blue-600 mt-1">
            System alerts and activity updates
          </p>
        </div>

        {/* NOTIFICATIONS */}
        <div className="space-y-4">

          {notifications.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 rounded-2xl p-5 hover:shadow-sm transition"
            >
              <div className="flex items-start gap-4">

                {item.type === "success" ? (
                  <CheckCircle className="text-green-600" />
                ) : item.type === "warning" ? (
                  <AlertTriangle className="text-yellow-600" />
                ) : (
                  <Bell className="text-blue-600" />
                )}

                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 mt-1">
                    {item.description}
                  </p>

                  <p className="text-xs text-slate-400 mt-2">
                    {item.time}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </main>
    </div>
  );
}