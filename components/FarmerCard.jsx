"use client";

import { useState } from "react";

import {
  User,
  Phone,
  Mail,
  MapPin,
  Eye,
  EyeOff,
} from "lucide-react";

import FarmerDetails from "./FarmerDetails";

export default function FarmerCard({ farmer }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition">

      {/* Header */}

      <div className="p-5">

        <div className="flex justify-between items-start">

          <div>

            <div className="flex items-center gap-2">

              <User
                size={20}
                className="text-blue-600"
              />

              <h3 className="text-lg font-bold text-gray-900">
                {farmer.firstName} {farmer.lastName}
              </h3>

            </div>

            <p className="text-sm text-gray-500 mt-1">
              {farmer.farmerId}
            </p>

          </div>

          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              farmer.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {farmer.status}
          </span>

        </div>

        <div className="mt-5 space-y-3">

          <div className="flex items-center gap-2">

            <Phone
              size={16}
              className="text-green-600"
            />

            <span>{farmer.phone}</span>

          </div>

          <div className="flex items-center gap-2">

            <Mail
              size={16}
              className="text-blue-600"
            />

            <span className="truncate">
              {farmer.email}
            </span>

          </div>

          <div className="flex items-center gap-2">

            <MapPin
              size={16}
              className="text-red-600"
            />

            <span>{farmer.village}</span>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t p-4">

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full rounded-lg bg-blue-600 text-white py-2 flex items-center justify-center gap-2 hover:bg-blue-700 transition"
        >
          {showDetails ? (
            <>
              <EyeOff size={18} />
              Hide Details
            </>
          ) : (
            <>
              <Eye size={18} />
              View Details
            </>
          )}
        </button>

      </div>

      {/* Details */}

      {showDetails && (
        <FarmerDetails farmer={farmer} />
      )}

    </div>
  );
}