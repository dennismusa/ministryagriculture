"use client";

import Sidebar from "@/components/Sidebar";
import {
  Tractor,
  MapPinned,
  Search,
  Plus,
  Download,
} from "lucide-react";

export default function FarmsPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main
        className="
          relative
          z-0
          min-h-screen
          w-full
          md:ml-72
          pt-28
          md:pt-24
          px-3
          sm:px-4
          md:px-6
          pb-8
        "
      >

        <div className="space-y-4 md:space-y-6">

          {/* ================= HEADER ================= */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">

            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
                Farm Management
              </h1>

              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Manage registered farms and agricultural locations
              </p>
            </div>

            <button
              type="button"
              className="
                w-full
                sm:w-auto
                flex
                items-center
                justify-center
                gap-2
                bg-blue-700
                text-white
                px-5
                py-3
                rounded-xl
                hover:bg-blue-800
                active:scale-[0.98]
                transition
                shadow-sm
                text-sm
                sm:text-base
              "
            >
              <Plus size={18} />
              Register Farm
            </button>

          </div>


          {/* ================= STATS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5">

            {/* TOTAL FARMS */}
            <div
              className="
                bg-white
                rounded-2xl
                border
                shadow-sm
                p-4
                sm:p-5
                hover:shadow-md
                transition
              "
            >
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    Total Farms
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-slate-800">
                    3,782
                  </h2>

                  <p className="text-blue-600 text-xs mt-1">
                    Registered farms
                  </p>
                </div>

                <Tractor
                  size={26}
                  className="text-blue-600 sm:w-7 sm:h-7"
                />

              </div>
            </div>


            {/* FARM AREA */}
            <div
              className="
                bg-white
                rounded-2xl
                border
                shadow-sm
                p-4
                sm:p-5
                hover:shadow-md
                transition
              "
            >
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    Total Farm Area
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-slate-800">
                    12,850 Ha
                  </h2>

                  <p className="text-blue-600 text-xs mt-1">
                    Registered acreage
                  </p>
                </div>

                <div className="text-blue-600 text-2xl">
                  🌾
                </div>

              </div>
            </div>


            {/* COUNTIES */}
            <div
              className="
                bg-white
                rounded-2xl
                border
                shadow-sm
                p-4
                sm:p-5
                hover:shadow-md
                transition
                sm:col-span-2
                xl:col-span-1
              "
            >
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    Counties Covered
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-slate-800">
                    47
                  </h2>

                  <p className="text-blue-600 text-xs mt-1">
                    National Coverage
                  </p>
                </div>

                <MapPinned
                  size={26}
                  className="text-blue-600 sm:w-7 sm:h-7"
                />

              </div>
            </div>

          </div>


          {/* ================= FILTERS ================= */}
          <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-5">

            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">

              {/* SEARCH */}
              <div className="relative flex-1 min-w-0">

                <Search
                  size={18}
                  className="
                    absolute
                    left-3
                    top-3.5
                    text-slate-400
                  "
                />

                <input
                  type="text"
                  placeholder="Search farms, owners, GPS..."
                  className="
                    w-full
                    border
                    rounded-xl
                    pl-10
                    pr-4
                    py-3
                    text-sm
                    outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    focus:border-blue-500
                  "
                />

              </div>


              {/* COUNTY FILTER */}
              <select
                aria-label="County Filter"
                className="
                  w-full
                  lg:w-auto
                  lg:min-w-45
                  border
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  bg-white
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              >
                <option>All Counties</option>
                <option>Kiambu</option>
                <option>Nakuru</option>
                <option>Meru</option>
                <option>Kisumu</option>
                <option>Uasin Gishu</option>
              </select>


              {/* EXPORT */}
              <button
                type="button"
                className="
                  w-full
                  lg:w-auto
                  flex
                  items-center
                  justify-center
                  gap-2
                  border
                  px-4
                  py-3
                  rounded-xl
                  text-sm
                  hover:bg-slate-50
                  active:bg-slate-100
                  transition
                "
              >
                <Download size={18} />
                Export
              </button>

            </div>

          </div>


          {/* ================= REGISTERED FARMS TABLE ================= */}
          <div
            className="
              bg-white
              rounded-2xl
              border
              shadow-sm
              p-4
              sm:p-5
              min-w-0
            "
          >

            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:justify-between
                sm:items-center
                gap-2
                mb-4
              "
            >

              <h2 className="text-base sm:text-lg font-semibold text-slate-800">
                Registered Farms
              </h2>

              <span className="text-xs sm:text-sm text-slate-500">
                Latest records
              </span>

            </div>


            {/* TABLE SCROLL ON MOBILE */}
            <div className="w-full overflow-x-auto">

              <table className="min-w-[850px] w-full text-sm">

                <thead>
                  <tr className="text-left border-b text-slate-600">

                    <th className="py-3 px-2">
                      Farm ID
                    </th>

                    <th className="px-2">
                      Farm Name
                    </th>

                    <th className="px-2">
                      Owner
                    </th>

                    <th className="px-2">
                      County
                    </th>

                    <th className="px-2">
                      Size
                    </th>

                    <th className="px-2">
                      Crop
                    </th>

                    <th className="px-2">
                      GPS
                    </th>

                    <th className="px-2">
                      Status
                    </th>

                  </tr>
                </thead>

                <tbody>

                  <tr className="border-b hover:bg-slate-50">

                    <td className="py-4 px-2">
                      FM001
                    </td>

                    <td className="px-2">
                      Green Valley Farm
                    </td>

                    <td className="px-2">
                      John Kamau
                    </td>

                    <td className="px-2">
                      Kiambu
                    </td>

                    <td className="px-2">
                      12 Ha
                    </td>

                    <td className="px-2">
                      Maize
                    </td>

                    <td className="px-2 whitespace-nowrap">
                      -1.145, 36.958
                    </td>

                    <td className="px-2">

                      <span
                        className="
                          bg-green-100
                          text-green-700
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          whitespace-nowrap
                        "
                      >
                        Active
                      </span>

                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>


          {/* ================= MAP ================= */}
          <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-5">

            <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-3">
              Farm Location Overview
            </h2>

            <div
              className="
                h-64
                sm:h-72
                md:h-80
                rounded-xl
                bg-slate-100
                flex
                items-center
                justify-center
                px-4
              "
            >

              <div className="text-center text-slate-500">

                <MapPinned
                  size={36}
                  className="mx-auto mb-2 text-blue-600 sm:w-10 sm:h-10"
                />

                <p className="text-sm sm:text-base">
                  Interactive farm map will appear here
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}