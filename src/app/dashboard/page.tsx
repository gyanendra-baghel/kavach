const Dashboard = () => {
  const days = Array(31).fill(0);
  return (
    <div className="flex">
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
      <main className="w-4/5 p-4">
        <div className="flex justify-between mb-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Create task
          </button>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="p-2 bg-gray-700 text-gray-300 rounded mr-2"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="text-lg font-semibold mb-4">March 2022</h2>
            <div className="grid grid-cols-7 gap-2 text-center">
              {["Mo", "Tue", "We", "Thu", "Fri", "Sat", "Su"].map((day) => (
                <div key={day} className="text-gray-400">
                  {day}
                </div>
              ))}
              {[...days].map((day) => (
                <div
                  key={day}
                  className={`p-2 ${
                    day === 2
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300"
                  } rounded`}
                >
                  {day + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="text-lg font-semibold mb-4">My tasks (05)</h2>
            <ul>
              <li className="flex justify-between mb-2">
                <span>
                  <i className="fas fa-check-square"></i> Complete compliance
                  report
                </span>
                <span>Today</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>
                  <i className="fas fa-check-square"></i> Verify contracts
                </span>
                <span>Today</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>
                  <i className="fas fa-check-square"></i> Analyze market trends
                  and
                </span>
                <span>Tomorrow</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>
                  <i className="fas fa-check-square"></i> Conduct deep dive
                  research
                </span>
                <span>Suspicious</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>
                  <i className="fas fa-check-square"></i> Track transactions
                </span>
                <span>Weekly</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="text-lg font-semibold mb-4">Alert</h2>
            <ul>
              <li className="flex justify-between mb-2">
                <span>Social media</span>
                <span>Explore user profiles for insights</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Engage AI for</span>
                <span>Let&apos;s analyze the data together</span>
              </li>
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Verify
            </button>
          </div>
          <div className="bg-gray-800 p-4 rounded col-span-2">
            <h2 className="text-lg font-semibold mb-4">Categories overview</h2>
            <ul>
              <li className="flex justify-between mb-2">
                <span>
                  <i className="fas fa-user"></i> User profiles
                </span>
                <img
                  src="https://placehold.co/50x50"
                  alt="User profiles"
                  className="rounded"
                />
              </li>
              <li className="flex justify-between mb-2">
                <span>
                  <i className="fas fa-user-secret"></i> Suspicious profiles
                </span>
                <img
                  src="https://placehold.co/50x50"
                  alt="Suspicious profiles"
                  className="rounded"
                />
              </li>
              <li className="flex justify-between mb-2">
                <span>
                  <i className="fas fa-user-ninja"></i> Undercover
                </span>
                <img
                  src="https://placehold.co/50x50"
                  alt="Undercover"
                  className="rounded"
                />
              </li>
              <li className="flex justify-between mb-2">
                <span>
                  <i className="fas fa-exclamation-triangle"></i> Suspicious
                  activity
                </span>
                <img
                  src="https://placehold.co/50x50"
                  alt="Suspicious activity"
                  className="rounded"
                />
              </li>
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Explore
            </button>
          </div>
          <div className="bg-gray-800 p-4 rounded col-span-2">
            <h2 className="text-lg font-semibold mb-4">Activity monitoring</h2>
            <ul>
              <li className="flex justify-between mb-2">
                <span>
                  <i className="fas fa-chart-line"></i> Behavioral analysis
                </span>
                <span>Real-time</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  View
                </button>
              </li>
              <li className="flex justify-between mb-2">
                <span>
                  <i className="fas fa-robot"></i> AI-driven alerts
                </span>
                <span>Real-time</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Alert
                </button>
              </li>
              <li className="flex justify-between mb-2">
                <span>
                  <i className="fas fa-chart-pie"></i> Data visualization
                </span>
                <span>Insights and</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Visual
                </button>
              </li>
              <li className="flex justify-between mb-2">
                <span>
                  <i className="fas fa-brain"></i> Behavioral patterns
                </span>
                <span>Real-time</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Track
                </button>
              </li>
              <li className="flex justify-between mb-2">
                <span>
                  <i className="fas fa-exclamation-triangle"></i> Suspicious
                  behavior
                </span>
                <span>Detailed</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Monitor
                </button>
              </li>
            </ul>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
          Add alert
        </button>
      </main>
    </div>
  );
};
export default Dashboard;
