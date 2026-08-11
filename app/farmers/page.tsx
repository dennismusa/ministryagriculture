
"use client";

import Sidebar from "@/components/Sidebar";
import FarmersTable from "@/components/FarmersTable";
import {
  Users,
  UserPlus,
  Search,
  Download,
} from "lucide-react";

export default function FarmersPage() {
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

          {/* ================= PAGE HEADER ================= */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">

            <div className="min-w-0">

              <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
                Farmers Management
              </h1>

              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Manage registered farmers across all counties
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
                bg-green-700
                text-white
                px-5
                py-3
                rounded-xl
                hover:bg-green-800
                active:scale-[0.98]
                transition
                text-sm
                sm:text-base
              "
            >
              <UserPlus size={18} />
              Register Farmer
            </button>

          </div>


          {/* ================= SUMMARY CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5">

            {/* TOTAL FARMERS */}
            <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-5">

              <p className="text-slate-500 text-xs sm:text-sm">
                Total Farmers
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-slate-800">
                2,458
              </h2>

              <div className="flex items-center justify-between mt-2">

                <span className="text-green-600 text-xs sm:text-sm">
                  Active records
                </span>

                <Users
                  size={22}
                  className="text-green-700 sm:w-6 sm:h-6"
                />

              </div>

            </div>


            {/* NEW THIS MONTH */}
            <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-5">

              <p className="text-slate-500 text-xs sm:text-sm">
                New This Month
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-slate-800">
                120
              </h2>

              <p className="text-green-600 text-xs sm:text-sm mt-1">
                +12% Growth
              </p>

            </div>


            {/* COUNTIES COVERED */}
            <div
              className="
                bg-white
                rounded-2xl
                border
                shadow-sm
                p-4
                sm:p-5
                sm:col-span-2
                xl:col-span-1
              "
            >

              <p className="text-slate-500 text-xs sm:text-sm">
                Counties Covered
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-slate-800">
                47
              </h2>

              <p className="text-green-600 text-xs sm:text-sm mt-1">
                National Coverage
              </p>

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
                  placeholder="Search farmer..."
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
                    focus:ring-green-600
                    focus:border-green-600
                  "
                />

              </div>


              {/* COUNTY FILTER */}
              <select
                aria-label="Filter farmers by county"
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
                  focus:ring-green-600
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


          {/* ================= REGISTERED FARMERS ================= */}
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

            {/* TABLE HEADER */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:justify-between
                sm:items-center
                gap-2
                mb-5
              "
            >

              <h2 className="text-base sm:text-lg font-semibold text-slate-800">
                Registered Farmers
              </h2>

              <span className="text-xs sm:text-sm text-slate-500">
                Showing latest registrations
              </span>

            </div>


            {/* TABLE */}
            <div className="w-full overflow-x-auto">

              <div className="min-w-[650px]">
                <FarmersTable />
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

