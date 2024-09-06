const Monitor = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-200 p-4">
        <h1 className="text-2xl font-bold mb-4">Monitor</h1>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search for Cases"
            className="w-full p-2 border rounded"
          />
          <i className="fas fa-search absolute right-3 top-3 text-gray-500"></i>
        </div>
        <nav>
          <ul>
            <li className="mb-2">
              <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
            </li>
            <li className="mb-2">
              <i className="fas fa-bell mr-2"></i> Alerts
            </li>
          </ul>
        </nav>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Data Visualization</h2>
          <ul>
            <li className="mb-2">
              <i className="fas fa-user mr-2"></i> User Profiles
            </li>
            <li className="mb-2">
              <i className="fas fa-exclamation-triangle mr-2"></i> Suspicious
            </li>
            <li className="mb-2">
              <i className="fas fa-chart-line mr-2"></i> Trends Analysis
            </li>
            <li className="mb-2">
              <i className="fas fa-robot mr-2"></i> AI Integration
            </li>
            <li className="mb-2">
              <i className="fas fa-shield-alt mr-2"></i> Security Measures
            </li>
            <li className="mb-2">
              <i className="fas fa-check-circle mr-2"></i> Compliance
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Search Functionality</h2>
          <ul>
            <li className="mb-2">
              <i className="fas fa-search mr-2"></i> Drug Trafficking
            </li>
            <li className="mb-2">
              <i className="fas fa-search mr-2"></i> Suspicious
            </li>
            <li className="mb-2">
              <i className="fas fa-search mr-2"></i> Advanced Security
            </li>
            <li className="mb-2">
              <i className="fas fa-search mr-2"></i> Advanced
            </li>
          </ul>
        </div>
      </aside>
      <main className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-300 rounded">All</button>
            <button className="px-4 py-2 bg-gray-300 rounded">Users</button>
            <button className="px-4 py-2 bg-gray-300 rounded">Alerts</button>
            <button className="px-4 py-2 bg-gray-300 rounded">Cases</button>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-bell text-gray-500"></i>
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Monitor Activities</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-gray-500">Suspect</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Cafeteria Security</h3>
                <p className="text-sm text-gray-500">Case Study</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Jane Smith</h3>
                <p className="text-sm text-gray-500">
                  Suspicious Connections: 20
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Undercover Operation HQ</h3>
                <p className="text-sm text-gray-500">Undercover Operation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 mb-4">
          <div className="w-1/2 h-32 bg-gray-300"></div>
          <div className="w-1/2 h-32 bg-gray-300"></div>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <button className="px-4 py-2 bg-gray-300 rounded">Like</button>
          <button className="px-4 py-2 bg-gray-300 rounded">View</button>
          <button className="px-4 py-2 bg-gray-300 rounded">Report</button>
          <button className="px-4 py-2 bg-gray-300 rounded">Share</button>
          <button className="px-4 py-2 bg-gray-300 rounded">
            Upgrade Plan
          </button>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">
            SecureCompliance Interface
          </h2>
          <p className="text-sm text-gray-500">SecureCompliance Dashboard</p>
          <p className="text-sm text-gray-500">
            SecureCompliance Search Functionality.
          </p>
        </div>
        <div className="flex space-x-2">
          <div className="w-1/4 h-32 bg-gray-300"></div>
          <div className="w-1/4 h-32 bg-gray-300"></div>
          <div className="w-1/4 h-32 bg-gray-300"></div>
          <div className="w-1/4 h-32 bg-gray-300"></div>
        </div>
      </main>
      <aside className="w-64 bg-gray-200 p-4">
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Identify potential</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Surveillance BBQ</h3>
                <p className="text-sm text-gray-500">
                  Sat 16 June, Drug Monitoring
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Suspicious behavior</h3>
                <p className="text-sm text-gray-500">Sat 16 June, Compliance</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Drug trafficking alert</h3>
                <p className="text-sm text-gray-500">
                  Sat 16 June, Surveillance HQ
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Undercover operation</h3>
                <p className="text-sm text-gray-500">
                  Sat 16 June, Surveillance HQ
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Drug cartel</h3>
                <p className="text-sm text-gray-500">
                  Sat 16 June, Surveillance HQ
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Alerts</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">User Profiles</h3>
                <p className="text-sm text-gray-500">Behavioral Biometrics</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Suspicious Activity</h3>
                <p className="text-sm text-gray-500">Trending</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Data Visualization</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Search Functionality</h3>
                <p className="text-sm text-gray-500">Identify Cases</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Potential Cases</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">SecureCompliance</h3>
                <p className="text-sm text-gray-500">
                  SecureCompliance Benefits
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Undercover</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Drug Detection</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Suspicious</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">WhatsApp drug</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Identifying drug</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Drug trafficking</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Behavioral</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Blockchain</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">User profile</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Real-time alerts</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Mark Larsen</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Ethan Reynolds</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Ava Thompson, AI</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Haarper Mitchell</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Pablo Morandi</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Isabel Hughes</h3>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Monitor;
