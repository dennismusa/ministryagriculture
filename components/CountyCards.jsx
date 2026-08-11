"use client";

import { useState } from "react";

import {
  Users,
  Building2,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import SubCountyCard from "./SubCountyCard";

export default function CountyCard({
  county,
  wards,
  farmers,
}) {
  const [open, setOpen] = useState(false);

  const countyData = wards.find(
    (item) => item.county === county.name
  );

  const farmerCount = farmers.filter(
    (farmer) => farmer.county === county.name
  ).length;

  return (
    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

      {/* Header */}

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6"
      >

        <div>

          <h2 className="text-xl font-bold text-blue-900">
            {county.name}
          </h2>

          <p className="text-gray-500">
            {county.region}
          </p>

        </div>

        <div className="flex gap-8 items-center">

          <div className="text-center">

            <Users
              className="mx-auto text-green-600"
              size={20}
            />

            <p className="font-semibold">
              {farmerCount}
            </p>

            <span className="text-xs text-gray-500">
              Farmers
            </span>

          </div>

          <div className="text-center">

            <Building2
              className="mx-auto text-blue-600"
              size={20}
            />

            <p className="font-semibold">
              {countyData?.subCounties.length || 0}
            </p>

            <span className="text-xs text-gray-500">
              Sub Counties
            </span>

          </div>

          <div className="text-center">

            <CheckCircle
              className="mx-auto text-purple-600"
              size={20}
            />

            <p className="font-semibold">
              {county.coverage}%
            </p>

            <span className="text-xs text-gray-500">
              Coverage
            </span>

          </div>

          {open ? (
            <ChevronUp />
          ) : (
            <ChevronDown />
          )}

        </div>

      </button>

      {/* Sub Counties */}

      {open && countyData && (

        <div className="bg-gray-50 border-t p-6">

          <div className="space-y-4">

            {countyData.subCounties.map((subCounty) => (

              <SubCountyCard
                key={subCounty.name}
                county={county}
                subCounty={subCounty}
                farmers={farmers}
              />

            ))}

          </div>

        </div>

      )}

    </div>
  );
}