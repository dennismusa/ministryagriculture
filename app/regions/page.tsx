"use client";

import { MapPinned, Search } from "lucide-react";


export default function RegionsPage() {
  const regions = [
    { county: "Kiambu", farmers: 850, farms: 1200, area: "4,500 Ha" },
    { county: "Nakuru", farmers: 620, farms: 940, area: "3,200 Ha" },
    { county: "Meru", farmers: 540, farms: 810, area: "2,850 Ha" },
    { county: "Uasin Gishu", farmers: 470, farms: 700, area: "2,400 Ha" },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* SIDEBAR */}
      

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
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Regions Management
          </h1>

          <p className="text-slate-500 text-sm sm:text-base mt-1">
            View farmers and farms distribution by county
          </p>
        </div>

        {/* SEARCH */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border shadow-sm">
          <div className="relative w-full">
            <Search
              size={18}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search county..."
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
        </div>

        {/* REGION CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-3
            sm:gap-5
          "
        >
          {regions.map((region, index) => (
            <div
              key={index}
              className="
                bg-white
                p-4
                sm:p-5
                rounded-2xl
                border
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              {/* CARD HEADER */}
              <div className="flex justify-between items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <MapPinned
                    size={20}
                    className="text-blue-700"
                  />
                </div>

                <span className="text-xs sm:text-sm text-slate-500">
                  County
                </span>
              </div>

              {/* COUNTY NAME */}
              <h2
                className="
                  font-bold
                  text-lg
                  sm:text-xl
                  text-slate-800
                  wrap-break-word
                "
              >
                {region.county}
              </h2>

              {/* DETAILS */}
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between items-center gap-3">
                  <span className="text-slate-500">
                    Farmers
                  </span>

                  <span className="font-semibold text-slate-800">
                    {region.farmers}
                  </span>
                </div>

                <div className="flex justify-between items-center gap-3">
                  <span className="text-slate-500">
                    Farms
                  </span>

                  <span className="font-semibold text-slate-800">
                    {region.farms}
                  </span>
                </div>

                <div className="flex justify-between items-center gap-3">
                  <span className="text-slate-500">
                    Area
                  </span>

                  <span className="font-semibold text-slate-800">
                    {region.area}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE INFORMATION */}
        <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-lg shrink-0">
              <MapPinned
                size={20}
                className="text-blue-700"
              />
            </div>

            <div>
              <h2 className="font-semibold text-slate-800">
                Regional Coverage
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Agricultural registration data is currently
                available across the listed counties.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}