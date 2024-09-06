function Signup() {
  return (
    <div className="flex">
      <aside className="w-1/4 bg-gray-300 p-4">
        <div className="text-lg font-bold mb-4">Anti-Drug Trafficking Hub</div>
        <nav className="space-y-2">
          <a href="#" className="block text-gray-700">
            Quick Links
          </a>
          <a href="#" className="block text-gray-700">
            Create Profile
          </a>
          <a href="#" className="block text-gray-700">
            Manage Cases
          </a>
          <a href="#" className="block text-gray-700">
            Collaboration
          </a>
          <a href="#" className="block text-gray-700">
            Reporting Tools
          </a>
          <a href="#" className="block text-gray-700">
            Messaging/Chat
          </a>
          <a href="#" className="block text-gray-700">
            Security Settings
          </a>
          <a href="#" className="block text-gray-700">
            Help Resources
          </a>
        </nav>
        <div className="mt-8 space-y-2">
          <a href="#" className="block text-gray-700">
            Help Resources
          </a>
          <a href="#" className="block text-gray-700">
            User Guidelines
          </a>
          <a href="#" className="block text-gray-700">
            FAQs
          </a>
          <a href="#" className="block text-gray-700">
            Contact Support
          </a>
        </div>
      </aside>
      <main className="w-3/4 bg-black text-white p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">User Profile & Collaboration</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Save Changes
          </button>
        </div>
        <div className="bg-gray-500 p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Profile Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">First Name</label>
              <input type="text" className="w-full p-2" />
            </div>
            <div>
              <label className="block mb-1">Last Name</label>
              <input type="text" className="w-full p-2" />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" className="w-full p-2" />
            </div>
            <div>
              <label className="block mb-1">Phone</label>
              <input type="tel" className="w-full p-2" />
            </div>
          </div>
        </div>
        <div className="bg-gray-500 p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Collaboration</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Collaborate with</label>
              <input type="text" className="w-full p-2" />
            </div>
            <div>
              <label className="block mb-1">Role</label>
              <input type="text" className="w-full p-2" />
            </div>
          </div>
          <div className="flex space-x-2 mt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Add
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Remove
            </button>
          </div>
        </div>
        <div className="bg-gray-500 p-4">
          <h2 className="text-lg font-bold mb-2">Security Settings</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Authentication Method</label>
              <select className="w-full p-2">
                <option>Password</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Access Level</label>
              <select className="w-full p-2">
                <option>Admin</option>
              </select>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Signup;
