import Link from "next/link";

const HomeHeader = () => {
  return (
    <header className="flex justify-between items-center p-6 fixed top-0 left-0 w-full z-40 bg-black">
      <div className="text-2xl font-bold text-orange-500">Prekshana</div>
      <nav className="flex space-x-6">
        <a href="#" className="text-white">
          Home
        </a>
        <a href="#" className="text-gray-400">
          About Us
        </a>
        <a href="#" className="text-gray-400">
          Contact
        </a>
      </nav>
      <Link
        href="/login"
        className="bg-orange-500 text-white px-4 py-2 rounded"
      >
        Login
      </Link>
    </header>
  );
};

export default HomeHeader;
