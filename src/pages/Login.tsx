function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">
        
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Admin Login
        </h1>

        <form className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;