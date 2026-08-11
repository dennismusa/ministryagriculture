"use client";

import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import FarmersTable from "@/components/FarmersTable";
import ProductionChart from "@/components/ProductionChart";
import Footer from "@/components/Footer";
//import { counties } from "@/Data/counties";

import {
  Users,  MapPinned,  Tractor,  Wheat,  Bell,  Calendar,} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main
  className="
    w-full
    min-w-0
    flex-1
    p-3
    sm:p-4
    md:p-6
    space-y-6
    md:ml-72
    pt-20
    md:pt-6
  "
>

        {/* ================= HEADER ================= */}
        <div className="bg-white rounded-xl shadow-sm border p-5">
          <div className="flex justify-between items-start">

            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                Ministry of Agriculture Dashboard
              </h1>
              <p className="text-slate-500 text-sm mt-1">
                Farmers Registration & Agricultural Analytics System
              </p>
            </div>

            <div className="flex items-center gap-3">

              <button className="relative p-2 bg-blue-50 rounded-lg">
                <Bell size={18} className="text-blue-600" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-600 rounded-full text-[10px] text-white flex items-center justify-center">
                  3
                </span>
              </button>

              <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg text-sm text-blue-700">
                <Calendar size={16} />
                <span> 2026</span>
              </div>

            </div>

          </div>
        </div>

        {/* ================= STATS ================= */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

  <StatCard
    title="Total Farmers"
    value="2,458"
    icon={Users}
    growth="+120 this month"
  />

  <StatCard
    title="Registered Farms"
    value="3,782"
    icon={Tractor}
    growth="+210 this month"
  />

  <StatCard
    title="Counties Covered"
    value="47"
    icon={MapPinned}
    growth="National Coverage"
  />

  <StatCard
    title="Total Farm Area"
    value="12,850 Ha"
    icon={Wheat}
    growth="+950 Ha"
  />

</div>

        {/* ================= CHARTS SECTION ================= */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

          {/* ================= FARMERS BY COUNTY ================= */}
          <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border p-4">

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">

              <div>
                <h2 className="text-base font-semibold text-slate-800">
                  Farmers by County
                </h2>
                <p className="text-xs text-slate-500">
                  Distribution of registered farmers across counties
                </p>
              </div>

              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                Live Data
              </span>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

              {/* CHART */}
              <div className="lg:col-span-2 h-[280px] sm:h-80 min-w-0">
                <ProductionChart type="county" />
              </div>

              {/* KPI PANEL */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">

                <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                  <p className="text-xs text-blue-600">Top County</p>
                  <p className="font-semibold text-slate-800">Kiambu</p>
                  <p className="text-xs text-blue-600">850 farmers</p>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                  <p className="text-xs text-blue-600">Second</p>
                  <p className="font-semibold text-slate-800">Nakuru</p>
                  <p className="text-xs text-blue-600">620 farmers</p>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                  <p className="text-xs text-blue-600">Fastest Growth</p>
                  <p className="font-semibold text-slate-800">Meru</p>
                  <p className="text-xs text-blue-600">+12%</p>
                </div>
              </div>    </div>
          </div>

          {/* ================= PRODUCTION OVERVIEW ================= */}
          <div className="bg-white rounded-xl shadow-sm border p-4">

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">

              <div>
                <h2 className="text-base font-semibold text-slate-800">
                  Production Overview
                </h2>
                <p className="text-xs text-slate-500">
                  Crop distribution across national production
                </p>
              </div>

              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                2026 Report
              </span>

            </div>

            {/* CHART */}
            <div className="h-[190px] sm:h-[200px] mb-4 min-w-0">
              <ProductionChart type="production" />
            </div>

            {/* KPI BARS */}
            <div className="space-y-2 text-sm">

              {[
                { name: "🌽 Maize", value: 38, color: "bg-blue-500" },
                { name: "☕ Coffee", value: 22, color: "bg-blue-700" },
                { name: "🍃 Tea", value: 18, color: "bg-blue-400" },
                { name: "🥔 Potatoes", value: 12, color: "bg-blue-300" },
                { name: "🌱 Others", value: 10, color: "bg-blue-200" },
              ].map((item, i) => (
                <div  key={i}  className="flex items-center justify-between gap-3">

                  <span className="text-slate-700">{item.name}</span>

                  <div className="flex items-center gap-2 min-w-0">

                    <div className="w-16 sm:w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color}`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>

                    <span className="w-8 text-right font-medium text-slate-700">
                      {item.value}%
                    </span>

                  </div>

                </div>
              ))}

            </div>

            {/* INSIGHT */}
            <div className="mt-3 p-3 bg-blue-50 border border-blue-100 rounded-lg">

              <p className="text-xs font-medium text-blue-700">
                Insight
              </p>

              <p className="text-xs text-slate-600 mt-1">
                Maize remains the dominant crop in national production, followed by coffee and tea.
              </p>

            </div>

          </div>

        </div>




{/* ================= FARM ADDRESS COVERAGE ================= */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

  {/* ADDRESS COVERAGE */}
  <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border p-5">

    <div className="flex justify-between items-center mb-5">
      <div>
        <h2 className="text-lg font-semibold text-slate-800">
          Farm Address Coverage
        </h2>

        <p className="text-sm text-slate-500">
          National farm address registration and GPS coverage
        </p>
      </div>



      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
        Live Data
      </span>
    </div>

    <div className="grid md:grid-cols-2 gap-5">

      <div className="bg-slate-50 rounded-xl p-4 border">
        <p className="text-sm text-slate-500">
          Verified Addresses
        </p>

        <h3 className="text-3xl font-bold text-green-600 mt-2">
          2,980
        </h3>

        <p className="text-sm text-green-600 mt-1">
          79% of registered farms
        </p>
      </div>



      <div className="bg-slate-50 rounded-xl p-4 border">
        <p className="text-sm text-slate-500">
          GPS Coordinates Captured
        </p>

        <h3 className="text-3xl font-bold text-blue-600 mt-2">
          3,105
        </h3>

        <p className="text-sm text-blue-600 mt-1">
          +150 this month
        </p>
      </div>

      <div className="bg-slate-50 rounded-xl p-4 border">
        <p className="text-sm text-slate-500">
          Pending Verification
        </p>

        <h3 className="text-3xl font-bold text-amber-600 mt-2">
          540
        </h3>

        <p className="text-sm text-amber-600 mt-1">
          Awaiting validation
        </p>
      </div>

      <div className="bg-slate-50 rounded-xl p-4 border">
        <p className="text-sm text-slate-500">
          Counties Covered
        </p>

        <h3 className="text-3xl font-bold text-purple-600 mt-2">
          47
        </h3>

        <p className="text-sm text-purple-600 mt-1">
          National Coverage
        </p>
      </div>

    </div>
  </div>




  {/* COVERAGE PROGRESS */}
  <div className="bg-white rounded-xl shadow-sm border p-5">

    <h2 className="text-lg font-semibold mb-5">
      Coverage Progress
    </h2>

    <div className="space-y-5">

      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm">Address Registration</span>
          <span className="font-medium">79%</span>
        </div>

        <div className="h-3 bg-slate-200 rounded-full">
          <div className="h-3 bg-green-600 rounded-full w-[79%]"></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm">GPS Mapping</span>
          <span className="font-medium">82%</span>
        </div>

        <div className="h-3 bg-slate-200 rounded-full">
          <div className="h-3 bg-blue-600 rounded-full w-[82%]"></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm">Verification Status</span>
          <span className="font-medium">68%</span>
        </div>

        <div className="h-3 bg-slate-200 rounded-full">
          <div className="h-3 bg-amber-500 rounded-full w-[68%]"></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm">Regional Coverage</span>
          <span className="font-medium">100%</span>
        </div>

        <div className="h-3 bg-slate-200 rounded-full">
          <div className="h-3 bg-purple-600 rounded-full w-full"></div>
        </div>
      </div>

    </div>
  </div>

</div>



  {/* ================= COUNTY SUMMARY ================= */}
  {/*
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          {[
            { name: "Kiambu", value: 850 },
            { name: "Nakuru", value: 620 },
            { name: "Meru", value: 540 },
            { name: "Uasin Gishu", value: 470 },
          ].map((c, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border shadow-sm">

              <h3 className="text-slate-500 text-sm">{c.name} County</h3>
              <p className="text-2xl font-bold mt-2 text-slate-800">{c.value}</p>
              <span className="text-blue-600 text-sm">Registered Farmers</span>

            </div>
          ))}

        </div>      */}

        {/* ================= QUICK ACTIONS ================= */}
{/*        <div className="bg-white rounded-xl shadow-sm border p-5">

          <h2 className="text-base font-semibold mb-4">Quick Actions</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {[
              "Register Farmer",
              "Register Farm",
              "Generate Report",
              "View Counties",
            ].map((a, i) => (
              <button
                key={i}
                className={`py-3 rounded-lg border transition ${
                  i === 0
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "hover:bg-blue-50"
                }`}
              >
                {a}
              </button>
            ))}

          </div>

        </div>  */}

        {/* ================= TABLE ================= */}
        <div className="bg-white rounded-xl shadow-sm border p-5">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-base font-semibold text-slate-800">
              Recently Registered Farmers
            </h2>

            <button className="text-blue-600 font-medium hover:underline">
              View All
            </button>

          </div>

          <FarmersTable />

        </div>
        
{/* ================= RECENT ADDRESS REGISTRATIONS ================= */}
{/*
<div className="bg-white rounded-xl shadow-sm border p-5">

  <div className="flex justify-between items-center mb-5">
    <h2 className="text-lg font-semibold">
      Recent Address Registrations
    </h2>

    <button className="text-blue-600 font-medium">
      View All
    </button>
  </div>

  <div className="overflow-x-auto">

    <table className="w-full">

      <thead>
        <tr className="border-b text-left">
          <th className="py-3">Farm Name</th>
          <th>County</th>
          <th>Address Code</th>
          <th>GPS Status</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        <tr className="border-b">
          <td className="py-4">Green Valley Farm</td>
          <td>Kiambu</td>
          <td>MOA-KIA-001</td>
          <td>✓ Available</td>
          <td>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
              Verified
            </span>
          </td>
        </tr>

        <tr className="border-b">
          <td className="py-4">Maua Farm</td>
          <td>Nakuru</td>
          <td>MOA-NAK-023</td>
          <td>✓ Available</td>
          <td>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
              Verified
            </span>
          </td>
        </tr>

        <tr>
          <td className="py-4">Westland Farm</td>
          <td>Kakamega</td>
          <td>MOA-KAK-112</td>
          <td>Pending</td>
          <td>
            <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs">
              Pending
            </span>
          </td>
        </tr>

      </tbody>

    </table>

  </div>

</div>  */}
        {/* FOOTER */}
        <Footer />

      </main>
    </div>
  );
}