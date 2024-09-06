import React from "react";
import { FaUser, FaHourglassHalf, FaInfoCircle, FaExclamationCircle, FaPaperclip, FaLink, FaTimes } from "react-icons/fa";

const CaseDetails = () => {
  return (
    <div className="w-1/4 bg-gray-800 p-4 text-gray-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Drug trafficking</h1>
        <FaTimes />
      </div>

      {/* Case Details */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <FaUser className="mr-2" />
          <span>User profile</span>
          <button className="bg-gray-600 text-white px-4 py-1 rounded ml-auto">Me</button>
        </div>
        <div className="flex items-center mb-2">
          <FaHourglassHalf className="mr-2" />
          <span>Deadline</span>
          <button className="bg-blue-600 text-white px-4 py-1 rounded ml-auto">Today</button>
        </div>
        <div className="flex items-center mb-2">
          <FaInfoCircle className="mr-2" />
          <span>Case details</span>
          <button className="bg-gray-600 text-white px-4 py-1 rounded ml-auto">Investigation</button>
        </div>
        <div className="flex items-center mb-2">
          <FaExclamationCircle className="mr-2" />
          <span>Case priority</span>
          <button className="bg-blue-600 text-white px-4 py-1 rounded ml-auto">Medium</button>
        </div>
      </div>

      {/* Case Attachments */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">Case attachments</h2>
        <div className="flex items-center mb-2">
          <FaPaperclip className="mr-2" />
          <span>No case attachments</span>
          <button className="bg-gray-600 text-white px-4 py-1 rounded ml-auto">Attach</button>
        </div>
      </div>

      {/* Case Links */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">Case links</h2>
        <div className="flex items-center mb-2">
          <FaLink className="mr-2" />
          <span>No case links</span>
          <button className="bg-gray-600 text-white px-4 py-1 rounded ml-auto">Add</button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button className="bg-gray-600 text-white px-4 py-2 rounded">Archive case</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Delete case</button>
      </div>
    </div>
  );
};

export default CaseDetails;
