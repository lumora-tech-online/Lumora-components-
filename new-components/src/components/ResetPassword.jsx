import { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setError("Enter a valid email address");
      setSuccess("");
      return;
    }

    setError("");
    // Simulate reset request (replace with Firebase/API call)
    setSuccess(
      "If an account exists with this email, a reset link has been sent."
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d4af37]">
      <div className="w-full max-w-md bg-black shadow-lg rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#d4af37]">Reset Password</h2>
        <p className="text-sm text-white text-center mb-4">
          Enter your email and we’ll send you instructions to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#d4af37]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="you@example.com"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#d4af37] text-black p-2 rounded-md hover:bg-[#d4b045] transition-colors"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Remember your password?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
