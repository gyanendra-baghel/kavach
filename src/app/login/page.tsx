function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg flex items-center">
        <div className="relative z-10 w-full max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Prekhsana
          </h1>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="username@drugmonitor.io"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="************"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-orange-500 text-gray-900 font-semibold rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Sign Up
              </button>
              <p className="text-center text-gray-400 my-2">or</p>
              <button
                type="button"
                className="w-full py-2 px-4 bg-orange-500 text-gray-900 font-semibold rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Sign up with email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
