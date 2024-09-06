function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-600 shadow-lg rounded-lg flex">
        <div className="w-1/2 h-auto p-10">
          <img
            src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/268c4b03-533f-4e81-aec1-0c22df466a90/61d0a509-285e-4047-b212-388dfd631f1c.png"
            alt="Dashboard preview"
            className="opacity-100"
          />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-4xl font-bold mb-2 text-black  text-center ">
            Sign up
          </h2>
          <p className="text-gray-950 mb-6">
            Join SecureCompliance to enhance security measures.
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Full Name"
                />
                <i className="fas fa-id-card absolute right-3 top-3 text-gray-400"></i>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Email Address"
                />
                <i className="fas fa-envelope absolute right-3 top-3 text-gray-400"></i>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Username"
                />
                <i className="fas fa-user absolute right-3 top-3 text-gray-400"></i>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Set a Strong Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="****************"
                />
                <i className="fas fa-key absolute right-3 top-3 text-gray-400"></i>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="****************"
                />
                <i className="fas fa-lock absolute right-3 top-3 text-gray-400"></i>
              </div>
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-gray-700">
                  By signing up, you agree to our Security Policies.
                </span>
              </label>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Join Now
            </button>
          </form>
          <p className="mt-4 text-gray-500">
            Already a member?{" "}
            <a href="#" className="text-blue-500">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
