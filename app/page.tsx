"use client";

import {
  FileText,
  Download,
  Calendar,
  BarChart3,
} from "lucide-react";

import Sidebar from "@/components/Sidebar";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main
        className=" w-full  min-w-0  ml-0 md:ml-72 pt-20   md:pt-24 px-3 sm:px-4 md:px-6 lg:px-8  pb-8  space-y-5 md:space-y-6 "  >
        {/* HEADER */}
        <div className="bg-white border border-blue-100 shadow-sm rounded-2xl p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">
            Reports & Analytics
          </h1>

          <p className="text-blue-600 text-sm sm:text-base mt-1">
            Generate, analyze and export agricultural reports
          </p>
        </div>

        {/* REPORT CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            sm:gap-5
            lg:gap-6
          "
        >
          {/* FARMERS REPORT */}
          <div className="bg-white border border-blue-100 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition">
            <div className="bg-blue-100 w-fit p-2.5 rounded-xl">
              <FileText
                className="text-blue-700"
                size={26}
              />
            </div>

            <h2 className="font-semibold text-blue-900 mt-4">
              Farmers Report
            </h2>

            <p className="text-sm text-blue-600 mt-2 leading-relaxed">
              Export full list of registered farmers across Kenya.
            </p>

            <button
              type="button"
              className="
                mt-4
                w-full
                bg-blue-700
                hover:bg-blue-800
                text-white
                py-3
                rounded-xl
                transition
                text-sm
                font-medium
              "
            >
              Generate Report
            </button>
          </div>

          {/* PRODUCTION REPORT */}
          <div className="bg-white border border-blue-100 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition">
            <div className="bg-blue-100 w-fit p-2.5 rounded-xl">
              <BarChart3
                className="text-blue-700"
                size={26}
              />
            </div>

            <h2 className="font-semibold text-blue-900 mt-4">
              Production Report
            </h2>

            <p className="text-sm text-blue-600 mt-2 leading-relaxed">
              Crop performance and agricultural analytics overview.
            </p>

            <button
              type="button"
              className="
                mt-4
                w-full
                bg-blue-700
                hover:bg-blue-800
                text-white
                py-3
                rounded-xl
                transition
                text-sm
                font-medium
              "
            >
              Generate Report
            </button>
          </div>

          {/* MONTHLY REPORT */}
          <div className="bg-white border border-blue-100 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition sm:col-span-2 lg:col-span-1">
            <div className="bg-blue-100 w-fit p-2.5 rounded-xl">
              <Calendar
                className="text-blue-700"
                size={26}
              />
            </div>

            <h2 className="font-semibold text-blue-900 mt-4">
              Monthly Report
            </h2>

            <p className="text-sm text-blue-600 mt-2 leading-relaxed">
              Monthly summary of registrations and trends.
            </p>

            <button
              type="button"
              className="
                mt-4
                w-full
                bg-blue-700
                hover:bg-blue-800
                text-white
                py-3
                rounded-xl
                transition
                text-sm
                font-medium
              "
            >
              Generate Report
            </button>
          </div>
        </div>

        {/* RECENT REPORTS */}
        <div className="bg-white border border-blue-100 rounded-2xl shadow-sm p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div>
              <h2 className="text-lg font-semibold text-blue-900">
                Recent Reports
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Previously generated agricultural reports
              </p>
            </div>
          </div>

          {/* TABLE WRAPPER */}
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="text-left border-b text-blue-700">
                  <th className="py-3 px-2">
                    Report Name
                  </th>

                  <th className="py-3 px-2">
                    Date
                  </th>

                  <th className="py-3 px-2">
                    Format
                  </th>

                  <th className="py-3 px-2 text-right">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="text-slate-700">
                <tr className="border-b hover:bg-blue-50 transition">
                  <td className="py-4 px-2 font-medium">
                    Farmers Report
                  </td>

                  <td className="py-4 px-2">
                    08/06/2026
                  </td>

                  <td className="py-4 px-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                      PDF
                    </span>
                  </td>

                  <td className="py-4 px-2 text-right">
                    <button
                      type="button"
                      aria-label="Download Farmers Report"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        p-2
                        rounded-lg
                        text-blue-700
                        hover:bg-blue-100
                        transition
                      "
                    >
                      <Download size={18} />
                    </button>
                  </td>
                </tr>

                <tr className="border-b hover:bg-blue-50 transition">
                  <td className="py-4 px-2 font-medium">
                    Production Report
                  </td>

                  <td className="py-4 px-2">
                    05/06/2026
                  </td>

                  <td className="py-4 px-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                      PDF
                    </span>
                  </td>

                  <td className="py-4 px-2 text-right">
                    <button
                      type="button"
                      aria-label="Download Production Report"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        p-2
                        rounded-lg
                        text-blue-700
                        hover:bg-blue-100
                        transition
                      "
                    >
                      <Download size={18} />
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-blue-50 transition">
                  <td className="py-4 px-2 font-medium">
                    Monthly Report
                  </td>

                  <td className="py-4 px-2">
                    01/06/2026
                  </td>

                  <td className="py-4 px-2">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium">
                      Excel
                    </span>
                  </td>

                  <td className="py-4 px-2 text-right">
                    <button
                      type="button"
                      aria-label="Download Monthly Report"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        p-2
                        rounded-lg
                        text-blue-700
                        hover:bg-blue-100
                        transition
                      "
                    >
                      <Download size={18} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}