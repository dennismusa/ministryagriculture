"use client";

import { useState } from "react";

import {
  ChevronDown,
  ChevronUp,
  Users,
  MapPinned,
} from "lucide-react";

import FarmerCard from "./FarmerCard";

export default function WardCard({
  county,
  subCounty,
  wardName,
  farmers,
}) {
  const [open, setOpen] = useState(false);

  const wardFarmers = farmers.filter(
    (farmer) =>
      farmer.county === county.name &&
      farmer.subCounty === subCounty.name &&
      farmer.ward === wardName
  );

  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden">

      {/* Header */}

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4"
      >

        <div className="flex items-center gap-3">

          <MapPinned
            size={18}
            className="text-blue-600"
          />

          <div>

            <h4 className="font-semibold text-gray-900">
              {wardName}
            </h4>

            <p className="text-sm text-gray-500">
              {wardFarmers.length} Registered Farmers
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <div className="text-center">

            <Users
              size={18}
              className="mx-auto text-green-600"
            />

            <p className="font-semibold">
              {wardFarmers.length}
            </p>

          </div>

          {open ? (
            <ChevronUp />
          ) : (
            <ChevronDown />
          )}

        </div>

      </button>

      {/* Farmers */}

      {open && (

        <div className="border-t bg-gray-50 p-4">

          {wardFarmers.length === 0 ? (

            <div className="text-center py-8 text-gray-500">

              No registered farmers.

            </div>

          ) : (

            <div className="grid lg:grid-cols-2 gap-4">

              {wardFarmers.map((farmer) => (

                <FarmerCard
                  key={farmer.id}
                  farmer={farmer}
                />

              ))}

            </div>

          )}

        </div>

      )}

    </div>
  );
}