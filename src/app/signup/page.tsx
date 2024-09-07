function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black ">
      <div className="bg-gray-800 shadow-lg rounded-lg text-white p-10">
        <h2 className="text-4xl font-bold mb-2 text-center ">Sign up</h2>
        <p className="mb-6">
          Join SecureCompliance to enhance security measures.
        </p>
        <form>
          <div className="mb-4">
            <label className="">Full Name</label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Full Name"
              />
              <i className="fas fa-id-card absolute right-3 top-3 text-gray-400"></i>
            </div>
          </div>
          <div className="mb-4">
            <label className="">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Email Address"
              />
              <i className="fas fa-envelope absolute right-3 top-3 text-gray-400"></i>
            </div>
          </div>
          <div className="mb-4">
            <label className="">Username</label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Username"
              />
              <i className="fas fa-user absolute right-3 top-3 text-gray-400"></i>
            </div>
          </div>
          <div className="mb-4">
            <label className="">Set a Strong Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="****************"
              />
              <i className="fas fa-key absolute right-3 top-3 text-gray-400"></i>
            </div>
          </div>
          <div className="mb-4">
            <label className="">Confirm Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="****************"
              />
              <i className="fas fa-lock absolute right-3 top-3 text-gray-400"></i>
            </div>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-orange-600"
              />
              <span className="ml-2">
                By signing up, you agree to our Security Policies.
              </span>
            </label>
          </div>
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
            Join Now
          </button>
        </form>
        <p className="mt-4">
          Already a member?{" "}
          <a href="#" className="text-orange-500">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
