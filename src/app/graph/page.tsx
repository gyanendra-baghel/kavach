function Graph() {
  return (
    <div className="p-4">
      <div className="bg-gray-400 p-2 rounded-t-lg flex items-center justify-between">
        <div className="text-white font-bold">Anti-Drug Trafficking Hub</div>
        <div className="flex space-x-2">
          <button className="bg-blue-700 text-white px-4 py-2 rounded">
            Dashboard
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">
            Search & Monitoring
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">
            User Profile & Collaboration
          </button>
        </div>
      </div>
      <div className="bg-black p-4 rounded-b-lg">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-600 p-4 rounded">
            <div className="text-white mb-2">Real-Time Monitoring</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-black p-2 rounded">
                <div className="text-white">Telegram</div>
                <img
                  src="https://placehold.co/100x100"
                  alt="Line chart showing Telegram data"
                />
              </div>
              <div className="bg-black p-2 rounded">
                <div className="text-white">WhatsApp</div>
                <img
                  src="https://placehold.co/100x100"
                  alt="Bar chart showing WhatsApp data"
                />
              </div>
              <div className="bg-black p-2 rounded">
                <div className="text-white">Instagram</div>
                <img
                  src="https://placehold.co/100x100"
                  alt="Scatter plot showing Instagram data"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-600 p-4 rounded">
            <div className="text-white mb-2">Alerts & Notifications</div>
            <div className="bg-black p-2 rounded mb-2 text-white">
              New suspicious activity detected on Telegram
            </div>
            <div className="bg-black p-2 rounded mb-2 text-white">
              WhatsApp group flagged for potential trafficking
            </div>
            <div className="bg-black p-2 rounded text-white">
              Unusual behavior metrics on Instagram
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-600 p-4 rounded">
            <div className="text-white mb-2">AI Predictive Analysis</div>
            <img
              src="https://placehold.co/200x100"
              alt="Line chart showing AI predictive analysis"
            />
          </div>
          <div className="bg-gray-600 p-4 rounded">
            <div className="text-white mb-2">Behavioral Biometrics</div>
            <div className="bg-black p-2 rounded mb-2 text-white">
              User identification accuracy: 95%
            </div>
            <div className="bg-black p-2 rounded mb-2 text-white">
              New user behavior patterns detected
            </div>
            <div className="bg-black p-2 rounded text-white">
              Real-time user monitoring enabled
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Graph;
