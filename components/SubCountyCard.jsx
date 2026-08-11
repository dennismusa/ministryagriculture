"use client";

import { useState } from "react";

import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Users,
} from "lucide-react";

import WardCard from "./WardCard";

export default function SubCountyCard({
  county,
  subCounty,
  farmers,
}) {
  const [open, setOpen] = useState(false);

  const farmerCount = farmers.filter(
    (farmer) =>
      farmer.county === county.name &&
      farmer.subCounty === subCounty.name
  ).length;

  return (
    <div className="bg-white rounded-xl border shadow-sm">

      {/* Header */}

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5"
      >

        <div>

          <div className="flex items-center gap-2">

            <MapPin
              size={18}
              className="text-blue-600"
            />

            <h3 className="font-semibold text-gray-900">
              {subCounty.name}
            </h3>

          </div>

          <p className="text-sm text-gray-500 mt-1">

            {subCounty.wards.length} Wards

            {" • "}

            {farmerCount} Farmers

          </p>

        </div>

        <div className="flex items-center gap-4">

          <div className="text-center">

            <Users
              size={18}
              className="mx-auto text-green-600"
            />

            <p className="font-semibold">
              {farmerCount}
            </p>

          </div>

          {open ? (
            <ChevronUp />
          ) : (
            <ChevronDown />
          )}

        </div>

      </button>

      {/* Wards */}

      {open && (

        <div className="border-t bg-gray-50 p-5">

          <div className="space-y-4">

            {subCounty.wards.map((wardName) => (

              <WardCard
                key={wardName}
                county={county}
                subCounty={subCounty}
                wardName={wardName}
                farmers={farmers}
              />

            ))}

          </div>

        </div>

      )}

    </div>
  );
}