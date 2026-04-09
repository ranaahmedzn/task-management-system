export default function AuthLayout({ children }) {
  return (
    <div className="relative p-6 bg-white z-1 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row sm:p-0">
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-gray-900 lg:grid">
          <div className="relative flex items-center justify-center z-1">
            <div className="flex flex-col items-center max-w-sm">
              <p className="text-center text-3xl text-gray-400">
                Login to Task Management System | Efficiently manage, and complete your tasks.
              </p>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
