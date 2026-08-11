"use client";

import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  growth: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  growth,
  icon: Icon,
}: StatCardProps) {

  return (
    <div className="bg-white rounded-xl border shadow-sm p-5 hover:shadow-md transition">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            {value}
          </h2>

          <p className="text-sm text-green-600 mt-2">
            {growth}
          </p>

        </div>


        <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">

          {Icon && <Icon size={26} />}

        </div>


      </div>

    </div>
  );
}