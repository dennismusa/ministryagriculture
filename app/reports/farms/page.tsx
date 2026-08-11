"use client";


import { Download } from "lucide-react";
//import { MapPinned, Search } from "lucide-react";
import Sidebar from "@/components/Sidebar";
export default function FarmsReports(){
return(
<div className="ml-72 min-h-screen bg-slate-50 p-6 space-y-6">
<h1 className="text-3xl font-bold text-blue-700">

Farms Reports

</h1>
<p className="text-gray-500">

Farm registration and GPS coverage reports

</p>

<div className="grid md:grid-cols-4 gap-5">
<div className="bg-white p-5 rounded-2xl shadow">

Registered Farms

<h2 className="text-3xl font-bold">
8230
</h2>

</div>
<div className="bg-white p-5 rounded-2xl shadow">

Verified Farms

<h2 className="text-3xl font-bold text-blue-700">
6100
</h2>
</div>
<div className="bg-white p-5 rounded-2xl shadow">

GPS Mapped

<h2 className="text-3xl font-bold">
5400
</h2>

</div>
<div className="bg-white p-5 rounded-2xl shadow">

Pending

<h2 className="text-3xl font-bold text-yellow-600">
2130
</h2>
</div>
</div>
<button className="bg-blue-700 text-white px-5 py-3 rounded-xl flex gap-2">
<Download size={18}/>

Export Farms Report


</button>

<Sidebar />

</div>
)}