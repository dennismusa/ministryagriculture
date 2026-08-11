"use client";


import { MapPin } from "lucide-react";
//import { MapPinned, Search } from "lucide-react";
import Sidebar from "@/components/Sidebar";
export default function WardsPage(){
const wards=[

{
ward:"Ruiru",
county:"Kiambu",
farmers:300,
farms:450
},

{
ward:"Naivasha",
county:"Nakuru",
farmers:260,
farms:390
},

{
ward:"Imenti",
county:"Meru",
farmers:220,
farms:310
},

{
ward:"Turbo",
county:"Uasin Gishu",
farmers:180,
farms:250
}

];
return(
<div className="ml-72 min-h-screen bg-slate-50 p-6">
<h1 className="text-3xl font-bold text-blue-700 mb-2">
Ward Management
</h1>
<p className="text-gray-500 mb-6">
Farm coverage by ward
</p>
<div className="grid md:grid-cols-3 gap-5">
{

wards.map((w,i)=>(
<div

key={i}

className="bg-white rounded-2xl shadow p-6 border">
<MapPin className="text-blue-700"/>
<h2 className="font-bold mt-3">

{w.ward}
</h2>
<p className="text-sm text-gray-500">
{w.county}
</p>
<div className="mt-4 text-sm space-y-2">

<p>
Farmers:
<b> {w.farmers}</b>
</p>

<p>
Farms:
<b> {w.farms}</b>
</p>


</div>
</div>
))}

<Sidebar />
</div>
</div>

)}