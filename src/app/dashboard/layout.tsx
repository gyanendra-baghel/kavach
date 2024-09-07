import Link from "next/link";

export default function DashbaordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen">
      <aside className="w-72 bg-gray-800 p-4 flex flex-col justify-between">
        <div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search drug trafficking cases"
              className="w-full p-2 bg-gray-700 text-gray-300 rounded"
            />
          </div>
          <nav>
            <ul>
              <li className="mb-4">
                <i className="fas fa-tachometer-alt"></i> Dashboard
              </li>
              <li className="mb-4">
                <i className="fas fa-bell"></i> Alerts
              </li>
            </ul>
          </nav>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Data Visualization</h2>
            <ul>
              <li className="mb-2">
                <i className="fas fa-user"></i> Location Analysis
              </li>
              <li className="mb-2">
                <i className="fas fa-chart-line"></i> Trends Analysis
              </li>
              <li className="mb-2">
                <i className="fas fa-robot"></i> Suspicious Users
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="my-1">
            <Link href="dashboard/setting">Permissions</Link>
          </div>
          <div className="my-1">
            <Link href="dashboard/setting">Settings</Link>
          </div>
        </div>
      </aside>
      {children}
    </div>
  );
}
