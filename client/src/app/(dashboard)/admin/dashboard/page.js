export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to the Dashboard</h2>
        <p className="text-gray-600">This is where you can manage your tasks and view system overview.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Stat {i}</h3>
            <p className="text-3xl font-bold text-brand-500">12{i}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
