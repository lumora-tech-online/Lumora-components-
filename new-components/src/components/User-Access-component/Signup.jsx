import { useState } from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    emal: "",
    password:"",
  })

const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");

   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "password") {
      checkPasswordStrength(e.target.value);
    }
  };
// validation function
  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      tempErrors.email = "Invalid email address";
    if (formData.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // password strength check
   const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStrength("Weak");
    } else if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Medium");
    }
  };

  // submit
    const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted!");
      console.log(formData);
    }
  };




  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d4af37]">
      <div className="w-full max-w-md text-white bg-[#000000] shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        {/* Social logins */}
        <div className="flex gap-4 mb-6 justify-center">
          <button className="p-2 border rounded-full hover:bg-gray-100">
            <FcGoogle size={24} />
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-100">
            <FaGithub size={24} />
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-100 text-blue-600">
            {/* <FaFacebook size={24} /> */}
            <FaFacebook />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md border-[#d4af37] focus:ring focus:ring-blue-300"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-[#d4af37]  rounded-md focus:ring focus:ring-blue-300"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-[#d4af37] text-white rounded-md focus:ring focus:ring-blue-300"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            {formData.password && (
              <p
                className={`text-sm ${
                  passwordStrength === "Weak"
                    ? "text-red-500"
                    : passwordStrength === "Medium"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                Strength: {passwordStrength}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#d4af37] text-white p-2 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>

          )
}
export default SignupForm