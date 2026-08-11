export default function Footer() {
  return (
    <footer className="mt-10 bg-white border rounded-xl shadow-sm">

      <div className="px-6 py-5 grid md:grid-cols-3 gap-6">

        {/* LEFT */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Ministry of Agriculture MIS
          </h3>
          <p className="text-sm text-slate-500 mt-2">
            Digital Farmers Registration & Agricultural Analytics Platform
            designed to improve national food security and data transparency.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h4 className="font-medium text-slate-800 mb-2">Quick Links</h4>
          <ul className="text-sm text-slate-500 space-y-1">
            <li>Dashboard</li>
            <li>Farmers</li>
            <li>Reports</li>
            <li>Analytics</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h4 className="font-medium text-slate-800 mb-2">System Info</h4>
          <ul className="text-sm text-slate-500 space-y-1">
            <li>Status: Active</li>
            <li>Version: 1.0.0</li>
            <li>Region: Kenya</li>
            <li>Last Update: 2026</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t px-6 py-3 text-xs text-slate-500 flex justify-between">
        <span>© 2026 Ministry of Agriculture MIS</span>
        <span>Built for Agricultural Data Management</span>
      </div>

    </footer>
  );
}