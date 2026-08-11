"use client";

import { Download } from "lucide-react";
import Sidebar from "@/components/Sidebar";

export default function FarmersReports() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main
        className="
          w-full
          min-w-0
          ml-0
          md:ml-72
          pt-20
          md:pt-24
          px-3
          sm:px-4
          md:px-6
          lg:px-8
          pb-8
          space-y-5
          md:space-y-6
        "
      >
        {/* HEADER */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">
            Farmers Reports
          </h1>

          <p className="text-sm sm:text-base text-gray-500 mt-1">
            Generate farmer registration reports
          </p>
        </div>

        {/* STATISTICS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-3
            sm:gap-5
          "
        >
          {/* TOTAL FARMERS */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border">
            <p className="text-sm text-slate-500">
              Total Farmers
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mt-2">
              2,458
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Registered farmers
            </p>
          </div>

          {/* VERIFIED FARMERS */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border">
            <p className="text-sm text-slate-500">
              Verified Farmers
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mt-2">
              2,300
            </h2>

            <p className="text-xs sm:text-sm text-green-600 mt-1">
              Verified records
            </p>
          </div>

          {/* PENDING */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border">
            <p className="text-sm text-slate-500">
              Pending Verification
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-600 mt-2">
              158
            </h2>

            <p className="text-xs sm:text-sm text-yellow-600 mt-1">
              Awaiting verification
            </p>
          </div>
        </div>

        {/* REPORT ACTIONS */}
        <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold text-slate-800">
            Generate Report
          </h2>

          <p className="text-sm text-slate-500 mt-1 mb-4">
            Download the latest farmer registration report.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="
                w-full
                sm:w-auto
                bg-blue-700
                hover:bg-blue-800
                text-white
                px-5
                py-3
                rounded-xl
                flex
                items-center
                justify-center
                gap-2
                transition
              "
            >
              <Download size={18} />
              Download Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}