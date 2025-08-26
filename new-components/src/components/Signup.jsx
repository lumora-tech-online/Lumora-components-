const SignupForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 transition-shadow duration-300 hover:shadow-2xl">
       
        <h2 className="text-3xl font-bold text-center text-[#1E40AF]">Create an Account</h2>
        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign up to get started with our platform
        </p>

      
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-[#1E40AF] transition-all"
            />
          </div>

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
            bg-gradient-to-r from-[#1E40AF] via-[#1E40AF] to-[#9333EA]
            hover:scale-[1.02] hover:shadow-lg transition-transform duration-300"
          >
            Sign Up
          </button>
        </form>

       
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 
          py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition"
        >
          Continue with Google
        </button>

        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[#9333EA] font-medium hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
export default SignupForm