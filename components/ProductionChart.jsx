"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const countyData = [
  { county: "Kiambu", farmers: 850 },
  { county: "Nakuru", farmers: 620 },
  { county: "Meru", farmers: 540 },
  { county: "Uasin G.", farmers: 470 },
  { county: "Kisii", farmers: 390 },
];

const productionData = [
  { name: "Maize", value: 38 },
  { name: "Coffee", value: 22 },
  { name: "Tea", value: 18 },
  { name: "Potatoes", value: 12 },
  { name: "Others", value: 10 },
];

const COLORS = [
  "#16a34a",
  "#84cc16",
  "#f59e0b",
  "#0ea5e9",
  "#64748b",
];

export default function ProductionChart({ type }) {
  if (type === "county") {
    return (
      <div className="w-full h-full min-h-75">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={countyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="county" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="farmers"
              fill="#15803d"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={productionData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={3}
            label
          >
            {productionData.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}