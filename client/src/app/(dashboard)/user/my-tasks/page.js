export default function MyTasksPage() {
  return (
    <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Tasks</h2>
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:border-brand-200 transition-colors">
            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-brand-500 focus:ring-brand-500" />
            <div className="flex-1">
              <p className="font-medium text-gray-800">Complete task number {i}</p>
              <p className="text-sm text-gray-500">Due tomorrow</p>
            </div>
            <span className={`px-2 py-1 text-xs font-medium rounded ${i % 2 === 0 ? 'bg-orange-50 text-orange-600' : 'bg-brand-50 text-brand-600'}`}>
              {i % 2 === 0 ? 'High' : 'Medium'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
