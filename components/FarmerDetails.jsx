"use client";

import {
  BadgeCheck,
  IdCard,
  Phone,
  Mail,
  MapPin,
  Landmark,
  Map,
  Home,
  Tractor,
  User,
} from "lucide-react";

export default function FarmerDetails({ farmer }) {
  return (
    <div className="border-t bg-gray-50 p-5">

      <h3 className="text-lg font-bold text-blue-900 mb-5">
        Farmer Details
      </h3>

      <div className="grid md:grid-cols-2 gap-5">

        {/* Farmer ID */}

        <div className="flex items-center gap-3">
          <User className="text-blue-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">
              Farmer ID
            </p>
            <p className="font-semibold">
              {farmer.farmerId}
            </p>
          </div>
        </div>

        {/* National ID */}

        <div className="flex items-center gap-3">
          <IdCard className="text-purple-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">
              National ID
            </p>
            <p className="font-semibold">
              {farmer.nationalId}
            </p>
          </div>
        </div>

        {/* Phone */}

        <div className="flex items-center gap-3">
          <Phone className="text-green-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">
              Phone
            </p>
            <p className="font-semibold">
              {farmer.phone}
            </p>
          </div>
        </div>

        {/* Email */}

        <div className="flex items-center gap-3">
          <Mail className="text-red-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">
              Email
            </p>
            <p className="font-semibold break-all">
              {farmer.email}
            </p>
          </div>
        </div>

        {/* County */}

        <div className="flex items-center gap-3">
          <Landmark className="text-indigo-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">
              County
            </p>
            <p className="font-semibold">
              {farmer.county}
            </p>
          </div>
        </div>

        {/* Sub County */}

        <div className="flex items-center gap-3">
          <Map className="text-orange-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">
              Sub County
            </p>
            <p className="font-semibold">
              {farmer.subCounty}
            </p>
          </div>
        </div>

        {/* Ward */}

        <div className="flex items-center gap-3">
          <MapPin className="text-pink-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">
              Ward
            </p>
            <p className="font-semibold">
              {farmer.ward}
            </p>
          </div>
        </div>

        {/* Village */}

        <div className="flex items-center gap-3">
          <Home className="text-cyan-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">
              Village
            </p>
            <p className="font-semibold">
              {farmer.village}
            </p>
          </div>
        </div>

        {/* Farm ID */}

        <div className="flex items-center gap-3">
          <Tractor className="text-green-700" size={20} />
          <div>
            <p className="text-xs text-gray-500">
              Farm ID
            </p>
            <p className="font-semibold">
              {farmer.farmId}
            </p>
          </div>
        </div>

        {/* Status */}

        <div className="flex items-center gap-3">
          <BadgeCheck className="text-blue-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">
              Status
            </p>

            <span
              className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                farmer.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {farmer.status}
            </span>

          </div>
        </div>

      </div>
    </div>
  );
}