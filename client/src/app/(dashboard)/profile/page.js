export default function ProfilePage() {
  return (
    <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Profile</h2>
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center text-3xl font-bold mb-4">AU</div>
        <h3 className="text-xl font-bold text-gray-900">Admin User</h3>
        <p className="text-gray-500">System Administrator</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="text" readOnly value="admin@taskms.com" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <input type="text" readOnly value="Administrator" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 focus:outline-none" />
        </div>
        <div className="pt-4 flex justify-end">
          <button className="px-6 py-2 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-colors">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}
