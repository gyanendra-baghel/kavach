import React from "react";
import { FaTachometerAlt, FaBell, FaUser, FaExclamationTriangle, FaChartLine, FaRobot, FaShieldAlt, FaCheckCircle, FaSearch } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-800 p-4 text-gray-300">
      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for suspicious activities"
          className="w-full p-2 bg-gray-700 text-gray-300 rounded"
        />
      </div>

      {/* Buttons */}
      <div className="mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          New case
        </button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded ml-2">
          Alert
        </button>
      </div>

      {/* Dashboard */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <ul>
          <li className="flex items-center mb-2">
            <FaTachometerAlt className="mr-2" /> Dashboard
          </li>
          <li className="flex items-center mb-2">
            <FaBell className="mr-2" /> Alerts
          </li>
        </ul>
      </div>

      {/* Data Visualization */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">Data Visualization</h2>
        <ul>
          <li className="flex items-center mb-2">
            <FaUser className="mr-2" /> User Profiles
          </li>
          <li className="flex items-center mb-2">
            <FaExclamationTriangle className="mr-2" /> Suspicious
          </li>
          <li className="flex items-center mb-2">
            <FaChartLine className="mr-2" /> Trends Analysis
          </li>
          <li className="flex items-center mb-2">
            <FaRobot className="mr-2" /> AI Integration
          </li>
          <li className="flex items-center mb-2">
            <FaShieldAlt className="mr-2" /> Security Measures
          </li>
          <li className="flex items-center mb-2">
            <FaCheckCircle className="mr-2" /> Compliance
          </li>
        </ul>
      </div>

      {/* Search Functionality */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">Search Functionality</h2>
        <ul>
          <li className="flex items-center mb-2">
            <FaSearch className="mr-2" /> Drug Trafficking
          </li>
          <li className="flex items-center mb-2">
            <FaSearch className="mr-2" /> Suspicious
          </li>
          <li className="flex items-center mb-2">
            <FaSearch className="mr-2" /> Advanced Security
          </li>
          <li className="flex items-center mb-2">
            <FaSearch className="mr-2" /> Advanced
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
