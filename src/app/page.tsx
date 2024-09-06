import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="w-3/4 bg-gray-700 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Real-time alerts and trends</h1>
          <i className="fas fa-ellipsis-v"></i>
        </div>
        <div className="bg-gray-800 p-4 rounded mb-4">
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" checked />
            <div>
              <h2 className="font-bold">Drug trafficking monitoring</h2>
              <p className="text-sm">Alert: New suspicious activity detected</p>
            </div>
            <img
              width={50}
              height={50}
              src="https://placehold.co/50x50"
              alt="Image related to drug trafficking monitoring"
              className="ml-auto rounded"
            />
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded mb-4">
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <div>
              <h2 className="font-bold">Drug trafficking monitoring</h2>
              <p className="text-sm">Alert: Suspicious behavior marked</p>
            </div>
            <img
              width={50}
              height={50}
              src="https://placehold.co/50x50"
              alt="Image related to drug trafficking monitoring"
              className="ml-auto rounded"
            />
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded mb-4">
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <div>
              <h2 className="font-bold">User behavior analysis</h2>
              <p className="text-sm">Alert: Suspicious behavior marked</p>
            </div>
            <img
              width={50}
              height={50}
              src="https://placehold.co/50x50"
              alt="Image related to user behavior analysis"
              className="ml-auto rounded"
            />
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded mb-4">
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <div>
              <h2 className="font-bold">Illustrations of compliance</h2>
              <p className="text-sm">Alert: Suspicious behavior on hold</p>
            </div>
            <img
              src="https://placehold.co/50x50"
              alt="Image related to illustrations of compliance"
              className="ml-auto rounded"
            />
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded mb-4">
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <div>
              <h2 className="font-bold">Trend analysis and reporting</h2>
              <p className="text-sm">Alert: Suspicious behavior marked</p>
            </div>
            <img
              width={50}
              height={50}
              src="https://placehold.co/50x50"
              alt="Image related to trend analysis and reporting"
              className="ml-auto rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
