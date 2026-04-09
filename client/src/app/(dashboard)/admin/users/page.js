export default function UsersPage() {
  return (
    <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">User Management</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-4 font-semibold text-gray-600">User</th>
              <th className="pb-4 font-semibold text-gray-600">Role</th>
              <th className="pb-4 font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((i) => (
              <tr key={i} className="border-b border-gray-50 last:border-0">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">U{i}</div>
                    <span className="font-medium text-gray-800">User {i}</span>
                  </div>
                </td>
                <td className="py-4 text-gray-600">Editor</td>
                <td className="py-4"><span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded">Active</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
