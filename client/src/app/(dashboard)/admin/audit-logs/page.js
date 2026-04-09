export default function AuditLogsPage() {
  return (
    <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Audit Logs</h2>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <div>
              <p className="font-medium text-gray-800">Action {i} performed</p>
              <p className="text-sm text-gray-500">2026-04-09 10:30 AM</p>
            </div>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600">Admin</span>
          </div>
        ))}
      </div>
    </div>
  );
}
