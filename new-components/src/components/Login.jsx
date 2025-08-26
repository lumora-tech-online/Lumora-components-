 const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF] via-[#9333EA] to-[#F59E0B] animate-gradient-x"></div>


      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

  
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-8 transition-shadow duration-300 hover:shadow-2xl">

        <h2 className="text-3xl font-bold text-center text-[#1E40AF]">Welcome Back</h2>
        <p className="text-center text-gray-500 mt-2 mb-8">Log in to continue</p>

   
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-[#1E40AF] transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-[#1E40AF] transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white font-semibold py-3 rounded-lg shadow-md 
            bg-gradient-to-r from-[#1E40AF] via-[#9333EA] to-[#F59E0B]
            hover:scale-[1.02] hover:shadow-lg transition-transform duration-300"
          >
            Log In
          </button>
        </form>

    
        <div className="flex justify-between items-center mt-5 text-sm">
          <a href="#" className="text-[#9333EA] hover:underline">Forgot Password?</a>
          <a href="/signup" className="text-[#1E40AF] hover:underline">Create Account</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm