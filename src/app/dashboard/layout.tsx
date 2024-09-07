export const metadata: Metadata = {
  title: "Prekshana Dashboard",
  description: "Kavach is help to track drug traffacking.",
};

export default function DashbaordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen">
      <aside className="w-1/5 bg-gray-800 p-4">
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
              <i className="fas fa-user"></i> User Profiles
            </li>
            <li className="mb-2">
              <i className="fas fa-exclamation-triangle"></i> Suspicious
            </li>
            <li className="mb-2">
              <i className="fas fa-chart-line"></i> Trends Analysis
            </li>
            <li className="mb-2">
              <i className="fas fa-robot"></i> AI Integration
            </li>
            <li className="mb-2">
              <i className="fas fa-shield-alt"></i> Security Measures
            </li>
            <li className="mb-2">
              <i className="fas fa-check-circle"></i> Compliance
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Search Functionality</h2>
          <ul>
            <li className="mb-2">
              <i className="fas fa-search"></i> Drug Trafficking
            </li>
            <li className="mb-2">
              <i className="fas fa-search"></i> Suspicious
            </li>
            <li className="mb-2">
              <i className="fas fa-search"></i> Advanced Security
            </li>
            <li className="mb-2">
              <i className="fas fa-search"></i> Advanced
            </li>
          </ul>
        </div>
      </aside>
      {children}
    </div>
  );
}
