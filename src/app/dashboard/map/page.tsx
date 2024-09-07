function Map() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-400 p-4 flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          Anti-Drug Trafficking Hub
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-white">
            Dashboard
          </a>
          <a href="#" className="text-white">
            Search & Monitoring
          </a>
          <a href="#" className="text-white">
            User Profile
          </a>
          <a href="#" className="text-white">
            Collaboration
          </a>
        </nav>
      </header>
      <div className="flex flex-1">
        <aside className="bg-gray-800 text-white w-1/4 p-4">
          <h2 className="text-xl mb-4">Filters</h2>
          <div className="mb-4">
            <label className="block mb-2">Search Query</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Monitor Accounts/Keywords</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Geolocation</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Alerts</label>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Suspicious Behavior</span>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-4 bg-gray-900 text-white">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl">Search & Monitoring</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Search
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-800 p-4 rounded">
              <h3 className="text-xl mb-2">Real-time Monitoring</h3>
              <p>Account: @example_user1</p>
              <p>Keyword: drug trafficking</p>
              <p>Location: New York, USA</p>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h3 className="text-xl mb-2">Recent Alerts</h3>
              <p>Suspicious activity detected in San Francisco, USA</p>
              <p>Unusual keyword spike: &quot;drug deal&quot; in London, UK</p>
              <p>New account monitoring request: @example_user2</p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl mb-2">Geolocation of Activities</h3>
            <img
              src="https://placehold.co/600x300"
              alt="Map showing geolocation of activities"
              className="w-full rounded"
            />
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-xl mb-2">Blockchain Secure Data Tracking</h3>
            <p>
              All monitored data is securely tracked and stored using blockchain
              technology, ensuring transparency and immutability.
            </p>
          </div>
        </main>
      </div>
      <footer className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div>© 2023 Anti-Drug Trafficking Hub</div>
        <div className="space-x-4">
          <a href="#" className="text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-white">
            Terms of Service
          </a>
          <a href="#" className="text-white">
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Map;
