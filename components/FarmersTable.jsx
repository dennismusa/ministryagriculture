/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useMemo, useState } from "react";
import StatCard from "./StatCard";

export default function FarmsPage() {
  const [search, setSearch] = useState("");
  const [countyFilter, setCountyFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const farms = [
    {
      name: "Green Valley Farm",
      owner: "John Kamau",
      county: "Kiambu",
      ward: "Ruiru",
      area: "5 Ha",
      address: "MOA-KIA-001",
      gps: "Yes",
      status: "Verified",
    },
    {
      name: "Maua Farm",
      owner: "Mary Wanjiku",
      county: "Nakuru",
      ward: "Naivasha",
      area: "3 Ha",
      address: "MOA-NAK-002",
      gps: "Pending",
      status: "Pending",
    },
    {
      name: "Westland Farm",
      owner: "Peter Otieno",
      county: "Kakamega",
      ward: "Shinyalu",
      area: "6 Ha",
      address: "MOA-KAK-003",
      gps: "Yes",
      status: "Verified",
    },
    {
      name: "River Farm",
      owner: "Ann Wambui",
      county: "Meru",
      ward: "Imenti",
      area: "4 Ha",
      address: "MOA-MER-004",
      gps: "Yes",
      status: "Verified",
    },
    {
      name: "Highland Farm",
      owner: "James Mwangi",
      county: "Uasin Gishu",
      ward: "Turbo",
      area: "8 Ha",
      address: "MOA-UG-005",
      gps: "Pending",
      status: "Pending",
    },
    {
      name: "Sunrise Farm",
      owner: "Grace Akinyi",
      county: "Kisumu",
      ward: "Nyando",
      area: "3 Ha",
      address: "MOA-KSM-006",
      gps: "Yes",
      status: "Verified",
    },
    {
      name: "Golden Fields",
      owner: "David Kimani",
      county: "Nairobi",
      ward: "Dagoretti",
      area: "2 Ha",
      address: "MOA-NBI-007",
      gps: "Yes",
      status: "Verified",
    },
    {
      name: "Blue Horizon Farm",
      owner: "Paul Njoroge",
      county: "Nyeri",
      ward: "Tetu",
      area: "5 Ha",
      address: "MOA-NYE-008",
      gps: "Pending",
      status: "Pending",
    },
    {
      name: "Savannah Farm",
      owner: "Mohammed Ali",
      county: "Garissa",
      ward: "Balambala",
      area: "10 Ha",
      address: "MOA-GAR-009",
      gps: "Yes",
      status: "Verified",
    },
    {
      name: "Lakeview Farm",
      owner: "Rose Atieno",
      county: "Homa Bay",
      ward: "Rangwe",
      area: "4 Ha",
      address: "MOA-HB-010",
      gps: "Pending",
      status: "Pending",
    },
  ];

  // 🔍 FILTER LOGIC
  const filtered = useMemo(() => {
    return farms.filter((f) => {
      const matchSearch =
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.owner.toLowerCase().includes(search.toLowerCase());

      const matchCounty =
        countyFilter === "All" || f.county === countyFilter;

      const matchStatus =
        statusFilter === "All" || f.status === statusFilter;

      return matchSearch && matchCounty && matchStatus;
    });
  }, [search, countyFilter, statusFilter]);

  // 📊 STATS
  const stats = {
    total: farms.length,
    verified: farms.filter((f) => f.status === "Verified").length,
    pending: farms.filter((f) => f.status === "Pending").length,
    gps: farms.filter((f) => f.gps === "Yes").length,
  };

  return (
    <div className="space-y-6">

      {/* 📊 STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Registered Farms" value={stats.total} />
        <StatCard title="Verified Farms" value={stats.verified} />
        <StatCard title="Pending Farms" value={stats.pending} />
        <StatCard title="GPS Registered" value={stats.gps} />
      </div>

      {/* 🔍 FILTER BAR */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">

        <h2 className="text-lg font-semibold text-slate-700">
          National Farm Registry System
        </h2>

        <div className="flex flex-col md:flex-row gap-2">

          {/* SEARCH */}
          <input
            className="border px-3 py-2 rounded-lg w-full md:w-64"
            placeholder="Search farm or owner..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* COUNTY FILTER (10 Counties) */}
          <select
            className="border px-3 py-2 rounded-lg"
            value={countyFilter}
            onChange={(e) => setCountyFilter(e.target.value)}
          >
            <option value="All">All Counties</option>
            <option>Kiambu</option>
            <option>Nakuru</option>
            <option>Kakamega</option>
            <option>Meru</option>
            <option>Uasin Gishu</option>
            <option>Kisumu</option>
            <option>Nairobi</option>
            <option>Nyeri</option>
            <option>Garissa</option>
            <option>Homa Bay</option>
          </select>

          {/* STATUS FILTER */}
          <select
            className="border px-3 py-2 rounded-lg"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option>Verified</option>
            <option>Pending</option>
          </select>

        </div>
      </div>

      {/* 📋 TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-blue-50 text-left">
            <tr>
              <th className="p-3">Farm</th>
              <th className="p-3">Owner</th>
              <th className="p-3">County</th>
              <th className="p-3">Area</th>
              <th className="p-3">Address Code</th>
              <th className="p-3">GPS</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center p-6 text-gray-500">
                  No farms found
                </td>
              </tr>
            ) : (
              filtered.map((f, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-blue-50 transition"
                >

                  <td className="p-3 font-medium">{f.name}</td>
                  <td className="p-3">{f.owner}</td>
                  <td className="p-3">{f.county}</td>
                  <td className="p-3">{f.area}</td>

                  <td className="p-3 font-mono text-xs text-blue-600">
                    {f.address}
                  </td>

                  {/* GPS */}
                  <td className="p-3">
                    <span
                      className={
                        f.gps === "Yes"
                          ? "text-blue-600 font-medium"
                          : "text-yellow-600 font-medium"
                      }
                    >
                      {f.gps}
                    </span>
                  </td>

                  {/* STATUS */}
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        f.status === "Verified"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {f.status}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="p-3 text-right space-x-2">
                    <button className="text-blue-600 hover:underline">
                      View
                    </button>
                    <button className="text-yellow-600 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}