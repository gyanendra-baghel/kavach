import { RiSettings4Fill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

export default function DashbaordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen">
      <aside className="w-72 bg-gray-800 p-4 flex flex-col justify-between">
        <div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search drug trafficking cases"
              className="w-full p-2 bg-gray-700 text-gray-300 rounded"
            />
          </div>
          <nav>
            <ul>
              <li className="mb-4 flex items-center">
                <GoHomeFill className="mr-2" /> Dashboard
              </li>
              <li className="mb-4 flex items-center">
                <FaBell className="mr-2" /> Alerts
              </li>
            </ul>
          </nav>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Data Visualization</h2>
            <ul>
              <li className="mb-2 flex items-center">
                <IoLocationSharp className="mr-2" />
                Location Analysis
              </li>
              <li className="mb-2 flex items-center">
                <FaArrowTrendUp className="mr-2" /> Trends Analysis
              </li>
              <li className="mb-2 flex items-center">
                <FaUser className="mr-2" /> Suspicious Users
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="my-1">
            <Link href="dashboard/setting">Permissions</Link>
          </div>
          <div className="my-1">
            <Link href="dashboard/setting">
              <RiSettings4Fill />
              Settings
            </Link>
          </div>
        </div>
      </aside>
      {children}
    </div>
  );
}
