"use client";

import { useMemo, useState } from "react";
import Sidebar from "@/components/Sidebar";
import {  Search,  Plus,  Phone,  User,  MapPin,  Home,  Tractor,  CheckCircle,  Clock,} from "lucide-react";

export default function DigitalAddressPage() {
  const [search, setSearch] = useState("");
  const [county, setCounty] = useState("All");
  const [status, setStatus] = useState("All");

  const farms = [
    {
      id: 1,
      phone: "+254712345678",
      farm: "Green Valley Farm",
      owner: "John Kamau",
      county: "Kiambu",
      ward: "Ruiru",
      village: "Mwiki",
      area: "5 Ha",
      gps: "-1.12345,36.12345",
      status: "Verified",
    },
    {
      id: 2,
      phone: "+254723456789",
      farm: "Maua Farm",
      owner: "Mary Wanjiku",
      county: "Nakuru",
      ward: "Naivasha",
      village: "Karagita",
      area: "3 Ha",
      gps: "-0.717,36.431",
      status: "Pending",
    },
    {
      id: 3,
      phone: "+254701987654",
      farm: "Savannah Ranch",
      owner: "Peter Ole Nteeba",
      county: "Narok",
      ward: "Loita",
      village: "Loita Hills",
      area: "10 Ha",
      gps: "-1.250,35.900",
      status: "Verified",
    },
    {
      id: 4,
      phone: "+254711456789",
      farm: "Highland Farm",
      owner: "James Mwangi",
      county: "Kiambu",
      ward: "Limuru",
      village: "Bibirioni",
      area: "7 Ha",
      gps: "-1.115,36.642",
      status: "Verified",
    },
    {
      id: 5,
      phone: "+254733765432",
      farm: "Sunrise Farm",
      owner: "Grace Akinyi",
      county: "Kisumu",
      ward: "Kisian",
      village: "Kogony",
      area: "4 Ha",
      gps: "-0.104,34.751",
      status: "Pending",
    },
  ];

  const filtered = useMemo(() => {
    return farms.filter((farm) => {
      const searchMatch =
        farm.phone.includes(search) ||
        farm.owner.toLowerCase().includes(search.toLowerCase()) ||
        farm.farm.toLowerCase().includes(search.toLowerCase());

      const countyMatch =
        county === "All" || farm.county === county;

      const statusMatch =
        status === "All" || farm.status === status;

      return searchMatch && countyMatch && statusMatch;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, county, status]);

  const verified = farms.filter(
    (f) => f.status === "Verified"
  ).length;

  const pending = farms.filter(
    (f) => f.status === "Pending"
  ).length;

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />

      <main className="ml-72 flex-1 p-8 space-y-6">

        {/* Header */}

        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold text-blue-700">
              Digital Farm Identity
            </h1>

            <p className="text-gray-500">
              Farmer phone number serves as the unique Digital Farm ID.
            </p>
          </div>

          <button className="flex items-center gap-2 bg-blue-700 text-white px-5 py-3 rounded-xl hover:bg-blue-800">
            <Plus size={18}/>
            Register Farm
          </button>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

          <div className="bg-white rounded-2xl shadow border p-5">
            <p className="text-gray-500 text-sm">
              Registered Farms
            </p>
            <h2 className="text-3xl font-bold text-blue-700">
              {farms.length}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow border p-5">
            <p className="text-gray-500 text-sm">
              Verified
            </p>
            <h2 className="text-3xl font-bold text-green-600">
              {verified}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow border p-5">
            <p className="text-gray-500 text-sm">
              Pending
            </p>
            <h2 className="text-3xl font-bold text-yellow-600">
              {pending}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow border p-5">
            <p className="text-gray-500 text-sm">
              Digital IDs
            </p>
            <h2 className="text-3xl font-bold text-blue-700">
              {farms.length}
            </h2>
          </div>

        </div>

        {/* Filters */}

        <div className="bg-white rounded-2xl shadow border p-5 flex flex-wrap gap-4">

          <div className="flex items-center border rounded-xl px-4 flex-1">
            <Search size={18} className="text-gray-400"/>
            <input
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search phone, farmer or farm..."
              className="w-full p-3 outline-none"
            />
          </div>

          <select
            className="border rounded-xl px-4"
            onChange={(e)=>setCounty(e.target.value)}
          >
            <option>All</option>
            <option>Kiambu</option>
            <option>Nakuru</option>
            <option>Narok</option>
            <option>Kisumu</option>
          </select>

          <select
            className="border rounded-xl px-4"
            onChange={(e)=>setStatus(e.target.value)}
          >
            <option>All</option>
            <option>Verified</option>
            <option>Pending</option>
          </select>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
                      {filtered.map((farm) => (

            <div
              key={farm.id}
              className="bg-white rounded-3xl border shadow-sm hover:shadow-xl transition p-6"
            >

              {/* Card Header */}

              <div className="flex justify-between items-start">

                <div className="flex items-center gap-3">

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <Tractor size={26} className="text-blue-700" />
                  </div>

                  <div>

                    <h2 className="font-bold text-lg">
                      {farm.farm}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {farm.owner}
                    </p>

                  </div>
                </div>

                {farm.status === "Verified" ? (
                  <CheckCircle
                    size={24}
                    className="text-green-600"
                  />
                ) : (
                  <Clock
                    size={24}
                    className="text-yellow-600"
                  />
                )}

              </div>

              {/* Digital Farm ID */}

              <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-4">

                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Digital Farm ID
                </p>

                <div className="flex items-center gap-2 mt-2">

                  <Phone
                    size={18}
                    className="text-blue-700"
                  />

                  <span className="text-2xl font-bold text-blue-700 tracking-wide">
                    {farm.phone}
                  </span>

                </div>

                <p className="text-xs text-gray-500 mt-2">
                  This phone number uniquely identifies this farm and prevents duplicate registrations.
                </p>

              </div>

              {/* Farm Details */}

              <div className="mt-6 space-y-3 text-sm">

                <div className="flex items-center gap-2 text-gray-700">
                  <User size={16} />
                  <span>{farm.owner}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={16} />
                  <span>{farm.county}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <Home size={16} />
                  <span>{farm.ward}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={16} />
                  <span>{farm.village}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <Tractor size={16} />
                  <span>{farm.area}</span>
                </div>

              </div>

              {/* Status */}

              <div className="mt-5">

                <span
                  className={`px-4 py-2 rounded-full text-xs font-semibold ${
                    farm.status === "Verified"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {farm.status}
                </span>

              </div>

              {/* Actions */}

              <div className="mt-6 flex gap-3">

                <button className="flex-1 py-2.5 rounded-xl bg-blue-700 text-white hover:bg-blue-800">
                  View Profile
                </button>

                <button className="flex-1 py-2.5 rounded-xl border hover:bg-slate-50">
                  Edit
                </button>

              </div>

            </div>

          ))}

          </div>
                    {/* Right Sidebar */}

          <div className="space-y-5">

            {/* Phone Identity */}

            <div className="bg-white rounded-3xl border shadow-sm p-6">

              <h2 className="text-lg font-bold text-blue-700">
                Digital Farm Identity
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Every registered farm is assigned a unique Digital Farm ID
                using the farmer&apos;s primary phone number.
              </p>

              <div className="mt-5 rounded-2xl bg-blue-50 p-4">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center">
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Sample Digital ID
                    </p>

                    <h3 className="text-xl font-bold text-blue-700">
                      +254712345678
                    </h3>
                  </div>

                </div>

              </div>

              <ul className="mt-5 space-y-3 text-sm text-gray-600">

                <li>✓ One phone number = One registered farm</li>

                <li>✓ Prevents duplicate registrations</li>

                <li>✓ Enables secure farmer verification</li>

                <li>✓ Used across all Ministry services</li>

              </ul>

            </div>

            {/* Verification Summary */}

            <div className="bg-white rounded-3xl border shadow-sm p-6">

              <h2 className="font-bold text-blue-700 mb-5">
                Verification Status
              </h2>

              <div className="space-y-4">

                <div>

                  <div className="flex justify-between text-sm mb-2">
                    <span>Verified</span>
                    <span>{verified}</span>
                  </div>

                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{
                        width: `${(verified / farms.length) * 100}%`,
                      }}
                    />
                  </div> </div> <div>

                  <div className="flex justify-between text-sm mb-2">
                    <span>Pending</span>
                    <span>{pending}</span>
                  </div>

                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-500 rounded-full"
                      style={{
                        width: `${(pending / farms.length) * 100}%`,
                      }}
                    />
                  </div> </div> </div> </div>

            {/* GPS Coverage */}

            <div className="bg-white rounded-3xl border shadow-sm p-6">

              <h2 className="font-bold text-blue-700 mb-4">
                GPS Coverage
              </h2>

              <div className="h-56 rounded-2xl bg-linear-to-br from-blue-100 to-blue-200 flex flex-col items-center justify-center">

                <MapPin size={42} className="text-blue-700" />

                <p className="font-semibold mt-4">
                  Interactive Farm Map
                </p>

                <p className="text-sm text-center text-gray-600 px-5 mt-2">
                  GPS locations linked to every Digital Farm ID.
                </p>

              </div>  </div>   </div>  </div>
              </main>

    </div>
  );
}