const Dashboard = () => {
  return (
    <main className="w-full h-full overflow-y-scroll p-3">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-orange-600 text-white px-4 py-2 rounded">
          Customize
        </button>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="p-2 bg-gray-700 text-gray-300 rounded mr-2"
          />
          <button className="bg-orange-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </div>
      {/* ----- */}
      <div className="grid grid-cols-3 gap-4 mb-3">
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold mb-4">Telegram</h2>
          <ul>
            <li className="flex justify-between mb-2">
              <span>Total No of Traced Account</span>
              <span>5650262</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>Total No of Target Account</span>
              <span>32350</span>
            </li>
          </ul>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Explore More
          </button>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold mb-4">Instragram</h2>
          <ul>
            <li className="flex justify-between mb-2">
              <span>Total No of Traced Account</span>
              <span>685562</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>Total No of Target Account</span>
              <span>12330</span>
            </li>
          </ul>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Explore More
          </button>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold mb-4">WhatsApp</h2>
          <ul>
            <li className="flex justify-between mb-2">
              <span>Total No of Traced Account</span>
              <span>3500262</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>Total No of Target Account</span>
              <span>105050</span>
            </li>
          </ul>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Explore More
          </button>
        </div>
      </div>
      {/* ------ */}
      <div className="grid grid-cols-3 gap-4 mb-3">
        <div className="bg-gray-800 p-4 rounded col-span-2">
          <h2 className="text-lg font-semibold mb-4">Target Spaces</h2>
          <ul>
            <li className="flex justify-between mb-2">
              <span>
                <i className="fas fa-user"></i> MafiaBrothers
              </span>
              <img
                src="https://placehold.co/50x50"
                alt="User profiles"
                className="rounded"
              />
            </li>
            <li className="flex justify-between mb-2">
              <span>
                <i className="fas fa-user-secret"></i> ChemicalCorner
              </span>
              <img
                src="https://placehold.co/50x50"
                alt="Suspicious profiles"
                className="rounded"
              />
            </li>
            <li className="flex justify-between mb-2">
              <span>
                <i className="fas fa-user-ninja"></i> PillPal
              </span>
              <img
                src="https://placehold.co/50x50"
                alt="Undercover"
                className="rounded"
              />
            </li>
            <li className="flex justify-between mb-2">
              <span>
                <i className="fas fa-exclamation-triangle"></i> The High Spot
              </span>
              <img
                src="https://placehold.co/50x50"
                alt="Suspicious activity"
                className="rounded"
              />
            </li>
          </ul>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Explore
          </button>
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
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Verify
          </button>
        </div>
      </div>
      {/* ------- */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded col-span-2">
          <h2 className="text-lg font-semibold mb-4">Tracked</h2>
          <ul>
            <li className="flex justify-between mb-2">
              <span>
                <i className="fas fa-chart-line"></i> Medicine-Hub
              </span>
              <span>Real-time</span>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                View
              </button>
            </li>
            <li className="flex justify-between mb-2">
              <span>
                <i className="fas fa-robot"></i> Pharma-Plus
              </span>
              <span>Real-time</span>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                Alert
              </button>
            </li>
            <li className="flex justify-between mb-2">
              <span>
                <i className="fas fa-chart-pie"></i> DrugsRUS
              </span>
              <span>Insights and</span>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                Visual
              </button>
            </li>
            <li className="flex justify-between mb-2">
              <span>
                <i className="fas fa-brain"></i> The Chemist Shop
              </span>
              <span>Real-time</span>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                Track
              </button>
            </li>
            <li className="flex justify-between mb-2">
              <span>
                <i className="fas fa-exclamation-triangle"></i> Substance Source
              </span>
              <span>Detailed</span>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                Monitor
              </button>
            </li>
          </ul>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold mb-4">Location Ranking</h2>
          <ul>
            <li className="flex justify-between mb-2">
              <span>
                <i className="fas fa-check-square"></i> Madhya Pradesh
              </span>
              <span>Today</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>
                <i className="fas fa-check-square"></i> Utter Pradesh
              </span>
              <span>Today</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>
                <i className="fas fa-check-square"></i> Gujarat and
              </span>
              <span>Tomorrow</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>
                <i className="fas fa-check-square"></i> West-Bengal research
              </span>
              <span>Suspicious</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>
                <i className="fas fa-check-square"></i> Odisha
              </span>
              <span>Weekly</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
export default Dashboard;
