const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-800 p-4">
        <input
          className="w-full p-2 mb-4 bg-gray-700 text-gray-200 rounded"
          placeholder="Search for suspicious activities"
          type="text"
        />
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <i className="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2">
            <i className="fas fa-bell"></i>
            <span>Alerts</span>
          </li>
        </ul>
        <div className="mt-8">
          <h2 className="text-gray-400">Data Visualization</h2>
          <ul className="space-y-4 mt-2">
            <li className="flex items-center space-x-2">
              <i className="fas fa-user"></i>
              <span>User Profiles</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fas fa-exclamation-triangle"></i>
              <span>Suspicious</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fas fa-chart-line"></i>
              <span>Trends Analysis</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fas fa-robot"></i>
              <span>AI Integration</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fas fa-shield-alt"></i>
              <span>Security Measures</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fas fa-check-circle"></i>
              <span>Compliance</span>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-gray-400">Search Functionality</h2>
          <ul className="space-y-4 mt-2">
            <li className="flex items-center space-x-2">
              <i className="fas fa-search"></i>
              <span>Drug Trafficking</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fab fa-instagram"></i>
              <span>Suspicious</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fas fa-lock"></i>
              <span>Advanced Security</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fas fa-cogs"></i>
              <span>Advanced</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-3/4 p-4">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            New case
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded">
            <i className="fas fa-exclamation-triangle"></i>
            Alert
          </button>
        </div>
        <div className="flex">
          <div className="w-1/2 bg-gray-800 p-4 rounded mr-4">
            <h2 className="text-lg font-bold mb-4">
              Real-time alerts and trends
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded">
                <input
                  checked={true}
                  className="form-checkbox"
                  type="checkbox"
                />
                <div>
                  <h3 className="font-bold">Drug trafficking monitoring</h3>
                  <p className="text-gray-400">
                    Alert: New suspicious activity detected
                  </p>
                </div>
                <img
                  alt="Image related to drug trafficking monitoring"
                  className="ml-auto"
                  height="50"
                  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-FxMlrLKrmLzf4JUCvaiKK1lN.png?st=2024-09-05T17%3A17%3A10Z&amp;se=2024-09-05T19%3A17%3A10Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-04T22%3A42%3A31Z&amp;ske=2024-09-05T22%3A42%3A31Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=ZMZKujRxdRRmYS3a9HJ%2BpExUpuhhVmFzA2FWPlJ5Foc%3D"
                  width="50"
                />
              </div>
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded">
                <input
                  checked={false}
                  className="form-checkbox"
                  type="checkbox"
                />
                <div>
                  <h3 className="font-bold">Drug trafficking monitoring</h3>
                  <p className="text-gray-400">
                    Alert: Suspicious behavior marked
                  </p>
                </div>
                <img
                  alt="Image related to drug trafficking monitoring"
                  className="ml-auto"
                  height="50"
                  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-FxMlrLKrmLzf4JUCvaiKK1lN.png?st=2024-09-05T17%3A17%3A10Z&amp;se=2024-09-05T19%3A17%3A10Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-04T22%3A42%3A31Z&amp;ske=2024-09-05T22%3A42%3A31Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=ZMZKujRxdRRmYS3a9HJ%2BpExUpuhhVmFzA2FWPlJ5Foc%3D"
                  width="50"
                />
              </div>
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded">
                <input
                  checked={false}
                  className="form-checkbox"
                  type="checkbox"
                />
                <div>
                  <h3 className="font-bold">User behavior analysis</h3>
                  <p className="text-gray-400">
                    Alert: Suspicious behavior marked
                  </p>
                </div>
                <img
                  alt="Image related to user behavior analysis"
                  className="ml-auto"
                  height="50"
                  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-AX3Vp5araPPSmQlpR4wtANCY.png?st=2024-09-05T17%3A17%3A12Z&amp;se=2024-09-05T19%3A17%3A12Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-04T21%3A26%3A07Z&amp;ske=2024-09-05T21%3A26%3A07Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=08nJzN3ZfviCrKxnqmSPk8XqztBgo0X5s6nT9fPNQN4%3D"
                  width="50"
                />
              </div>
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded">
                <input
                  checked={false}
                  className="form-checkbox"
                  type="checkbox"
                />
                <div>
                  <h3 className="font-bold">Illustrations of compliance</h3>
                  <p className="text-gray-400">
                    Alert: Suspicious behavior on hold
                  </p>
                </div>
                <img
                  alt="Image related to illustrations of compliance"
                  className="ml-auto"
                  height="50"
                  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-D901WbsV1s1m9ZCWavWVIUsZ.png?st=2024-09-05T17%3A17%3A12Z&amp;se=2024-09-05T19%3A17%3A12Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-04T21%3A43%3A02Z&amp;ske=2024-09-05T21%3A43%3A02Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=LpEqr9cs6ftfhSVeCgrnRVFcrIZIimc1YFPKtdKBqfU%3D"
                  width="50"
                />
              </div>
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded">
                <input
                  checked={false}
                  className="form-checkbox"
                  type="checkbox"
                />
                <div>
                  <h3 className="font-bold">Trend analysis and reporting</h3>
                  <p className="text-gray-400">
                    Alert: Suspicious behavior marked
                  </p>
                </div>
                <img
                  alt="Image related to trend analysis and reporting"
                  className="ml-auto"
                  height="50"
                  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-qx5xP55oqMsppLb6GlGvnZ1t.png?st=2024-09-05T17%3A17%3A15Z&amp;se=2024-09-05T19%3A17%3A15Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-04T21%3A32%3A47Z&amp;ske=2024-09-05T21%3A32%3A47Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=AvvRRaMV7DAWoVC/EwFgUGulyJpsZgIKYLpppPoXZIs%3D"
                  width="50"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-gray-800 p-4 rounded">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Drug trafficking</h2>
              <button className="text-gray-400">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <i className="fas fa-user"></i>
                <span>User profile</span>
                <button className="ml-auto bg-gray-700 text-white px-4 py-2 rounded">
                  Me
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-hourglass-half"></i>
                <span>Deadline</span>
                <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded">
                  Today
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-info-circle"></i>
                <span>Case details</span>
                <button className="ml-auto bg-gray-700 text-white px-4 py-2 rounded">
                  Investigation
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-exclamation-circle"></i>
                <span>Case priority</span>
                <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded">
                  Medium
                </button>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-bold">Case attachments</h3>
              <div className="flex items-center space-x-2 mt-2">
                <span>No case attachments</span>
                <button className="ml-auto bg-gray-700 text-white px-4 py-2 rounded">
                  Attach
                </button>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-bold">Case links</h3>
              <div className="flex items-center space-x-2 mt-2">
                <span>No case links</span>
                <button className="ml-auto bg-gray-700 text-white px-4 py-2 rounded">
                  Add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mt-8">
              <button className="bg-gray-700 text-white px-4 py-2 rounded">
                Archive case
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Delete case
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
