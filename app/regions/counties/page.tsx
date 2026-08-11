"use client";

import { useState } from "react";


import StatCard from "@/components/StatCard";

import {
  Search,
  ChevronDown,
  ChevronRight,
  Map,
  Users,
  Tractor,
  Layers,
  Sprout,
} from "lucide-react";

import { counties } from "@/Data/counties";
import { farmers } from "@/Data/farmers";

export default function CountiesPage() {
  const [search, setSearch] = useState("");
  const [openCounty, setOpenCounty] = useState<number | null>(null);
  const [openSubCounty, setOpenSubCounty] = useState<string | null>(null);
  const [openWard, setOpenWard] = useState<string | null>(null);

  const filteredCounties = counties.filter((county) =>
    county.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100">
      

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
          md:space-y-8
        "
      >
        {/* ================= PAGE HEADER ================= */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:justify-between
            lg:items-center
            gap-4
          "
        >
          <div className="min-w-0">
            <h1
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-slate-900
              "
            >
              County Agricultural Registry
            </h1>

            <p
              className="
                mt-2
                text-sm
                sm:text-base
                text-slate-500
              "
            >
              Manage counties, sub-counties, wards and registered farmers.
            </p>
          </div>

          {/* REGISTRY BADGE */}
          <div
            className="
              w-full
              sm:w-auto

              flex
              items-center
              gap-3

              bg-blue-950
              text-white

              px-4
              sm:px-5
              py-3

              rounded-xl
            "
          >
            <Sprout size={22} className="shrink-0" />

            <div>
              <p className="text-xs text-blue-200">
                Agriculture MIS
              </p>

              <p className="font-semibold text-sm sm:text-base">
                eKilimo Registry
              </p>
            </div>
          </div>
        </div>

        {/* ================= SEARCH ================= */}
        <div
          className="
            bg-white
            border
            rounded-2xl
            shadow-sm

            p-4
            sm:p-5
          "
        >
          <div className="flex items-center gap-3 mb-4">
            <Search
              size={20}
              className="text-blue-700 shrink-0"
            />

            <h2 className="font-semibold text-slate-800">
              Search Counties
            </h2>
          </div>

          <div className="relative w-full max-w-xl">
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                rounded-xl
                border

                py-3
                pl-10
                pr-4

                text-sm

                outline-none

                focus:ring-2
                focus:ring-blue-600
                focus:border-blue-600
              "
            />
          </div>
        </div>

        {/* ================= STATISTICS ================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4

            gap-3
            sm:gap-5
            lg:gap-6
          "
        >
          <StatCard
            title="Total Counties"
            value={counties.length}
            growth="47 Counties"
            icon={Map}
          />

          <StatCard
            title="Registered Farmers"
            value={farmers.length}
            growth="Active Farmers"
            icon={Users}
          />

          <StatCard
            title="Sub Counties"
            value={counties.reduce(
              (total, county) =>
                total + county.subCounties.length,
              0
            )}
            growth="National Units"
            icon={Layers}
          />

          <StatCard
            title="Registered Farms"
            value={0}
            growth="Farm Records"
            icon={Tractor}
          />
        </div>

        {/* ================= COUNTY LIST ================= */}
        <div className="space-y-4 sm:space-y-6">
          {filteredCounties.length === 0 ? (
            <div
              className="
                bg-white
                rounded-2xl
                border
                shadow-sm
                p-8
                text-center
              "
            >
              <Map
                size={40}
                className="mx-auto mb-3 text-slate-400"
              />

              <h3 className="font-semibold text-slate-700">
                No counties found
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Try searching for a different county.
              </p>
            </div>
          ) : (
            filteredCounties.map((county) => (
              <div
                key={county.id}
                className="
                  bg-white
                  rounded-2xl
                  border
                  shadow-sm
                  overflow-hidden
                  hover:shadow-md
                  transition
                "
              >
                {/* ================= COUNTY HEADER ================= */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenCounty(
                      openCounty === county.id
                        ? null
                        : county.id
                    )
                  }
                  className="
                    w-full

                    flex
                    justify-between
                    items-center

                    gap-3

                    p-4
                    sm:p-5
                    md:p-6

                    text-left

                    hover:bg-slate-50
                    transition
                  "
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div
                      className="
                        bg-blue-100
                        text-blue-700

                        p-2.5
                        sm:p-3

                        rounded-xl

                        shrink-0
                      "
                    >
                      <Map
                        size={22}
                        className="sm:w-6 sm:h-6"
                      />
                    </div>

                    <div className="min-w-0">
                      <h2
                        className="
                          text-lg
                          sm:text-xl
                          font-bold
                          text-blue-950
                          truncate
                        "
                      >
                        {county.name}
                      </h2>

                      <div
                        className="
                          flex
                          flex-wrap
                          items-center
                          gap-2
                          mt-1
                        "
                      >
                        <span className="text-xs sm:text-sm text-slate-500">
                          {county.region}
                        </span>

                        <span
                          className="
                            text-[10px]
                            sm:text-xs
                            bg-blue-100
                            text-blue-700
                            px-2
                            py-1
                            rounded-full
                            whitespace-nowrap
                          "
                        >
                          {county.subCounties.length} Sub Counties
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0">
                    {openCounty === county.id ? (
                      <ChevronDown size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    )}
                  </div>
                </button>

                {/* ================= SUB COUNTIES ================= */}
                {openCounty === county.id && (
                  <div className="border-t bg-slate-50 p-3 sm:p-4 md:p-6">
                    <div className="space-y-3 sm:space-y-4">
                      {county.subCounties.map((subCounty) => (
                        <div
                          key={subCounty.id}
                          className="
                            bg-white
                            rounded-xl
                            border
                            overflow-hidden
                          "
                        >
                          {/* SUB COUNTY HEADER */}
                          <button
                            type="button"
                            onClick={() =>
                              setOpenSubCounty(
                                openSubCounty === subCounty.name
                                  ? null
                                  : subCounty.name
                              )
                            }
                            className="
                              w-full

                              flex
                              justify-between
                              items-center

                              gap-3

                              p-4
                              sm:p-5

                              text-left

                              hover:bg-blue-50
                              transition
                            "
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div
                                className="
                                  bg-blue-100
                                  text-blue-700
                                  p-2
                                  rounded-lg
                                  shrink-0
                                "
                              >
                                <Layers size={18} />
                              </div>

                              <div className="min-w-0">
                                <h3
                                  className="
                                    font-semibold
                                    text-slate-800
                                    text-sm
                                    sm:text-base
                                  "
                                >
                                  {subCounty.name}
                                </h3>

                                <p className="text-xs sm:text-sm text-slate-500">
                                  {subCounty.wards.length} Wards
                                </p>
                              </div>
                            </div>

                            <div className="shrink-0">
                              {openSubCounty === subCounty.name ? (
                                <ChevronDown size={20} />
                              ) : (
                                <ChevronRight size={20} />
                              )}
                            </div>
                          </button>

                          {/* ================= WARDS ================= */}
                          {openSubCounty === subCounty.name && (
                            <div className="border-t bg-slate-50">
                              {subCounty.wards.map((ward) => (
                                <div
                                  key={ward.id}
                                  className="border-b last:border-none"
                                >
                                  {/* WARD HEADER */}
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setOpenWard(
                                        openWard === ward.name
                                          ? null
                                          : ward.name
                                      )
                                    }
                                    className="
                                      w-full

                                      flex
                                      justify-between
                                      items-center

                                      gap-3

                                      px-4
                                      sm:px-5
                                      md:px-6

                                      py-3
                                      sm:py-4

                                      text-left

                                      hover:bg-white
                                      transition
                                    "
                                  >
                                    <div className="flex items-center gap-3 min-w-0">
                                      <div
                                        className="
                                          bg-green-100
                                          text-green-700
                                          p-2
                                          rounded-lg
                                          shrink-0
                                        "
                                      >
                                        <Map size={17} />
                                      </div>

                                      <div className="min-w-0">
                                        <h4
                                          className="
                                            font-medium
                                            text-slate-700
                                            text-sm
                                            sm:text-base
                                          "
                                        >
                                          {ward.name}
                                        </h4>

                                        <p className="text-[11px] sm:text-xs text-slate-500">
                                          Ward farmer registry
                                        </p>
                                      </div>
                                    </div>

                                    <div className="shrink-0">
                                      {openWard === ward.name ? (
                                        <ChevronDown size={18} />
                                      ) : (
                                        <ChevronRight size={18} />
                                      )}
                                    </div>
                                  </button>

                                  {/* ================= FARMERS ================= */}
                                  {openWard === ward.name && (
                                    <div className="bg-white border-t p-3 sm:p-4 md:p-6">
                                      {farmers.filter(
                                        (farmer) =>
                                          farmer.ward === ward.name
                                      ).length === 0 ? (
                                        <div className="text-center py-6 sm:py-8">
                                          <p className="text-sm text-slate-500">
                                            No farmers registered in this ward.
                                          </p>
                                        </div>
                                      ) : (
                                        <div className="w-full overflow-x-auto">
                                          <table
                                            className="
                                              min-w-162.5
                                              w-full
                                              border
                                              rounded-xl
                                              overflow-hidden
                                              text-sm
                                            "
                                          >
                                            <thead className="bg-blue-950 text-white">
                                              <tr>
                                                <th className="px-4 sm:px-5 py-3 text-left whitespace-nowrap">
                                                  Farmer ID
                                                </th>

                                                <th className="px-4 sm:px-5 py-3 text-left whitespace-nowrap">
                                                  Farmer Name
                                                </th>

                                                <th className="px-4 sm:px-5 py-3 text-left whitespace-nowrap">
                                                  Phone
                                                </th>

                                                <th className="px-4 sm:px-5 py-3 text-left whitespace-nowrap">
                                                  Village
                                                </th>

                                                <th className="px-4 sm:px-5 py-3 text-left whitespace-nowrap">
                                                  Status
                                                </th>
                                              </tr>
                                            </thead>

                                            <tbody>
                                              {farmers
                                                .filter(
                                                  (farmer) =>
                                                    farmer.ward ===
                                                    ward.name
                                                )
                                                .map((farmer) => (
                                                  <tr
                                                    key={farmer.id}
                                                    className="
                                                      border-b
                                                      hover:bg-slate-50
                                                    "
                                                  >
                                                    <td className="px-4 sm:px-5 py-3 font-medium whitespace-nowrap">
                                                      {farmer.farmerId}
                                                    </td>

                                                    <td className="px-4 sm:px-5 py-3 whitespace-nowrap">
                                                      {farmer.firstName}{" "}
                                                      {farmer.lastName}
                                                    </td>

                                                    <td className="px-4 sm:px-5 py-3 whitespace-nowrap">
                                                      {farmer.phone}
                                                    </td>

                                                    <td className="px-4 sm:px-5 py-3 whitespace-nowrap">
                                                      {farmer.village}
                                                    </td>

                                                    <td className="px-4 sm:px-5 py-3 whitespace-nowrap">
                                                      <span
                                                        className={
                                                          farmer.status ===
                                                          "Active"
                                                            ? "px-3 py-1 rounded-full text-xs bg-green-100 text-green-700"
                                                            : "px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700"
                                                        }
                                                      >
                                                        {farmer.status}
                                                      </span>
                                                    </td>
                                                  </tr>
                                                ))}
                                            </tbody>
                                          </table>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}